import '../assets/styles/Character.css'



function Character({name, image}) {

    return (
        <>
            <div className="container_character">
                <img src={image} />
                <span>{name}</span>
            </div>
        </>
      );
}


export default Character;