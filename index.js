import './style.css';
import data from './data.json';

const app = document.getElementById('app');
const cardList = CardList({ cards: data });
app.appendChild(cardList);

/**
 * @param {object} props
 * @param {{ cards: obj[] }} props.cards
 */
function CardList(props) {
  const { cards } = props;
  const list = document.createElement('ul');
  const articles = cards.map((cardInfo) => Card({ cardInfo }));
  list.append(...articles);
  return list;
}

/**
 * @param {object} props
 * @param {{ code: string; name: string; image: string; }} props.cardInfo
 */
function Card(props) {
  const { cardInfo } = props;

  const article = document.createElement('article');
  article.id = cardInfo.code;
  article.className = 'card';

  const heading = document.createElement('h2');
  heading.textContent = cardInfo.name;

  const image = document.createElement('img');
  image.src = cardInfo.image;
  image.alt = cardInfo.name;

  article.appendChild(heading);
  article.appendChild(image);

  return article;
}
