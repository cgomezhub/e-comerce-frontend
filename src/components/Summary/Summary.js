import "./Summary.css";

export default function Summary({
  subtotal,
  taxes,
  deliveryCost,
  total,
  deliveryOption,
}) {
  return (
    <ul className="summary">
      <li className="summary__subtotal">
        <span className="summary__subtotal-item-title">Subtotal:</span>
        <span className="summary__subtotal-item-qty">${subtotal}</span>
      </li>
      <li className="summary__subtotal">
        <span className="summary__subtotal-item-title">
          Envío {deliveryOption}:
        </span>
        <span className="summary__subtotal-item-qty">${deliveryCost}</span>
      </li>
      <li className="summary__subtotal">
        <span className="summary__subtotal-item-title">Taxes:</span>
        <span className="summary__subtotal-item-qty">${taxes}</span>
      </li>
      <li className="summary__total">
        <span className="summary__total-item-title">Total:</span>
        <span className="summary__total-item-qty">${total}</span>
      </li>
    </ul>
  );
}
