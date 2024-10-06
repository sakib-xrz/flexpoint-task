export default function PriceCard() {
  return (
    <div className="p-4 bg-white border border-[#eaeff2] rounded-lg py-6 px-5 border-t-8 border-t-[#ffb72c] relative">
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
    </div>
  );
}
