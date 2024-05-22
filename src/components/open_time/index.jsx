import React from 'react'
import './index.css'
export default function Index() {
    return (
        <div className='openTimes'>
            <h3 className='title'>Safomed Klinikasi</h3>
            <table>
                <tr>
                    <td>Dushanba-Juma</td>
                    <td>9:00-18:00</td>
                </tr>
                <tr>
                    <td>Shanba</td>
                    <td>9:00-18:00</td>
                </tr>
                <tr>
                    <td>Navbatchi</td>
                    <td>18:00-21:00</td>
                </tr>
                <tr>
                    <td>Qo`ng`iroqlar markazi</td>
                    <td>24/7</td>
                </tr>
            </table>
            <button>Favqulodda qo`ng`iroq</button>
        </div>
    )
}
