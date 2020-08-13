import React from 'react';

import { IonPage, IonContent,IonButton, IonIcon } from '@ionic/react';
import CountUp from 'react-countup';
import { homeOutline, homeSharp } from 'ionicons/icons';
import './NoMatch.css';
import PageHeader from '../components/PageHeader';

interface State {}
interface Props {}

class NoMatch extends React.Component<Props, State> {
  state: State = {};
  render() {
    return (
      <IonPage>
        <PageHeader color="vaxjo" title="404" />
        <IonContent>
          <div className="notFoundPage">
            <div className="notFoundContainer">
              <div className="notFound">
                <h6 >
                  <CountUp end={404} duration={3} />
                </h6>
                <p>Sidan som försöker nå finns inte</p>
              </div>

              <div className="btnContainer">
                <IonButton color="vaxjo" routerLink={`/home`}>
                  Hem Sidan{' '}
                  <span style={{ marginLeft: '10px' }}>
                    <IonIcon size="large" color="light" ios={homeOutline} md={homeSharp} />
                  </span>
                </IonButton>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}
export default NoMatch;
