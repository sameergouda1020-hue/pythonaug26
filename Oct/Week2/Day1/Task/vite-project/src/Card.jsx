
function Card({ product }) {
return (
<div>
<img src={product.img} alt={product.title} width="200" />
<h2>{product.title}</h2>
<p>{product.desc}</p>
</div>
)
}
export default Card