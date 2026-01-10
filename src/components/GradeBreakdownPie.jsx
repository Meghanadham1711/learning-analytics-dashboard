import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function GradeBreakdownPie({ data }) {
    const COLORS = {
    A: "#22c55e",
    B: "#3b82f6",
    C: "#facc15",
    D: "#fb923c",
    E: "#ef4444"
  };
  return (
    <div className="card">
      <h3>Learners Details Breakdown</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="percent"
            nameKey="label"
            outerRadius={90}
            label
          >
             {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[entry.grade]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
