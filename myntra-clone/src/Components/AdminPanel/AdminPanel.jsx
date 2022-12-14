import React from 'react'
import AdminNav from './AdminNav/AdminNav'
import "./AdminPanel.scss"
import AdminSlider from './AdminSlider/AdminSlider'

const AdminPanel = () => {
    return (
        <div className='home'>
            <AdminSlider />
            <div className="homeContainer">

                <AdminNav />
                container</div>
        </div>
    )
}

export default AdminPanel