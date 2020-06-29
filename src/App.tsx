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

import Page from './pages/Page';
import Home from './pages/Home';
import Report from './pages/Report';
import EventList from './pages/EventList';
import About from './pages/About';

import firebase from 'firebase/app';
import 'firebase/firestore';

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

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/page/:name" component={Page} exact />
          <Route path="/about" component={About} exact />
          <Route path="/report/" component={Report} exact />
          <Route path="/event/" component={EventList} exact />
          <Redirect from="/" to="/home" exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
