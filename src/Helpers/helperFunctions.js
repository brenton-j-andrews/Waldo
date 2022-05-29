// Helper functions

// function for rendering icons and names from levelObject array. 2nd arg indicates what to return.
export function renderIconsAndNames(props, arg) {

    const icons = Object.values(props.char_icons);
    const names = Object.values(props.char_names);

    if (arg === "icons") {
        return (
            <div className="display-card-char-icons" >
                { icons.map( icon => <img className="char-icon" src = {icon} alt="" key={icon}></img> )}
            </div>
        )
    }

    else if (arg === "names") {
        return (
            <div className="pop-up-menu-name" >
                { names.map( name => <p className="char-name" src = {name} alt="" key={name}></p> )}
            </div>
        )
    }
    
    else if (arg === "both") {
        return (

            icons.map(( icon, index) => 
                <div className="char-icon-name">
                    <img className="char-icon" src= {icon} alt="" key={icon}></img>
                    <p className="char-name"> {names[index]}</p>
                </div>
            )
        )
    }
}


