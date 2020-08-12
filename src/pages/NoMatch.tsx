import React from 'react';

import { IonPage, IonContent, IonImg, IonButton, IonIcon} from '@ionic/react';
import {
    homeOutline,
    homeSharp
  } from 'ionicons/icons';
import './NoMatch.css';
import PageHeader from '../components/PageHeader';
import { withRouter } from 'react-router-dom';

interface State {}
interface Props {}

class NoMatch extends React.Component<Props, State> {
  state: State = {};
  render() {
    console.log(withRouter);
    return (
      <IonPage>
        <PageHeader color="vaxjo" title="404" />
        <IonContent>

            <div  className="notFoundPage">
              <div  className="notFoundContainer">
                <IonImg className="notFound" src="/assets/images/notFound.png"></IonImg>
                <div className="btnContainer">
                    <IonButton color="vaxjo">Hem Sidan <span style={{marginLeft: '10px'}}><IonIcon size="large" color="light" ios={homeOutline} md={homeSharp} /></span></IonButton>
                </div>
                
              </div>
            </div>
      
        </IonContent>
      </IonPage>
    );
  }
}
export default NoMatch;
