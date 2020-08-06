import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';

import Navbar from '../components/Navbar';
import './NewsSubpage.css';
import { articles } from '../newsData';
import { calendarOutline, calendar, timeOutline, time } from 'ionicons/icons';
import { match } from 'react-router';
import { NewsPage } from '../shared/interfaces/news-page.interface';
import PageHeader from '../components/PageHeader';

interface Props<p> {
  match: match<p>;
}
interface CustomProps {
  id: string;
}
interface State {
  item: NewsPage;
}

class NewsSubpage extends React.Component<Props<CustomProps>, State> {
  state: State = {
    item: {},
  };

  UNSAFE_componentWillMount() {
    console.log(this.props.match.params.id);
    const article = articles.find((x) => x.id === this.props.match.params.id);
    if (article) {
      this.setState({ item: article });
    }
  }

  render() {
    const params = this.props.match.params;
    console.log(params.id, this.state.item.id);
    console.log(this.props);

    return (
      <IonPage>
        <PageHeader color="primary" title="Nyheter" defaultHref="/news" />
        <IonContent>
          {this.state.item.id === params.id && (
            <div className="article">
              <h3 className="text-title">{this.state.item.title}</h3>
              <div>
                <p className="text">{this.state.item.details}</p>
              </div>
              <div className="datetime">
                <IonIcon className="icon" ios={timeOutline} md={time} size="small" />
                <div>{this.state.item.time}</div>
                <IonIcon className="icon" ios={calendarOutline} md={calendar} size="small" />
                <div>{this.state.item.date}</div>
              </div>
            </div>
          )}
        </IonContent>
        <Navbar />
      </IonPage>
    );
  }
}

export default NewsSubpage;
