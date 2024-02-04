import { memo, useRef } from 'react'

import PropTypes from 'prop-types'

import { Divider, Stack } from '@mui/material'

import TicketAttachmentFile from './TicketAttachmentFile'

const TicketAddAttachmentFiles = ({ files, isLoading, handleRemoveFile }) => {
  const scrollRef = useRef()

  if (files?.length === 0) {
    return null
  }

  return (
    <>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
        ref={scrollRef}
        sx={{
          p: 3,
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          backgroundColor: theme => theme.palette.grey[500_12],
          backdropFilter: `blur(10px)`,
          WebkitBackdropFilter: `blur(10px)`
        }}
        spacing={2}
      >
        {files?.map((file, index) => (
          <TicketAttachmentFile key={`${file?.name}-${index}`} file={file} handleRemoveFile={handleRemoveFile} />
        ))}
      </Stack>
      <Divider />
    </>
  )
}

TicketAddAttachmentFiles.propTypes = {
  files: PropTypes.array,
  handleRemoveFile: PropTypes.func,
  isLoading: PropTypes.any
}

export default memo(TicketAddAttachmentFiles)