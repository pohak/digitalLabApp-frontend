import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonImg,
  IonItem,
  IonListHeader,
  IonList,
} from '@ionic/react';

import Navbar from '../components/Navbar';
import './News.css';
import image from '../images/news.jpg';
import { articles } from '../newsData';

const News: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/" />
          </IonButtons>
          <IonTitle>Nyheter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonImg className="img" src={image} />
        </div>
        <IonList>
          {articles.map((entry, i) => (
            <IonItem lines="none" button key={i} routerLink={`/news/${entry.id}`}>
              <IonListHeader className="title" lines="full">
                {entry.title}
              </IonListHeader>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <Navbar />
    </IonPage>
  );
};

export default News;
