import { IonPage, IonContent, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <IonButton color="danger" onClick={() => setShowActionSheet(!showActionSheet)}>
          Click
        </IonButton>
        <div className="container">test {JSON.stringify(showActionSheet)}</div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
