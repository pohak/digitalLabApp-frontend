import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonList,
  IonItem,
} from '@ionic/react';
import React from 'react';
import { match } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import * as firebase from 'firebase/app';
import { BathPlaceInterface } from '../shared/interfaces/bath-place.interface';

interface Props<P> {
  match: match<P>;
}
interface CustomProps {
  name: string;
}
interface State {
  bathPlaces: BathPlaceInterface[];
}

class Page extends React.Component<Props<CustomProps>, State> {
  state: State = {
    bathPlaces: [],
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection('bathPlaces')
      .get()
      .then((res) => {
        const bathPlaces = res.docs.map((doc) => doc.data() as BathPlaceInterface);
        this.setState({ bathPlaces });
      });
  }

  render() {
    const { bathPlaces } = this.state;
    const { name } = this.props.match.params;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="vaxjo">
            <IonButtons slot="start">
              <IonBackButton text="" defaultHref="/" />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            {bathPlaces.map((bathPlace, index) => (
              <IonItem key={index}>{bathPlace.OVR_dataEDITBADPLATSERBADPL_NAMN}</IonItem>
            ))}
          </IonList>
          <ExploreContainer name={name} />
        </IonContent>
      </IonPage>
    );
  }
}

export default Page;
