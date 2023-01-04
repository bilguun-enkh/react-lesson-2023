import React from "react"
import './App.css';

function ProductFunc(props) {
    return (
        <div className="Body">
            <div className="BodyDiv">
                <div className="imgDiv">
                    <img src={props.productImageUrl} alt="idk" className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <h3>∆ {props.votes}</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>{props.title}</p>
                        <p>{props.description}</p>
                    </div>
                    <p>Submitted by : <img src={props.submitterAvatarUrl} alt="placeholderpic" className="icon"></img></p>
                </div>
            </div>
        </div>
    )
}

export default ProductFunc