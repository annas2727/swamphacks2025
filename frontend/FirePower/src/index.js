import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import LoginPage from './LoginPage';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN; 
const clientId = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDom.render( 
    <React.StrictMode> 
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        > 
            <LoginPage />
        </Auth0Provider>
    </React.StrictMode>,
    document.root   
);