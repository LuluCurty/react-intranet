import React from "react";

import '../styles/Main.css'

function Main(props) {

    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main