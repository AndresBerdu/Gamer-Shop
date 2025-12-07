import { useState } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState<boolean>(false);

    const openModal = () => {
        setOpen(true);
    }

    const CloseModal = () => {
        setOpen(false);
    }

  return {
    open,
    openModal,
    CloseModal,
  }
}
