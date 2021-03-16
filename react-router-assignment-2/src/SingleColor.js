import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleColor = ({setTemp}) => {
  const { name } = useParams();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = name;
  }, []);

  return (
    <div>
      <h1>This is what {name} looks like</h1>
      <Link to="/colors">
        <button onClick={() => setTemp(1)}>Home</button>
      </Link>
    </div>
  );
};

export default SingleColor;
