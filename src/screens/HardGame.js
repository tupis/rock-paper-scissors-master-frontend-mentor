import { useEffect, useState } from "react";
import Header from "../components/header";
import Result from "../components/Result";
import PentagonBG from "../components/Pentagon";
const gameRule = require('../gameRule');


const HardGame = () => {

    const headerItems = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    const [score, setScore] = useState(0);
    const [selectedPlay, setSelectedPlay] = useState();
    const [selectedComputer, setSelectedComputer] = useState();
    const [screenResult, setScreenResult] = useState(false);
    const [result, setResult] = useState();

    const selectPlays = (button) => {
        setSelectedPlay(button)
        setSelectedComputer(headerItems[Math.floor(Math.random() * headerItems.length)]);
    }

    const getResult = () => {
        const find = headerItems.indexOf(selectedPlay);
        //Caso o indíce seja igual a 0, o laço condicional entende que é false, portanto não executa.
        if(find + 1) {
            setScreenResult(true)
            const wasDraw = gameRule[selectedPlay].draw.includes(selectedComputer)
            const wasWin = gameRule[selectedPlay].beats.includes(selectedComputer)
            
            wasDraw
                ? setResult(pv => pv = 'draw')
                : wasWin
                    ? setResult(pv => pv = 'win')
                    : setResult(pv => pv = 'loss')
        }
    }

    const getScore = () => {
        switch (result) {
            case 'win':
                setScore(pv => pv + 1)
                break;
            case 'loss':
                if(score <= 0){
                    setScore(0)
                } else {
                    setScore(pv => pv -1)
                }
                break;
            case 'draw':
                setScore(pv => pv)
                break;
            default:
                break;
        }
        console.log(result)     
    }

    useEffect(()=>{
        getResult()
    }, [selectedPlay, selectedComputer])
 
    useEffect(()=>{
        getScore() 
    }, [result])

    return (
        <>
            <Header items={headerItems} score={score}/>
            {screenResult 
                ?
                    <Result 
                        setScreenResult={setScreenResult}
                        plays={{player: selectedPlay, computer: selectedComputer}}
                        result={result}
                    />
                : 
                    <PentagonBG
                        selectPlays={selectPlays}
                    />
                
            }
        </>
    );
}

export default HardGame;