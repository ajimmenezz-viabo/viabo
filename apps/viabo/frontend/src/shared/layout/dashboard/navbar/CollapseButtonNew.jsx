import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'

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
      {icon}
    </IconButton>
  )
}

// ----------------------------------------------------------------------

const icon = (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
          opacity=".48"
        />
        <path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" />
      </g>
    </g>
  </svg>
)
