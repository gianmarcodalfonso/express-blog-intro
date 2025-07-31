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

const posts = [
  {
    title: "Uomo sulla Luna",
    content: "Lorem ipsum dolor",
    img: "public/imgs/Moon.png",
    tags: ["space","nasa","moon"]
  },
  {
    title: "Uomo su Marte",
    content: "Lorem ipsum dolor",
    img: "./public/imgs/Mars.png",
    tags: ["space","nasa","mars"]
  },
  {
    title: "Uomo su Venere",
    content: "Lorem ipsum dolor",
    img: "./public/imgs/Venus.png",
    tags: ["space","nasa","Venus"]
  },
  {
    title: "Uomo su mercurio",
    content: "Lorem ipsum dolor",
    img: "./public/imgs/Mercury.png",
    tags: ["space","nasa","mercury"]
  },
  {
    title: "Uomo su Giove",
    content: "Lorem ipsum dolor",
    img: "./public/imgs/Jupiter.png",
    tags: ["space","nasa","Jupiter"]
  },
]

app.get(`/bacheca`, (req, res) => {
  res.json(posts)
})

app.listen(port, () => {
  console.log(`Server del mio blog`)
})