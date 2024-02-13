import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const MarketValuePie = () => {
  const data = [
    { name: "Men", value: 30 },
    { name: "Women", value: 70 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#ff8089"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MarketValuePie;
