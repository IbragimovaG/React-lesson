import React from 'react'
import './index.css'
import Image from '../assets/photo_2024-02-26_11-32-09 1.png'
export default function Index() {
  return (
    <div className='otziv'>
                   <h3 className="title"> Bemorlarimizdan sharhlar </h3>
            <div className='block2'>
                <div className='info2'>
                   <p>Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod.</p>
<h4>Be'mor</h4>
                </div>
                <img src={Image} alt="" />
            </div>
    </div>
  )
}
