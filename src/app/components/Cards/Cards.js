import './Cards.scss';
import Card from '../Card/Card';

export default class Cards {
  constructor(element, height, width) {
    this.element = element;
    this.height = height;
    this.width = width;
  }

  init() {
    const cards = this.element;
    const cardTotal = 6;

    for (let i = 0; i < cardTotal; i++) {
      const card = new Card(200, 200);
      const theCard = card.init(`card${i}`, 0);
      theCard.addEventListener(
        'doit',
        e => {
          e.detail.card.move(100, 100, 20);
        },
        false
      );
      cards.appendChild(theCard);

      card.rotate(i * 2);
    }
    return cards;
  }
}
