'use client';
import { useState } from "react";
interface BalanceTogglerProps {
    balance: number;
}
export function ToggleFunction({balance}: BalanceTogglerProps) {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!true)
         alert('Toggled')
        }
    return(
        <div>
            <button onClick={handleClick}>Toggle</button>
            <span>{toggle ? '****' : balance}</span>
        </div>
    )
}
