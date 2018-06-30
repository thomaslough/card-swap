import './Card.scss';
import { TweenMax } from "gsap/TweenMax";

export default class Card {
	constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  init(id) {
  	const card = this.card = document.createElement("div");
		card.className = "card-wrapper";
		card.id;

		const cardBg = document.createElement("div");
		cardBg.className = 'card-bg';
		cardBg.style.backgroundColor = `#${Math.random().toString(16).substr(-6)}`;
		card.appendChild(cardBg);

		const cardContent = document.createElement("div");
		cardContent.className = 'card-content';
		const contentText = document.createTextNode(id);
		cardContent.appendChild(contentText);
		card.appendChild(cardContent);
	  
	  card.addEventListener('click', () => {
	  	card.dispatchEvent(new CustomEvent('doit', { bubbles: true, detail: { booya: true, card: this } }))
	  });

	  return card;
  }

  move(x, y, deg) {
  	TweenMax.to(this.card, 0.7, {left: x, top: y, rotation: deg, ease: Power2.easeOut });
  }

  rotate(deg) {
  	TweenMax.to(this.card, 0.7, {rotation: deg, ease: Power2.easeOut });
  }
}