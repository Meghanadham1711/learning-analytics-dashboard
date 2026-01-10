import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function PassStatsChart({ data }) {
  // Convert object to array (Recharts needs array)
  const chartData = [
    { name: "Overall Learners", value: data.overallLearners ,color:"#3b82f6"},
    { name: "Assessment Taken", value: data.assessmentTaken ,color:"#facc15"},
    { name: "Passed", value: data.passed ,color:"#22c55e"},
    { name: "Failed", value: data.failed ,color:"#ef4444"}
  ];

  return (
    <div className="card">
      <h3>Pass Percentage</h3>

      <ResponsiveContainer width="100%" height={250}>
        {/* 👇 THIS IS WHERE layout="vertical" IS USED */}
        <BarChart data={chartData} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />

          <Bar dataKey="value" >\
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
