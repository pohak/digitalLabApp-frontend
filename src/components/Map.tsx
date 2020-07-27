import React from 'react';
import { loadModules } from 'esri-loader';
import './map.css';
import { BathPlaceInterface } from '../shared/interfaces/api-bathplaces.interface';

interface Props {
  bathPlace: BathPlaceInterface[];
}
interface State {
  mapRef: any;
  view: any;
}

class Map extends React.Component<Props, State> {
  state: State = {
    mapRef: React.createRef(),
    view: [],
  };

  componentDidMount() {
    // load map features argis loader
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/Graphic'], { css: true }).then(
      ([ArcGISMap, MapView, Map, Graphic]) => {
        //topo-vector
        //osm
        const map = new ArcGISMap({
          basemap: 'osm',
        });
        const view = new MapView({
          container: this.state.mapRef.current,
          map: map,
          center: [14.8059, 56.879],
          zoom: 11,
        });
        //delay 4ms until array rendering
        setTimeout(() => {
          this.props.bathPlace.map((item) => {
            //Marker features
            const positions = [
              {
                geometry: {
                  type: 'point',
                  longitude: item.geometry.x,
                  latitude: item.geometry.y,
                },
                symbol: {
                  type: 'picture-marker',
                  url: 'https://developers.arcgis.com/labs/images/bluepin.png',
                  width: '15px',
                  height: '15px',
                },
                //popup attribute
                attributes: {
                  Name: item.attributes["OVR_data.EDIT.BADPLATSER.BADPL_NAMN"],
                  Operator: item.attributes['OVR_data.EDIT.BADPLATSER.DRIFT'],
                  Owner: item.attributes['OVR_data.EDIT.BADPLATSER.ÄGARE'],
                  Principal: item.attributes['OVR_data.EDIT.BADPLATSER.HUVUDMAN'],
                  Facilities: item.attributes['OVR_data.EDIT.FRILUFTSLIV_MOTION_PUNKT_1.OVRIGT'],
                  Temperature: '14',
                },
                popupTemplate: {
                  title: '{Name}',
                  content: `
                    <div class="popup">
                      <div class="head">
                        <ul>
                          <li><i class="fa fa-map-marker fa-lg" aria-hidden="true "></i>{Operator}</li>
                          <li><i class="fa fa-building-o fa-lg" aria-hidden="true"></i>{Principal}</li>
                          <li><i class="fa fa-thermometer-empty fa-lg" aria-hidden="true"></i>{Temperature}</li>
                        </ul>
                      </div>
                      <div class="cardBody">
                        <p><span>facilities:</span> {Facilities}</p>
                      </div>
                    </div>
                  `,
                },
              },
            ];
            const graphic = new Graphic({
              geometry: positions[0].geometry,
              symbol: positions[0].symbol,
              attributes: positions[0].attributes,
              popupTemplate: positions[0].popupTemplate,
            });
            return view.graphics.add(graphic);
          });
        }, 400);
        this.setState({ view: view });
      }
    );
  }
  componentWillUnmount() {
    // stop display map if view is null
    const { view } = this.state;
    if (view) {
      view.container = null;
    }
  }

  render() {
    return (
      <div className="map">
        <div className="webmap" ref={this.state.mapRef} />
      </div>
    );
  }
}

export default Map;
