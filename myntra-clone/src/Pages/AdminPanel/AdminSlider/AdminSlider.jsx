import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import "./AdminSlider.scss"
import { MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import NotificationCard from '../Dashboard/Card/NotificationCard';
import ProfileCard from '../Dashboard/Card/ProfileCard';
import { getProductAdmin } from '../../../REDUX/AdminRedux/action';
import Logout from '../Dashboard/Card/Logout';



const AdminSlider = ({ setTheme, setTogalDash }) => {
    const dispatch = useDispatch()

    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li onClick={() => {
                          dispatch(getProductAdmin("Dashboard")).then(()=>{
                            setTogalDash("dash")
                        })
                    }}><DashboardIcon className='icon' /><span>DashBoard</span></li>
                    <p className="title">LISTS</p>

                    <li onClick={() => {
                         setTogalDash("user")
                        dispatch(getProductAdmin("user"))
                       

                    }}><PersonIcon className='icon' /><span>Users</span></li>
                    <li> <ProductionQuantityLimitsIcon className='icon' /><Menu>
                        <MenuButton  >
                            Products
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => {
                                setTogalDash("product")
                                dispatch(getProductAdmin("men"))
                            }}>Mens</MenuItem>
                            <MenuItem onClick={() => {
                                setTogalDash("product")
                                dispatch(getProductAdmin("women"))

                            }}>Womens</MenuItem>
                            <MenuItem onClick={() => {
                                setTogalDash("product")
                                dispatch(getProductAdmin("kids"))

                            }}>Kids</MenuItem>
                        </MenuList>
                    </Menu></li>
                    <li onClick={() => {
                        dispatch(getProductAdmin("order"))
                        setTogalDash("product")
                    }} ><BookmarkBorderIcon className='icon' /><span>Orders</span></li>
                    <li onClick={() => {
                        dispatch(getProductAdmin("delivery"))
                        setTogalDash("product")
                    }}><DeliveryDiningIcon className='icon' /><span>Delivery</span></li>
                    <p className="title">USEFUL</p>

                    <li><QueryStatsIcon className='icon' /><span>Stats</span></li>
                    <li><NotificationImportantIcon className='icon' /><NotificationCard /></li>
                    <p className="title">SERVICES</p>

                    <li><HealthAndSafetyIcon className='icon' /><span>System Health</span></li>
                    <li><PsychologyIcon className='icon' /><span>Logs </span></li>
                    <li><SettingsIcon className='icon' /><span>Settings</span></li>
                    <p className="title">USER</p>

                    <li><PersonOutlineIcon className='icon' /><ProfileCard /></li>
                    <li><LogoutIcon className='icon' /> <Logout />  </li>
                </ul>
            </div>
            <div className="bottom">
                <div onClick={() => setTheme(false)} className="colorOption"></div>
                <div onClick={() => setTheme(true)} className="colorOption"></div>
            </div>
        </div>
    )
}

export default AdminSlider