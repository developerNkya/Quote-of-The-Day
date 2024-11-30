import React, { useState,useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import HomeCard from '../components/HomeCard/HomeCard';
import { log } from 'console';
import { IonIcon } from '@ionic/react';


interface QuoteType {
  quote: string;
  author: string;
  category: string;
}


const Home: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType[]>([]);

  const getQuote = () =>{
    const sampleQuote: QuoteType[] = [
      {
        quote: "I am deeply convinced that happiness does not exist in this world.",
        author: "Taylor Caldwell",
        category: "happiness",
      },
    ];

    setQuote(sampleQuote);
    // console.log('passed here');
    
    // const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    // axios.get(url, { headers: { 'X-Api-Key': 'o3BBUJdX+8bA+vSOE86WfQ==BeL7id0LwoPqDbYe' } })
    //  .then(response => {
    //      // If request is good...
    //      setQuote(response.data);
    //      console.log('the quote');
    //      console.log(Quote);
         
         
    //   })
    //  .catch((error) => {
    //      console.log('error ' + error);
    //   });



  }

useEffect(() => {
  getQuote();
}, []);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quota        
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {quote.length > 0 && (
        <HomeCard quote={quote[0].quote} author={quote[0].author} />
      )}
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
