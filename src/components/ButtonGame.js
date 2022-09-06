const ButtonGame = ({icon, borderColor, play, name }) => {

    const divStyle = {
        borderColor,
    }

    return (
        <div 
            className="buttonGame" 
            style={divStyle}
            onClick={() => play(name)}
        >
            <img src={icon} alt={icon}/>
        </div>
    );
}
 
export default ButtonGame;