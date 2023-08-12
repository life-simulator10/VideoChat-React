import React from "react";
import { createRoot } from "react-dom/client";

import App from './App';
import { ContextProvider } from "./SocketContext";
import "./Styles.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<ContextProvider><App /></ContextProvider>);