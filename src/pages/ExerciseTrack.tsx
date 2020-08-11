import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import * as firebase from 'firebase/app';
import { ExerciseTrackInterface } from '../shared/interfaces/exercise-track.interface';
import { loadModules } from 'esri-loader';
import PageHeader from '../components/PageHeader';

interface Props {}
interface State {
  exerciseTracks: ExerciseTrackInterface[];
  mapRef: React.MutableRefObject<any>;
}

class ExerciseTrack extends React.Component<Props, State> {
  state: State = {
    exerciseTracks: [],
    mapRef: React.createRef(),
  };

  componentDidMount() {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'], { css: true }).then(([Map, MapView, Graphic]) => {
      const map = new Map({
        basemap: 'topo-vector', // topo-vector - osm
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: this.state.mapRef.current,
        map: map,
        center: [14.8059, 56.879],
        zoom: 11,
      });

      firebase
        .firestore()
        .collection('exerciseTrack')
        .get()
        .then((documentData) => {
          const exerciseTracks = documentData.docs.map((doc) => doc.data() as ExerciseTrackInterface);
          this.setState({ exerciseTracks });
          this.state.exerciseTracks.forEach((exerciseTrack, index) => {
            const { location } = exerciseTrack;
            const paths = location.map((x) => {
              return [x.longitude, x.latitude];
            });

            const geometry = {
              type: 'polyline', // autocasts as new Polyline()
              paths: paths,
            };

            const getRandomColor = () => [
              Math.floor(Math.random() * 255),
              Math.floor(Math.random() * 255),
              Math.floor(Math.random() * 255),
            ];

            const symbol = {
              type: 'simple-line', // autocasts as SimpleLineSymbol()
              color: index % 2 === 0 ? getRandomColor() : getRandomColor(),
              width: 1.5,
            };

            const attributes = {
              name: exerciseTrack.NAMN,
              name2: exerciseTrack.NAMN2,
            };

            const popupTemplate = {
              title: '{name}',
              content: `
                    <div class="popup">
                      <div class="cardBody">
                        <p><span>Name2:</span> {name2}</p>
                      </div>
                    </div>
                  `,
            };

            const graphic = new Graphic({
              geometry,
              symbol,
              attributes,
              popupTemplate,
            });

            if (exerciseTrack.NAMN) {
              view.graphics.add(graphic);
            }
          });
        });

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  }

  render() {
    const { exerciseTracks } = this.state;

    return (
      <IonPage>
        <PageHeader color="danger" title="Motionsspår" />
        <IonContent>{exerciseTracks && <div className="webmap" ref={this.state.mapRef} />}</IonContent>
      </IonPage>
    );
  }
}
export default ExerciseTrack;
