import React,{ useState } from 'react'

import ReactDOM from 'react-dom/client'
import './App.css'
import Ganjina from './ganjina'
import bootstrap from  'bootstrap/dist/css/bootstrap.css';
function App () {
  
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <Ganjina />
        </React.StrictMode>
)}

export default App;
