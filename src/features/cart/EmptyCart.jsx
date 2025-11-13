
import LinkButton from '../../UI/LinkButton';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <p
      className='mt-7 font-semibold flex items-center justify-center'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
