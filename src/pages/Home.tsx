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

import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';

import './Home.css';
import Navbar from '../components/Navbar';

const { PushNotifications } = Plugins;

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
        displayName: 'Exercise track',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'danger',
        textColor: 'dark',
        routerLink: '/exercise-track',
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
        displayName: 'Länk 6',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'secondary',
        textColor: 'dark',
      },
      {
        displayName: 'E-tjänster',
        iosIcon: documentOutline,
        mdIcon: document,
        iconColor: 'warning',
        textColor: 'dark',
        routerLink: '/services',
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

  componentDidMount() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      alert('Push registration success, token: ' + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      alert('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  render() {
    return (
      <IonPage>
        <IonContent color="light">
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
          <IonGrid className="pt-4 mx-auto" fixed={true}>
            {HomeRows.map((HomeRow, index) => {
              return (
                <IonRow key={index}>
                  {HomeRow.homeLinks.map((homeLink, homeLinkIndex) => {
                    return (
                      <IonCol key={homeLinkIndex} className="ion-text-center p-0">
                        <IonRouterLink routerLink={homeLink.routerLink ? homeLink.routerLink : 'page/Index'}>
                          <div className="col p-2">
                            <IonFabButton className="mx-auto" color={homeLink.iconColor}>
                              <IonIcon size="large" color="light" ios={homeLink.iosIcon} md={homeLink.mdIcon} />
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
