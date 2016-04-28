import { render } from "react-dom";
import * as React from "react";
import Greeter from "./components/Greeter";

const cont = document.getElementById("cont");

render(
    <Greeter defaultGreetMessage="Hello, world!" />,
    cont
);