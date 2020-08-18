import { IonContent, IonPage, IonRouterLink, IonCard, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';

import React from 'react';

import { EServiceCategories } from '../shared/interfaces/api-eServices.interface';
import axios from 'axios';

import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import './EServices.css'

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
        <PageHeader color="warning" title="E-tjänster" />
        <IonContent>
          <IonGrid>
            <IonRow>
              {this.state.categories.map((item, index) => {
                return (
                  <IonCol key={index} size="12" class="servicesItme">
                    <IonRouterLink routerLink={`services/${item.ID}`}>
                      <IonCard className="IonCardStyle">
                        <IonCardTitle className="IonCardTitleStyle">{item.Name}</IonCardTitle>
                      </IonCard>
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
