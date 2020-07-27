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
import Map from '../components/Map';

interface Props {}
interface State {
  bathPlaces: Array<any>
}

class bathPlaces extends React.Component<Props, State> {
  state: State = {
    bathPlaces: []
  };

  componentWillMount() {
    const url:string = 'https://gis1.vaxjo.se/arcgis/rest/services/vaxjokartan/se_och_gora/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({bathPlaces: data.features})
      console.log(data)
    })
  }

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
          {bathPlaces&&<Map bathPlace={ this.state.bathPlaces }/>}
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default bathPlaces;
