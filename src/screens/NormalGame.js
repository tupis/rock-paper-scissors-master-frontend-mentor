import { useState } from "react";

import Header from "../components/header";
import Result from "../components/Result";
import TriangleBG from "../components/Triangle";
const gameRule = require('../gameRule');

const NormalGame = () => {

    const headerItems = ['Rock', 'Paper', 'Scissors'];
    const [score, setScore] = useState(0);
    const [selectedPlay, setSelectedPlay] =  useState(null);
    const [selectedComputer, setSelectedComputer] = useState()
    const [result, setResult] = useState(false)

    const play = (button) => {
        setSelectedPlay(button);
        const find = headerItems.indexOf(selectedPlay);
        setResult(true)
        if(find + 1) {
            setSelectedComputer(headerItems[Math.floor(Math.random() * headerItems.length)]);
            setTimeout(()=>{
    
                const isDraw = gameRule[selectedPlay].draw.includes(selectedComputer)
                const isWin = gameRule[selectedPlay].beats.includes(selectedComputer) 
    
                isDraw 
                    ? setScore(score) 
                    : isWin 
                        ? setScore(score + 1) 
                        : score > 0  
                            ? setScore(score - 1) 
                            : setScore(0)
            }, 3000)
        }
    }

    return (
        <>
            <Header items={headerItems} score={score}/>
            {result 
                ?
                    <Result setResult={setResult}/>
                : 
                    <TriangleBG
                    
                        play={() => setResult(true)}
                    />
                
            }
        </>
    );
}
 
export default NormalGame;