// import React from 'react'

// function Card(props) {
//     const{name,price,image,rating}=props
//   return (
//     <>
//     <div className='cards'>
//         <li className='mr'>
//             <h2>
//                 <span className="tooltiptext">{`${name.length>5?name.slice(0,10)+'...':name}`}</span></h2>
//             <p>Rating: {rating}</p>
//             <img src={image} alt={name} style={{ maxWidth: '200px' }} />
//             <p>Price: ${price}</p>
//           </li>
      
//     </div>
//     </>
//   )
// }

// export default Card

import React from "react";
import "./Card.css"; // Import the CSS file for styling

function Card(props) {
  const { name, price, image, rating } = props;
  return (
    <div className="cards">
      <li className="mr">
        <p>
          <span className="tooltiptext">
          {name}
          </span>
            {`${
            name.length > 5 ? name.slice(0, 8) + "..." : name
          }`}
        </p>
        <p>Rating: {rating}</p>
        <img src={image} alt={name} style={{ maxWidth: "200px" }} />
        <p>Price: ${price}</p>
      </li>
    </div>
  );
}

export default Card;

