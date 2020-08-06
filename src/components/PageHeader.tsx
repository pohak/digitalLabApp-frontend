import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

interface Props {
  color: string;
  title: string;
  defaultHref?: string;
}
interface State {}

class PageHeader extends React.Component<Props, State> {
  render() {
    const { color, title, defaultHref } = this.props;
    return (
      <IonHeader>
        <IonToolbar color={color}>
          <IonButtons slot="start">
            <IonBackButton color="light" text="" defaultHref={defaultHref || '/'} />
          </IonButtons>
          <IonTitle color="light">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default PageHeader;
