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

// Inserisco il middleware per i file statici
app.use(express.static(`public`));


app.get(`/bacheca`, (req, res) => {
  const posts = [
    {
      title: "Uomo sulla Luna",
      content: "Lorem ipsum dolor",
      img: "imgs/Moon.jpg",
      tags: ["space","nasa","moon"]
    },
    {
      title: "Uomo su Marte",
      content: "Lorem ipsum dolor",
      img: "imgs/Mars.png",
      tags: ["space","nasa","mars"]
    },
    {
      title: "Uomo su Venere",
      content: "Lorem ipsum dolor",
      img: "imgs/Venus.png",
      tags: ["space","nasa","Venus"]
    },
    {
      title: "Uomo su mercurio",
      content: "Lorem ipsum dolor",
      img: "imgs/Mercury.png",
      tags: ["space","nasa","mercury"]
    },
    {
      title: "Uomo su Giove",
      content: "Lorem ipsum dolor",
      img: "imgs/Jupiter.png",
      tags: ["space","nasa","Jupiter"]
    },
  ]
  
  res.json(posts)
})

app.listen(port, () => {
  console.log(`Server del mio blog`)
})