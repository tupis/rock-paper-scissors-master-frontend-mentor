import ButtonGame from "./ButtonGame";
import '../sass/result.scss';
import buttons from '../buttons';

const Result = ({setScreenResult, plays, result}) => {

    const player = Object.values(buttons).find(item => item.name === plays.player)
    const computer = Object.values(buttons).find(item => item.name === plays.computer)

    return (
        <>  
            <div className="result">
                <div className="player-area">
                    <p>You picked</p>
                    <ButtonGame 
                        icon={player.icon} 
                        borderColor={player.color}
                    />
                </div>

                <div className="info-result">
                    <span>
                        {result === 'draw' 
                            ? 'Draw'
                            :  result === 'win'
                                ? 'You win'
                                :  'You lose'
                        }
                    </span>
                    <button
                        onClick={() => setScreenResult(false)}
                    >   
                        Play Again
                    </button>
                </div>

                <div className="computer-area">
                    <p>The house picked</p>
                    <ButtonGame 
                        icon={computer.icon} 
                        borderColor={computer.color}
                    />
                </div>
            </div>
        </>
    );
}

export default Result;