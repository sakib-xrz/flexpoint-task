import { ChevronDown, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { setUpdatedPlans } from "../../../redux/features/plans/planSlice";
import { PlanType } from "./PriceCard";
import { cn } from "../../../lib/utils";
import Tooltip from "./Tooltip";

export default function Dropdown({
  extraPlans,
  planName,
  planColors,
}: {
  extraPlans: PlanType[];
  planName: string;
  planColors: { primary: string; secondary: string; primaryHover: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { plans } = useAppSelector((state: RootState) => state.plans);
  const selectedPlan =
    plans.find((plan) => plan.name === planName) || extraPlans[0];
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: PlanType) => {
    const newPlans = plans.map((plan) => {
      if (plan.name === option.name) {
        return {
          ...option,
          extraPlans,
        };
      }
      return plan;
    });

    dispatch(setUpdatedPlans(newPlans));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest(".dropdown-container")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-flex items-center space-x-2 dropdown-container">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-sm rounded h-8 flex items-center justify-between pl-5 pr-3"
          style={{
            color: planColors.primary,
            borderColor: planColors.primary,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <p
            className="max-w-[138px] truncate feature text-[12.5px]"
            dangerouslySetInnerHTML={{ __html: selectedPlan.title }}
          ></p>

          <ChevronDown
            className={cn(
              "ml-2 size-4",
              isOpen
                ? "-rotate-180 transition ease-in-out duration-300"
                : "transition ease-in-out duration-300"
            )}
          />
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded z-10">
            {extraPlans.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer text-sm feature"
                style={{
                  backgroundColor:
                    selectedPlan?.title === option?.title && !hoveredIndex
                      ? planColors.secondary
                      : hoveredIndex === index
                        ? planColors.secondary
                        : "",
                  color:
                    hoveredIndex === index ||
                    selectedPlan?.title === option?.title
                      ? planColors.primary
                      : "#49687e",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleSelect(option)}
                dangerouslySetInnerHTML={{ __html: option.title }}
              />
            ))}
          </ul>
        )}
      </div>

      <Tooltip
        triggerText={
          <div
            style={{
              color: planColors.primary,
            }}
          >
            <Info className="size-4 cursor-pointer" />
          </div>
        }
        tooltipContent={selectedPlan.text}
        tooltipPositionClassName="right-[-28px]"
        tooltipArrowClassName="right-[22px]"
      />
    </div>
  );
}
