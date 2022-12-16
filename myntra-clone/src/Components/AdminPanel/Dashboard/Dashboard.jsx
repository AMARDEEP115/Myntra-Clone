import React from 'react'
import "./Dashboard.scss"
import { CircularProgress, Grid } from '@chakra-ui/react'
import DashboardCard from './Card/DashboardCard'
import ProductCard from './Card/ProductCard'
import UserCard from './Card/UserCard'

const Dashboard = ({ data, isLoading, theme, togalDash }) => {
    console.log('togalDash:', togalDash)
    if (isLoading) {
        return <Grid display="grid" justifyContent="center" alignItems="center" h="100vh">
            <CircularProgress isIndeterminate color='green.300' />
        </Grid>
    }
    if (togalDash === "dash") {
        return (
            <Grid display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px" p="0px" className='dashContainer'>
                {
                    data.map(el => {
                        return (
                            <DashboardCard key={el.id} el={el} theme={theme} />
                        )
                    })
                }
            </Grid>



        )
    }

    if (togalDash === "product") {
        return (
            <Grid display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px" p="0px" className='dashContainer'>
                {
                    data.map(el => {
                        return (
                            <ProductCard key={el.id} el={el} theme={theme} />
                        )
                    })
                }




            </Grid>



        )
    }


    if (togalDash === "user") {
        return (
            <Grid display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px" p="0px" className='dashContainer'>
                {
                    data.map(el => {
                        return (
                            <UserCard key={el.id} el={el} theme={theme} />

                        )
                    })
                }




            </Grid>



        )
    }
}

export default Dashboard
