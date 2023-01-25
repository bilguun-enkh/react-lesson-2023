import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function TimerForm({ title, project, id, onTrashClick }) {

    const submitText = id ? 'Update' : 'Create'
    return (
        <div>
            <h1 className="margin-auto">Timer form</h1>
            <Grid>
                <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        type='text' placeholder={title} label={title}
                                        fullWidth={true} variant={'outlined'} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='text' placeholder={project} label={project}
                                        fullWidth={true} variant={'outlined'} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color={'success'} variant={'outlined'}>{submitText}</Button>

                                    <Button color={'success'} variant={'outlined'}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Grid>
        </div>
    )
}