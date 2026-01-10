export const fetchDashboardData = async (year = 2024) => {
  const response = await fetch(`/src/data/dashboard_${year}.json`);
  return response.json();
};
