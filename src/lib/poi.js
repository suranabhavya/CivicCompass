const API = 'http://overpass-api.de/api/interpreter';

// This function will take in a set of coordinates and return nearby points of interest
export async function getPOI(lat, lon) {
  let result = await fetch(
    API,
    {
        method: "POST",        
        body: "data="+ encodeURIComponent(`
            [out:json][timeout:90];
            nwr(around:1000,${lat},${lon})["amenity"];
            out geom;
        `)  
    },
  ).then(
    (data)=>data.json()
  )
  return result;
}

/*
let result = await fetch(
  API,
  {
      method: "POST",
      // The body contains the query
      // to understand the query language see "The Programmatic Query Language" on
      // https://wiki.openstreetmap.org/wiki/Overpass_API#The_Programmatic_Query_Language_(OverpassQL)
      body: "data="+ encodeURIComponent(`
          [out:json][timeout:25];
          area[name="Boston"]->.searchArea;
          nwr["amenity"="bar"](area.searchArea);
          out geom;
      `)  
  },
).then(
  (data)=>data.json()
)*/
