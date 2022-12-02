import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cinemarsAPI from "./../services/cinemasAPI";


const initialState = {
    dsCumRap: [],
};


export const quanLyRapAction = createAsyncThunk("Cinemas", async () => {
    try {
        const data = await cinemarsAPI.getQuanLyRap();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
export const thongTinCumRap = createAsyncThunk("Cinemas", async (value) => {
    try {
        const data = await cinemarsAPI.infoCinema(value);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const cinemasSlice = createSlice({
    name: "cinemas",
    initialState,
    reducers: {

    },
})
export const { } = cinemasSlice.actions;
export default cinemasSlice.reducer;