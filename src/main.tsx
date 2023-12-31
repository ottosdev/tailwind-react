import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {makeServer} from "./infra/service/development/mirage.ts";

if (import.meta.env.VITE_DEVELOPMENT=== "development") {
    makeServer({ environment: "development" })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
