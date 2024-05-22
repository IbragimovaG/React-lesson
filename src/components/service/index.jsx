import "./index.css"
import React from 'react'
import LorIcon from '../../components/assets/hearing.png'
import Icon2 from '../assets/ct-scan.png'
import Icon3 from '../assets/ent.png'
import Icon4 from '../assets/helicobacter.png'
import Icon5 from '../assets/hospital-bed.png'
import Icon6 from '../assets/test-tube-_1_ 1.png'

export default function Index() {
    const service = [
        {
            img:LorIcon,
            title:"Lor"
        },
        {
            img:Icon2,
            title:"3D kompyuter tomografiyasi"
        },
        {
            img:Icon3,
            title:"Audiometriya"
        },
        {
            img:Icon4,
            title:"Nafas olish"
        },
        {
            img:Icon6,
            title:"Tubus"
        },
        {
            img:Icon5,
            title:"Davolash"
        },
    ]
  return (
    <div>
        <h2 className="title"> Xizmatlar </h2>
            <div className="card-block">
                {
                    service.map(item=> <div className="card">
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                    </div>)
                }
            </div>
    </div>
  )
}
