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
import { getProductAdmin } from '../../../../../REDUX/AdminRedux/action'

const ModifyProductButton = ({productsDetails}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const dispatch=useDispatch()
    const ModifiProduct = (id,payload) => {
        axios.patch(`https://scary-fly-gilet.cyclic.app/men/${id}`,payload).then((r) => {
           dispatch(getProductAdmin('men'))
        })
    }

    return (
        <>
            <Button onClick={onOpen}>Discard</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to discard all of your notes? 44 words will be
                        deleted.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3} ref={cancelRef}  onClick={()=>{
                            ModifiProduct(productsDetails.id,productsDetails)
                            toast({
                                title: 'User Details Updeted',
                                description: "We've created your account for you.",
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