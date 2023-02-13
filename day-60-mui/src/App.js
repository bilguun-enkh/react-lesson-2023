import './App.css';
import Body from './components/Body';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import GridMUI from './components/GridMUI';
import Header from './components/Header';
import { SwiperUI } from './components/Swiper';

function App() {
  return (
    <div className="App">
      <h1>
        Day - 61 - Custom Hooks
      </h1>
      <ChangeTheme />
      <Header />
      <Body />
      <Footer />
      {/* <GridMUI />
      <SwiperUI /> */}
    </div>
  );
}

export default App;
