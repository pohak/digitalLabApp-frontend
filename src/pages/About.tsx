import React from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import './About.css';
import image from '../images/vaxjo.png';

interface State {}
interface Props {}

class About extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="vaxjo">
            <IonButtons slot="start">
              <IonBackButton text="" defaultHref="/" />
            </IonButtons>
            <IonTitle>Om appen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>
            <IonImg src={image} />
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Om Appen</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Digitala labbet appen är en app för dig som besöker, bor eller verkar i Växjö kommun. Här kan du hitta
              information om Växjö kommun och dela med dig av dina synpunkter kring sevärdheter och verksamheter.
              <br />
              <br />
              I appen kan du se vattentemperaturen och annan information om kommunens badplatser.
              <br />
              <br />
              Du kan även anmäla om det finns ställen i Växjö stad som känns otrygga, eller om du har några andra
              synpunkter som borde komma till kommunens kännedom.
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}
export default About;
