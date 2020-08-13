import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { Accordion, Card } from 'react-bootstrap';
import axios from 'axios';

import './SubWorkService.css';
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AdvertHit } from '../shared/interfaces/api-workservies.interface'


interface Props {
  match: any;
}

interface State {
  advertById: AdvertHit[];
}

class SubWorkService extends React.Component<Props, State> {
  state: State = {
    advertById: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const advert: Array<any> = []
    //api-key should store in env variable to keep it secret
    const authOption = {
      headers: {
        'api-key': 'YiJceDE1XHgwMlx4ZjlceGU0XHhhYVBzXHhmNCNuXHg5NVx4YmY9XHhkYlx4MDBceGQwJ1x4YTJceGRhXHg4MiI',
        accept: 'application/json',
      },
    };
    axios
      .get(`https://jobsearch.api.jobtechdev.se/ad/${id}`, authOption)
      .then((res): void => {
        advert.push(res.data)
        this.setState({ advertById: advert });
      })
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <IonPage>
        <PageHeader color="primary" title="Lediga jobb" defaultHref="/work-service" />
        <IonContent>
          {this.state.advertById.map((item, index) => {
            return (
              <IonGrid key={index} className="workService">
                <IonRow className="align-center">
                  <IonCol size="12">
                    <div className="footer">
                      {item.application_deadline && <p>
                        <b>Senast Ansöka</b> {item.application_deadline}
                      </p>}
                      <div className="btngroup">
                        {item.webpage_url && <IonButton href={item.webpage_url} target="_blank">
                          Läs annons på AF
                        </IonButton>}
                        {item.application_details.url && <IonButton href={item.application_details.url} target="_blank" color="vaxjo">
                          Ansöka Nu
                        </IonButton>}
                      </div>
                    </div>
                  </IonCol>

                  {item.headline && <IonCol size="10">
                    <h6 style={{
                      color: 'black',
                      fontSize: '15px',
                      fontWeight: 600,
                    }}>{item.headline}</h6>
                    <p>{item.occupation.label}</p>
                  </IonCol>}

                  {item.logo_url && <IonCol size="2">
                    <img src={item.logo_url} alt="" />
                  </IonCol>}

                  <IonCol size="12" className="description">
                    <ul>
                      {item.working_hours_type.label && <li>
                        <span>Omfattning:</span>
                        {item.working_hours_type.label}
                      </li>}
                      {item.duration.label && <li>
                        <span>Varaktighet:</span>
                        {item.duration.label}
                      </li>}
                      {item.description.conditions && <li>
                        <span>Anställningsform:</span> {item.description.conditions}
                      </li>}
                    </ul>
                  </IonCol>
                  <IonCol size="12">
                    {item.description.text_formatted && <Accordion>
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
                    </Accordion>}
                  </IonCol>
                  <IonRow>
                    {item.salary_description && <IonCol size="6" className="info">
                      <h6>Lön</h6>
                      <p>{item.salary_description}</p>
                    </IonCol>}
                    {item.description.conditions && <IonCol size="6" className="info">
                      <h6>Anställningsvillkor</h6>
                      <p dangerouslySetInnerHTML={{ __html: item.description.conditions }}></p>
                    </IonCol>}
                  </IonRow>
                  {(item.workplace_address.municipality && item.workplace_address.region) && <IonCol size="12">
                    <div className="address">
                      <b>Arbetsplats:</b> {item.workplace_address.municipality},{item.workplace_address.region}
                    </div>
                  </IonCol>}

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
