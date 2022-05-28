// Helper functions

export function renderIcons(props) {

    const icons = Object.values(props.char_icons);

    return (
        <div className="display-card-char-icons" >
            { icons.map( icon => <img className="char-icon" src = {icon} alt="" key={icon}></img> )}
        </div>
    )
}

export function renderIconsAndNames(props) {
    const icons = Object.values(props.char_icons);
    const names = Object.values(props.char_names);

    return (

        icons.map(( icon, index) => 
            <div className="char-icon-name">
                <img className="char-icon" src= {icon} alt="" key={icon}></img>
                <p className="char-name"> {names[index]}</p>
            </div>
        )
    )
}