import react,{useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Sidebar from './components/Sidebar';

function App() {
  const [user,setUser] = useState(0);
  useEffect(()=>{
    fetchData();
  });
  async function fetchData(){ //alimentarse de api
    const getData = await fetch('https://api.github.com/users/agusgrance'); 
    const dataToJson = await getData.json();
    setUser(dataToJson);
  }
  return (
    <div>
      <Nav user={user.avatar_url}/>
      <Slider img1="./img1.jpg" img2="./img2.jpg" img3="./img3.jpg" />
      <h5 className='welcome'>Bienvenido {user.name}</h5> 
      <Sidebar user={user}/>
      <Categories />
      <Card user="Agustin Grance" title="Titulo..." text="Texto enviado desde una prop"/>
      <Card user="user hakldhnaskhld1" title="Titulo..." text="Texto enviado desde una prop"/>
      <Card user="user 2" title="Titulo..." text="Texto enviado desde una prop"/>
    </div>
  );
}

export default App;
