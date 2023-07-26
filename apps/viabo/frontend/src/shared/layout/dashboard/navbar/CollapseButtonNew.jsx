import PropTypes from 'prop-types'

import { IconButton } from '@mui/material'

import { arrowIcon } from '@/shared/assets/icons'

CollapseButtonNew.propTypes = {
  collapseClick: PropTypes.bool,
  onToggleCollapse: PropTypes.func
}

export default function CollapseButtonNew({ onToggleCollapse, collapseClick, isCollapse }) {
  return (
    <IconButton
      size={'small'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'boder-box',
        outline: '0px',
        margin: '0px',
        cursor: 'pointer',
        userSelect: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        borderRadius: '50%',
        overflow: 'visible',
        color: 'rgb(145, 158, 171)',
        fontSize: '1.125rem',
        padding: '4px',
        top: '28px',
        position: 'fixed',
        left: !isCollapse ? '263px' : '71px',
        zIndex: '1500',
        border: '1px dashed rgba(145, 158, 171, 0.24)',
        backdropFilter: 'blur(6px)',
        lineHeight: 0,
        transition: theme =>
          theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter
          }),
        ...(collapseClick && {
          transform: 'rotate(180deg)'
        })
      }}
      onClick={onToggleCollapse}
    >
      {arrowIcon}
    </IconButton>
  )
}
