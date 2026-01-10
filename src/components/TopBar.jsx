import { useTheme } from "../theme/ThemeContext";

export default function TopBar({ year, setYear, district, setDistrict }) {
  const { toggleTheme } = useTheme();

  return (
    <div className="topbar">
      <button>Monthly</button>
      <button>Quarterly</button>

      <span>📆 01 Jan 2024 - 31 Dec 2024</span>

      <select value={district} onChange={e => setDistrict(e.target.value)}>
        <option>All District</option>
        <option>Ariyulur</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
        <option>Madurai</option>
      </select>

      <select value={year} onChange={e => setYear(e.target.value)}>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>

      <button onClick={toggleTheme}>🌙 / ☀️</button>
    </div>
  );
}
