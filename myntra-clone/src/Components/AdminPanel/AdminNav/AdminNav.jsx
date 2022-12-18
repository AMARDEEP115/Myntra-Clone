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
import { MenuButton, MenuItem, MenuList, Menu, IconButton, InputGroup ,InputRightElement,Input} from '@chakra-ui/react';
import AddUser from '../AddNewProduct/AddUser';
import AddNewProduct from '../AddNewProduct/AddNewProduct';



const AdminNav = ({ theme, setTheme }) => {
    return (
        <div className={!theme ? "navbar":"navbarDark"}>
            <div className="wraper">
                <div>
                    <InputGroup>
                        <InputRightElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input type='text' placeholder='Search For Quarrye'  w={600}/>
                    </InputGroup>
                </div>
                <div className="items">
                    <div className="item">
                    <Menu >
                            {({ isOpen }) => (
                                <>
                                <LanguageIcon />
                                    <MenuButton isActive={isOpen}  >
                                        {isOpen ? 'English' : 'English'}
                                    </MenuButton>
                                    <MenuList bg={theme ? "black":"white"}>
                                        <MenuItem bg={theme ? "black":"white"}>English</MenuItem>
                                        <MenuItem bg={theme ? "black":"white"}>French</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
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
                                border="none"
                            />
                            <MenuList>
                                <MenuItem >
                                   <AddUser/>
                                </MenuItem>
                                <MenuItem >
                                   <AddNewProduct/>
                                </MenuItem>
                                <MenuItem >
                                    Notification
                                </MenuItem>
                                <MenuItem >
                                System Information
                                   
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