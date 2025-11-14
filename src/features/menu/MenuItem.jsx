// import { formatCurrency } from "../../utils/helpers";
// import Button from '../../UI/Button'

// function MenuItem({ pizza }) {
//   const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

//   return (
//     <li className="flex gap-4 py-2">
//       <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}/>
//       <div className="flex flex-col grow pt-0.5">
//         <p className="font-medium">{name}</p>
//         <p className="text-sm italic capitalize">{ingredients.join(', ')}</p>
//         <div className="mt-auto flex items-center justify-between">
//           {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}

//           <Button type="small">Add to Cart</Button>
//         </div>
//       </div>
//     </li>
//   );
// }

// export default MenuItem;

import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {addItem, getCurrentQuantityById} from '../cart/cartSlice';


import pizza1 from "../../Asset/pizza1.JPG";
import pizza2 from "../../Asset/pizza2.JPG";
import pizza3 from "../../Asset/pizza3.JPG";
import pizza4 from "../../Asset/pizza4.JPG";
import pizza5 from "../../Asset/pizza5.JPG";
import pizza6 from "../../Asset/pizza6.JPG";
import pizza7 from "../../Asset/pizza7.JPG";
import pizza8 from "../../Asset/pizza8.JPG";
import pizza9 from "../../Asset/pizza9.JPG";
import pizza10 from "../../Asset/pizza10.JPG";
import pizza11 from "../../Asset/pizza11.JPG";
import pizza12 from "../../Asset/pizza12.JPG";
import pizza13 from "../../Asset/pizza13.JPG";
import pizza14 from "../../Asset/pizza14.JPG";
import pizza15 from "../../Asset/pizza15.JPG";
import pizza16 from "../../Asset/pizza16.JPG";
import pizza17 from "../../Asset/pizza17.JPG";
import pizza18 from "../../Asset/pizza18.JPG";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

const images = {
  1: pizza1,
  2: pizza2,
  3: pizza3,
  4: pizza4,
  5: pizza5,
  6: pizza6,
  7: pizza7,
  8: pizza8,
  9: pizza9,
  10: pizza10,
  11: pizza11,
  12: pizza12,
  13: pizza13,
  14: pizza14,
  15: pizza15,
  16: pizza16,
  17: pizza17,
  18: pizza18,
};


function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isinCart = currentQuantity > 0; 
  

  

  // fallback image in case the API link is broken
  const fixedImageUrl = imageUrl?.startsWith("http")
    ? imageUrl
    : images[id]; // use your own local images if you have them

    function handleAddToCart(){
      console.log(id);
      const newItem = {
        pizzaId: id,
        name,
        quantity:1,
        unitPrice,
        totalPrice: unitPrice * 1,
      };
      dispatch(addItem(newItem));

    }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={fixedImageUrl}
        onError={(e) => (e.target.src = images[id])} // fallback if URL is invalid
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />

      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize">{ingredients.join(", ")}</p>

        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isinCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id}/>
            </div>
            )}

          {!soldOut && !isinCart && (<Button type="small" onClick = {handleAddToCart}>Add to Cart</Button>)}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
