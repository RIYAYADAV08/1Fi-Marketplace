const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
    variants: ["128 GB", "256 GB", "512 GB"],
    details:
      "Latest iPhone with powerful performance and advanced camera system.",
    emiPlans: [
      { id: 1, months: 6, monthly: 11667 },
      { id: 2, months: 12, monthly: 5834 },
      { id: 3, months: 18, monthly: 3889 },
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 74999,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    variants: ["128 GB", "256 GB"],
    details:
      "Premium smartphone with an immersive display and powerful camera.",
    emiPlans: [
      { id: 1, months: 6, monthly: 12500 },
      { id: 2, months: 12, monthly: 6250 },
      { id: 3, months: 18, monthly: 4167 },
    ],
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 29990,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    variants: ["Black", "Silver"],
    details:
      "Wireless noise-cancelling headphones with premium sound quality.",
    emiPlans: [
      { id: 1, months: 6, monthly: 4998 },
      { id: 2, months: 12, monthly: 2499 },
    ],
  },
];

export default products;