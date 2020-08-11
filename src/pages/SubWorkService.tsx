import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { Accordion, Card } from 'react-bootstrap';
import axios from 'axios';

import './SubWorkService.css';
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Props {
  match: any;
}

interface State {
  advertById: Array<any>;
}

class SubWorkService extends React.Component<Props, State> {
  state: State = {
    advertById: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //api-key should store in env variable to keep it secret
    const authOption = {
      headers: {
        'api-key': 'YiJceDE1XHgwMlx4ZjlceGU0XHhhYVBzXHhmNCNuXHg5NVx4YmY9XHhkYlx4MDBceGQwJ1x4YTJceGRhXHg4MiI',
        accept: 'application/json',
      },
    };
    axios
      .get(`https://jobsearch.api.jobtechdev.se/search?q=${id}`, authOption)
      .then((res) => {
        this.setState({ advertById: res.data.hits });
      })
      .catch((err) => console.log('err', err));
  }

  render() {
    console.log(this.state.advertById);
    return (
      <IonPage>
        <PageHeader color="primary" title="Lediga jobb" defaultHref="/work-service" />
        <IonContent>
          {this.state.advertById.map((item, index) => {
            return (
              <IonGrid key={index} className="workService">
                <IonRow className="align-center">

                    <IonCol size="10">
                      <h6>{item.headline}</h6>
                    </IonCol>
                    <IonCol size="2">
                      <img src={item.logo_url} alt="" />
                    </IonCol>
          
                  <IonCol size="12" className="description">
                    <ul>
                      <li>
                        <span>Omfattning:</span>
                        {item.working_hours_type.label}
                      </li>
                      <li>
                        <span>Varaktighet:</span>
                        {item.duration.label}
                      </li>
                      <li>
                        <span>Anställningsform:</span> {item.description.conditions}
                      </li>
                    </ul>
                  </IonCol>
                  <IonCol size="12">
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            <h5
                              style={{
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: 600,
                              }}>
                              {' jobb beskrivning'}
                            </h5>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <p
                              dangerouslySetInnerHTML={{ __html: item.description.text_formatted }}
                              style={{
                                color: 'black',
                                fontSize: '15px',
                                paddingTop: '15px',
                              }}></p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </IonCol>
                  <IonRow>
                    <IonCol size="6" className="info">
                      <h6>Lön</h6>
                      <p>{item.salary_description}</p>
                    </IonCol>
                    <IonCol size="6" className="info">
                      <h6>Anställningsvillkor</h6>
                      <p dangerouslySetInnerHTML={{ __html: item.description.conditions }}></p>
                    </IonCol>
                  </IonRow>
                  <IonCol size="12">
                    <div className="address">
                      <b>Arbetsplats:</b> {item.workplace_address.municipality},{item.workplace_address.region}
                    </div>
                  </IonCol>
                  <IonCol size="12">
                    <div className="footer">
                      <p>
                        <b>Senast ansöka</b> {item.application_deadline}
                      </p>
                      <div className="btngroup">
                        <IonButton href={item.webpage_url} target="_blank">
                          läs annons på AF
                        </IonButton>
                        <IonButton href={item.application_details.url} target="_blank" color="vaxjo">
                          ansöka
                        </IonButton>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            );
          })}
        </IonContent>
      </IonPage>
    );
  }
}

export default SubWorkService;
