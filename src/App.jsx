import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
 
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero title="Become a React Dev" subTitle="Find the React job that fits your skills and needs"/>
      <HomeCards />
    </>
  )
}

export default App
