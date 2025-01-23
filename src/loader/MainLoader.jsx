export const MainLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products"); 
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return {
    products: data  // Assuming you want to pass products to the header
  };
};
