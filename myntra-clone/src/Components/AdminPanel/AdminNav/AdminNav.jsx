import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import GamesIcon from '@mui/icons-material/Games';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./AdminNav.scss"
import { MenuButton,MenuItem,MenuList,Menu,IconButton } from '@chakra-ui/react';



const AdminNav = ({ theme, setTheme }) => {
    return (
        <div className='navbar'>
            <div className="wraper">
                <div className="search">
                    <input type="text" name="" id="  " placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon /> English
                    </div>

                    <div className="item" onClick={() => setTheme(prev => !prev)}>
                        {
                            !theme ? <DarkModeIcon className='icon' /> : <WbSunnyIcon className='icon' />
                        }
                    </div>

                    <div className="item"> <GamesIcon className='icon' /></div>
                    <div className="item"> <NotificationImportantIcon className='icon' /></div>
                    <div className="item"> <ChatBubbleIcon className='icon' /></div>
                    <div className="item">
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<ListIcon />}
                                variant='outline'
                                className='icon'
                            />
                            <MenuList>
                                <MenuItem  command='⌘T'>
                                    New Tab
                                </MenuItem>
                                <MenuItem  command='⌘N'>
                                    New Window
                                </MenuItem>
                                <MenuItem command='⌘⇧N'>
                                    Open Closed Tab
                                </MenuItem>
                                <MenuItem  command='⌘O'>
                                    Open File...
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU" className='avtar' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNav