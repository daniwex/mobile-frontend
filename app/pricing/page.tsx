import PricingCard from "../components/PricingCard";

export default function page() {
  return (
    <div className="pb-10">
      <div className="w-full text-center flex flex-col gap-y-2 mb-7">
        <p className="h4"> Pricing Plans</p>
        <p className="h2">Simple pricing. More ways to grow</p>
        <p className="text-gray-500/80 text-xl">
          Start for free and upgrade when you're ready.
        </p>
      </div>
      <div className="">
        <PricingCard />
      </div>
    </div>
  );
}
