import React from 'react';
import { loadModules } from 'esri-loader';
import './map.css';
import { BathPlace } from '../shared/interfaces/bath-placesMockdata.interface';

interface Props {
  bathPlace: BathPlace[];
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
    const { bathPlace } = this.props;

    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/Graphic'], { css: true }).then(
      ([ArcGISMap, MapView, Map, Graphic]) => {
        const map = new ArcGISMap({
          basemap: 'osm',
        });
        const view = new MapView({
          container: this.state.mapRef.current,
          map: map,
          center: [14.8059, 56.879],
          zoom: 12,
        });

        bathPlace.map((item) => {
          const positions = [
            {
              geometry: {
                type: 'point',
                longitude: item.long,
                latitude: item.lat,
              },
              symbol: {
                type: 'simple-marker',
                color: item.color,
                size: '13px',
              },
              attributes: {
                Name: item.name,
                Address: item.address,
                Temperature: item.water_temperature,
                Img: item.image,
              },
              popupTemplate: {
                title: '{Name}',
                content: `
                  <div class="popup">
                    <img src={Img} alt=""/>
                    <div class="content">
                      <ul>
                        <li>
                          <i class="fa fa-address-book-o fa-lg" aria-hidden="true"></i> 
                          {Address} 
                        </li>
                        <li>
                          <i class="fa fa-tint" aria-hidden="true fa-lg"></i> 
                          {Temperature} 
                        </li>
                      </ul>
                      <div>
                         <h2>Google Chrome</h2>
                         <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
                      </div>
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
        this.setState({ view: view });
      }
    );
  }

  componentWillUnmount() {
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
