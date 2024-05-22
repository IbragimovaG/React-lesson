import React from 'react'
import logo from '../assets/Safomed loogo 1.png'
import "./index.css"
export default function Index() {
  return (
    <div className='footer'>
      <div className="allSide">
        <div className="side1"><img src={logo} alt="" /><h5>2024 © Huquqlar himoya qilingan</h5></div>
        <div className="side2">
          <h2>Menyu</h2>
        <ul>
          <li>Biz haqimizda</li>
          <li>Bizning jamoaga qo'shiling</li>
          <li>Yil statistikasi</li>
          <li>Mijozlarning fikrlari</li>
        </ul>
        </div>
        <div className="side3">
          <h2>Qo'shimcha ma'lumotlar</h2>
          <ul>
            <li>raqam: +99891234545</li>
            <li>manzil: 237P+5V6, Chikrizov ko'chasi,<br /> Angren, Toshkent Viloyati, Узбекистан</li>
            <li>email adres: Safo_Center@gmail.com</li>
            <li>Instagram sahifamiz: @Safo_med</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
