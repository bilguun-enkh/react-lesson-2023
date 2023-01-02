import './App.css';
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Popular Product
        </h1>
      </header>
      <Body />
    </div>
  )
}

function Body() {
  return (
    <div className="Body">
      <div className="BodyDiv">
        <div >
          <img src='products/image-yellow.png' className="pic1"></img>
        </div>
        <div className="BodyRight1">
          <h3>∆ 55</h3>
          <div className='BodyRightMid'>
            <p className='blue'>Haught or Naught</p>
            <p>High-minded or absent-minded? You decide.</p>
          </div>
          <p>Submitted by : <img src={logo} className="icon"></img></p>
        </div>
      </div>
      <div className="BodyDiv">
        <div >
          <img src='products/image-aqua.png' className="pic1"></img>
        </div>
        <div className="BodyRight1">
          <h3>∆ 44</h3>
          <div className='BodyRightMid'>
            <p className='blue'>Yellow Pail</p>
            <p>On-demand sand castle construction expertise.</p>
          </div>
          <p>Submitted by : <img src={logo} className="icon"></img></p>
        </div>
      </div>
      <div className="BodyDiv">
        <div >
          <img src='products/image-steel.png' className="pic1"></img>
        </div>
        <div className="BodyRight1">
          <h3>∆ 42</h3>
          <div className='BodyRightMid'>
            <p className='blue'>Tinfoild: Tailored tinfoil hats</p>
            <p>We already have your measurements and shipping address.</p>
          </div>
          <p>Submitted by : <img src={logo} className="icon"></img></p>
        </div>
      </div>
      <div className="BodyDiv">
        <div >
          <img src='products/image-rose.png' className="pic1"></img>
        </div>
        <div className="BodyRight1">
          <h3>∆ 23</h3>
          <div className='BodyRightMid'>
            <p className='blue'>Supermajority: The Fantasy Congress League</p>
            <p> Earn points when your favorite politicians pass legislations.</p>
          </div>
          <p>Submitted by : <img src={logo} className="icon"></img></p>
        </div>
      </div>
    </div>
  )
}

export default App;