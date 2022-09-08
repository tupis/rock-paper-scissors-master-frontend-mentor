import ButtonGame from '../components/ButtonGame';
import buttons from '../buttons'

const PentagonBG = ({selectPlays}) => {

    return (
        <div className="pentagon-bg">
            {
                Object.values(buttons).map(button => 
                    <ButtonGame
                        icon={button.icon} 
                        key={button.name} 
                        borderColor={button.color}
                        selectPlays={() => selectPlays(button.name)}
                    />
                )
            }
        </div>
    );
}
 
export default PentagonBG;