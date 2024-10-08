import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanType } from "../../../pages/home/components/PriceCard";
import jsonData from "../../../../data/pricing.json";

type PlanState = {
  plans: PlanType[];
  billType: string;
};

const { plansInfo } = jsonData;

const initialState: PlanState = {
  plans: [],
  billType: plansInfo["1_year"].title,
};

const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans(state, action: PayloadAction<PlanType[]>) {
      const uniquePlans = action.payload.filter(
        (plan, index, self) =>
          self.findIndex((t) => t.name === plan.name) === index
      );

      const modifiedPlans = uniquePlans.map((plan) => {
        const samePlans = action.payload.filter((p) => p.name === plan.name);
        return {
          ...plan,
          extraPlans: samePlans.length > 1 ? samePlans : [],
        };
      });

      state.plans = modifiedPlans;
    },

    setUpdatedPlans(state, action: PayloadAction<PlanType[]>) {
      state.plans = action.payload;
    },

    setBillType(state, action: PayloadAction<string>) {
      state.billType = action.payload;
    },
  },
});

export const { setPlans, setUpdatedPlans, setBillType } = planSlice.actions;

export default planSlice.reducer;
