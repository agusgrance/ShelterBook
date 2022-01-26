import react, { useEffect, useState } from "react";
import user_data from "./user_data.json"; //importo un JSON data dummy
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(0);
  const [search,setSearch] = useState('');
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    //alimentarse de api
    const getData = await fetch("https://api.github.com/users/agusgrance");
    const dataToJson = await getData.json();
    setUser(dataToJson);
  }
  function handleSearch(data){
    setSearch(data);
    
  }
  return (
    <div>
      <Nav user={user.avatar_url} callback={handleSearch} />
      <Slider img1="./img1.jpg" img2="./img2.jpg" img3="./img3.jpg" />
      <h5 className="welcome">Bienvenido {user.name}</h5>
      <Sidebar user={user} />
      <Categories />

      {user_data.filter((val)=>{
        if(search == ""){
          return val;
        }
        else if(val.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <Card user={val.first_name} title="Titulo..." text={val.bio}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
