import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tickerAPI from "../services/tickerAPI";

const initialState = {
    dsDatVe: [],
    total: 0,
    dsTenGhe: [],
    dsXuatTenGhe: '',
};
export const getDsPhongVe = createAsyncThunk("ticket", async (values) => {
    try {
        const data = await tickerAPI.getDanhSachPhongVe(values);
        return data;
    } catch (error) {
        throw error;
    }
})


const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        bookSeat: (state, action) => {
            const newDsDatVe = [...state.dsDatVe];
            let index = newDsDatVe.findIndex((item) => item.danhSachVe[0].maGhe === action.payload.danhSachVe[0].maGhe);
            // có tồn tại => xóa đi
            if (index !== -1) {
                newDsDatVe.splice(index, 1);
            }
            else {
                newDsDatVe.push(action.payload)
            }
            const newTotal = newDsDatVe.reduce((result, item) => {
                return result + item.danhSachVe[0].giaVe;
            }, 0)
            return { ...state, dsDatVe: newDsDatVe, total: newTotal };
        },
        nameSeat: (state, action) => {
            const newDsGhe = [...state.dsTenGhe];
            let index = newDsGhe.findIndex((item) => item === action.payload);
            // có tồn tại => xóa đi
            if (index !== -1) {
                newDsGhe.splice(index, 1);
            }
            else {
                newDsGhe.push(action.payload)
            }
            return { ...state, dsTenGhe: newDsGhe, dsXuatTenGhe: newDsGhe.join(", ") };
        },
        postVe: (state, action) => {
            return {
                dsDatVe: [],
                total: 0,
                dsTenGhe: [],
                dsXuatTenGhe: '',

            }
        }
    },
})
export const { bookSeat, nameSeat, postVe } = ticketSlice.actions;
export default ticketSlice.reducer;