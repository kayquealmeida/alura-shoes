import logo from '../../assets/logo.png';
import aleBrown from '../../assets/snkrs/aleBrown.jpg';
import runJewels from '../../assets/snkrs/runJewels.jpg';
import darkObsidean from '../../assets/snkrs/darkObsidean.jpg';
import orangeJewel from '../../assets/snkrs/orangeJewel.jpg';

const snkrs = {
  topo: {
    titulo: "alura SHOES"
  },
  detalhes: {
    logoShoes: logo,
    nomeShoes: "NIKE SNKRS",
    subTitulo: "A TUA PLATAFORMA DE SAPATILHAS",
    descricao: "Explora, compra e obtém acesso às melhoras sapatilhas Nike e da marca Jordan. A SNKRS garante acesso privilegiado a lançamentos exclusivos, aos mais recentes lançamentos e aos melhores eventos que a Nike e a marca Jordan têm para oferecer."
  },
  itens: {
    titulo: "Novidades",
    lista: [
      {
        nome: `Ale Brown and Team${'\n'}Royal`,
        imagem: aleBrown
      },
      {
        nome: "Run The Jewels",
        imagem: runJewels
      },
      {
        nome: "Dark Obsidian",
        imagem: darkObsidean
      },
      {
        nome: "Orange Jewel",
        imagem: orangeJewel
      }
    ]
  }
}

export default snkrs;