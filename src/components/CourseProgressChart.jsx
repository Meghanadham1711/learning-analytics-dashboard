import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function CourseProgressChart({ data }) {
  return (
    <div className="card">
      <h3>Course Progress Rate</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
           <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="district" />
          <YAxis domain={[0,100]}/>
          <Tooltip />
          <Legend />

         
          <Bar dataKey="below" fill="#e6f50c"/>
          <Bar dataKey="average" fill="#f19dd7"/>
          <Bar dataKey="good" fill="#81b6fa"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
