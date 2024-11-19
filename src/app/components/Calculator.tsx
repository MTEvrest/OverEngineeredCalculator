import { useState } from "react";
import { CalcContext } from "../context/calcContext";
import Display from "./Display";
import Keyboard from "./Keyboard";
import styles from './Calculator.module.css'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState<number>(0);
    return (
        <div className = {styles.calculator}>
            <div className= {styles.internalContainer}>
                <Display displayValue={displayValue}/>
                <CalcContext.Provider value={setDisplayValue}>
                    <Keyboard/>
                </CalcContext.Provider>
            </div>
        </div>
    );
}

export default Calculator