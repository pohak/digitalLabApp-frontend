import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonBackButton,
  IonIcon,
  IonItem,
  IonCardSubtitle
} from '@ionic/react';
import {locationOutline, location } from 'ionicons/icons';

import React from 'react';

import './badPlatser.css';
import Navbar from '../components/Navbar';

interface PoolItem {
  name: string;
  address: string;
  routerLink?: string;
  color: string;
}

const poolItem: PoolItem[] = [
  {
    name: 'Imponerad badplats',
    address: 'Lammhult',
    routerLink: '/badplatser/pool',
    color: "#2fb3ff "
  },
  {
    name: 'Imponerad badplats',
    address: 'Växjö',
    routerLink: '/badplatser/pool',
    color: "#ffac2f"
  },
];

interface Props {}
interface State {}

class BadPlatser extends React.Component<Props, State> {
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
          <IonCard>
            {poolItem.map((item, index) => {
              return (
                <IonItem href={item.routerLink} className="ion-activated" key={index}>
                  <div className="leftBorder" style={{background: item.color}}> 

                  </div>
                  <div className="flexRow">
                    <IonCardSubtitle className="pl-1">{item.name}</IonCardSubtitle>
                  </div>
                  <div className="flexRow ml-5">
                    <IonIcon ios={locationOutline} md={location} size="small" />
                    <IonCardSubtitle className="pl-1">{item.address}</IonCardSubtitle>
                  </div>
                </IonItem>
              );
            })}
          </IonCard>
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default BadPlatser;
