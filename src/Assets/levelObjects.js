// JS Object containing information on each playable map / display card.

import map1 from "./Images/Maps/map1.jpg";
import map2 from "./Images/Maps/map2.jpg";
import map3 from "./Images/Maps/map3.jpg";
import map4 from "./Images/Maps/map4.jpg";
import map5 from "./Images/Maps/map5.jpg";
import map6 from "./Images/Maps/map6.jpg";

import waldo from "./Images/Characters/waldo_icon.jpg";
import wilma from "./Images/Characters/wilma_icon.jpg";
import odlaw from "./Images/Characters/odlaw_icon.jpg";
import wizard from "./Images/Characters/wizard_icon.jpg";


const levels = [
    
    {
        id: 1,
        map: "skiing-map",
        difficulty: "Easy",
        src: map1,
        img_alt: "Where's Waldo Level 1",
        max_score: 1,
        char_names : ["Waldo"],
        char_icons : [waldo],
        char_cooords: [[855, 482]],
        char_found: [false]
    },

    {
        id: 2,
        map: "letter-map",
        difficulty: "Easy",
        src: map2,
        img_alt: "Where's Waldo Level 2",
        max_score: 1,
        char_names : ["Waldo"],
        char_icons : [waldo],
        char_cooords: [[572, 230]],
        char_found: [false]
    },

    {
        id: 3,
        map: "water-map",
        difficulty: "Medium",
        src: map3,
        img_alt: "Where's Waldo Level 3",
        max_score: 3,
        char_names : ["Waldo", "Wilma", "Wizard"],
        char_icons : [waldo, wilma, wizard],
        char_cooords: [[477, 146], [227, 218], [690, 110]],
        char_found: [false, false, false],
    },
    
    {
        id: 4,
        map: "maze-map",
        difficulty: "Hard",
        src: map4,
        img_alt: "Where's Waldo Level 4",
        max_score: 4,
        char_names : ["Waldo", "Wilma", "Wizard", "Odlaw"],
        char_icons : [waldo, wilma, wizard, odlaw],
        char_cooords: [[560, 289], [313, 400], [666, 210], [437, 215]],
        char_found: [false, false, false]
    },

    {
        id: 5,
        map: "field-map",
        difficulty: "Hard",
        src: map5,
        img_alt: "Where's Waldo Level 5",
        max_score: 4,
        char_names : ["Waldo", "Wilma", "Wizard", "Odlaw"],
        char_icons : [waldo, wilma, wizard, odlaw],
        char_cooords: [[941, 40], [277, 420], [290, 261], [902, 365]],
        char_found: [false, false, false, false]
    },

    {
        id: 6,
        map: "battlefield-map",
        difficulty: "Extreme",
        src: map6,
        img_alt: "Where's Waldo Level 6",
        max_score: 3,
        char_names : ["Waldo", "Wilma"],
        char_icons : [waldo, wilma],
        char_cooords: [[169, 552], [756, 493]],
        char_found: [false, false]
    },

]

export default levels;