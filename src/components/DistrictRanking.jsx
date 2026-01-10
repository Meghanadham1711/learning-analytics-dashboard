import "../DistrictRanking.css";
import districtData from "../data/districtData";

export default function DistrictRanking() {
  // Sort districts by pass percentage (DESC)
  const rankedDistricts = [...districtData]
    .sort((a, b) => b.passPercent - a.passPercent)
    .map((item, index) => ({
      ...item,
      rank: index + 1
    }));

  return (
    <div className="ranking-container">
      <h3 className="ranking-title">All District with Ranking (Pass %)</h3>

      <div className="ranking-scroll">
        {rankedDistricts.map((item) => (
          <div key={item.district} className="ranking-card">
            <div className="district-name">{item.district}</div>

            {/* <div className="pass-percent">
              Pass: {item.passPercent}%
            </div> */}

            <div className="rank-box">
              <span className="rank-number">
                {item.rank}
              </span>
              <span className="rank-text"> Rank</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
