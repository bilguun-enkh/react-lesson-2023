import { useEffect } from 'react';
import { useState } from 'react';
import timerData from '../data/data';
import Timer from './Timer';
import TimerForm from './TimerForm';

export default function TimerDashBoard() {
    const [timers, setTimers] = useState([])
    useEffect(() => {
        setTimers(timerData)
    })

    return (
        <div>
            <h1 className='margin-auto'>Timer</h1>
            {timers && timers.map((data, index) => {
                return <Timer
                    key={index}
                    project={data.project}
                    title={data.title}
                    elapsed={data.elapsed}
                    runningSince={data.runningSince} />
            })}
            <TimerForm title={"Title"} project={"Project"} />
        </div>
    )
}