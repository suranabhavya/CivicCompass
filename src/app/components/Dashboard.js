import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Update this import if necessary
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Fake Data
const fakeCrimeData = [
  { type: "Theft", count: 12 },
  { type: "Burglary", count: 8 },
  { type: "Assault", count: 5 },
  { type: "Vandalism", count: 7 }
];

const fakeCompetitors = [
  { name: "Joe's Coffee", distance: "0.2 miles" },
  { name: "Tech Haven", distance: "0.5 miles" },
  { name: "City Gym", distance: "0.7 miles" }
];

const fakeFootTraffic = [
  { hour: "9 AM", traffic: 30 },
  { hour: "12 PM", traffic: 80 },
  { hour: "3 PM", traffic: 50 },
  { hour: "6 PM", traffic: 90 }
];

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Crime Chart */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Crime Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fakeCrimeData}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#FF5733" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Competitor List */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Nearby Competitors</h2>
          <ul>
            {fakeCompetitors.map((comp, index) => (
              <li key={index} className="border-b py-2">
                {comp.name} - {comp.distance}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {/* Foot Traffic Graph */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Foot Traffic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fakeFootTraffic}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="traffic" fill="#338AFF" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}