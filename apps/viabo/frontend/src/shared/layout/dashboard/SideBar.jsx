import { Fragment, useMemo, useState } from 'react'

import { alpha, Icon, Stack, Typography, useTheme } from '@mui/material'
import { Menu, menuClasses, MenuItem, Sidebar, sidebarClasses, SubMenu } from 'react-pro-sidebar'
import { Link, useLocation } from 'react-router-dom'

import CollapseButtonNew from './navbar/CollapseButtonNew'
import NavbarAccount from './navbar/NavbarAccount'

import { getMenuByRole } from '@/routes/menu-config'
import { Logo } from '@/shared/components/images'
import { useAuth } from '@/shared/hooks'
import { getActive, getActiveSubmenu } from '@/shared/layout/dashboard/nav-section'

const SideBar = ({ isCollapse, toggled, setToggled, setCollapsed }) => {
  const { user } = useAuth()
  const menu = useMemo(() => getMenuByRole(user?.profile), [user])
  const muiTheme = useTheme()
  const [broken, setBroken] = useState(window.matchMedia('(max-width: 1200px)').matches)
  const [rtl, setRtl] = useState(false)
  const { pathname } = useLocation()

  const menuItemStyles = {
    root: {
      fontSize: muiTheme.typography.subtitle2.fontSize,
      fontWeight: 400
    },

    icon: {
      color: muiTheme.palette.primary.main,
      [`&.${menuClasses.disabled}`]: {
        color: muiTheme.palette.action.disabled
      },
      [`&.${menuClasses.active}`]: {
        color: muiTheme.palette.primary.main
      }
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9'
    },
    subMenuContent: ({ level }) => ({
      borderRadius: muiTheme.shape.borderRadius,
      backgroundColor:
        level === 0
          ? isCollapse
            ? muiTheme.palette.background.paper
            : muiTheme.palette.background.default
          : 'transparent'
    }),
    button: ({ level, active, disabled }) => ({
      color: muiTheme.palette.text.primary,
      marginTop: '8px',
      marginBottom: '8px',
      ...(!isCollapse && {
        marginLeft: muiTheme.spacing(2),
        marginRight: muiTheme.spacing(1.5)
      }),

      borderRadius: muiTheme.shape.borderRadius,
      [`&.${menuClasses.disabled}`]: {
        color: muiTheme.palette.action.disabled
      },
      '&:hover': {
        backgroundColor: alpha(muiTheme.palette.action.hover, muiTheme.palette.action.hoverOpacity),
        color: muiTheme.palette.text.primary
        // '>span': {
        //   color: muiTheme.palette.primary.main
        // }
      },

      ...(active && {
        color: 'black',
        fontWeight: 600,
        backgroundColor: alpha(muiTheme.palette.secondary.main, 0.9)
      })
    }),
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }

  return (
    <Sidebar
      collapsed={isCollapse}
      toggled={toggled}
      onBackdropClick={() => {
        setToggled(false)
      }}
      onBreakPoint={setBroken}
      rtl={rtl}
      customBreakPoint="1200px"
      width="280px"
      transitionDuration={500}
      style={{ height: '100vH' }}
      rootStyles={{
        color: muiTheme.palette.text.primary,
        zIndex: `${muiTheme.zIndex.drawer}!important`,
        borderColor: 'rgba(145, 158, 171, 0.24)',
        borderRightStyle: 'dashed',
        backgroundColor: muiTheme.palette.background.default,

        [`.${sidebarClasses.container}`]: {
          backgroundColor: muiTheme.palette.background.default
        }
      }}
    >
      <Stack height={'100vH'}>
        <Stack
          spacing={3}
          sx={{
            pt: 3,
            pb: 2,
            px: 2.5,
            flexShrink: 0,
            ...(isCollapse && { alignItems: 'center' })
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Logo />
          </Stack>
          {!isCollapse && <NavbarAccount isCollapse={isCollapse} />}
        </Stack>
        <div style={{ flex: 1, marginBottom: '32px' }}>
          {menu?.map((menu, index) => (
            <Fragment key={index}>
              <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{ opacity: isCollapse ? 0 : 0.7, letterSpacing: '0.5px' }}
                >
                  {menu?.category}
                </Typography>
              </div>
              <Menu menuItemStyles={menuItemStyles} closeOnClick>
                {menu?.modules?.map((module, index) => {
                  const active = getActive(module?.path, pathname)
                  const activeSubmenu = getActiveSubmenu(module?.path, pathname)
                  if (!module?.items) {
                    return (
                      <MenuItem
                        active={active}
                        key={module?.name}
                        onClick={() => {
                          if (broken) {
                            setToggled(false)
                          } else {
                            !isCollapse && setCollapsed(true)
                          }
                        }}
                        component={<Link to={module?.path} />}
                        icon={<Icon>{module?.icon && module?.icon}</Icon>}
                      >
                        {module?.name}
                      </MenuItem>
                    )
                  }
                  return (
                    <SubMenu
                      key={module?.name}
                      label={module?.name}
                      icon={<Icon>{module?.icon && module?.icon}</Icon>}
                      active={activeSubmenu}
                    >
                      {module?.items?.map((submenu, index) => {
                        const active = getActive(submenu?.path, pathname)
                        return (
                          <MenuItem
                            onClick={() => {
                              if (broken) {
                                setToggled(false)
                              } else {
                                !isCollapse && setCollapsed(true)
                              }
                            }}
                            key={submenu?.name}
                            component={<Link to={submenu?.path} />}
                            active={active}
                          >
                            {submenu?.name}
                          </MenuItem>
                        )
                      })}
                    </SubMenu>
                  )
                })}
              </Menu>
            </Fragment>
          ))}
        </div>
      </Stack>

      {!broken && <CollapseButtonNew onToggleCollapse={() => setCollapsed(prev => !prev)} isCollapse={isCollapse} />}
    </Sidebar>
  )
}

export default SideBar