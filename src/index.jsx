import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import "./styles/base.css";
import "./styles/forms.css";
import "./styles/type.css";
import "./styles/sidebar.css";
import "./styles/links.css";
import "./styles/toggle.css";
import "./styles/main.css";
import "./styles/code.css";
import "./styles/buttons.css";
import "./styles/alert.css";
import "./styles/header.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
