import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'


import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Signup/>} />
<Route path="/Home" element={<Home/>} />
<Route path="/Login" element={<Login/>} />
<Route path="/Signup" element={<Signup/>} />


  </Routes>
  
  </BrowserRouter>
  </ChakraProvider>
);


reportWebVitals();
