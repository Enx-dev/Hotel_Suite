import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";
type FormData = {
  personalInfo: {
    fullname: string;
    email: string;
    phone: string;
  };
  importantInfo: {
    duration: "";
    adults: number;
    children: number;
    rooms: number;
  };

  services: {
    Daycare: boolean;
    feeding: boolean;
    Club: boolean;
    specialNeeds: boolean;
    vehicle: boolean;
    business: boolean;
  };
  additionalInfo: {
    message: string;
  };
  step: number;
  loading: boolean;
};

const initialState: FormData = {
  personalInfo: {
    fullname: "",
    email: "",
    phone: "",
  },
  importantInfo: {
    duration: "",
    adults: 1,
    children: 0,
    rooms: 1,
  },
  services: {
    Club: false,
    Daycare: false,
    feeding: false,
    business: false,
    specialNeeds: false,
    vehicle: false,
  },
  additionalInfo: {
    message: "",
  },
  step: 0,
  loading: false,
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setPersonalInfo(state, action) {
      state.personalInfo = action.payload;
    },
    setImportantInfo(state, action) {
      state.importantInfo.adults = action.payload.adults;
      state.importantInfo.children = action.payload.children;
      state.importantInfo.duration = action.payload.duration;
      state.importantInfo.rooms = action.payload.rooms;
    },
    setServices(state, action) {
      state.services = action.payload;
    },
    setAdditionalInfo(state, action) {
      state.additionalInfo.message = action.payload;
    },
    reset(state) {
      state.additionalInfo.message = "";
      state.step = 0;
      state.personalInfo = {
        fullname: "",
        email: "",
        phone: "",
      };
      state.importantInfo = {
        duration: "",
        adults: 1,
        children: 0,
        rooms: 1,
      };
      state.services = {
        Club: false,
        Daycare: false,
        feeding: false,
        business: false,
        specialNeeds: false,
        vehicle: false,
      };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setStep,
  setImportantInfo,
  setServices,
  setAdditionalInfo,
  reset,
  setLoading,
} = BookingSlice.actions;
export const currentStep = (state: RootState) => state.step;
export const personalInfo = (state: RootState) => state.personalInfo;
export const importantInfo = (state: RootState) => state.importantInfo;
export const services = (state: RootState) => state.services;
export const additionalInfo = (state: RootState) => state.additionalInfo;
export const all = (state: RootState) => state;
export const BookingReducer = BookingSlice.reducer;
