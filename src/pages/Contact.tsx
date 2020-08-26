import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonRouterLink,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import {
  navigateOutline,
  locate,
  callOutline,
  phoneLandscape,
  mailOutline,
  mailOpen,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  arrowUndoOutline,
} from 'ionicons/icons';

import './Contact.css';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import image from '../images/vaxjosjon.jpg';

interface State {}
interface Props {}

class Contact extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <IonPage>
        <PageHeader color="primary" title="Kontakta oss" />
        <IonContent>
          <IonGrid>
            <div className="contact-body">
              <IonImg src={image} className="img_vaxjo"></IonImg>
              <IonCol size="12">
                <div className="contact-header">
                  <p>Kontakt</p>
                </div>
              </IonCol>
              <IonRow className="contact-adress">
                <IonCol size="1">
                  <IonIcon ios={navigateOutline} md={locate}></IonIcon>
                </IonCol>
                <IonCol size="11">
                  <h5>Växjö kommuns kontaktcenter</h5>
                  <p>Västra Esplanaden 18</p>
                  <p>Box 1222, 351 12 Växjö</p>
                </IonCol>
              </IonRow>
              <IonRow className="contact-phone">
                <IonCol size="1">
                  <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                </IonCol>
                <IonCol size="11">
                <a href="tel:+46470-41000"><p>0470-41000</p></a>
                </IonCol>
              </IonRow>
              <IonRow className="contact-mail">
                <IonCol size="1">
                  <IonIcon ios={mailOutline} md={mailOpen}></IonIcon>
                </IonCol>
                <IonCol size="11">
                <a href="mailto:info@vaxjo.se"><p>info@vaxjo.se</p></a>
                </IonCol>
              </IonRow>
              <IonRow className="contact-more">
                <IonCol size="1">
                  <IonIcon ios={arrowUndoOutline} md={mailOpen}></IonIcon>
                </IonCol>
                <IonCol size="11">
                  <IonRouterLink routerLink={`/contact/phone`}>
                    {' '}
                    <p>Viktiga telefonnummer</p>{' '}
                  </IonRouterLink>
                </IonCol>
              </IonRow>
              <IonRow className="contact-socialmedia">
              <IonRouterLink href="https://www.facebook.com/vaxjokommun/" target="_blank"><IonIcon ios={logoFacebook}></IonIcon></IonRouterLink> 
              <IonRouterLink href="https://www.instagram.com/vaxjokommun/" target="_blank"><IonIcon ios={logoInstagram}></IonIcon></IonRouterLink>
              <IonRouterLink href="https://twitter.com/vaxjokommun/" target="_blank"><IonIcon ios={logoTwitter}></IonIcon></IonRouterLink>
              </IonRow>
            </div>
          </IonGrid>
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default Contact;
