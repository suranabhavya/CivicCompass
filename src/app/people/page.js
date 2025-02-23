"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "@/app/components/Input";
import ExploreButton from "@/app/components/ExploreButton";
import Loading from "@/app/components/Loading";
import CardTest from "../components/CardTest";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

import NavBar from "../components/Navbar";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const PieChartContainer = styled.div`
  width: 450px;  /* Adjust width to fit inside the card */
  height: 450px; /* Adjust height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto; /* Centers the chart */
`;

const LineChartContainer = styled.div`
  width: 100%;
  max-width: 500px; /* Adjust as needed */
  height: 250px; /* Adjust height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem;
`;

const crimeChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allows custom sizing
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        font: { size: 10 }, // Reduce label font size
      },
    },
    tooltip: {
      bodyFont: { size: 10 }, // Reduce tooltip font size
    },
  },
};

// Styled components
const SuggestionList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  color: #000;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2000;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
  justify-items: center;
  justify-content: center;
`;

export default function PeoplePage() {
  const [query, setQuery] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recommendation, setRecommendation] = useState([]);
  const [fetchingRecommendation, setFetchingRecommendation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const [topCrimes, setTopCrimes] = useState([]);
  const [topCrimesByMonth, setTopCrimesByMonth] = useState({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (optionSelected || query.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/autocomplete?input=${encodeURIComponent(query)}`);
        const data = await response.json();
        setSuggestions(data.predictions || []);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
        setShowSuggestions(true);
      }
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [query, optionSelected]);

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.description);
    setPlaceId(suggestion.place_id);
    setSuggestions([]);
    setShowSuggestions(false);
    setRecommendation([]);
    setOptionSelected(true);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setOptionSelected(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setFetchingRecommendation(true);
    setTopCrimes([]);
    setTopCrimesByMonth({});

    try {
      const response = await fetch(`/api/getRecommendations?address=${encodeURIComponent(query)}`);
      const data = await response.json();
      setRecommendation(data.message || []);

      if (!placeId) return;

      const zipResponse = await fetch(`/api/getZipcode?place_id=${encodeURIComponent(placeId)}`);
      const zipData = await zipResponse.json();

      if (zipData.zipcode) {
        setZipcode(zipData.zipcode);
        setTopCrimes(zipData.topCrimes || []);
        setTopCrimesByMonth(zipData.topCrimesMonthly || {}); 
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendation([{ title: "Error", description: "Error fetching recommendations." }]);
    } finally {
      setFetchingRecommendation(false);
    }
  };

  // const processCrimeDataForLineChart = (topCrimesMonthly, topCrimes) => {
  //   if (!topCrimesMonthly || Object.keys(topCrimesMonthly).length === 0) return { labels: [], datasets: [] };

  //   const labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);
  //   const topCrimeNames = topCrimes.map(crime => crime.offenseDesc); // Get only the names of top 5 crimes

  //   const datasets = topCrimeNames.map((offense, index) => ({
  //       label: offense,
  //       data: labels.map((_, monthIndex) => {
  //           const crimes = topCrimesMonthly[monthIndex + 1] || [];
  //           const crime = crimes.find(c => c.offenseDesc === offense);
  //           return crime ? crime.count : 0;
  //       }),
  //       borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'][index % 5],
  //       fill: false,
  //       tension: 0.2,
  //       pointRadius: 3
  //   }));

  //   return { labels, datasets };
  // };
  const processCrimeDataForLineChart = (topCrimesMonthly, topCrimes) => {
    if (!topCrimesMonthly || Object.keys(topCrimesMonthly).length === 0) return { labels: [], datasets: [] };

    // Use month names instead of numbers
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const topCrimeNames = topCrimes.map(crime => crime.offenseDesc); // Get only the names of top 5 crimes

    const datasets = topCrimeNames.map((offense, index) => ({
        label: offense,
        data: monthLabels.map((_, monthIndex) => {
            const crimes = topCrimesMonthly[monthIndex + 1] || []; // Months are 1-indexed
            const crime = crimes.find(c => c.offenseDesc === offense);
            return crime ? crime.count : 0;
        }),
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'][index % 5],
        fill: false,
        tension: 0.2,
        pointRadius: 3
    }));

    return { labels: monthLabels, datasets };
  };

  const lineChartData = Object.keys(topCrimesByMonth).length > 0 ? processCrimeDataForLineChart(topCrimesByMonth, topCrimes) : null;

  const crimeChartData = {
    labels: topCrimes.map(crime => crime.offenseDesc),
    datasets: [{ data: topCrimes.map(crime => crime.count), backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'] }]
  };

  return (
    <div style={{ position: "relative", maxWidth: "1000px", margin: "3rem auto" }}>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", flex: 1 }}>
            <Input value={query} onChange={handleInputChange} placeholder="Enter Address Here.." />
            {/* {loading && <div style={{ textAlign: "center", fontSize: "0.9rem" }}>Loading suggestions...</div>} */}
            {showSuggestions && suggestions.length > 0 && (
              <SuggestionList>
                {suggestions.map((suggestion) => (
                  <SuggestionItem key={suggestion.place_id} onClick={() => handleSelectSuggestion(suggestion)}>
                    {suggestion.description}
                  </SuggestionItem>
                ))}
              </SuggestionList>
            )}
          </div>
          <div style={{ marginLeft: "10px" }}>
            <ExploreButton type="submit">Submit</ExploreButton>
          </div>
        </div>
      </form>

      {recommendation.length > 0 && (
  <>
    {topCrimes.length > 0 && (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <PieChartContainer style={{ marginTop: '40px' }}>
          <Pie data={crimeChartData} options={crimeChartOptions} />
        </PieChartContainer>
      </div>
    )}

    {Object.keys(topCrimesByMonth).length > 0 && (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <LineChartContainer>
          <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </LineChartContainer>
      </div>
    )}

    <GridContainer>
      {recommendation.map((rec, index) => (
        <CardTest
          key={index}
          title={rec.title}
          description={rec.description}
          speed={index % 2 === 0 ? "9s" : "12s"}
          color={["#0056b3", "#800080", "#FF4081"][index % 3]}
        />
      ))}
    </GridContainer>
  </>
)}

      {fetchingRecommendation && <LoadingOverlay><Loading /></LoadingOverlay>}
    </div>
  );
}
