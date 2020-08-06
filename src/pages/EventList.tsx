import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonCardTitle,
  IonRouterLink,
  IonImg,
  IonIcon,
} from '@ionic/react';
import { locateOutline, locate, calendar, calendarOutline, cash, cashOutline, car, carOutline } from 'ionicons/icons';

import React from 'react';

import './EventList.css';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';

interface EventItem {
  title: string;
  address: string;
  imgUrl?: string;
  description?: string;
  price: string;
  nearest_parking: string;
  date: string;
  bgColor: string;
  textColor: string;
  routerLink?: string;
}

const eventItem: EventItem[] = [
  {
    title: 'Imponerad evenmang',
    address: 'Växjö, Lammhult',
    imgUrl:
      'https://s3-eu-north-1.amazonaws.com/vaxjoco.test/wp-content/uploads/2019/12/MAT2019_2_konserthus-1-1800x930.jpg',
    description: " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or",
    price: 'free',
    nearest_parking: 'near park',
    date: '2021/01/01',
    bgColor: 'primary',
    textColor: 'dark',
    routerLink: '/event/eventname',
  },
  {
    title: 'Imponerad evenmang 2',
    address: 'Växjö, Lammhult',
    imgUrl:
      'https://s3-eu-north-1.amazonaws.com/vaxjoco.test/wp-content/uploads/2019/12/MAT2019_2_konserthus-1-1800x930.jpg',
    description: " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or",
    price: 'free',
    nearest_parking: 'near park',
    date: '2021/01/01',
    bgColor: 'danger',
    textColor: 'dark',
    routerLink: '/event/eventname',
  },
];

interface Props {}
interface State {}

class EventList extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <IonPage>
        <PageHeader color="primary" title="Evenemang" />
        <IonContent>
          {eventItem.map((item, index) => {
            return (
              <IonRouterLink routerLink={item.routerLink} key={index}>
                <IonCard color={item.bgColor}>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <div className="event-img">
                          <IonImg src={item.imgUrl} />
                        </div>
                      </IonCol>
                      <IonCol size="12">
                        <div>
                          <IonCardHeader>
                            <IonCardTitle>{item.title}</IonCardTitle>
                            <IonCardSubtitle>
                              <IonGrid>
                                <IonRow>
                                  <IonCol size="5">
                                    <div className="flexRow">
                                      <IonIcon ios={locateOutline} md={locate} />
                                      <div className="pl-4 font-12">{item.address}</div>
                                    </div>
                                  </IonCol>
                                  <IonCol size="1"></IonCol>
                                  <IonCol size="5">
                                    <div className="flexRow">
                                      <IonIcon ios={calendarOutline} md={calendar} />
                                      <div className="pl-4 font-12">{item.date}</div>
                                    </div>
                                  </IonCol>
                                </IonRow>
                                <IonRow>
                                  <IonCol size="5">
                                    <div className="flexRow">
                                      <IonIcon ios={cashOutline} md={cash} />
                                      <div className="pl-4 font-12">{item.price}</div>
                                    </div>
                                  </IonCol>
                                  <IonCol size="1"></IonCol>
                                  <IonCol size="5">
                                    <div className="flexRow">
                                      <IonIcon ios={carOutline} md={car} />
                                      <div className="pl-4 font-12">{item.nearest_parking}</div>
                                    </div>
                                  </IonCol>
                                </IonRow>
                              </IonGrid>
                            </IonCardSubtitle>
                          </IonCardHeader>
                          <IonCardContent className="font-11">{item.description} </IonCardContent>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </IonRouterLink>
            );
          })}
        </IonContent>

        <Navbar />
      </IonPage>
    );
  }
}

export default EventList;
