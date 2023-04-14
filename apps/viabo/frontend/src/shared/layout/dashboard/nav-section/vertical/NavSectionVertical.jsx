import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box, Collapse, Divider, List, ListItemButton } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { NavListRoot } from './NavList'
import { ListItemTextStyle } from './style'
import { useUser } from '@/shared/hooks'
import navConfigTest from '@/shared/layout/dashboard/navbar/NavConfig'

export const ListSubheaderStyle = styled(props => <ListItemButton {...props} />)(({ theme }) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter
  })
}))

NavSectionVertical.propTypes = {
  isCollapse: PropTypes.bool,
  navConfig: PropTypes.array
}

function NavSectionVertical({ isCollapse = false, ...other }) {
  const user = useUser()
  const navConfig = user?.modules || navConfigTest
  return (
    <Box {...other} sx={{ pb: 2 }}>
      {navConfig?.map((group, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = useState(true)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [saveOpen, setSaveOpen] = useState(open)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (isCollapse) {
            setOpen(true)
          } else {
            setOpen(saveOpen)
          }
        }, [isCollapse])

        return (
          group?.category && (
            <List key={group.category} disablePadding sx={{ px: 2 }}>
              {!isCollapse && (
                <ListSubheaderStyle
                  sx={{
                    ...(isCollapse && {
                      opacity: 0
                    })
                  }}
                  onClick={() => {
                    setOpen(!open)
                    setSaveOpen(!open)
                  }}
                >
                  <ListItemTextStyle
                    primaryTypographyProps={{ variant: 'caption' }}
                    isCollapse={isCollapse}
                    primary={group.category}
                  />

                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListSubheaderStyle>
              )}
              {group?.modules.map(list => (
                <Collapse key={list.name} in={open} timeout="auto">
                  <NavListRoot list={list} isCollapse={isCollapse} />
                </Collapse>
              ))}
              {isCollapse && index !== navConfig.length - 1 && <Divider sx={{ mb: 0.5 }} />}
            </List>
          )
        )
      })}
    </Box>
  )
}

export default NavSectionVertical
