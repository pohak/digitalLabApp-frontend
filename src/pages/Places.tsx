import {
    IonPage,
    IonContent,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCardTitle,
      IonIcon,
    } from '@ionic/react';
  
  import { locateOutline, locate, linkOutline, link, call, callOutline} from 'ionicons/icons';
  import React from 'react';
  import image1 from '../images/sveriges-glasmuseum.jpg';
  import image2 from '../images/Domkyrkan-Vaxjo.jpg';
  import image3 from '../images/Svenska emigrantinstitutet.jpg';
  import image4 from '../images/Teleborgsslott.jpg';
  import image5 from '../images/Åsnens Nationalpark.webp';
  import image6 from '../images/kronobergs slottsruin.jpg';
  import image7 from '../images/Linnéparken.jpg';
  import image8 from '../images/Eko tornet.jpg';
  import image9 from '../images/Bokhultet.jpg';
  import image10 from '../images/Smålands museum.jpg';
  import './Places.css';
  import Navbar from '../components/Navbar';
  import PageHeader from '../components/PageHeader';
  
  
  interface PlacesItem {
    id:string;
    bgColor: string;
    imgUrl?: any;
    title:string;
    adress:string;
    link:string;
    phone:string;
  }
  


const placesItem: PlacesItem[] = [
    {
        id: 'sverigesglasmuseum',
        bgColor: 'primary',
        imgUrl: image1,
        title: "Sveriges glasmuseum",
        adress: "Södra Järnvägsgatan 2, Växjö",
        link: 'https://kulturparkensmaland.se/besok-oss/vara-besoksmal/smalands-museum-och-sveriges-glasmuseum/',
        phone:'+46 470 704200'
      },
      {
        id: 'vaxjodomkyrka',
        bgColor: 'primary',
        imgUrl: image2,
        title: "Växjö Domkyrka",
        adress: "Linnégatan , Växjö",
        link: 'https://www.svenskakyrkan.se/vaxjo',
        phone:'+46 470 296 80'
      },
      {
        id: 'svenskaemigrantinstitutet',
        bgColor: 'primary',
        imgUrl: image3,
        title: "Svenska Emigrantinstitutet",
        adress: "Vilhelm Mobergs gata 4, Växjö 352 29",
        link: 'https://kulturparkensmaland.se/besok-oss/vara-besoksmal/utvandrarnas-hus/svenska-emigrantinstitutet/',
        phone:'+46 470 704200'
      },
      {
        id: 'teleborgsslott',
        bgColor: 'primary',
        imgUrl: image4,
        title: "Teleborgsslott",
        adress: "Slottsallén 12, Växjö 351 12",
        link: 'https://www.spottinghistory.com/view/1396/teleborg-castle/',
        phone:'+46 470 349890'
      },
      {
        id: 'asnensnationalpark',
        bgColor: 'primary',
        imgUrl: image5,
        title: "Åsnens National Park",
        adress: "Hulevik, Växjö 342 53",
        link: 'https://www.sverigesnationalparker.se/park/asnens-nationalpark/',
        phone:'none'
      },
      {
        id: 'kronobergsslottsruin',
        bgColor: 'primary',
        imgUrl: image6,
        title: "Kronobergs slottsruin",
        adress: "Helgasjöns strand Ligger ca 8 km norr om Växjö centrum, Växjö 351 81",
        link: 'https://kulturparkensmaland.se/besok-oss/vara-besoksmal/kronobergs-slottsruin/',
        phone:'+46 470 630 00'
      },
      {
        id: 'linneparken',
        bgColor: 'primary',
        imgUrl: image7,
        title: "Linnéparken",
        adress: "Sandgärdsgatan, Växjö",
        link: 'https://naturkartan.se/sv/vaxjo/linneparken',
        phone:'+46 470 704200'
      },
      {
        id: 'echowatertower',
        bgColor: 'primary',
        imgUrl: image8,
        title: "Eko-tornet",
        adress: "Teleborg Växjö",
        link: 'https://xn--hejvxj-eua0m.se/teleborgs-vattentorn-echo-water-tower/',
        phone:'none'
      },
      {
        id: 'Bokhultet',
        bgColor: 'primary',
        imgUrl: image9,
        title: "Bokhultet",
        adress: "Växjö",
        link: 'https://naturkartan.se/sv/vaxjo/bokhultets-naturreservat',
        phone:'+46 470-410 00'
      },
      {
        id: 'smalandsmuseum',
        bgColor: 'primary',
        imgUrl: image10,
        title: "Smålands Museum",
        adress: "Södra Järnvagsgatan 2, Växjö",
        link: 'https://www.kulturparkensmaland.se/',
        phone:'+46 470 70 42 00'
      },
]

interface State {}
interface Props {}

class Places extends React.Component<Props, State> {
  state: State ={};
  render() {
    return (
      <IonPage>
        <PageHeader color="primary" title="Sevärdheter" />
          <IonContent>
              {placesItem.map((item, index) => {
                  console.log(item)
                  return (
                        <IonCard color={item.bgColor} className="places-card">
                            <IonGrid className="body">
                                <IonRow className="title">
                                  <IonCol>
                                    <IonCardTitle>{item.title}</IonCardTitle>
                                  </IonCol>
                                </IonRow>
                                <IonRow >
                                  <IonImg className="image" src={`${item.imgUrl}`} />
                                </IonRow>
                                <IonRow className="adress">
                                  <IonCol size="2">
                                  <IonIcon ios={locateOutline} md={locate} />
                                  </IonCol>
                                  <IonCol size="10">
                                    <p>{item.adress}
                                    </p>
                                  </IonCol>
                                </IonRow>
                                <IonRow className="webpage">
                                  <IonCol size="2">
                                  <IonIcon ios={linkOutline} md={link} />
                                  </IonCol>
                                  <IonCol size="10">
                                    <a href={item.link} target="_blank" className="link">Webbplats</a>
                                  </IonCol>
                                </IonRow>
                                <IonRow className="phone">
                                  <IonCol size="2">
                                  <IonIcon ios={callOutline} md={call} />
                                  </IonCol>
                                  <IonCol size="10">
                                    <p>{item.phone}</p>
                                  </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                  
                 )
               }
              )
            }
          </IonContent>
        <Navbar />
      </IonPage>
    )
  }
}



export default Places;
