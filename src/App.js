import React from 'react';
import FirstImg from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './style.css';


function App() {
  return (
    <div className='body'>
      <FirstImg />
      <FullName />
      <Address />
    </div>
  )
}

export default App;
