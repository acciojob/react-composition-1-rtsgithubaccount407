
import React from "react";
import Tabs from './App.js'
import './../styles/App.css';

const App = () => {
  const tabData = [
    {
      title: 'Tab 1',
      content: "This is the content for Tab 1"
    },
    {
      title: 'Tab 2',
      content: "This is the content for Tab 1"
    },
    {
      title: 'Tab 3',
      content: "This is the content for Tab 1"
    }
  ]
  return (
    <div>
      <Tabs tabProp={tabData } />
    </div>
  )
}

export default App
