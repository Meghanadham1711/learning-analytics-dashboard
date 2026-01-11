export const fetchDashboardData = async (year = 2024) => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}dashboard_${year}.json`
  );

  if (!response.ok) {
    throw new Error("Failed to load dashboard data");
  }

  return response.json();
};
