import fetcher from "./fetcher";

const cinemarsAPI = {
    getQuanLyRap: () => {
        return fetcher.get("QuanLyRap/LayThongTinHeThongRap")
    }
};
const infoCinema = {
    getQuanLyRap: (value) => {
        return fetcher.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
            params: {
                maHeThongRap: value,
            },
        })
    }
};




export default cinemarsAPI;