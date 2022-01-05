import React from 'react'
import { Card, Typography, CardContent, Grid } from '@material-ui/core'
import Styles from './Cards.module.css'
import CountUp from 'react-countup'

export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={Styles.container}>
            <Grid container spacing={2} justify='center'>

                <Grid item component={Card} xs={12} md={3} class={Styles.infacted}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infacted</Typography>
                        <Typography varaint='h5' ><CountUp start={0} end={confirmed.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2' >Num of active cases COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} class={Styles.recovered}>
                    <CardContent>
                        <Typography color='textSecondary' >Infacted</Typography>
                        <Typography varaint='h5' ><CountUp start={0} end={recovered.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2' >Num of recoveries cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} class={Styles.deaths}>
                    <CardContent>
                        <Typography color='textSecondary' >Infacted</Typography>
                        <Typography varaint='h5' ><CountUp start={0} end={deaths.value} duration={2.5} separator=',' /></Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2' >Num of deaths cases COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}
