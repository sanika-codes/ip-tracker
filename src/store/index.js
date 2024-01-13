import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  location: {
    lat: 18.5196,
    lng: 73.8554,
    city : '',
    region : '',
    country : '',
    isp : ''
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState: INITIAL_STATE,
  reducers: {
    locationSet: (state, action) => {
      state.location.lat = action.payload.lat;
      state.location.lng = action.payload.lng;
      state.location.city = action.payload.city;
      state.location.region = action.payload.region;
      state.location.country = action.payload.country;
      state.location.isp = action.payload.isp;
    },
  },
});

const store = configureStore({ reducer: locationSlice.reducer });

export const locationActions = locationSlice.actions;
export default store;
