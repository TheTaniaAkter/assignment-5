import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Data from './Data'
import girl from '/src/assets/3.png'
import pic from '/src/assets/4.png'
const Technology = () => {
  return (
  <>
 <div className="py-6">
    <Container>
         <h3>Explore the Technologies</h3>
     <p>Pick one technology per category to build your ideal stack.</p>
    
     {/* <Flex className={'-mx-3'}>
        <Data dataImg={girl}/>
          <Data dataImg={pic}/>
           <Data dataImg={girl}/>
          <Data dataImg={pic}/>
      
         
     </Flex> */}
    </Container>
 </div>
  </>
  )
}

export default Technology