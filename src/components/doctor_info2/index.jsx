import React from 'react'
import './index.css'
import Image from '../assets/Rectangle 39.png'

export default function Index() {
  return (
    <div>
           <h3 className="title"> Bosh shifokor </h3>
            <div className='block2'>
                <div className='info2'>
                   <p>Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod.</p>
                   <p>Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectet
piscing elit, sed do eiusmod.</p>
                </div>
                <img src={Image} alt="" />
            </div>
    </div>
  )
}
