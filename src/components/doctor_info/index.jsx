import React from 'react'
import './index.css'
import Doctor from '../assets/IMG_8232.png'
export default function Index() {
    return (
        <div className='doctor_page'>
            <h3 className="title"> Bosh shifokor </h3>
            <div className='block'><img src={Doctor} alt="" />
                <div className='info'>
                    <h2>Tursunqulov Azimjon Nazirjonovich</h2>
                    <h3>Bosh direktor Safomed</h3>
                    <p>Men sizga butun AKFA Medline University Hospital (AMUH) jamoasi nomidan murojaat qilmoqchiman. Tibbiy yordamingiz uchun bizni tanlaganingizdan faxrlanamiz va biz har doim sog'ligingiz uchun eng yaxshi darajada g'amxo'rlik ko'rsatishga intilamiz.
                    </p>
                    <p>Sizning farovonligingiz va sog'ligingiz bizning ustuvor vazifamiz ekanligini ta'kidlash muhimdir. Sizga sifatli tibbiy xizmatlar, zamonaviy asbob-uskunalar va har doim yordam berishga tayyor bo'lgan professional tibbiyot xodimlarini taqdim etish uchun harakat qilamiz.
                    </p>
                    <p>AKFA Medline University Hospital (AMUH) doimiy takomillashtirish va rivojlanishga intiladi. Fikr va takliflaringizni diqqat bilan tinglaymiz va ular bizga xizmatlarimizni yaxshilashga yordam beradi.
                    </p>
                    <p>Iltimos, savollar, tashvishlar yoki so'rovlar bilan biz bilan bog'laning. Sizning fikr-mulohazalaringiz biz uchun juda muhim. Biz siz bilan hamkorlik qilishga va tibbiy ehtiyojlaringizni to'liq qondirishga harakat qilishga tayyormiz.</p>
                </div>
            </div>
            <h3 className="title">Statistika</h3>
            <div className="statics">
                <div className="static blue">
                    <h1>8500+</h1>
                    <h2>Be'morlar</h2>
                </div>
                <div className="static">   
                <h1>27</h1>
                    <h2>Doktor va mutahasislar</h2>
                    </div>
                <div className="static blue">  
                 <h1>18</h1>
                    <h2>Tibbiyot turlari</h2>
                    </div>
                <div className="static"> 
                  <h1>100%</h1>
                    <h2>Qoniqarli otzivlar</h2>
                    </div>
            </div>
        </div>
    )
}
