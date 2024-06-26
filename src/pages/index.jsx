import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks'); //stáhnu data
const json = await response.json();
const drinks = json.data;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//posluchač událostí na navigaci - rozbalování a zabalování navigace
const menuBtn = document.querySelector('.nav-btn');
const menu = document.querySelector('.rollout-nav');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav-closed');
});

//schování navigace po kliknutí na odkaz "domů"
menu.addEventListener('click', () => {
  menu.classList.add('nav-closed');
});

const formElm = document.querySelectorAll('form');
formElm.forEach(async (form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const foundDrink = drinks.find(
      (drink) => drink.id === Number(form.dataset.id),
    );
    const ordered = foundDrink.ordered;
    console.log(foundDrink);
    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !ordered },
      ]),
    });
    window.location.reload();
  });
});
