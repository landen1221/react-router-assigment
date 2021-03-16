import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ updateColors }) => {
  const [newColor, setNewColor] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setNewColor(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateColors(newColor);
    history.push("./");
  }

  return (
    <div>
      <h3>New Color Form...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="newColor"
          name="newColor"
          value={newColor}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewColorForm;
