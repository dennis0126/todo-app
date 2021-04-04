export const fetchDataFromJsonplaceholder = async (length) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data.slice(0, length);
};
