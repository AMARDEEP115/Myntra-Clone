import { theme } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import AdminNav from './AdminNav/AdminNav'
import "./AdminPanel.scss"
import AdminSlider from './AdminSlider/AdminSlider'
import Dashboard from './Dashboard/Dashboard'
import initalData from './InitialData'

const AdminPanel = () => {
    const [theme, setTheme] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(initalData)
    const [togalDash,setTogalDash]=useState("dash")
    const getData = (parem) => {
        setLoading(true)
        axios.get(`https://scary-fly-gilet.cyclic.app/${parem}`).then((r) => {
            setData(r.data)
            setLoading(false)
        })
    }
    return (
        <div className={!theme?"home":"homeDark"}>
            <AdminSlider getData={getData} setData={setData} theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />
            <div className="homeContainer">

                <AdminNav theme={theme} setTheme={setTheme} />
                <Dashboard theme={theme} data={data} isLoading={isLoading}  togalDash={togalDash}/>

            </div>
        </div>
    )
}

export default AdminPanel