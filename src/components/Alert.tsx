import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";


function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef<HTMLElement>(null);
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay data-testid="alert-overlay">
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'} data-testid="alert-dialog">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
