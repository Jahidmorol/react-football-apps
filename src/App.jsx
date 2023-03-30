import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Summary from "./component/Summary/Summary";
import Team from "./component/Team/Team";
import { addToDb, getSummaryCart } from "./utilities/fakeDb";

function App() {
  const [teams, setTeams] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  const handleAddTeam = (team) => {
    const newCart = [...cart, team];
    // console.log([...cart, team]);
    setCart(newCart);
    addToDb(team.idTeam);
    // console.log('clicked',team);
  };
  useEffect(() => {
    const storedCart = getSummaryCart();
    console.log(storedCart);
    console.log(teams);
    const savedCart = [];
    for (const id in storedCart) {
      const addedTeam = teams.find((team) => team.idTeam == id);
      if (addedTeam) {
        addedTeam.quantity = storedCart[id]
        savedCart.push(addedTeam);
      }

    }
    console.log(savedCart);
    setCart(savedCart);
  }, [teams]);
  // console.log(cart);
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main className="football-container">
        <div className="football-info">
          {teams.map((team) => (
            <Team
              key={team.idTeam}
              team={team}
              handleAddTeam={handleAddTeam}
            ></Team>
          ))}
        </div>
        <div className="football-summery">
          <Summary cart={cart}></Summary>
        </div>
      </main>
    </div>
  );
}

export default App;
