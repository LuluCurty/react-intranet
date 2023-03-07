import React from "react";

import quotes from "../../data/quotes";

function Quoter(props) {
    
    // gRN = getRandomNumber
    const gRN = () => {
        return Math.floor(Math.random() * (quotes.length - 0 + 1) + 0)
    }
    // rN randomNumber
    let rN = gRN()

    return (
        <div>{quotes[rN].quote} {quotes[rN].author}</div>
    )
}

export default Quoter