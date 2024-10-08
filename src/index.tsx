/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";
import "./index.css";

const root = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!);
