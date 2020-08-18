import { IonContent, IonPage, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton } from '@ionic/react';

import { Accordion, Card, Button } from 'react-bootstrap';

import React from 'react';
import axios from 'axios';

//import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/Navbar';
import { EServiceFlow } from '../shared/interfaces/api-eServices.interface';
import PageHeader from '../components/PageHeader';

interface Props {
  match: any;
}
interface State {
  category: EServiceFlow[];
}


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
        <PageHeader color="warning" title={this.state?.category[0]?.Category} defaultHref="/services" />
        <IonContent>
          {this.state.category.map((item, index) => {
            return (
              <IonCard className="IonCardStyleFlow" key={index}>
                <IonCardHeader className="IonCardHeaderStyleFlow">
                  <IonCardTitle>{item.Category}</IonCardTitle>
                  <div>
                    <img src={item.Icon} alt="" />
                  </div>
                </IonCardHeader>
                <IonCardContent className="IonCardContentStyleFlow">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle  as={Button} variant="link" eventKey="0">
                          <h5
                            dangerouslySetInnerHTML={{ __html: item.Name }}
                          ></h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p
                            dangerouslySetInnerHTML={{ __html: item.LongDescription }}
                         ></p>
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
                </IonCardContent>
              </IonCard>
            );
          })}
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default EServiceFlows;
