function Product(props) {
  return (
    <div>
      <h2>{props.product_title}</h2>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default Product;