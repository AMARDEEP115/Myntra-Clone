import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  useToast,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductAdmin, getProductAdmin } from '../../../../../Redux/Adminreducer/action'

function RemoveUserButton({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const toast = useToast()
  const dispatch = useDispatch()
  const deleteUser = () => {
    dispatch(deleteProductAdmin("user", id)).then(()=>{
      dispatch(getProductAdmin("user"))
    })

  }
  return (
    <>
      <Button colorScheme='red' onClick={
        onOpen}

      >
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
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => {
                deleteUser()
                toast({
                  title: 'User Deleted',
                  description: "You can't undo this action afterwards.",
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                })
              }} ml={3}> Delete </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default RemoveUserButton