import { IonContent, IonPage } from '@ionic/react';

import React from 'react';

import Map from '../components/Map';
import PageHeader from '../components/PageHeader';

interface Props {}
interface State {
  bathPlaces: Array<any>;
}

class BathPlaces extends React.Component<Props, State> {
  state: State = {
    bathPlaces: [],
  };

  componentDidMount() {
    const url: string =
      'https://gis1.vaxjo.se/arcgis/rest/services/vaxjokartan/se_och_gora/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ bathPlaces: data.features });
      });
  }

  render() {
    const { bathPlaces } = this.state;
    return (
      <IonPage>
        <PageHeader color="secondary" title="BadPlatser" />
        <IonContent>{bathPlaces && <Map bathPlace={bathPlaces} />}</IonContent>
      </IonPage>
    );
  }
}

export default BathPlaces;
