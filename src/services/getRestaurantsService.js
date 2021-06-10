export async function getRestaurantsService() {
  const response = await fetch("http://localhost:3002/getRestaurantDetails", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json());

  return response;
}
