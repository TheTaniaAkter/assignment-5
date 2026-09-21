import React, { use } from 'react'
import AvailableItems from './AvailableItems';
import Container from './Container';

const Item = ({itemPromise}) => {
    console.log(itemPromise);
const items = use(itemPromise)
console.log(items);


  return (
   <Container>
     <div >
      <div>
       {/* <h3> Available Players</h3> */}
      
      </div>
      <AvailableItems item={items}/>
  
    </div>
   </Container>
  )
}

export default Item
