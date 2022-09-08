import ButtonGame from '../components/ButtonGame';
import buttons from '../buttons'

const TriangleBG = ({selectPlays}) => {

    const slicedButtonTo3 = Object.values(buttons).slice(0, 3)

    return (
        <>
            <div className="triangle-bg">
                {
                    Object.values(slicedButtonTo3).map(button => 
                        <ButtonGame 
                            icon={button.icon} 
                            key={button.name} 
                            borderColor={button.color}
                            selectPlays={selectPlays}
                            name={button.name}
                        />
                    )
                }
            </div>
        </>
    );
}
 
export default TriangleBG;