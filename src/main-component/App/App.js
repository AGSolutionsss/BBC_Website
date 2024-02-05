import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import ScrollToTopOnMount from '../../components/Load';
import 'react-toastify/dist/ReactToastify.css';


const App = () => { 

  return (
    <div className="App" id='scrool'>
          
          <AllRoute/>
          <ScrollToTopOnMount />
          <ToastContainer/>
    </div>
  );
}

export default App;