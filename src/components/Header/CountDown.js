import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/SlideSection.scss';

const CountDown = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    // Function To Set The Deadline 
    const getTimeRemaining = deadline => {
        setInterval(() => {
            const time = Date.parse(deadline) - Date.parse(new Date())
            let seconds = Math.floor((time / 1000) % 60)
            let minutes = Math.floor((time / 1000 / 60) % 60)
            let hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            let days = Math.floor(time / (1000 * 60 * 60 * 24))
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
        }, 1000)
    }
    // Component Did Mount Life Cycle with Hooks
    useEffect(useCallback(() => getTimeRemaining("Dec, 20, 2020"), []), [])
    return (
        <div className="Silder-countdown">
            <div className="title">Open in: </div>
            <ul className="deadline">
                <li>
                    <div className="time">{days}</div>
                    <p>Days</p>
                </li>
                <li>
                    <div className="time">{hours}</div>
                    <p>Hrs</p>
                </li>
                <li>
                    <div className="time">{minutes}</div>
                    <p>Mins</p>
                </li>
                <li>
                    <div className="time">{seconds}</div>
                    <p>Secs</p>
                </li>
            </ul>
        </div>
    );
}

export default React.memo(CountDown);
