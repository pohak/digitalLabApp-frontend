import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from '@ionic/react';

import React from 'react';

import './bathPlaces.css';

import Navbar from '../components/Navbar';
import Map from '../components/Map'
import { BathPlace } from '../shared/interfaces/bath-placesMockdata.interface';


const bathPlace: BathPlace[] = [

  {
    name: 'Imponerad badplats 1',
    address: 'Lammhult',
    color: "#2fb3ff ",
    long: 14.8059,
    lat : 56.8790,
    water_temperature: 18,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgKdh3rTDHBwDcenhyGrZUbH5V2_IU0PHbiQ&usqp=CAU',
  },
  {
    name: 'Imponerad badplats 3',
    address: 'Växjö',
    color: "#ffac2f",
    long: 14.8059,
    lat :  56.8890,
    water_temperature: 17,
    image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-1/baby_swimming-1200x628-header.jpg?w=1155',

  },
];

interface Props {}
interface State {}

class bathPlaces extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
              <IonBackButton text="" defaultHref="/" />
            </IonButtons>
            <IonTitle>BadPlatser</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        
          <Map bathPlace={bathPlace}/>

        </IonContent> 
        <Navbar />
      </IonPage>
    );
  }
}

export default bathPlaces;
