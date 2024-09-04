import { createRoot } from 'react-dom/client'
import './style/index.css'
import {TwitterApp} from "./components/TwitterApp.jsx";

createRoot(document.getElementById('root')).render(
    <TwitterApp></TwitterApp>
)
