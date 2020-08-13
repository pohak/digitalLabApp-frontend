import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './css/sizing.css';

import Home from './pages/Home';
import Report from './pages/Report';
import EventList from './pages/EventList';
import News from './pages/News';
import NewsSubpage from './pages/NewsSubpage';
import About from './pages/About';
import BathPlaces from './pages/BathPlaces';
import ExerciseTrack from './pages/ExerciseTrack';
import EServices from './pages/EServices';
import EServiceFlows from './pages/EServiceFlows';
import WorkService from './pages/WorkService';
import SubWorkService from './pages/SubWorkService';

import firebase from 'firebase/app';
import 'firebase/firestore';
import Menu from './components/Menu';
import Settings from './pages/Settings';
import { Config } from './shared/config';

const firebaseConfig = {
  apiKey: 'AIzaSyBvVJIaUJXAOJO0EDixb774Obw2GBHoOBM',
  authDomain: 'digitalalabbet-app.firebaseapp.com',
  databaseURL: 'https://digitalalabbet-app.firebaseio.com',
  projectId: 'digitalalabbet-app',
  storageBucket: 'digitalalabbet-app.appspot.com',
  messagingSenderId: '96236571177',
  appId: '1:96236571177:web:f24e14ef59238a9775aa38',
};
firebase.initializeApp(firebaseConfig);

const theme = localStorage.getItem(Config.localStorage.theme);
if (theme) {
  document.body.classList.add(theme);
} else {
  const prefersDark = window.matchMedia('prefers-color-scheme: dark');
  document.body.classList.add(prefersDark.matches ? 'dark' : 'light');
  localStorage.setItem(Config.localStorage.theme, prefersDark.matches ? 'dark' : 'light');
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Menu />

        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/report/" component={Report} exact />
          <Route path="/event/" component={EventList} exact />
          <Route path="/news" component={News} exact />
          <Route path="/news/:id" component={NewsSubpage} exact />
          <Route path="/settings" component={Settings} exact />
          <Route path="/bathplaces/" component={BathPlaces} exact />
          <Route path="/exercise-track" component={ExerciseTrack} exact />
          <Route path="/services/" component={EServices} exact />
          <Route path="/services/:id" component={EServiceFlows} exact />
          <Route path="/work-service" component={WorkService} exact />
          <Route path="/work-service/:id" component={SubWorkService} exact />
          <Redirect from="/" to="/home" exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
