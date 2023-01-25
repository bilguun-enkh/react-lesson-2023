import { useEffect } from 'react';
import { useState } from 'react';
import timerData from '../data/data';
import EditableTimerList from './EditableTimerList';

export default function TimerDashBoard() {
    const [timers, setTimers] = useState({ timers: [] })
    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000)
    }, [])
    function handleStartClick(timerId) {
        startTimer(timerId)
    }

    function startTimer(timerId) {
        const now = Date.now()

        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    timer.runningSince = now
                    return timer
                } else {
                    return timer
                }
            })
        })
    }
    function handleStopClick(timerId) {
        stopTimer(timerId)
    }

    function stopTimer(timerId) {
        const now = Date.now()
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince
                    timer.elapsed = timer.elapsed + lastElapsed
                    timer.runningSince = null
                }
                return timer
            })
        })
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId)
    }

    function deleteTimer(timerId) {
        setTimers({
            timers: timers.timers.filter(t => t.id !== timerId)
        })
    }

    return (
        <div>
            <h1 className='margin-auto'>Timer</h1>

            {
                timers.timers && <div>
                    <EditableTimerList
                        timers={timers.timers}
                        onTrashClick={handleTrashClick}
                        onStartClick={handleStartClick}
                        onStopClick={handleStopClick}
                    />
                </div>
            }
        </div>
    )
}