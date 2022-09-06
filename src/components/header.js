const Header = ({items, score }) => {
    return (
        <div className="header">
            <div className={items.length === 3 ? "items" : "items-hard"}>
                {items.map(item => <h1 key={item}>{`${item}`}</h1>)}
            </div>
            <div className="score">
                <p>score</p>
                <span>{score}</span>
            </div>
        </div>
    );
}
 
export default Header;