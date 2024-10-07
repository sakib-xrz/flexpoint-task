import { Info } from "lucide-react";

interface PlanDetails {
  price: string;
  price_postfix: string;
  plan_type: string;
  plan_info: string;
  dd_text: string;
  btn_text: string;
  price_id: string;
}

interface PlanType {
  name: string;
  price: string;
  title: string;
  text: string;
  details: {
    "1_year": PlanDetails;
    "2_year": PlanDetails;
  };
}

interface FeaturesType {
  is_pro: string;
  feature_title: string;
  feature_desc: string;
}

const colors: Record<
  string,
  { primary: string; secondary: string; primaryHover: string }
> = {
  Free: {
    primary: "#4cb3fd",
    secondary: "#e5f2ff",
    primaryHover: "#1884d1",
  },
  Basic: {
    primary: "#ffb72c",
    secondary: "#fff0d9",
    primaryHover: "#d69312",
  },
  Pro: {
    primary: "#68cb9b",
    secondary: "#d8fdf0",
    primaryHover: "#40a373",
  },
  Growth: {
    primary: "#b78deb",
    secondary: "#f7f5fb",
    primaryHover: "#6e41a6",
  },
};

export default function PriceCard({
  plan,
  features,
}: {
  plan: PlanType;
  features: FeaturesType[];
}) {
  const { name, price, title } = plan;
  const planColors = colors[name] || colors["Free"];

  const filteredFeatures = features.filter((feature) =>
    name === "Free" ? feature.is_pro === "0" : feature.is_pro === "1"
  );

  return (
    <div
      className="p-4 bg-white border border-[#eaeff2] rounded-lg py-6 px-5 relative transition-all delay-[.25s] flex flex-col"
      style={{
        borderTopColor: planColors.primary,
        borderTopWidth: "8px",
      }}
    >
      {name === "Pro" && (
        <span className="absolute rounded-[3px] text-white bg-[#68cb9b] font-medium text-xs right-[6px] top-[6px] py-[6.5px] px-2">
          Most Popular
        </span>
      )}

      <p className="text-lg leading-4 text-[#49687e]">{name}</p>

      <div className="py-[10px] relative flex items-baseline mb-1 gap-[10px]">
        <span
          className="font-semibold text-[32px]"
          style={{ color: planColors.primary }}
        >
          {price}
        </span>
        <div>
          <span className="absolute top-[16px] text-xs line-through text-[#ff424d]">
            $15/Month
          </span>
          <span className="text-[#83a1b7] text-sm">/Month</span>
        </div>
      </div>

      <div
        className="flex gap-[5px] items-center rounded-[32px] text-[12.5px] py-[5px] px-[15px]"
        style={{
          color: planColors.primary,
          backgroundColor: planColors.secondary,
        }}
      >
        <span
          className="prose"
          dangerouslySetInnerHTML={{ __html: title }}
        ></span>
        <Info className="size-4" />
      </div>

      <div className="pt-[18px]">
        {name !== "Free" ? (
          <h2 className="font-semibold text-[#49687e] py-2">
            Everything in Free plus:
          </h2>
        ) : (
          <h2 className="font-semibold text-[#49687e] py-2">Free includes:</h2>
        )}
      </div>

      <ul className="list-none mb-4">
        {filteredFeatures.map((feature, index) => (
          <li className="py-[5px]" key={index}>
            <div>
              <span className="text-[#49687e] text-sm">
                {feature.feature_title}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="rounded-[8px] text-center text-white w-full py-2 mt-auto transition-all"
        style={{
          backgroundColor: planColors.primary,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = planColors.primaryHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = planColors.primary;
        }}
      >
        Select Plan
      </button>
    </div>
  );
}
