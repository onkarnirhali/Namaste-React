// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

  //React Elements
  const title = (
    <h1>
      This is a react Element
    </h1>
  )

  const AppLayout = () => (
    <div className='app-layout'>
      <Header/>
      <Body/>
    </div>
  )

  const HeadingComponet  = () => (
    <div className='randomHeading'>
      <h1 className='randomComponent'>trying the new Functional Component</h1>
    </div>
  ) 
    
 

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render([<AppLayout/>]);