import { useState } from "react";
import { Link } from "react-router-dom";


const ChangeGame = () => {

    const [isHard, setIsHard] = useState(false)

    return (
        <div className="change-game">
            <Link 
                to={isHard === true ? '/' : '/hard'}
                onClick={() => setIsHard(!isHard)}    
                >
                <button>
                    <p>
                        Change to {isHard === true ? <span>Normal Mode</span> : <span>Hard Mode</span>}
                    </p>
                </button>
            </Link>
        </div>
    );
}
 
export default ChangeGame;