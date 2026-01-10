import { useEffect, useState } from "react";
import { fetchDashboardData } from "./api/dashboard";
import TopBar from "./components/TopBar";
import SummaryCards from "./components/SummaryCards";
import CourseProgressChart from "./components/CourseProgressChart";
import PassStatsChart from "./components/PassStatsChart";
import AssessmentDonut from "./components/AssessmentDonut";
import GradeBreakdownPie from "./components/GradeBreakdownPie";
import DistrictRanking from "./components/DistrictRanking";

function App() {
 // const [district, setDistrict] = useState("All District");

  const [data, setData] = useState(null);
  const [year, setYear] = useState("2024");
  const [district, setDistrict] = useState("All District");

  useEffect(() => {
    fetchDashboardData(year).then(setData);
  }, [year]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <TopBar
        year={year}
        setYear={setYear}
        district={district}
        setDistrict={setDistrict}
      />

      <SummaryCards summary={data.summary} />
      <CourseProgressChart data={data.courseProgress} />
      <PassStatsChart data={data.passStats} />
      <AssessmentDonut data={data.assessmentCompletion} />
      <GradeBreakdownPie data={data.gradeBreakdown} />
      <DistrictRanking data={data.districtRanking} />
    </div>
  );
}

export default App;
