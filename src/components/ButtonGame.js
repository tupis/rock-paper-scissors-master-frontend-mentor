const ButtonGame = ({icon, borderColor, selectPlays, name }) => {

    const divStyle = {
        borderColor,
    }

    return (
        <div 
            className="button-game" 
            style={divStyle}
            onClick={() => selectPlays(name)}
        >
            <img src={icon} alt={icon}/>
        </div>
    );
}
 
export default ButtonGame;