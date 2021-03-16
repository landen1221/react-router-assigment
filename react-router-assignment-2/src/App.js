import "./App.css";
import Colors from "./Colors";
import { Route, Switch, Redirect } from "react-router-dom";
import NewColorForm from "./NewColorForm";
import SingleColor from './SingleColor'
import { useEffect, useState } from "react";

function App() {
  const [colorList, setColorList] = useState(['gray', 'white'])
  const [temp, setTemp] = useState(0)

  const updateColors = (color) => {
    setColorList(colorList.push(color))
    console.log(colorList)
  }

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "white";
  }, [temp]);

  useEffect(() => {
    localStorage.setItem("colorList", JSON.stringify(colorList))
  }, [colorList]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colorList}/>
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm updateColors={updateColors} />
        </Route>
        <Route exact path="/color/:name">
          <SingleColor setTemp={setTemp}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
