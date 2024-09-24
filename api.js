export const fetchQuotes = async () => {
  const response = await fetch("https://dummyjson.com/quotes");
  const data = await response.json();
  return data.quotes; // The API returns an object, and quotes are inside the "quotes" array
};
