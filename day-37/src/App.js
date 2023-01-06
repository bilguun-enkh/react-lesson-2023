import './App.css';
import AliceCarousel from 'react-alice-carousel'
import carouselData from './data/carousel';

function App() {

  const images = carouselData.map(data => {
    return (
      <img src={data.name} className={data.style} />
    )
  })
  return (
    <div className="App">
      <h1> React Day - 37</h1>
      <AliceCarousel autoPlay autoPlayInterval={1000}>
        {images}
        {/* <img src='justen.jpg' className="sliderimg"></img>
        <img src='avatars/elyse.png' className="sliderimg"></img> */}
      </AliceCarousel>
    </div>
  );
}

export default App;
