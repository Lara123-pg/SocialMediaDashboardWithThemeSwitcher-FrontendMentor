export function Dashboard(props) {
    return(
        <div className='card' id={props.id}>
            <header className={props.headerC}></header>

            <div className="username">
                <img src={props.image} alt={props.description} />
                <p>{props.name}</p>
            </div>

            <div className="followers">
                <strong>{props.number}</strong>
                <p>{props.type}</p>
            </div>

            <div className="views">
                <img src={props.icon} alt={props.description2} />
                <p className={props.color}>{props.viewsF} Today</p>
            </div>
        </div>
    );
}