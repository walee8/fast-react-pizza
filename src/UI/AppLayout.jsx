import React from 'react'
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loadingscreen from './Loadingscreen';

export default function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation)
  const isLoading = navigation.state === "loading";
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loadingscreen/>}
      {/* {true && <Loadingscreen/>} */}
      <Header/>
      <div className='overflow-scroll'>
        <main className='mx-auto max-w-3xl'>
          <Outlet/>
        </main>
      </div>

      <CartOverview/>
    </div>
  )
}
