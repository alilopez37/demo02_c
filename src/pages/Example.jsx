import {useNavigate} from 'react-router-dom';

function Example() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/cards");
    }
    return (
        <>
        <button onClick={handleClick}>Ir a Mortianos</button>
        </>
      );
}

export default Example;