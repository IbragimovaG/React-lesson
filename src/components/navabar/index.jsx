import React from 'react'
import './index.css'
import Logo from '../assets/Safomed loogo 1.png'

export default function Index() {
  const menu = [
    {
      path:"/cervice",
      name:"Xizmatlar"
    },
    {
      path:"/about",
      name:"Xizmatlar"
    },
    {
      path:"/about",
      name:"Klinika haqida"
    },
    {
      path:"/doctors",
      name:"Shifokrlar"
    },
    {
      path:"/employers",
      name:"Xodimlar"
    },
    {
      path:"/contacts",
      name:"Kontaktlar"
    },
  ]
  return (
    <div>
        <div className="navbar">
            <img src={Logo} width={"50px"} alt="" />
            <ul className="menu">
              {
                menu.map(item=> <li>
                  <a href={item.path}>{item.name}</a>
                </li>)
              }
            </ul>
        </div>
    </div>
  )
}
