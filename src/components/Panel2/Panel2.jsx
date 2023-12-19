import { useState } from "react";
import style from "./Panel2.module.css";

export default function Panel2() {
    const [lettersState, setLettersState] = useState([0, 0, 0, 0, 0, 0, 0]);

    const letters = ["J", "a", "n", "u", "a", "r", "y"];
    const fontsFamily = {
        0: "Prisma, sans-serif",
        1: "akka, sans-serif",
        2: "DiscoDiva, sans-serif",
        3: "Prism, sans-serif",
        4: "Inception, sans-serif",
    };

    const handleOnMouseOver = (event, i) => {
        const newLettersState = [...lettersState]; // copy the array
        newLettersState[i] = (newLettersState[i] + 1) % 5; // add 1 to the selected letter untili it reaches 5, then reset to 0
        setLettersState(newLettersState); // update the state

        event.target.style.fontFamily = fontsFamily[newLettersState[i]]; // update the font
    };

    return (
        <div className={style.backgroundContainer}>
            <div className={style.title}>
                {letters.map((letter, i) => (
                    <span
                        className={style.letter}
                        key={i}
                        onMouseOver={(event) => handleOnMouseOver(event, i)}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
}
