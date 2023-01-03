import React from "react"
import './App.css';

class Product3 extends React.Component {
    render() {
        return (
            <div className="BodyDiv">
                <div >
                    <img src='products/image-steel.png' alt="idk" className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <h3>∆ 42</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>Tinfoild: Tailored tinfoil hats</p>
                        <p>We already have your measurements and shipping address.</p>
                    </div>
                    <p>Submitted by : <img src="avatars/elyse.png" alt="idk" className="icon"></img></p>
                </div>
            </div>
        )
    }
}

export default Product3