import React from 'react'
import "./Dashboard.scss"
import { CircularProgress, Grid } from '@chakra-ui/react'
import DashboardCard from './Card/DashboardCard'
import ProductCard from './Card/ProductCard'
import UserCard from './Card/UserCard'
import { useSelector } from 'react-redux'

const Dashboard = ({ theme, togalDash, setTogalDash }) => {
    const data = useSelector(store => store.AdminReducer.products)
    const isLoading = useSelector(store => store.AdminReducer.isLoading)
    if (isLoading) {
        return <Grid display="grid" justifyContent="center" alignItems="center" h="100vh">
            <CircularProgress isIndeterminate color='green.300' />
        </Grid>
    }
    if (togalDash === "dash") {
        return (
            <Grid className='dashContainer' >
                {
                    data.length > 0 && data.map(el => {
                        return (
                            <DashboardCard key={el.id} el={el} theme={theme} setTogalDash={setTogalDash} className="container" />
                        )
                    })
                }
            </Grid>
        )
    }

    if (togalDash === "product") {
        return (
            <Grid className='dashContainer' >
                {
                    data.length > 1 && data.map(el => {
                        return (
                            <ProductCard key={el.id} el={el} theme={theme} setTogalDash={setTogalDash} className="container" />
                        )
                    })
                }
            </Grid>
        )
    }


    if (togalDash === "user") {
        return (
            <Grid className='dashContainer' >
                {
                    data.length > 1 && data.map(el => {
                        return (
                            <UserCard key={el.id} el={el} theme={theme} setTogalDash={setTogalDash}  />

                        )
                    })
                }
            </Grid>



        )
    }
}

export default Dashboard
