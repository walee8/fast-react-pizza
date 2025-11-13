import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  
  return (
    <div className="bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base flex items-center justify-between">
      <p className="font-semibold space-x-4 text-stone-300 uppercase sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {/* <a href="#">Open cart &rarr;</a> */}
      <Link to="/cart">Open Cart</Link>
    </div>
  );
}

export default CartOverview;
