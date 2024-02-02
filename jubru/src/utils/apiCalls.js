export const BASE_URL = "http://localhost:8000";
export const USER_ID = 1;

export async function fetchTopWorstPerformers(days) {
  try {
    const response = await fetch(
      `${BASE_URL}/top_worst_positions?days=${days}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export async function fetchValueChange(days) {
  try {
    const response = await fetch(
      `${BASE_URL}/get_value_change?user_id=${USER_ID}&days=${days}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export async function fetchPortfolioValueChange(days) {
  try {
    const response = await fetch(
      `${BASE_URL}/portfolio_value_change?user_id=${USER_ID}&days=${days}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export async function fetchUnrealisedGains(days) {
  try {
    const response = await fetch(
      `${BASE_URL}/read_unrealised_gains?user_id=${USER_ID}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}
