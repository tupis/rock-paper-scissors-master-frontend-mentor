import ButtonGame from '../components/ButtonGame';
import Rock from '../assets/icon-rock.svg'
import Paper from '../assets/icon-paper.svg'
import Scissors from '../assets/icon-scissors.svg'

const TriangleBG = ({play}) => {

    const buttons = {
        paper: {
            name: 'Paper',
            icon: Paper,
            color: 'hsl(230, 89%, 62%)'
        
        },
        rock: {
            name: 'Rock',
            icon: Rock,
            color: 'hsl(349, 71%, 52%)'
        },
        scissors: {
            name: 'Scissors',
            icon: Scissors,
            color: 'hsl(39, 89%, 49%)'
        }
    }

    return (
        <>
            <div className="triangle-bg">
                {
                    Object.values(buttons).map(button => 
                        <ButtonGame 
                        icon={button.icon} 
                        key={button.name} 
                        borderColor={button.color}
                        play={play}
                        name={button.name}
                    />)
                }
            </div>
        </>
    );
}
 
export default TriangleBG;