import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router/dom";

import User1Page from './pages/User1Page';

import User2Page from './pages/User2Page';


const router = createBrowserRouter([

 {

 path: "/",

 element: <App />,

 },

 {

 path: "/user/1",

 element: <User1Page />

 },

 {

 path: "/user/2",

 element: <User2Page />

 }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

 <RouterProvider router={router} />,

);


reportWebVitals();