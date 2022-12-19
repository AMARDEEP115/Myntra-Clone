import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Text,
    Grid,
    Stack,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
function NotificationCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [data,setData]=useState([])
    const getData=()=>{
        axios.get(`https://scary-fly-gilet.cyclic.app/notification`).then((r)=>{
            setData(r.data)
        })
       }
    useEffect(()=>{
        getData()
       
    },[])

  
    return (
      <>
        <span ref={btnRef}  onClick={onOpen}>
          Notification
        </span>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Notifications</DrawerHeader>
  
            <DrawerBody>
                {data.map((el)=>{
                    return(
                        <Grid key={el.id} >
                            <Stack>
                            <Text > {el.title}</Text>
                            <Text>{el.task}</Text>
                            </Stack>
                        </Grid>
                    )
                })}
             
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default NotificationCard