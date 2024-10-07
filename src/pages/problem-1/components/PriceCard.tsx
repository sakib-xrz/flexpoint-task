import { Info } from "lucide-react";

export default function PriceCard() {
  return (
    <div className="p-4 bg-white border border-[#eaeff2] rounded-lg py-6 px-5 border-t-8 border-t-[#ffb72c] relative transition-all delay-[.25s]">
      <span className="absolute rounded-[3px] text-white bg-[#68cb9b] font-medium text-xs right-[6px] top-[6px] py-[6.5px] px-2">
        Most Popular
      </span>
      <p className="text-lg leading-4 text-[#49687e]">Free</p>

      <div className="py-[10px] relative flex items-baseline mb-1 gap-[10px]">
        <span className="font-semibold text-[32px] text-[#ffb72c]">$12.5</span>
        <div>
          <span className="absolute top-[16px] text-xs line-through text-[#ff424d]">
            $15/Month
          </span>
          <span className="text-[#83a1b7] text-sm">/Month</span>
        </div>
      </div>

      <div className="flex gap-[5px] items-center bg-[#fff0d9] text-[#ffb72c] rounded-[32px] text-[12.5px] py-[5px] px-[15px]">
        <span className="pt__plan-info__visitors__title">
          Up to <strong>10,000</strong> visitors/month
        </span>
        <span>
          <Info className="size-4" />
        </span>
      </div>

      <div className="pt-[18px]">
        <h2 className="font-semibold text-[#49687e] py-2">
          Everything in free plus:
        </h2>
      </div>

      <ul className="list-none mb-3">
        <li className="py-[10px]">
          <div>
            <span className="text-[#49687e]">Traffic source targeting</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
