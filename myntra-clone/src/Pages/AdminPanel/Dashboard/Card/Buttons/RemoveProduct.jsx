import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    useToast
  } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getProductAdmin } from '../../../../../REDUX/AdminRedux/action'

function RemoveProduct({id,status}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const dispatch=useDispatch()


    const DeleteProduct = (id) => {
        axios.delete(`https://scary-fly-gilet.cyclic.app/men/${id}`).then(()=>{
          dispatch(getProductAdmin("men"))
        }).catch((e)=>{
          dispatch(getProductAdmin("men"))


        })
        
    }
  
    return (
      <>
        <Button colorScheme='red'  onClick={onOpen}>
          Remove
        </Button>
       
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Product
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
  <Button  colorScheme='red' onClick={  ()=>{
            DeleteProduct(id)
          onClose()
          toast({
            title: 'Product Deleted',
            description: "You can't undo this action afterwards.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        } } ml={3}>
          Delete
        </Button>

  
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
  export default RemoveProduct