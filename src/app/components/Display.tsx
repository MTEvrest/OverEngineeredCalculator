import React from "react";
import styles from "./Display.module.css";

interface DisplayProps {
    displayValue: number;
}

const Display: React.FC<DisplayProps> = ({displayValue}) => {
    return (
        <div className = {styles.display}>
            {displayValue.toString()}
        </div>
    );
}

export default Display;