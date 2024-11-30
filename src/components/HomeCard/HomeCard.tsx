import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react';

interface HomeCardProps {
  quote: string;
  author: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ quote, author }) => {
  return (
    <IonCard>
      <img
        alt="Silhouette of mountains"
        src="assets/images/quote_wallpaper.jpg"
      />
      <IonCardHeader>
        <IonCardTitle>Quote of the Day</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        &quot;{quote}&quot;
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IonText>— {author}</IonText>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default HomeCard;
