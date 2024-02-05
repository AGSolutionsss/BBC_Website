import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import Services from '../../components/Service/Service';
import Profile from '../../components/Service/Profile';
import Gallery from '../../components/Gallery/Gallery';
import Register from '../../components/Register/Register';
import EventRegister from '../../components/EventRegister/EventRegister';
import Interest from '../../components/Interest/Interest';
import About from '../../components/about/about';
import Contact from '../../components/contact/Contact';
import Edit from '../../components/Register/Edit';
import Login from '../../components/Register/Login';
import Thankyouu from '../../components/result/thankyouu';
import Failureu from '../../components/result/failureu';
import Thankyou from '../../components/result/thankyou';
import Failure from '../../components/result/failure';
import Thankyouc from '../../components/result/thankyouc';
import Failurec from '../../components/result/failurec';
import Thankyoue from '../../components/result/thankyoue';
import Failuree from '../../components/result/failuree';
import {Provider} from 'react-redux';
import store from '../../components/store';

const AllRoute = () => { 

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='home' element={<Homepage />} />
            <Route exact path='/services' element={<Services/>} />
            
            <Route path='/:id' element={<Profile/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/logins'  element={<Login/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/event-register' element={<EventRegister/>}/>
            <Route path='/interest' element={<Interest/>}/>
            <Route path='/thankyouu' element={<Thankyouu/>}/>
            <Route path='/failureu' element={<Failureu/>}/>
            <Route path='/thankyou' element={<Thankyou/>}/>
            <Route path='/failure' element={<Failure/>}/>
            <Route path='/thankyouc' element={<Thankyouc/>}/>
            <Route path='/failurec' element={<Failurec/>}/>
            <Route path='/thankyoue' element={<Thankyoue/>}/>
            <Route path='/failuree' element={<Failuree/>}/>
          </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default AllRoute;
