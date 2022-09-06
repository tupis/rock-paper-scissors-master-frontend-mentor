import { useState } from "react";
import Header from "../components/header";
import PentagonBG from "../components/Pentagon";
const gameRule = require('../gameRule');


const HardGame = () => {

    const headerItems = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

    const [score, setScore] = useState(0);
    const [selectedPlay, setSelectedPlay] =  useState(null);

    const play = (button) => {
        setSelectedPlay(button);
        const find = headerItems.indexOf(selectedPlay);
        if(find + 1) {
            const computerPlay = headerItems[Math.floor(Math.random() * headerItems.length)];

            const isDraw = gameRule[selectedPlay].draw.includes(computerPlay)
            const isWon = gameRule[selectedPlay].beats.includes(computerPlay) 

            isDraw 
                ? setScore(score) 
                : isWon 
                    ? setScore(score + 1) 
                    : score > 0  
                        ? setScore(score - 1) 
                        : setScore(0)
        }
    }

    return (
        <>
            <Header items={headerItems} score={score}/>
            <PentagonBG play={play}/>
        </>
    );

}

export default HardGame;