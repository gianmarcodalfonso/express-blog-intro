// importo express
const express = require(`express`);

// variabile che contiene un'istanza di express
const app = express();

// definiamo la porta d'ascolto del server
const port = 3000;

// definiamo la rotta base dell'applicazione
app.get(`/`, (req, res) => {
  console.log(`Server del mio blog`)
  res.send(``)
})


app.listen(port, () => {
  console.log(`Server del mio blog`)
})