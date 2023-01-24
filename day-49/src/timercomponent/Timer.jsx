import { Card, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TimerActionButton from './TimerActionButton';
import { useState } from 'react';
import { renderElapsedString } from './Helpers';

export default function Timer({ title, project, elapsed, runningSince, runningTime }) {
    const [timerIsRunning, setTimmerIsRunning] = useState(false)
    const timer = renderElapsedString(elapsed, runningSince)
    return (
        <Container maxWidth="sm">
            <Card sx={{
                maxWidth: 345,
                marginBottom: 5,
                margin: 'auto',
            }}>
                <Typography sx={{ fontSize: 28 }} color="text.secondary" >{title}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{project}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{timer}</h1>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20' }} >
                    <DeleteIcon />
                    <EditIcon />
                </Box>
                <TimerActionButton isTimerRunning={timerIsRunning}
                    onStartClick={() => { setTimmerIsRunning(true) }} onStopClick={() => { setTimmerIsRunning(false) }} />
            </Card>
        </Container>
    )
}