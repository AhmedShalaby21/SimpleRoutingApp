import  ReactDOM from 'react-dom/client';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css'

const myDiv = document.getElementById('root');

 const myRoot = ReactDOM.createRoot( myDiv );
 myRoot.render(<App />)