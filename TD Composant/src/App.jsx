import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/WrapperComponent.jsx';
import NotificationComponent from './components/NotificationComponent.jsx';

function App() {
  return (
    <>
    <Home>
    <div className="container">
      <div className="columns">
        <div className="column">

        <NotificationComponent
          type="is-warning"
          content="Je suis un message d'avertissement"
          />

        </div>
      </div>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">

        <NotificationComponent
          type="is-success"
          // content="Je suis un message de succès"
          />

        </div>
      </div>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">

        <NotificationComponent
          type="is-danger"
          content="Je suis un message d'alerte"
          />

        </div>
      </div>
    </div>
    </Home>
    </>
  );
}

export default App;