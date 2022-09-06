import { useState } from "react";
import { Link } from "react-router-dom";


const ChangeGame = () => {

    const [isHard, setIsHard] = useState(false)

    return (
        <>
            <Link 
                to={isHard === true ? '/' : '/hard'}
                onClick={() => setIsHard(!isHard)}    
            >
                {isHard === true ? 'Change to Normal Mode' : 'Change to Hard Mode'}
            </Link>
        </>
    );
}
 
export default ChangeGame;