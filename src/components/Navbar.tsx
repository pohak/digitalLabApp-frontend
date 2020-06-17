import React from 'react';
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, homeSharp, personOutline, personSharp, chatbubbleOutline, chatbubbleSharp } from 'ionicons/icons';

import './Navbar.css';

interface TabButton {
  name: string;
  tabName: string;
  iosIcon: string;
  mdIcon: string;
}

const tabButtons: TabButton[] = [
  {
    name: 'Startsida',
    tabName: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    name: 'Chat',
    tabName: '/page/chat',
    iosIcon: chatbubbleOutline,
    mdIcon: chatbubbleSharp,
  },
  {
    name: 'Mina sidor',
    tabName: '/page/my-pages',
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
];

const Navbar: React.FC = () => {
  return (
    <IonTabBar slot="bottom" className="py-1">
      {tabButtons.map((tabButton, index) => {
        return (
          <IonTabButton key={index} tab={tabButton.tabName} href={tabButton.tabName}>
            <IonLabel>{tabButton.name}</IonLabel>
            <IonIcon ios={tabButton.iosIcon} md={tabButton.mdIcon}></IonIcon>
          </IonTabButton>
        );
      })}
    </IonTabBar>
  );
};
export default Navbar;
