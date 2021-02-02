import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import MoodTracker from './MoodTracker';
import reportWebVitals from './reportWebVitals';

let person = {
  age:'30 now!',
  name:'King',
  favorites: [
    'Wolves',
    'Barry\'s Tea',
    'Figured Wood'
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <MoodTracker />
    <Hello 
      age={person.age} 
      favorites={person.favorites}
      name={person.name} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
