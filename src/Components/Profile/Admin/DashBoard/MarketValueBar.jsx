import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MarketValue = () => {
  const data = [
    { category: "Men", marketValue: 50000 },
    { category: "Women", marketValue: 75000 },
  ];

  return (
    <div className="my-20">
      <div>
        <p className="text-left my-2 text-2xl font-bold font-playfair ">
          Market Value
        </p>
      </div>
      <ResponsiveContainer
        width="100%"
        height={400}
        className="bg-white rounded-xl shadow-xl mb-10"
      >
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marketValue" fill="#ff8089" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketValue;
