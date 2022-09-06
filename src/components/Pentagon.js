import ButtonGame from '../components/ButtonGame';


import Rock from '../assets/icon-rock.svg'
import Paper from '../assets/icon-paper.svg'
import Scissors from '../assets/icon-scissors.svg'
import Lizard from '../assets/icon-lizard.svg'
import Spock from '../assets/icon-spock.svg'

const PentagonBG = ({play}) => {

    const buttons = {
        rock: {
            name: 'Rock',
            icon: Rock,
            color: 'hsl(349, 71%, 52%)'
        },
        paper: {
            name: 'Paper',
            icon: Paper,
            color: 'hsl(230, 89%, 62%)'
        },
        scissors: {
            name: 'Scissors',
            icon: Scissors,
            color: 'hsl(39, 89%, 49%)'
        },
        lizard: {
            name: 'Lizard',
            icon: Lizard,
            color: 'hsl(261, 73%, 60%)'
        },
        spock: {
            name: 'Spock',
            icon: Spock,
            color: 'hsl(189, 59%, 53%)'
        }
    }
    

    return (
        <div className="pentagon-bg">
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
    );
}
 
export default PentagonBG;