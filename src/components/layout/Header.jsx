import React from "react";

import "../utils/SmartNavBar";

import "../styles/Header.css"

function Header(props) {

    const docTitle = document.title
    window.addEventListener('blur', () => {
        document.title =  'Bom trabalho!!'
    })
    window.addEventListener('focus', () => {
        document.title = docTitle
    })
    return (
        <header>
            <div className="header-container">
                <div className="header-imag-container">
                    <a href="http://eletricca.com.br">
                        <img src="../imgs/icone.png" alt="Icone Eletricca"  />
                    </a>
                </div>
                <nav id="nav-bar">
                    <ul className="nav-menu">
                        <li><a href="#inicio">inicio</a></li>
                        <li><a href="#links">links</a></li>
                        <li><a href="#ramais">ramais</a></li>
                        <li><a href="#utilitarios">utilitarios</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header