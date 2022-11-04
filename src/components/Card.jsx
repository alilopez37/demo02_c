import { useContext } from "react";
import StateContext from "../context/StateContext";

function Card({name, image}) {
    const value = useContext(StateContext)

    console.log(JSON.stringify(value))
    return (
        <div className="container_character-card">
            <img src={image} alt={name} />
            <span>{name}</span>
        </div>
      );
}

export default Card;