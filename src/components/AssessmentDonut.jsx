import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function AssessmentDonut({ data }) {
  const chartData = [
    { name: "Completed", value: data.completedPercent ,color:"#22c55e"},
    { name: "Not Completed", value: data.notCompletedPercent ,color:"#ef4444"}
  ];

  return (
    <div className="card">
      <h3>Average Assessment Score</h3>

      <ResponsiveContainer width="100%" height={250}>
        
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            label
          >
              {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
