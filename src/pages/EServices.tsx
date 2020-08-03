import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonRouterLink,
  IonCard,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

import React from 'react';
import styled from 'styled-components';

import { EServiceCategories } from '../shared/interfaces/api-eServices.interface';
import axios from 'axios';

import Navbar from '../components/Navbar';

const IonCardStyle = styled(IonCard)`
  margin: 10px auto;
  width: 90%;
  height: 10vh;
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(255, 255, 255) 97%, rgb(10, 156, 100) 97%);
`;

const IonCardTitleStyle = styled(IonCardTitle)`
  border: none;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family: monospace;
`;

interface Props {}
interface State {
  categories: EServiceCategories[];
  elementID: any;
}

class EServices extends React.Component<Props, State> {
  state: State = {
    categories: [],
    elementID: '',
  };

  UNSAFE_componentWillMount() {
    axios
      .get('http://localhost:3000/v1/eservices/categories')
      .then((res) => this.setState({ categories: res.data.Categories }))
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" defaultHref="/" />
            </IonButtons>
            <IonTitle>E-Tjänsten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              {this.state.categories.map((item, index) => {
                return (
                  <IonCol key={index} size="12" class="servicesItme">
                    <IonRouterLink routerLink={`services/${item.ID}`}>
                      <IonCardStyle >
                        <IonCardTitleStyle>
                          {item.Name}
                        </IonCardTitleStyle>
                      </IonCardStyle>
                    </IonRouterLink>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default EServices;
