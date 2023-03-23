import PropTypes from 'prop-types'
import { m } from 'framer-motion'
import { Box } from '@mui/material'
import { varContainer } from './index'
import { useResponsive } from '@theme/hooks'

MotionViewport.propTypes = {
  children: PropTypes.node.isRequired,
  disableAnimatedMobile: PropTypes.bool
}

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {
  const isDesktop = useResponsive('up', 'sm')

  if (!isDesktop && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  )
}
