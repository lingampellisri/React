// function Child(props){
//   return(
//     <div>
//       <h3>Name:{props.name}</h3>
//       <p> Price:{props.price}</p>
//        <button>Add to Cart</button>
//     </div>
//   );
// }
// export default Child;
import React from 'react';
class Child extends React.Component{
  render(){
    return(
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Price: ₹{this.props.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}
export default Child;
