import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container)

root.render(<App />)


// React 17

/* import React from "react";
import { render } from "react-dom";

import  App  from './App'

render(
    <App />,
    document.getElementById('root')
)

*/