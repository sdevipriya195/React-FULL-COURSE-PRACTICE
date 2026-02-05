import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './3-useContext/starter/contexts/userContext';
import { MainDataContextProvider } from './context/mainDataContext';
import { MyContextProvider } from './3-useContext/starter/contexts/myContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
    <MainDataContextProvider>
    <UserContextProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </UserContextProvider>
  </MainDataContextProvider>
  </MyContextProvider>
  
);


