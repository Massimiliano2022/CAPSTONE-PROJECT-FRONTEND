# DigitFin Exchange - Front-End
Applicazione di scambio di criptovalute che consente agli utenti di acquistare, vendere e monitorare il valore delle criptovalute. L'applicazione offre una varietà di funzionalità avanzate e strumenti per consentire agli utenti di gestire le proprie operazioni in modo efficace.

![Immagine 2023-07-24 162638](https://github.com/Massimiliano2022/CAPSTONE-PROJECT-FRONTEND/assets/120369719/5d2eed3f-4ab5-46d1-9d23-153e93cfcdd9)

# Descrizione
Questo è il repository Front-End dell'applicazione DigitFin Exchange. Fornisce un'interfaccia semplice e intuitiva permettendo agli utenti di monitorare i prezzi delle diverse criptovalute ed effettuare operazioni di acquisto e vendita in modo agevole.

# Configurazione 

Segui le indicazioni riportate nel repository dedicato al Back-End : 

[DigitFin Exchange Backend Repository](https://github.com/Massimiliano2022/CAPSTONE-PROJECT-BACKEND)

Clona questa repository :

>git clone https://github.com/Massimiliano2022/CAPSTONE-PROJECT-FRONTEND

Prima di eseguire il progetto, assicurati di installare tutte le dipendenze necessarie attraverso il comando :

> npm i

Ora puoi eseguire il progetto :

>npm start

# Tecnologie utilizzate

Front-end:
- React : libreria per lo sviluppo front-end più utilizzata. Permette di creare app veloci, scalabili e mantenibili nel tempo;
- React-Bootstrap : libreria react costruita sulla base del framework Css Bootstrap;
- React-Router-Dom : libreria per SPA (Single Page Application), simula il cambiamento di pagina e gestisce la navigazione nella nostra applicazione react,
  permette di renderizzare specifici componenti solo quando si è su un path (o URL) specifico;
- React-Redux : libreria react che consente l'utilizzo di Redux per la gestione dello stato, fornisce l'accesso ad uno stato condiviso tra tutti i componenti dell'applicazione;
- Redux-Persist : libreria che si occupa della persistenza dello stato dell'applicazione,ci consente di salvare lo stato dell'applicazione nella memoria locale del browser;
- React-chartjs-2 : libreria per la creazione di grafici interattivi e dinamici. 

# Funzionalità
L'applicazione offre diverse funzionalità per gli utenti:

- Visualizzazione dei prezzi delle criptovalute:
L'applicazione utilizza le API di terze parti (CoinMarketCap) per ottenere i prezzi aggiornati delle criptovalute. Attraverso la libreria react-chartjs-2 mostra il grafico lineare nel timeframe mensile, consentendo agli utenti di monitorare l'andamento dei prezzi. Nella pagina dei mercati (/mercati), si possono effettuare ricerche per nome o simbolo della criptovaluta per trovare rapidamente le informazioni di cui si ha bisogno. Questa funzionalità è disponibile sia per gli utenti registrati che per quelli non registrati.

- Registrazione degli utenti:
Gli utenti possono registrarsi e accedere alle funzionalità complete dell'exchange. Durante il processo di registrazione, vengono richieste informazioni come nome,cognome, indirizzo email e password. La registrazione consente di effettuare delle operazioni. Spring Security Web e JSON Web Token (JWT) vengono utilizzati per garantire la sicurezza delle informazioni degli utenti durante il processo di registrazione e accesso.

- Acquisto e vendita di criptovalute:
Una volta registrati e autenticati, gli utenti hanno la possibilità di effettuare transazioni di acquisto o vendita di criptovalute. L'applicazione consente loro di selezionare la criptovaluta desiderata, specificare la quantità e scegliere l'azione da compiere (acquisto o vendita).

- Visualizzazione del wallet:
L'applicazione offre agli utenti la possibilità di visualizzare il saldo totale delle loro posizioni in valuta fiat e il dettaglio del portafoglio crypto. Nel wallet, gli utenti possono vedere tutte le criptovalute che possiedono, insieme alla quantità di ciascuna. Per facilitare la comprensione, l'applicazione mostra anche il controvalore in valuta fiat per ciascuna criptovaluta posseduta. Inoltre, attraverso la libreria react-chartjs-2, viene mostrato un grafico in cui è possibile monitorare le percentuali di ciascun asset detenuto nel portafoglio dell'utente.

- Visualizzazione lista operazioni:
Gli utenti possono accedere a un elenco dettagliato delle operazioni svolte (acquisti e vendite). Questa sezione fornisce agli utenti una panoramica completa delle loro attività e consente loro di generare report utili ai fini fiscali o per tenere traccia delle proprie posizioni nel tempo. E' possibile filtrare le operazioni per:
  - range di date;
  - tipo operazione (BUY/SELL);
  - crypto.
