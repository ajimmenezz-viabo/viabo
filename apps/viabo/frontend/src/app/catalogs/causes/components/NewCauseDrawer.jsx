import { lazy } from 'react'

import PropTypes from 'prop-types'

import { useCausesStore } from '../store'

import { RightPanel } from '@/app/shared/components'
import { Lodable } from '@/shared/components/lodables'

const NewCauseForm = Lodable(lazy(() => import('./NewCauseForm')))

const NewCauseDrawer = ({ profiles }) => {
  const { openNewCause, setOpenNewCause } = useCausesStore(state => state)

  const handleClose = () => {
    setOpenNewCause(false)
  }

  return (
    <RightPanel open={openNewCause} handleClose={handleClose} titleElement={'Nueva Causa'}>
      {openNewCause && <NewCauseForm profiles={profiles} onSuccess={handleClose} />}
    </RightPanel>
  )
}

NewCauseDrawer.propTypes = {
  profiles: PropTypes.any
}

export default NewCauseDrawer
