// import React from 'react';

// const ProductList = ({ products }) => {
//   if (!products.length) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div key={product.id} className="product-item">
//           <img src={product.imageUrl} alt={product.name} className="product-image" />
//           <h3 className="product-name">{product.name}</h3>
//           <p className="product-description">{product.description}</p>
//           <p className="product-price">${product.price.toFixed(2)}</p>
//           <a href={`/product/${product.id}`} className="product-link">View Details</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
