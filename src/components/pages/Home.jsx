import React, { Suspense } from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Technology from '../layouts/Technology'
import Item from '../Item'
import Bottom from '../layouts/Bottom'


const itemFetch = async()=>{
  const res = await fetch('/data.json')
  const data =await res.json()
  return data
}


const Home = () => {
 const itemPromise=itemFetch()
  
  return (
   <>
   <Header/>
   <Banner/>
   <Technology/>
   <Suspense fallback={<h2>loading......</h2>}>
    <Item itemPromise={itemPromise} />
   </Suspense>
   <Bottom/>
   </>
  )
}

export default Home