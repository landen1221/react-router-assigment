import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  const images = [
    { src: "./dogPics/duke.jpg", alt: "Picture of Duke", dogName: 'duke'},
    { src: "./dogPics/perry.jpg", alt: "Picture of Perry", dogName: 'perry' },
    { src: "dogPics/tubby.jpg", alt: "Picture of Tubby", dogName: 'Tubby' },
    { src: "/dogPics/whiskey.jpg", alt: "Picture of Whiskey", dogName: 'Whiskey' },
  ];

  return (
    <div className="App">
      <h1>Man's Best Friend</h1>
      <Switch>
        <Route exact path="/dogs">
          <DogList images={images}/>
        </Route>
        <Route path="/dogs/:name">
          <DogDetails images={images}/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}



export default App;
