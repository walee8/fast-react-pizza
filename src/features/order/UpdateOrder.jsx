import { useFetcher } from 'react-router-dom';
import Button from '../../UI/Button';
import {updateOrder} from '../../services/apiRestaurant';

export default function UpdateOrder() {
    const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH' className='text-right'>
        <Button type="primary">Make priority</Button>
    </fetcher.Form>
  )
}

export async function action({request, params}) {
    // console.log("update");
    const data = {priority: true};
    await updateOrder(params.orderId, data);
    return null;
}