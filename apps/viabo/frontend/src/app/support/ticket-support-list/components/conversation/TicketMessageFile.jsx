import { useMemo } from 'react'

import PropTypes from 'prop-types'

import { FileThumbStyle } from './TicketMessageItemStyles'

import { Image } from '@/shared/components/images'
import { getFileURL } from '@/shared/utils'

const TicketMessageFile = ({ file }) => {
  const fileURL = useMemo(() => getFileURL(file, true), [file])
  const sx = { width: 60, height: 60 }

  return (
    <FileThumbStyle
      onClick={e => {
        e.stopPropagation()
        window.open(file, '_blank')
      }}
    >
      {fileURL === 'image' && <Image src={file} alt={file} sx={{ height: 1 }} ratio="1/1" />}
      {fileURL && fileURL !== 'image' && <Image src={fileURL} alt={file} sx={sx} />}
      {!fileURL && <Image src={file} alt={file} sx={{ height: 1 }} ratio="1/1" />}
    </FileThumbStyle>
  )
}

TicketMessageFile.propTypes = {
  file: PropTypes.any
}

export default TicketMessageFile
