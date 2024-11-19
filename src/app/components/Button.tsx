import * as React from 'react';
import { CalcContext } from '../context/calcContext';
import styles from './Button.module.css';


interface ButtonProps {
    value: number;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
    const setString = React.useContext(CalcContext);
    return <button className={styles.button} onClick = {() => setString(prev => prev + value)}>
        {value.toString()}
    </button>
}

export default Button;