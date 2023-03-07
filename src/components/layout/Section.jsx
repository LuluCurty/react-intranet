import React from "react";

import '../styles/Section.css'

function Section(props) {

    const sectionBackground = {
        "background-image" : "linear-gradient( 150deg, #eb8c6d8a, rgba(136, 136, 206, 0.7) )",
    }

    console.log(props.background)
    return (
        <section style={ props.background ? sectionBackground : {backgroundColor: "black"}}>
            <div className="section-container">
                {props.children}
            </div>
        </section>
    )
}

export default Section