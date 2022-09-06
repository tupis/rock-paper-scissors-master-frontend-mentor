import ButtonGame from "./ButtonGame";

const Result = ({setResult}) => {
    return (
        <>  
            <div className="result">
                <div className="playerArea">
                    <ButtonGame 

                    />
                </div>

                <button 
                    onClick={() => setResult(false)}
                >   
                    Voltar a tela principal
                </button>

                <div className="computerArea">
                    <ButtonGame 

                    />
                </div>
            </div>
        </>
    );
}

export default Result;