import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 769,
            lg: 1040,
            xl: 1440,
        }
    }
})


const GridMUI = () => {
    return (
        <div>
            <h1>Day - 60 - MUI Grid Box </h1>
            <main>
                <ThemeProvider theme={theme}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                    lg: 'block'
                                }
                            }}>
                                First Column
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'block',
                                    md: 'none',
                                    lg: 'block'
                                }
                            }}>
                                Second Column
                            </Box>
                        </Grid>
                    </Grid>

                </ThemeProvider>
            </main>
        </div>
    )
}

export default GridMUI