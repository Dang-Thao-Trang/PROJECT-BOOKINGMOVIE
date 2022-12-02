import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ticketAPI from '../../services/tickerAPI'
import styles from './Ticket.module.scss'
import cn from "classnames"
import './ticket.css'
import { useDispatch, useSelector } from "react-redux";
import { getDsPhongVe, bookSeat, nameSeat, postVe, postDsGheDaDat } from "../../slices/ticketSlice";

const Ticket = () => {
  const dispatch = useDispatch();
  const { dsDatVe, total, dsXuatTenGhe } = useSelector((state) => state.ticket);
  const [thongTinPhongVe, setThongTinPhongVe] = useState(null);
  const { ticketId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(getDsPhongVe(ticketId));
        setThongTinPhongVe(data.payload);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [thongTinPhongVe]);

  const getInfoSeat = async (ghe) => {

    const thongTinVe = {
      maLichChieu: ticketId,
      danhSachVe: [
        {
          maGhe: ghe.maGhe,
          giaVe: ghe.giaVe,
        }
      ]
    }
    const thongTinGhe = ghe.tenGhe;
    dispatch(nameSeat(thongTinGhe))
    dispatch(bookSeat(thongTinVe))
  }
  const dispatchPostVe = () => {
    dsDatVe.forEach(async (item) => {
      return await ticketAPI.datVe(item);
    })
    alert("Chúc mừng bạn đặt vé và thanh toán thành công")
    dispatch(postVe())
  }
  if (!thongTinPhongVe) {
    return
  }
  return <div className={cn(styles.show)}>
    <div className="row">
      <div className="col-sm-8">
        <div>
          <h2 style={{ textAlign: "center" }}>Danh sách ghế đã và chưa chọn</h2>
          <div className={cn(styles.screen)}>MÀN HÌNH
          </div>
        </div>
        <div className={cn(styles.danhSachGhe)}>
          {thongTinPhongVe.danhSachGhe.map((ghe, index) => {
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheVip = '';
            let classGheDangDat = '';
            let findIndex = dsDatVe.findIndex((item) => item.danhSachVe[0].maGhe === ghe.maGhe)
            if (findIndex !== -1) {
              classGheDangDat = 'gheDangChon';
            }

            if (ghe.loaiGhe === "Thuong") {
              classGheVip = 'ghe';
            } else {
              classGheVip = 'gheVip';
            }
            if ((ghe.tenGhe % 16) === 0) {
              return <>
                <button
                  style={{ margin: "3px" }}
                  key={index}
                  className={`ghe  ${classGheVip} ${classGheDangDat}  ${classGheDaDat}`}
                  onClick={() => getInfoSeat(ghe)}>
                  {ghe.tenGhe}
                </button>
                <br />
              </>
            }
            return <button
              // key={index}
              style={{ margin: "3px" }}
              className={`ghe  ${classGheVip} ${classGheDangDat}  ${classGheDaDat}`}
              onClick={() => getInfoSeat(ghe)}>
              {ghe.tenGhe}
            </button>
          })}
        </div>
        <div className="d-flex mt-3 d-flex justify-content-center">
          <div className="mx-3">
            <button className="gheDaDat"> </button>
            <p>Ghế đã đặt</p>
          </div>
          <div className="mx-3">
            <button className="ghe"> </button>
            <p>Ghế thường</p>
          </div>
          <div className="mx-3">
            <button className="gheVip"> </button>
            <p>Ghế vip</p>
          </div>
          <div className="mx-3">
            <button className="gheDangChon"> </button>
            <p>Ghế đang chọn</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <h3>Tổng số tiền: <span>{total} VND</span></h3>
        <hr />
        <div>Cụm rạp:  <span>{thongTinPhongVe.thongTinPhim.tenCumRap}</span></div>
        <hr />
        <div>Địa chỉ:  <span>{thongTinPhongVe.thongTinPhim.diaChi}</span></div>
        <hr />
        <div>Ngày giờ chiếu: <span>{thongTinPhongVe.thongTinPhim.ngayChieu} vào lúc {thongTinPhongVe.thongTinPhim.gioChieu}</span></div>
        <hr />
        <div>Tên phim: <span>{thongTinPhongVe.thongTinPhim.tenPhim}</span></div>
        <hr />
        <div>Chọn ghế: {dsXuatTenGhe} </div>
        <hr />
        <div>
          <button
            className="btn btn-success w-100"
            onClick={() => dispatchPostVe()}
          >Đặt vé</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Ticket;
