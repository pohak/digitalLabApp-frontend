import React from 'react';

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
} from '@ionic/react';
import './WorkService.css';
import axios from 'axios';

import PageHeader from '../components/PageHeader';
import CountUp from 'react-countup';
import { WorkServiceHits } from '../shared/interfaces/api-workservies.interface'

interface State {
  adverts: WorkServiceHits[];
  totalAd: number;
  showModal: boolean;
  setShowModal: boolean;
}
interface Props {}

class WorkService extends React.Component<Props, State> {
  state: State = {
    adverts: [],
    totalAd: 0,
    showModal: false,
    setShowModal: false,
  };

  componentDidMount() {
    //api-key should store in env variable to keep it secret
    const authOption = {
      headers: {
        'api-key': 'YiJceDE1XHgwMlx4ZjlceGU0XHhhYVBzXHhmNCNuXHg5NVx4YmY9XHhkYlx4MDBceGQwJ1x4YTJceGRhXHg4MiI',
        'accept': 'application/json',
      },
    };
    axios
      .get(' https://jobsearch.api.jobtechdev.se/search?employer=2120000662&limit=100', authOption)
      .then((res) => {
        this.setState({
          adverts: res.data.hits,
          totalAd: res.data.hits.length,
        });
      })
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <IonPage>
        <PageHeader color="vaxjo" title="Lediga jobb" />
        <IonContent>
          <div className="totalAd">
            <p><CountUp 
            end={this.state.totalAd} 
            duration={3}
            /> Annonser</p>
          </div>
          {this.state.adverts.map((item, i) => {
            return (
              <IonRouterLink key={i} routerLink={`/work-service/${item.id}`}>
                <IonCard className="advertCard">
                  <IonCardHeader>
                    <IonGrid>
                      <IonRow className="align-center">
                        {item.headline && <IonCol size="9">
                          <h6 className="fontStyle">{item.headline}</h6>
                        </IonCol>}

                       {item.logo_url && <IonCol size="3">
                          <img src={item.logo_url} alt="" />
                        </IonCol>} 
                      </IonRow>
                    </IonGrid>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="12">
                          {item.employer.workplace && <ul className="listStyle">
                            <li>{item.employer.workplace}</li>
                          </ul>}
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonRouterLink>
            );
          })}
        </IonContent>
      </IonPage>
    );
  }
}
export default WorkService;
