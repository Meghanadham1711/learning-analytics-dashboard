import "../DistrictRanking.css";
import districtData from "../data/districtData";

export default function DistrictRanking() {
  const rankedDistricts = [...districtData]
    .sort((a, b) => b.passPercent - a.passPercent)
    .map((item, index) => ({
      ...item,
      rank: index + 1
    }));

  return (
    <div className="card">
      <h3 className="ranking-title">All District with Ranking (Pass %)</h3>

      <div className="ranking-scroll">
        {rankedDistricts.map((item) => (
          <div
            key={item.district}
            className={`ranking-card rank-${item.rank}`}
          >
            <div className="district-name">{item.district}</div>

            <div className="rank-box">
              <span className="rank-number">
                {item.rank}
                {item.rank === 1 && "st"}
                {item.rank === 2 && "nd"}
                {item.rank === 3 && "rd"}
                {item.rank > 3 && "th"}
              </span>
              <span className="rank-text"> Rank</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
