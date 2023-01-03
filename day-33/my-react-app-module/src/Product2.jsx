import React from "react"
import './App.css';

class Product2 extends React.Component {
    render() {
        return (
            <div className="BodyDiv">
                <div >
                    <img src='products/image-aqua.png' alt="idk" className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <h3>∆ 44</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>Yellow Pail</p>
                        <p>On-demand sand castle construction expertise.</p>
                    </div>
                    <p>Submitted by : <img src="avatars/helen.jpg" alt="idk" className="icon"></img></p>
                </div>
            </div>
        )
    }
}

export default Product2