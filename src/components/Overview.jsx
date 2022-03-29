export function Overview(props) {
    return(
        <div className="card2" style={{ gridArea: props.area }}>
            <header>
                <p>{props.title}</p>
                <img src={props.icon} alt={props.description} />
            </header>

            <div className="viewsOverview">
                <strong>{props.number}</strong>

                <div className="numberIcon">
                    <img src={props.icon2} alt={props.description2} />
                    <p className={props.color}>{props.number2}%</p>
                </div>
            </div>
        </div>
    );
}