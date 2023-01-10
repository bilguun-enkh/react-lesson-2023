import React from "react"
import { useState } from "react";
import './App.css';
import { Rating } from 'react-simple-star-rating'

function ProductFunc(props) {


    const [votes, setVotes] = useState(props.votes)
    const [star, setStar] = useState(props.stars)

    function handleUpVote() {
        setVotes(votes + 1)
        if (star > 5) {
            setStar(0)
        } else {
            setStar(star + 1)
        }

        // console.log(`Upvoted ${props.id}`)
        // let newProducts = []
        // const foundProduct = products.map(product => {
        //     if (product.id === props.id) {
        //         product.votes = product.votes + 1
        //     }
        //     return product
        // })
        // console.log(foundProduct[0].votes)
        // let voteText = document.getElementById("voteText")
        // voteText.textContent = foundProduct[0].votes
    }


    function starDownvote() {
        setStar(star - 1)
        console.log("up")
    }



    return (
        <div className="Body">
            <div className="BodyDiv">
                <div className="imgDiv">
                    <img src={props.productImageUrl} alt="idk" className="pic1"></img>
                </div>
                <div className="BodyRight1">
                    <a onClick={handleUpVote} id="upvote">∆ Upvote</a>
                    <a onClick={starDownvote}>Downvote</a>
                    <h3 id="voteText"> {votes}</h3>
                    <div className='BodyRightMid'>
                        <p className='blue'>{props.title}</p>
                        <p>{props.description}</p>
                    </div>
                    <p>Submitted by : <img src={props.submitterAvatarUrl} alt="placeholderpic" className="icon"></img></p>
                </div>
                <Rating
                            initialValue={star} />
            </div>
        </div>
    )
}

export default ProductFunc