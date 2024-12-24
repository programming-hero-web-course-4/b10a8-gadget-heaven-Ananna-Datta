import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Computer", uv: 800, pv: 3200, amt: 3400 },
    { name: "Mobile", uv: 1200, pv: 4200, amt: 4600 },
    { name: "Tab", uv: 500, pv: 2500, amt: 2700 },
    { name: "Watch", uv: 300, pv: 1800, amt: 2000 },
    { name: "Earphone", uv: 700, pv: 2900, amt: 3100 },
    { name: "Smart TV", uv: 600, pv: 2800, amt: 3000 },
    { name: "Speaker", uv: 450, pv: 2200, amt: 2400 },
    { name: "Laptop", uv: 950, pv: 3500, amt: 3700 },
    { name: "Monitor", uv: 400, pv: 2400, amt: 2600 },
    { name: "Router", uv: 350, pv: 2000, amt: 2200 },
    { name: "Game Console", uv: 800, pv: 3000, amt: 3200 },
    { name: "Headphones", uv: 750, pv: 3100, amt: 3300 },
    { name: "Drone", uv: 400, pv: 2100, amt: 2300 },
    { name: "Camera", uv: 650, pv: 2900, amt: 3100 },
    { name: "VR Headset", uv: 550, pv: 2700, amt: 2900 },
  ];

  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white text-2xl  p-12">
        <h1 className="font-extrabold text-3xl p-3">Statistics</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level.<br></br> From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="mt-5 mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-5">
          Statistics
        </h1>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#c0aaf3"
              stroke="#a497f0"
            />
            <Bar dataKey="pv" barSize={20} fill="#9538E2" />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
