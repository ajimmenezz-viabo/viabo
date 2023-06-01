import React from 'react'
import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import MotionContainer from '../animate/MotionContainer'

export function ContainerPage({ children, ...others }) {
  return (
    <Container
      component={MotionContainer}
      className="animate__animated animate__fadeIn"
      maxWidth={false}
      {...others}
      style={{ overflowY: 'auto' }}
    >
      {children}
    </Container>
  )
}

ContainerPage.propTypes = {
  children: PropTypes.node.isRequired
}
