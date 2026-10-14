import Card from './Card'
import Home from './Home'
import About from './About'
function App() {
let products = [
{
img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
title: 'Dumbbells',
desc: 'Build strength with quality dumbbells'
},
{
img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500',
title: 'Weight Plates',
desc: 'Perfect weights for strength training'
},
{
img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
title: 'Gym Gloves',
desc: 'Comfortable grip for your workouts'
},
{
img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
title: 'Gym Equipment',
desc: 'Essential equipment for your fitness journey'
}
]
return (
<div>
<Home />
<About />
{products.map((product, index) => (
<Card key={index} product={product} />
))}
</div>
)
}
export default App