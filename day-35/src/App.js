import './App.css';

function Profile({ img, name, age, gender, profession }) {
  // const {img, name, age, gender, profession} = props
  return (
    <div className="profile">
      <div>
        <img src={img} alt="" />
        <p className="name">Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Profession: {profession}</p>
      </div>
    </div>
  )
}
function App() {
  const user = {
    img: "avatars/justen.jpg",
    name: "Jon Snow",
    age: 51,
    gender: "Male",
    profession: 'Unemployed',
  }
  return (
    <div className="App">
      <Profile
        {...user}
      // img="avatars/justen.jpg"
      // name="Jon Snow"
      // age={51}
      // gender="Male"
      // profession="Unemployed" 
      />
      <Profile
        img="avatars/molly.png"
        name="Sarah Lee"
        age={27}
        gender="Female"
        profession="Product Manager"
      />
      <Profile
        img="avatars/veronika.jpg"
        name="Veronika"
        age={35}
        gender="Female"
        profession="Nail Designer" />
    </div>
  );
}

export default App;
