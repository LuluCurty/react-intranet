import React from "react";
import { Fragment } from "react"; //Equivalent to <React.fragment>

//Utils
import ExtensionList from "./components/utils/ExtensionList";
import Quoter from "./components/utils/Quoter";
import TitleDate from "./components/utils/TitleDate";

//layouts
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Section from "./components/layout/Section";

//css
import './App.css'

function App(props) {

    return (
        <Fragment>

            <Header></Header>

            <Main>
                <Section background={true}>

                    <h1>React Intranet</h1>
                    <TitleDate></TitleDate>
                    <Quoter></Quoter>
                </Section>

                <Section>
                    div
                </Section>

                <Section>
                    <h2>Extensions</h2>
                    <ExtensionList></ExtensionList>
                </Section>
            </Main>

            <Footer></Footer>

        </Fragment>
    )
}

export default App