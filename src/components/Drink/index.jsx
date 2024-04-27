import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ id, ordered, layers, name, image }) => {
  console.log(layers);

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer key={layer.label} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="1" />
        <button
          className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
