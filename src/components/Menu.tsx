import { IonContent, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Om Växjö Kommun',
    url: '/page/about',
  },
  {
    title: 'Om Appen',
    url: '/about',
  },
  {
    title: 'Inställningar',
    url: '/settings',
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <img
            className="mt-4"
            style={{ width: '70%' }}
            src="/assets/images/vaxjo-kommun-light.png"
            alt="Växjö kommun logo"
          />
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="forward"
                  lines="none"
                  detail={false}>
                  <IonLabel className="my-6" color="light">
                    {appPage.title}
                  </IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
