import * as React from "react";
import Button from "./Button";
import styles from "./Keyboard.module.css"


const Keyboard = () => {
    return (
        <div className={styles.keyboard}>
            <Button value={1}/>
            <Button value={2}/>
            <Button value={3}/>
            <Button value={4}/>
            <Button value={5}/>
            <Button value={6}/>
            <Button value={7}/>
            <Button value={8}/> 
            <Button value={9}/>
        </div>
    );
}

export default Keyboard;