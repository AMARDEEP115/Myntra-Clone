import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    AlertDialogCloseButton,
    useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getProductAdmin, updateProductAdmin } from '../../../../../REDUX/AdminRedux/action'

const ModifyProductButton = ({productsDetails,setTogalDash}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const dispatch=useDispatch()
    const ModifiProduct = (id,payload) => {
       dispatch(updateProductAdmin("men",id,payload)).then(()=>{
        dispatch(getProductAdmin("men")).then(()=>{
            setTogalDash("product")
        })
       })

      
    }

    return (
        <>
            <Button onClick={onOpen}>Confirm Change</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Confirm Changes</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to Change 
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3} ref={cancelRef}  onClick={()=>{
                            ModifiProduct(productsDetails.id,productsDetails)
                            toast({
                                title: 'User Details Updeted',
                                description: "We've updated your product for you.",
                                status: 'sucess',
                                duration: 3000,
                                isClosable: true,
                              })
                              onClose()
                          

                        }}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default ModifyProductButton