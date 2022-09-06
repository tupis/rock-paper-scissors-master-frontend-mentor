module.exports = {
    Paper: {
        beats: ['Rock', 'Spock'],
        draw: ['Paper']
    },
    Rock: {
        beats: ['Lizard', 'Scissors'],
        draw: ['Rock']
    },
    Scissors: {
        beats: ['Paper', 'Lizard'],
        draw: ['Scissors']
    },
    Lizard: { 
        beats: ['Spock', 'Paper'],
        draw: ['Lizard']
    },
    Spock: {
        beats: ['Scissors', 'Rock'],
        draw: ['Spock']
    }
}


// Normal
    // - Paper beats Rock
    // - Rock beats Scissors
    // - Scissors beats Paper



// Hard

    // - Scissors beats Paper
    // - Scissors beats Lizard

    // - Paper beats Rock
    // - Paper beats Spock

    // - Rock beats Lizard
    // - Rock beats Scissors

    // - Lizard beats Spock
    // - Lizard beats Paper

    // - Spock beats Scissors
    // - Spock beats Rock