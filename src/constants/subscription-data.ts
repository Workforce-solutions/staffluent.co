export const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: {
      monthly: "$29",
      yearly: "$23",
    },
    description:
      "Perfect for small teams getting started with staff management.",
    features: [
      { name: "Up to 10 staff members", included: true },
      { name: "Core scheduling features", included: true },
      { name: "Basic reporting", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional Plan",
    popular: true,
    price: {
      monthly: "$49",
      yearly: "$39",
    },
    description: "Ideal for growing businesses that need advanced features.",
    features: [
      { name: "Unlimited staff members", included: true },
      { name: "Advanced scheduling", included: true },
      { name: "Comprehensive reporting", included: true },
      { name: "Priority support", included: true },
      { name: "Team management tools", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];

export const businessTypes = [
  { value: "RESTAURANT", label: "Restaurant" },
  { value: "BAR", label: "Bar" },
  { value: "CAFE", label: "Cafe" },
  { value: "CLUB", label: "Club" },
  { value: "RETAIL", label: "Retail" },
  { value: "CORPORATION", label: "Corporation" },
  { value: "LLC", label: "LLC" },
  { value: "SOLE_PROPRIETORSHIP", label: "Sole Proprietorship" },
  { value: "FREELANCER", label: "Freelancer" },
  { value: "STARTUP", label: "Startup" },
  { value: "OTHER", label: "Other" },
];
