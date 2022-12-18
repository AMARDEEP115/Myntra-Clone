import { theme } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductAdmin } from '../../Redux/Adminreducer/action'
import AdminNav from './AdminNav/AdminNav'
import "./AdminPanel.scss"
import AdminSlider from './AdminSlider/AdminSlider'
import Dashboard from './Dashboard/Dashboard'

const AdminPanel = () => {
    const [theme, setTheme] = useState(false)
    const dispatch=useDispatch()
    
    const [togalDash,setTogalDash]=useState("dash")
//    const getData = (parem) => {
//         setLoading(true)
//         axios.get(`https://scary-fly-gilet.cyclic.app/${parem}`).then((r) => {
//             setData(r.data)
//             setLoading(false)
//         })
//     }
useEffect(()=>{
    dispatch(getProductAdmin("Dashboard"))
},[dispatch])

 
    return (
        <div className={!theme?"home":"homeDark"}>
            <AdminSlider  theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />
            <div className="homeContainer">

                <AdminNav theme={theme} setTheme={setTheme} />
                <Dashboard theme={theme}  togalDash={togalDash}/>

            </div>
        </div>
    )
}

export default AdminPanel