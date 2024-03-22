import logo from '/logo-name.svg';
import { useState } from 'react';

export default function Header() {
    const [time, setTime] = useState(new Date());

    setInterval(() => setTime(new Date()), 1000);

    return (
        <header>
            <img src={logo} alt="" />
            <span>time: {time.toLocaleTimeString()}</span>
        </header>
    );
}
