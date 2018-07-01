import '../style/app.scss';
import Cards from './components/Cards/Cards';

document.addEventListener('DOMContentLoaded', function() {
  const cards = new Cards(document.getElementById('app'));

  cards.init();
});
