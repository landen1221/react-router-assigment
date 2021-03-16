import { useParams } from "react-router-dom";
import './DogDetails.css'

const DogDetails = () => {
  const { name } = useParams();

  const dogs = [
    {
      dogName: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      dogName: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      dogName: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      dogName: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ];

  for (let dog of dogs) {
    if (dog.src === name.toLowerCase()) {

      return (
        <div>
          <h1>{dog.dogName}</h1>
          <img src={`/dogPics/${dog.src}.jpg`} alt={`Image of ${dog.src}`} />
          <p>Age: {dog.age}</p>
          <ul>
              {dog.facts.map(fact => <li>{fact}</li>)}
          </ul>
        </div>
      );
    }
  }
  return null;
};

export default DogDetails;
