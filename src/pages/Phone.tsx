import {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonContent,
    IonImg,
  } from '@ionic/react';
  import React from 'react';
  import { callOutline, phoneLandscape,} from 'ionicons/icons';

  import './Phone.css';
  import Navbar from '../components/Navbar';
  import PageHeader from '../components/PageHeader';
  import image from '../images/lasarrett.jpg';
  

interface State {}
interface Props {}


class Phone extends React.Component<Props, State> {
    state: State ={};
    render() {

        
      return (
        <IonPage>
             <PageHeader color="primary" title="Viktiga telefonnummer" />
             <IonContent>
             <IonGrid>
                 <div className="phone-body">
                 <IonImg src={image} className="img_vaxjo"></IonImg>
                    <IonRow className="phone-lasarette">
                        <IonCol size="1" className="phone-lasarette-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                                </IonCol>
                                    <IonCol size="11">
                                        <h5>Centrallasarettet Växjö</h5>
                                        <a href="tel:+46470-58 80 00"><p>0470-58 80 00</p> </a>
                                </IonCol>
                    </IonRow>
                    <IonRow className="phone-folktandvarden">
                        <IonCol size="1" className="phone-folktandvarden-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                                </IonCol>
                                    <IonCol size="11">
                                        <h5>Folktandvården</h5>
                                        <a href="tel:+46470-58 88 60"><p>0470-58 88 60</p> </a>
                                </IonCol>
                    </IonRow>
                    <IonRow className="phone-destination">
                        <IonCol size="1" className="phone-destination-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                                </IonCol>
                                    <IonCol size="11">
                                        <h5>Destination Småland</h5>
                                        <a href="tel:+46470-73 32 70"><p>0470-73 32 70</p> </a> 
                                </IonCol>
                    </IonRow>
                    <IonRow className="phone-lanstyrelsen">
                        <IonCol size="1" className="phone-lanstyrelsen-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                        </IonCol>
                        <IonCol size="11">
                            <h5>Länsstyrelsen</h5>
                            <a href="tel:+4610-223 70 00"><p>010-223 70 00</p> </a>
                        </IonCol>
                    </IonRow>

                    <IonRow className="phone-taxi">
                        <IonCol size="1" className="phone-taxi-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                                </IonCol>
                                    <IonCol size="11">
                                        <h5>Växjö Taxi</h5>
                                        <a href="tel:+46470-135 00"><p>0470-135 00</p> </a>
                                </IonCol>
                    </IonRow>
                    <IonRow className="phone-airport">
                        <IonCol size="1" className="phone-airport-icon">
                            <IonIcon ios={callOutline} md={phoneLandscape}></IonIcon>
                                </IonCol>
                                    <IonCol size="11">
                                        <h5>Växjö Småland Airport</h5>
                                        <a href="tel:+46470-75 85 00"><p>0470-75 85 00</p> </a>
                                </IonCol>
                    </IonRow>

                    </div>
                </IonGrid>
                </IonContent>
                <Navbar />
        </IonPage>
        )
      }
  }
  
  
  export default Phone