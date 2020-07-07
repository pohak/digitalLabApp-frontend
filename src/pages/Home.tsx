import React from 'react';
import {
  IonPage,
  IonToolbar,
  IonMenuButton,
  IonContent,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonRouterLink,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonFabButton,
  IonImg,
} from '@ionic/react';
import {
  speedometerOutline,
  speedometerSharp,
  apertureOutline,
  apertureSharp,
  trashOutline,
  trashSharp,
  chatbubblesOutline,
  chatbubbleSharp,
  calendarOutline,
  calendarSharp,
  documentOutline,
  document,
  informationSharp,
} from 'ionicons/icons';

import './Home.css';
import Navbar from '../components/Navbar';

interface HomeRow {
  homeLinks: homeLink[];
}

interface homeLink {
  displayName: string;
  iosIcon: string;
  mdIcon: string;
  iconColor: string;
  textColor: string;
  routerLink?: string;
}

const HomeRows: HomeRow[] = [
  {
    homeLinks: [
      {
        displayName: 'Badplatser',
        iosIcon: apertureOutline,
        mdIcon: apertureSharp,
        iconColor: 'secondary',
        textColor: 'dark',
        routerLink: '/BathPlaces',
      },
      {
        displayName: 'Rapportera',
        iosIcon: documentOutline,
        mdIcon: document,
        iconColor: 'success',
        textColor: 'dark',
        routerLink: '/report',
      },
      {
        displayName: 'Länk 3',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'danger',
        textColor: 'dark',
      },
    ],
  },
  {
    homeLinks: [
      {
        displayName: 'Evenemang',
        iosIcon: calendarOutline,
        mdIcon: calendarSharp,
        iconColor: 'secondary',
        textColor: 'dark',
        routerLink: '/event',
      },
      {
        displayName: 'Länk 5',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'warning',
        textColor: 'dark',
      },
      {
        displayName: 'Länk 6',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'secondary',
        textColor: 'dark',
      },
    ],
  },
  {
    homeLinks: [
      {
        displayName: 'Klagomål',
        iosIcon: chatbubblesOutline,
        mdIcon: chatbubbleSharp,
        iconColor: 'success',
        textColor: 'dark',
        routerLink: '/page/Klagomål',
      },

      {
        displayName: 'Sophantering',
        iosIcon: trashOutline,
        mdIcon: trashSharp,
        iconColor: 'danger',
        textColor: 'dark',
        routerLink: '/page/Sophantering',
      },
      {
        displayName: 'Länk 4',
        iosIcon: informationSharp,
        mdIcon: speedometerSharp,
        iconColor: 'success',
        textColor: 'dark',
        routerLink: '/page/link4',
      },
    ],
  },
];

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
  state: State = {};

  render() {
    return (
      <IonPage>
        <div className="home-header ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false} color="light" />
            </IonButtons>
            <IonImg className="title-img" src="/assets/images/vaxjo-kommun-light.png" />
          </IonToolbar>
          <div className="home-header-text">
            <h1>Växjö - Europas grönaste stad</h1>
          </div>
        </div>
        <IonContent color="light">
          <IonGrid className="pt-4 m-x" fixed={true}>
            {HomeRows.map((HomeRow, index) => {
              return (
                <IonRow key={index}>
                  {HomeRow.homeLinks.map((homeLink, homeLinkIndex) => {
                    return (
                      <IonCol key={homeLinkIndex} className="ion-text-center p-0">
                        <IonRouterLink routerLink={homeLink.routerLink ? homeLink.routerLink : 'page/Index'}>
                          <div className="col p-2">
                            <IonFabButton className="mx-auto" color={homeLink.iconColor}>
                              <IonIcon size="large" ios={homeLink.iosIcon} md={homeLink.mdIcon} />
                            </IonFabButton>
                            <IonText color={homeLink.textColor}>
                              <h6 className="m-0 mt-1">{homeLink.displayName}</h6>
                            </IonText>
                          </div>
                        </IonRouterLink>
                      </IonCol>
                    );
                  })}
                </IonRow>
              );
            })}
          </IonGrid>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Information</IonCardSubtitle>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem optio amet magnam nostrum numquam
                assumenda similique tempora. Ipsa fugiat maiores laudantium voluptatibus velit rerum adipisci,
                repellendus ad dolor consequuntur. Omnis!
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Information</IonCardSubtitle>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem optio amet magnam nostrum numquam
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Information</IonCardSubtitle>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem optio amet magnam nostrum numquam
              </IonCardContent>
            </IonCardHeader>
          </IonCard>
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}
export default Home;
