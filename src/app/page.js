"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
export default function Home() {
  const [chieuDai, setChieuDai] = useState(0);
  const [chieuRong, setChieuRong] = useState(0);
  const [loaiMong, setloaiMong] = useState("option1");
  const [soLuongSan, setSoLuongSan] = useState(0);
  const [loaiMai, setLoaiMai] = useState("maiTon");
  const [loaiSan, setLoaiSan] = useState("sanCoMaiChe");
  const [chieuDaiSan, setChieuDaiSan] = useState(0);
  const [chieuRongSan, setChieuRongSan] = useState(0);
  const donGia = 3950000;
  const dienTich = chieuDai * chieuRong;
  const dienTichSan = chieuDaiSan * chieuRongSan;
  const value = currencyFormat(
    dienTich *
      ((loaiMong === "option1" ? 0.2 : 0.4) +
        (loaiMai === "maiTon" ? 0.3 : 0.5)) +
      dienTich * soLuongSan +
      dienTichSan *
        (loaiSan === "sanCoMaiChe" ? 1 : loaiSan === "sanKoMaiChe" ? 0.7 : 0)
  );
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <div>chieu dai</div>
      <input
        value={chieuDai}
        onChange={(value) => {
          setChieuDai(value.target.value);
        }}
      />
      <div>chieu rong</div>
      <input
        value={chieuRong}
        onChange={(value) => {
          setChieuRong(value.target.value);
        }}
      />
      <div>Số lượng sàn</div>
      <input
        value={soLuongSan}
        onChange={(value) => {
          setSoLuongSan(value.target.value);
        }}
      />
      <div
        onChange={(e) => {
          setloaiMong(e.target.value);
          console.log(e.target.value);
        }}
      >
        Loại móng:
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option1"
            checked={loaiMong === "option1"}
          />
          Móng đơn {dienTich * 0.2}m2
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            checked={loaiMong === "option2"}
          />
          Móng băng {dienTich * 0.4}m2
        </label>
      </div>

      <div
        onChange={(e) => {
          setLoaiMai(e.target.value);
          console.log(e.target.value);
        }}
      >
        Loại mái:
        <label>
          <input
            type="radio"
            name="fasdfasfd"
            value="maiTon"
            checked={loaiMai === "maiTon"}
          />
          Mái tôn {dienTich * 0.3}m2
        </label>
        <label>
          <input
            type="radio"
            name="fasdfasfd"
            value="maiBetong"
            checked={loaiMai === "maiBetong"}
          />
          Mái bê tông {dienTich * 0.5}m2
        </label>
      </div>
      <div
        onChange={(e) => {
          setLoaiSan(e.target.value);
          console.log(e.target.value);
        }}
      >
        Loại sân:
        <label>
          <input
            type="radio"
            name="testsan"
            value="sanCoMaiChe"
            checked={loaiSan === "sanCoMaiChe"}
          />
          Sân có mái che {dienTichSan}m2
        </label>
        <label>
          <input
            type="radio"
            name="testsan"
            value="sanKoMaiChe"
            checked={loaiSan === "sanKoMaiChe"}
          />
          Sân không mái che {dienTichSan * 0.7}m2
        </label>
        <label>
          <input
            type="radio"
            name="testsan"
            value=""
            checked={loaiSan === ""}
          />
          không có sân
        </label>
      </div>

      {loaiSan !== "" && (
        <>
          <div>chieu dai san</div>
          <input
            value={chieuDaiSan}
            onChange={(value) => {
              setChieuDaiSan(value.target.value);
            }}
          />
          <div>chieu rong san</div>
          <input
            value={chieuRongSan}
            onChange={(value) => {
              setChieuRongSan(value.target.value);
            }}
          />
        </>
      )}
      <button type="button">Click Me!</button>

      <div>don gia {currencyFormat(donGia)}d/m2</div>
      <div>Dien tich: {value} m2</div>
      <div>
        Tien:
        <h1>{currencyFormat(value * donGia)}</h1>
      </div>
      <div>Cát vàng đồng nai</div>
      <div>Gạch tám quỳnh 8x8x18</div>
      <div>Xi măng insse</div>
      <div>
        Thép việt nhật CB400
        <br /> Betong thương phẩm (với điều kiện hẻm rộng)
        <br />
        Ống thoát nước Bình Minh Chống thấm kova ct11a
        <br />
        Ống cứng Dây điện cadivi Ống cấp và nóng lạnh ppr BÌnh Minh Đá Xanh hoặc
        xám đồng nai
      </div>
    </main>
  );
}
