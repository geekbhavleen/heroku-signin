import React from 'react';
import App from './App';
import Ji from './Images/img.jpeg';

const Home = () => {
  return (
    <App>
      <div className='text-center p-5'>
        <h1>This Page is Not Protected</h1>
        <h3>Any User Can See This</h3>
        <img src={Ji} alt='my Mascott' />
      </div>
    </App>
  );

};

export default Home;