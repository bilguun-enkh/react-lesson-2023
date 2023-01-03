import React from "react"
import './App.css';

function ProductFunc() {
    return (
        <div className="Body">
            <div className="BodyDiv">
                <div className="imgDiv">
                    <img src='products/image-yellow.png' alt="idk" className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <h3>∆ 55</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>Haught or Naught</p>
                        <p>High-minded or absent-minded? You decide.</p>
                    </div>
                    <p>Submitted by : <img src="avatars/veronika.jpg" alt="placeholderpic" className="icon"></img></p>
                </div>
            </div>
        </div>
    )
}

export default ProductFunc