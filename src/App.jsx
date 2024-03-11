import React from 'react';
import Timeline from './Timeline';
import Header from './Header';
import './App.css';


  const App = () => {
    const interests = [
      "I was born in Milwaukee, Wisconsin in 2005. In 2023, I moved to Durham, North Carolina to attend Duke University", 
      "In my free time I enjoy playing piano, kicking soccer balls, and watching the NBA", 
      "I'm super excited to learn and grow, and am open to any opportunities where I can develop my skills. Feel free to connect with me on LinkedIn, or contact me!"
    ];
    
    return (
      <div>
      <Header />

      <h1 className="title">Hi! I am Kevin, a freshman at Duke University studying Computer Science and Statistics.</h1>
        <h2 className="title">Get to know me!</h2>
        <ul className="interests-list">
          {interests.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
  
        <h2 className = "title">Projects</h2>
       
        <h1 className = "title">Timeline</h1>
        <Timeline/>


    </div>
  )

}

export default App;
