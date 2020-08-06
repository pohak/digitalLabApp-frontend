import React from 'react';
import { IonPage, IonContent, IonList, IonLabel, IonItem, IonToggle, IonListHeader, IonText } from '@ionic/react';

import { Config } from '../shared/config';
import './Settings.css';
import PageHeader from '../components/PageHeader';

interface List {
  label: string;
  name: string;
  checked: boolean;
  toggleOptions?: any;
}

interface settingList {
  header: string;
  items: List[];
}

interface Props {}
interface State {
  settingLists: settingList[];
}

class Settings extends React.Component<Props, State> {
  state = {
    settingLists: [
      {
        header: 'Utseende',
        items: [
          {
            label: 'Mörkt tema',
            name: 'theme',
            checked: localStorage.getItem(Config.localStorage.theme) === 'dark' ? true : false,
          },
        ],
      },
      {
        header: 'Pushnotiser',
        items: [
          {
            label: 'Nyheter',
            name: 'news',
            checked: localStorage.getItem(Config.localStorage.news) === 'true' ? true : false,
          },
          {
            label: 'Evenemang',
            name: 'events',
            checked: localStorage.getItem(Config.localStorage.events) === 'true' ? true : false,
          },
        ],
      },
    ],
  };

  componentDidMount() {
    const prefersDark = window.matchMedia('prefers-color-scheme: dark');
    console.log('prefersDark: ', prefersDark);
  }

  toggleSetting(name: string, val: boolean) {
    var settingLists = [...this.state.settingLists];
    const settingList = settingLists.find((x) => x.items.find((a) => a.name === name));
    if (settingList) {
      var item = settingList.items.find((x) => x.name === name);
      if (item) {
        item.checked = val;
      }
      this.setState({ settingLists });
    }

    if (name === 'theme') {
      document.body.classList.toggle('dark', val);
      localStorage.setItem(Config.localStorage[name], val ? 'dark' : 'light');
    }

    if (name === 'news') {
      // Do some stuff regarding push notifications
      localStorage.setItem(Config.localStorage[name], val ? 'true' : 'false');
    }

    if (name === 'events') {
      // Do some stuff regarding push notifications
      localStorage.setItem(Config.localStorage[name], val ? 'true' : 'false');
    }
  }

  render() {
    const { settingLists } = this.state;
    return (
      <IonPage>
        <PageHeader color="vaxjo" title="Inställningar" />
        <IonContent color="light">
          {settingLists.map((settingList) => (
            <IonList key={settingList.header} className="mx-auto">
              <IonListHeader className="pb-2" color="light">
                <IonText color="medium">{settingList.header}</IonText>
              </IonListHeader>
              {settingList.items.map((item) => (
                <IonItem color="light" key={item.name}>
                  <IonLabel>{item.label}</IonLabel>
                  <IonToggle
                    className="p-0"
                    slot="end"
                    mode="ios"
                    name={item.name}
                    color="secondary"
                    checked={item.checked}
                    onIonChange={(e) => this.toggleSetting(item.name, e.detail.checked)}
                  />
                </IonItem>
              ))}
            </IonList>
          ))}
        </IonContent>
      </IonPage>
    );
  }
}
export default Settings;
