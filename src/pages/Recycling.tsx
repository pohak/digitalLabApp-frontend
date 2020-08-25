import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonRouterLink,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';

import React from 'react';

import './Recycling.css';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';


interface RecyclingItem {
  id:string;
  bgColor: string;
  imgUrl?: string;
  title:string;
  adress:string;
  openingtime:string;
  routerLink?:string;
}

const recyclingItem: RecyclingItem[] = [
  {
    id: 'norremark',
    bgColor: 'danger',
    imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
    title: "Norremarks kretsloppspark",
    adress: "Deltavägen 22 352 45 Växjö",
    routerLink: '/recycling/recyclingplant',
    openingtime: 'Måndag till torsdag, klockan 07.00-19.00 Fredag, klockan 07.00-16.00 Lördag och söndag, klockan 10.00-16.00',
  },
  
  {
      id: 'braas',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Braås återvinningscentral",
      adress: "Mästreda 363 91 Braås",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Tisdag klockan 14.00-19.00 Torsdag klockan 14.00-18.00 Lördag klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10, Övriga lördagar, stängt",
    },
    
    {
      id: 'furuby',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Furuby återvinningscentral",
      adress: "365 93 Furuby",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Måndag, klockan 14.00-19.00 Torsdag, klockan 14.00-18.00 Lördag, klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10 Övriga lördagar, stängt",
    },

    {
      id: 'haringetorp',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Häringetorps återvinningscentral",
      adress: "Cirka en mil sydväst om Växjö vid väg 707, Gemla",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Måndag, tisdag, onsdag, torsdag och fredag, klockan 06.30- 16.00 Lördag och söndag, stängt",
    },

    {
      id: 'ingelstad',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Ingelstad återvinningscentral",
      adress: "Torsås 1, 366 44 Ingelstad",
      routerLink: '/recycling/recyclingplant',
      openingtime: " Tisdag, klockan 14.00-19.00 Torsdag, klockan 14.00-18.00Lördag, klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10 Övriga lördagar, stängt",
    },

    {
      id: 'lammhult',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Lammhult återvinningscentral",
      adress: "Asavägen, 363 45 Lammhult",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Måndag, klockan 14.00-19.00 Torsdag, klockan 14.00-18.00 Lördag, klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10 Övriga lördagar, stängt",
    },

    {
      id: 'rottne',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Rottne återvinningscentral",
      adress: "Kopparvägen 5, 360 40 Rottne",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Måndag, klockan 14.00-19.00 Torsdag, klockan 14.00-18.00 Lördag, klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10 Övriga lördagar, stängt",
    },

    {
      id: 'aby',
      bgColor: 'danger',
      imgUrl: "https://ssam.se/webdav/files/System/resources/graphics/logo.svg",
      title: "Åby återvinningscentral",
      adress: "Åbyfors, 360 40 Rottne",
      routerLink: '/recycling/recyclingplant',
      openingtime: "Tisdag, klockan 14.00-19.00 Fredag, klockan 14.00-16.00 Lördag, klockan 10.00-13.00 gäller 28/3, 4/4, 18/4, 9/5, 30/5, 13/6, 29/8, 5/9, 19/9, 3/10, 17/10 Övriga lördagar, stängt",
    },
];

interface State {}
interface Props {}

class Recycling extends React.Component<Props, State> {
  state: State ={};
  render() {
    return (
      <IonPage>
        <PageHeader color="primary" title="Återvinningscentraler" />
          <IonContent>
            {recyclingItem.map((item, index) => {
              return (
                <IonRouterLink routerLink={item.routerLink} key={index}>
                  <IonCard color={item.bgColor} className="recycling-card">
                    <IonGrid>
                      <IonRow>
                        
                        <IonCol size="12">
                          <div>
                            <IonCardHeader>
                              <div className="recycling-title">
                              <IonCardTitle>{item.title}</IonCardTitle>
                              </div>
                              <IonCardSubtitle>
                                <IonGrid>
                                  <IonRow>
                                    <IonCol size="8">
                                      <div className="adress">Adress: {item.adress}</div>
                                    </IonCol>
                                    <IonCol>
                                      <div className="recycling-img">
                                        <IonImg className="card-image-recycling" src={item.imgUrl} />
                                      </div>
                                    </IonCol>
                                  </IonRow>
                                  <IonRow>
                                    <IonCol size="12">
                                      <div className="opening-hours">Öppettider: {item.openingtime}</div>
                                    </IonCol>
                                  </IonRow>
                                </IonGrid>
                              </IonCardSubtitle>
                            </IonCardHeader>
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCard>
                </IonRouterLink>
              )
            })}
          </IonContent>
          <Navbar />
      </IonPage>
    )
  }
}



export default Recycling;
