import {GiShoppingCart} from "react-icons/gi"

function CartWidget() {
  return(
    <div className="icon-shopping-cart">
      <GiShoppingCart />
      <span className="count-shopping">2</span>
    </div>
  );
}

export default CartWidget;