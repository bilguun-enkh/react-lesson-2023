import React from "react"
import logo from "./logo.svg"
import './App.css';

class Product4 extends React.Component {
    render() {
        return (
            <div className="BodyDiv">
                <div >
                    <img src='products/image-rose.png' className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <h3>∆ 23</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>Supermajority: The Fantasy Congress League</p>
                        <p> Earn points when your favorite politicians pass legislations.</p>
                    </div>
                    <p>Submitted by : <img src={logo} className="icon"></img></p>
                </div>
            </div>
        )
    }
}

export default Product4