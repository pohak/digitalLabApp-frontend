import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonDatetime,
  IonTextarea,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonBackButton,
} from '@ionic/react';
import React from 'react';
import { match } from 'react-router';

import './Report.css';
import Navbar from '../components/Navbar';

interface Props<P> {
  match: match<P>;
}
interface CustomProps {
  name: string;
}

class Report extends React.Component<Props<CustomProps>> {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" defaultHref="/home" />
            </IonButtons>
            <IonTitle>Medborgareförslag</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard color="light">
            <IonCardHeader>
              <IonTitle size="small">vad får man anmäla till ?</IonTitle>
              <IonCardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem optio amet magnam nostrum numquam
                  assumenda similique tempora. Ipsa fugiat maiores laudantium voluptatibus velit rerum adipisci,
                  repellendus ad dolor consequuntur. Omnis!
                </p>
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
          <form>
            <IonList>
              <IonItemDivider color="primary">
                <div className="center p-5">
                  <IonLabel>Anmäl här</IonLabel>
                </div>
              </IonItemDivider>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <div>
                      <IonItem color="light">
                        <IonInput type="email" placeholder="E-posten"></IonInput>
                      </IonItem>
                    </div>
                  </IonCol>
                  <IonCol size="7">
                    <div>
                      <IonItem color="light">
                        <IonInput type="text" placeholder="Namn"></IonInput>
                      </IonItem>
                    </div>
                  </IonCol>
                  <IonCol size="5">
                    <div>
                      <IonItem color="light">
                        <IonDatetime
                          displayFormat="YYYY MM DD"
                          value="date"
                          placeholder="Datum"
                          display-timezone="utc"></IonDatetime>
                      </IonItem>
                    </div>
                  </IonCol>
                  <IonCol size="12">
                    <div>
                      <IonItem color="light">
                        <IonTextarea rows={7} placeholder="beskriv ditt ärende här"></IonTextarea>
                      </IonItem>
                    </div>
                  </IonCol>
                  <div className="center">
                    <IonButton expand="full">Skicka</IonButton>
                  </div>
                </IonRow>
              </IonGrid>
            </IonList>
          </form>
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default Report;
