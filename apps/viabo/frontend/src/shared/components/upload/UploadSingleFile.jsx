import PropTypes from 'prop-types'

import { Close } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import isString from 'lodash/isString'
import { useDropzone } from 'react-dropzone'

import RejectionFiles from './RejectionFiles'

import pdf from '@/shared/assets/img/pdf.png'
import { UploadIllustration } from '@/shared/components/illustrations'
import { Image } from '@/shared/components/images'

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: `0px 0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' }
}))

UploadSingleFile.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onRemove: PropTypes.func,
  helperText: PropTypes.node,
  sx: PropTypes.object
}

const isImage = url => /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
export default function UploadSingleFile({ error = false, file, helperText, onRemove, sx, ...other }) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other
  })

  let srcImage = null
  if (isString(file)) {
    srcImage = isImage(file) ? file : pdf
  } else if (file) {
    srcImage = isImage(file.name) ? file.preview : pdf
  }

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter'
          }),
          ...(file && {
            padding: '12% 0'
          })
        }}
      >
        <input {...getInputProps()} />

        {!file ? (
          <UploadIllustration sx={{ width: 1 }} />
        ) : (
          <Box width={1} height={{ lg: 165, xl: 155, md: 180, xs: 250, sm: 250 }} />
        )}

        {file && (
          <Image
            alt="file preview"
            src={srcImage}
            sx={{
              top: 8,
              left: 8,
              borderRadius: 1,
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)'
            }}
          />
        )}
      </DropZoneStyle>
      {file && (
        <IconButton
          aria-label="remove-file"
          size="small"
          onClick={() => onRemove(file)}
          sx={{
            top: '16px',
            right: '16px',
            zIndex: 9,
            position: 'absolute',
            padding: '5px',
            color: 'common.white',
            bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
            '&:hover': {
              bgcolor: theme => alpha(theme.palette.grey[900], 0.48)
            },
            borderRadius: '50%'
          }}
        >
          <Close fontSize="inherit" />
        </IconButton>
      )}

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {helperText && helperText}
    </Box>
  )
}
