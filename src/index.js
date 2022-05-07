import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';

ReactDom.render(<App />, document.getElementById('app'));

/* const root = reactDom.createRoot(document.getElementById("app"));
root.render(<App tab="home"/>);
    {/* <React.StrictMode> */
        
    /* </React.StrictMode> */ 
