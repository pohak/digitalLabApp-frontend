import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonButton,
} from '@ionic/react';

import { Accordion, Card, Button } from 'react-bootstrap';

import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/Navbar';
import { EServiceFlow } from '../shared/interfaces/api-eServices.interface';

interface Props {
  match: any;
}
interface State {
  category: EServiceFlow[];
}

const IonCardHeaderStyle = styled(IonCardHeader)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IonCardContentStyle = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IonCardStyle = styled(IonCard)`
  border-top: 8px solid rgb(10 156 100);
`;

class EServiceFlows extends React.Component<Props, State> {
  state: State = {
    category: [],
  };

  UNSAFE_componentWillMount() {
    const id: string = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/v1/eservices/categories/${id}`)
      .then((res) => this.setState({ category: res.data.Flows }))
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" defaultHref="/services" />
            </IonButtons>
            <IonTitle>{this.state?.category[0]?.Category}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {this.state.category.map((item, index) => {
            return (
              <IonCardStyle key={index}>
                <IonCardHeaderStyle>
                  <IonCardTitle>{item.Category}</IonCardTitle>
                  <div>
                    <img src={item.Icon} alt="" />
                  </div>
                </IonCardHeaderStyle>
                <IonCardContentStyle>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          <h5
                            dangerouslySetInnerHTML={{ __html: item.Name }}
                            style={{
                              color: 'black',
                              fontSize: '15px',
                              fontWeight: 600,
                            }}></h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p
                            dangerouslySetInnerHTML={{ __html: item.LongDescription }}
                            style={{
                              color: 'black',
                              fontSize: '20px',
                              paddingTop: '15px',
                            }}></p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>

                  <IonButton
                    href={item.URL}
                    target="_blank"
                    color="success"
                    style={{
                      marginTop: '10px',
                    }}>
                    Ansök här
                  </IonButton>
                </IonCardContentStyle>
              </IonCardStyle>
            );
          })}
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default EServiceFlows;
