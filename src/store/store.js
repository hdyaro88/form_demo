import { configureStore, createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "campaignData",
  initialState: {
    campaignInfo: null,
    productInfo: null,
    deliverablesInfo: null,
    refrences: [],
  },
  reducers: {
    addcmpInfoData(state, action) {
      state.campaignInfo = action.payload;
    },
    addprodInfoData(state, action) {
      state.productInfo = action.payload;
    },
    adddeliverablesInfoData(state, action) {
      state.deliverablesInfo = action.payload;
    },
    addrefrenceData(state, action) {
      state.refrences = [...state.refrences, action.payload];
    },
    deleterefrenceData(state, action) {
      state.refrences = state.refrences.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});
const status = createSlice({
  name: "status",
  initialState: { refrences_status: null, imageStatus: null },
  reducers: {
    refrencesStatus(state, action) {
      state.refrences_status = action.payload;
    },
    imageUploadingStatus(state, action) {
      state.imageStatus = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { campaignData: data.reducer, status: status.reducer },
});
export const campaignDataActions = data.actions;
export const statusActions = status.actions;
