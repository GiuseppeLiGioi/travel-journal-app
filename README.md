# Travel Journal App

## Scopo del progetto
Travel Journal App è un’applicazione web pensata per registrare e visualizzare le proprie esperienze di viaggio. Permette di consultare le tappe, filtrare e ordinare i post, espandere i dettagli di ogni esperienza e visualizzare tutte le destinazioni su una mappa interattiva. 

## Funzionalità principali
- Visualizzazione dei post con immagine, titolo, descrizione e dettagli.
- Espansione singola dei post tramite bottone “Estendi” e funzione “Estendi tutti”.
- Filtri per stato d’animo e tags dei post.
- Ordinamento dei post in base a spesa o effort economico.
- Barra di ricerca testuale per trovare velocemente i post.
- Mappa interattiva con marker per ogni destinazione, aggiornati dinamicamente in base ai filtri applicati.
- Persistenza dei post nel browser tramite LocalStorage.

## Tecnologie scelte
- **React**: gestione dei componenti e dello stato dell’applicazione.
- **React Hooks** (`useState`, `useEffect`): gestione dinamica dello stato e degli effetti collaterali.
- **React-Leaflet + Leaflet**: visualizzazione della mappa interattiva con marker personalizzati.
- **CSS moderno**: utilizzo di flexbox e styling responsivo per le card e l’header.
- **LocalStorage**: mantenimento della persistenza dei dati e delle preferenze dell’utente tra sessioni.

## Struttura del progetto
- `HomePage.jsx`: gestisce ricerca, filtri, ordinamento, espansione dei post e visualizza la mappa.
- `PostLists.jsx` & `PostCard.jsx`: componenti per mostrare i post e i dettagli.
- `Map.jsx`: componente per la mappa interattiva con tutti i marker.
- `useStorage.js`: hook personalizzato per salvare e recuperare dati da LocalStorage.
- `posts.js`: dataset iniziale dei post di viaggio.

## Note
L’app è stata sviluppata in pochi giorni per tenermi allenato con il codice. Appreso l'utilizzo di una nuova libreria di React (React-Leaflet)
