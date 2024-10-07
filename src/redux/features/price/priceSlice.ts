import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PlanDetails {
  price: string;
  price_postfix: string;
  plan_type: string;
  plan_info: string;
  dd_text: string;
  btn_text: string;
  price_id: string;
}

export interface PlanType {
  name: string;
  price: string;
  title: string;
  text: string;
  details: {
    "1_year": PlanDetails;
    "2_year": PlanDetails;
  };
}

const initialState: PlanType = {
  name: "",
  price: "",
  title: "",
  text: "",
  details: {
    "1_year": {
      price: "",
      price_postfix: "",
      plan_type: "",
      plan_info: "",
      dd_text: "",
      btn_text: "",
      price_id: "",
    },
    "2_year": {
      price: "",
      price_postfix: "",
      plan_type: "",
      plan_info: "",
      dd_text: "",
      btn_text: "",
      price_id: "",
    },
  },
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPlan(_state, action: PayloadAction<PlanType>) {
      return action.payload;
    },
  },
});

export const { setPlan } = priceSlice.actions;

export default priceSlice.reducer;
