import { useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";

export default function TimersDashboard() {
    const [timers, setTimers] = useState({ timers: [] });

    const URL = 'http://localhost:8081/timers'

    useEffect(() => {
        fetchTimersData()
    }, [])

    // useEffect(() => {
    //     setInterval(() => setTimers({ timers: projects }), 1000);
    // }, []);

    async function fetchTimersData() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON.data)
        setTimers({ timers: FETCHED_JSON.data })
    }

    function handleCreateFormSubmit(timer) {
        createTimer(timer);
    }

    function handleEditFormSubmit(e) {
        updateTimer(e);
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId);
    }

    function handleStartClick(timerId) {
        startTimer(timerId);
    }

    function handleStopClick(timerId) {
        stopTimer(timerId);
    }

    // function createTimer(timer) {
    //     const t = newTimer(timer);
    //     setTimers({ timers: timers.timers.concat(t) });
    // }

    async function createTimer(timer) {
        const t = newTimer(timer)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(t)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setTimers({ timers: FETCHED_JSON.data })
    }

    function startTimer(timerId) {
        const now = Date.now();
        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    timer.runningSince = now;
                    return timer;
                } else {
                    return timer;
                }
            }),
        });
    }

    function stopTimer(timerId) {
        const now = Date.now();

        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    timer.elapsed = timer.elapsed + lastElapsed;
                    timer.runningSince = null;
                }
                return timer;
            }),
        });
    }

    // function updateTimer(attrs) {
    //     setTimers({
    //         timers: timers.timers.map((timer) => {
    //             if (timer.id === attrs.id) {
    //                 timer.title = attrs.title;
    //                 timer.project = attrs.project;
    //             }
    //             return timer;
    //         }),
    //     });
    // }

    async function updateTimer(e) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setTimers({ timers: FETCHED_JSON.data })
    }

    // function deleteTimer(timerId) {
    //     setTimers({
    //         timers: timers.timers.filter((t) => t.id !== timerId),
    //     });
    // }

    async function deleteTimer(timerId) {
        const options = {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                timerId: timerId
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setTimers({ timers: FETCHED_JSON.data })
    }


    return (
        <div>
            <h1>Timers</h1>
            {timers.timers && (
                <div>
                    <EditableTimerList
                        timers={timers.timers}
                        onFormSubmit={handleEditFormSubmit}
                        onTrashClick={handleTrashClick}
                        onStartClick={handleStartClick}
                        onStopClick={handleStopClick}
                    />
                    <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
                </div>
            )}
        </div>
    );
}