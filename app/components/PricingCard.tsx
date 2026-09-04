"use client";
import Card from "./Card";

const cards = [
  {
    type: "free",
    label: "Free",
    price: "$0",
    features: [
      "Free challenges",
      "Public solutions",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    type: "pro",
    label: "Pro",
    price: "$8.99",
    features: [
      "Everything in free",
      "All challenges",
      "Premium assets",
      "Private submissions",
      "Advanced challenges",
    ],
  },
  {
    type: "team",
    label: "Team",
    price: "$29.99",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Assign challenges",
      "Member progress",
      "Team analytics",
    ],
  },
];

export default function PricingCard() {
  return (
    <div className="grid w-full md:flex items-end justify-center md:gap-x-4">
      {cards.map((card) => (
        <Card
          key={card.label}
          label={card.label}
          price={card.price}
          type={card.type}
          onClick={() => {}}
          feature={card.features}
        />
      ))}
    </div>
  );
}
