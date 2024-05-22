import React from 'react'
import './index.css'
export default function Index() {
    return (
        <div className='page'>
            <h3 className='title'>Biz bilan bog’laning</h3>
            <div className="main">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.4429264866212!2d70.08714444386419!3d41.01304793031058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9b5d66a5a27%3A0xcdd9307d0125ebd7!2z0KHQsNGE0L7QnNC10LQg0JvQntCg!5e0!3m2!1sru!2s!4v1715703377586!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="side2">
                <label>Ism -familya</label>
                    <input type="text"  />
                    <label>Telefon</label>
                    <input type="text"/>
                    <label>Xabar</label>
                    <textarea cols="30" rows="10"></textarea>
                    <button>Jo`natish</button>
                    </div>
            </div>
        </div>
    )
}
