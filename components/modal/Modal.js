import React from 'react'
import {Modal} from '@mui/material'

const Modal = () => {
  return (
    <div>
  <Button onClick={handleOpen}>Open modal</Button>
 <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>


    </div>
  )
}

export default Modal