import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Slider from './components/Slider';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Nav/> 
      <Slider img1="./img1.jpg" img2="./img2.jpg" img3="./img3.jpg" />
      <Categories />
      <Card user="Agustin Grance" title="Titulo..." text="Texto enviado desde una prop"/>
      <Card user="user 1" title="Titulo..." text="Texto enviado desde una prop"/>
      <Card user="user 2" title="Titulo..." text="Texto enviado desde una prop"/>
    </div>
  );
}

export default App;
