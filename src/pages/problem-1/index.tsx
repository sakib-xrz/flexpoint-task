import Container from "../../components/Container";
import PriceCard from "./components/PriceCard";
import jsonData from "../../../data/pricing.json";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Problem1() {
  const { plans, plansInfo, features } = jsonData;
  const [billType, setBillType] = useState(plansInfo["1_year"].title);

  const uniquePlans = plans.filter(
    (plan, index, self) => self.findIndex((t) => t.name === plan.name) === index
  );

  const renderButton = (type: keyof typeof plansInfo) => (
    <button
      onClick={() => setBillType(plansInfo[type].title)}
      className={cn(
        "border-b-2 border-b-transparent bg-transparent cursor-pointer py-1 text-[#49687e] max-sm:text-sm",
        billType === plansInfo[type].title
          ? "border-b-2 border-b-[#b78deb] font-medium text-[#b78deb]"
          : ""
      )}
    >
      {plansInfo[type].title}
    </button>
  );

  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="border-r border-r-[#c6d7e3] max-sm:pr-2 max-sm:mr-2 pr-[17px] mr-[17px]">
          {renderButton("1_year")}
        </div>
        {renderButton("2_year")}
        <span
          onClick={() => setBillType(plansInfo["2_year"].title)}
          className="flex items-center bg-[rgba(183,141,235,0.15)] rounded-[40px] cursor-pointer ml-[10px] px-3 py-[5px] text-[#49687e] max-sm:text-sm"
        >
          {plansInfo["2_year"].discount}
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-[30px]">
        {uniquePlans.map((plan, index) => (
          <PriceCard
            key={index}
            plan={plan}
            features={features}
            billType={billType}
          />
        ))}
      </div>
    </Container>
  );
}
