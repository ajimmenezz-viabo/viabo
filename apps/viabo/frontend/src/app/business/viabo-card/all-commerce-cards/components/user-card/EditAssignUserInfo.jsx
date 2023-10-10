import { RightPanel } from '@/app/shared/components'

const EditAssignUserInfo = ({ open, handleClose }) => {
  console.log('test')
  return (
    <RightPanel open={open} handleClose={handleClose} title={'Editar Usuario'}>
      {open && <></>}
    </RightPanel>
  )
}

export default EditAssignUserInfo
