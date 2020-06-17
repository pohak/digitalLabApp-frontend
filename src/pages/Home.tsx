import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSearchbar,
  IonRouterLink,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonFabButton,
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
} from 'ionicons/icons';

import './home.css';
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
        routerLink: '/page/Badplatser',
      },
      {
        displayName: 'Länk 2',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'success',
        textColor: 'dark',
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
        routerLink: '/page/Evenemang',
      },
      {
        displayName: 'Länk 5',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'success',
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
        displayName: 'Länk 7',
        iosIcon: speedometerOutline,
        mdIcon: speedometerSharp,
        iconColor: 'warning',
        textColor: 'dark',
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
        displayName: 'Klagomål',
        iosIcon: chatbubblesOutline,
        mdIcon: chatbubbleSharp,
        iconColor: 'success',
        textColor: 'dark',
        routerLink: '/page/Klagomål',
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Växjö kommun</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="view-img">
          <IonSearchbar className="searchBar" placeholder="Vad letar du efter?" color="light"></IonSearchbar>
        </div>
        <IonGrid className="pt-4">
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
                            <h6 className="m-0">{homeLink.displayName}</h6>
                          </IonText>
                        </div>
                        {HomeRow.homeLinks.length !== index + 1 && <hr className="col-divider" />}
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
              assumenda similique tempora. Ipsa fugiat maiores laudantium voluptatibus velit rerum adipisci, repellendus
              ad dolor consequuntur. Omnis!
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
};

export default Home;
