import { ChevronDown, ChevronUp, InfoIcon } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { setUpdatedPlans } from "../../../redux/features/plans/planSlice";
import { PlanType } from "./PriceCard";

export default function Dropdown({
  extraPlans,
  planName,
}: {
  extraPlans: PlanType[];
  planName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="relative inline-flex items-center space-x-2">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="border border-primary text-primary text-sm rounded h-8 flex items-center justify-between px-3"
        >
          <p
            className="w-36 truncate feature text-[12.5px]"
            dangerouslySetInnerHTML={{ __html: selectedPlan.title }}
          ></p>
          {isOpen ? (
            <ChevronUp className="ml-2 size-4" />
          ) : (
            <ChevronDown className="ml-2 size-4" />
          )}
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded z-10">
            {extraPlans.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer text-sm hover:bg-secondary hover:text-primary feature`}
                onClick={() => handleSelect(option)}
                dangerouslySetInnerHTML={{ __html: option.title }}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        <InfoIcon className="size-4" />
      </div>
    </div>
  );
}
