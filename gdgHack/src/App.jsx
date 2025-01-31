import React from 'react';
import Card from './components/Card';
import Header from './components/header';
import Login from './components/Login';
import Counter from './components/Counter';
import Useeffect from './components/Useeffect';
import Onchange from './components/Onchange';
import Onsubmit from './components/Onsubmit';


export default function App() {
  let title = "Hello, React!";
  let description = "This is a simple card component.";
  return (
    <div >
      <Onsubmit/>
    </div>
  );
}