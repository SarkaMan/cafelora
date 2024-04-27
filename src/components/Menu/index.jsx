import { Drink } from '../Drink';

export const Menu = ({ name }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <div>
            <Drink name={name} />
          </div>
          <div>
            <Drink />
          </div>
          <div>
            <Drink />
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </div>
    </section>
  );
};
