import { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Box, ClickAwayListener, Drawer, IconButton, InputAdornment, Stack } from '@mui/material'

import { Scrollbar } from '@/shared/components/scroll'
import { useResponsive } from '@theme/hooks'
import { CreditCard, Search } from '@mui/icons-material'
import CardsSidebarList from '@/app/business/cards/components/cardsSidebar/CardsSidebarList'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { InputStyle } from '@/shared/components/form'
import { useFindCommerceCards } from '@/app/business/cards/hooks'
import { ErrorRequestPage, SearchNotFound } from '@/shared/components/notifications'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { MainCard } from '@/app/business/cards/components/MainCard'

const ToggleButtonStyle = styled(props => <IconButton disableRipple {...props} />)(({ theme }) => ({
  left: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  top: theme.spacing(21),
  borderRadius: `0 12px 12px 0`,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.darker
  }
}))

const RootStyle = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter
    })
  }
}))

const SIDEBAR_WIDTH = 300
const SIDEBAR_COLLAPSE_WIDTH = 96

export function CardsSidebar() {
  const selectedCardId = useCommerceDetailsCard(state => state.card?.id)
  const isMainCardSelected = useCommerceDetailsCard(state => state.isMainCardSelected)

  const {
    data: commerceCards,
    isLoading: loadingCommerces,
    isError,
    error,
    refetch,
    isSuccess
  } = useFindCommerceCards()

  const theme = useTheme()

  const [openSidebar, setOpenSidebar] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')

  const [searchResults, setSearchResults] = useState(commerceCards || [])

  const [isSearchFocused, setSearchFocused] = useState(false)

  const isDesktop = useResponsive('up', 'md')

  const displayResults = searchQuery && isSearchFocused

  const isCollapse = isDesktop && !openSidebar

  useEffect(() => {
    if (!isDesktop) {
      return handleCloseSidebar()
    }
  }, [isDesktop, selectedCardId])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!openSidebar) {
      return setSearchFocused(false)
    }
  }, [openSidebar])

  useEffect(() => {
    if (commerceCards) {
      setSearchResults(commerceCards)
    }
  }, [commerceCards])

  useEffect(() => {
    if (isMainCardSelected && selectedCardId) {
      handleCloseSidebar()
    }
  }, [isMainCardSelected, selectedCardId])

  const handleOpenSidebar = () => {
    setOpenSidebar(true)
  }

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleToggleSidebar = () => {
    setOpenSidebar(prev => {
      if (prev) {
        setSearchQuery('')
        setSearchResults(commerceCards)
      }
      return !prev
    })
  }

  const handleClickAwaySearch = () => {
    setSearchFocused(false)
  }

  const handleChangeSearch = async event => {
    try {
      const { value } = event.target
      setSearchQuery(value)
      if (value) {
        const results =
          commerceCards?.filter(item => item?.cardNumber.toLowerCase().indexOf(value.toLowerCase()) !== -1) || []
        setSearchResults(results)
      } else {
        setSearchResults(commerceCards)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearchFocus = () => {
    setSearchFocused(true)
  }

  const renderContent = (
    <Scrollbar
      sx={{
        height: 0.98
      }}
    >
      <Stack px={openSidebar ? 1 : 0}>
        {openSidebar && <MainCard />}
        {isSuccess && commerceCards?.length > 0 && (
          <Box sx={{ p: 2, px: isDesktop ? 0 : 2 }}>
            <Stack
              direction="row"
              justifyContent={openSidebar ? 'flex-end' : 'center'}
              alignItems={'center'}
              spacing={2}
            >
              {!isCollapse && (
                <ClickAwayListener onClickAway={handleClickAwaySearch}>
                  <InputStyle
                    fullWidth
                    size="small"
                    value={searchQuery}
                    onFocus={handleSearchFocus}
                    onChange={handleChangeSearch}
                    placeholder="Buscar Tarjetas..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                        </InputAdornment>
                      )
                    }}
                  />
                </ClickAwayListener>
              )}
              <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <IconButton
                  size={'small'}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'boder-box',
                    display: 'inline-flex',
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
                    zIndex: '1500',
                    border: '1px dashed rgba(145, 158, 171, 0.24)',
                    backdropFilter: 'blur(6px)',
                    lineHeight: 0,
                    ...(!openSidebar && {
                      transform: 'rotate(180deg)'
                    })
                  }}
                  onClick={handleToggleSidebar}
                >
                  {icon}
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        )}

        {isError && !commerceCards && !loadingCommerces && (
          <ErrorRequestPage errorMessage={error} handleButton={refetch} />
        )}

        {commerceCards && commerceCards?.length === 0 && (
          <EmptyList pt={2.5} message={'No hay tarjetas activas en este comercio'} />
        )}

        <CardsSidebarList
          isOpenSidebar={openSidebar}
          cards={searchResults || []}
          isLoading={loadingCommerces}
          onOpenDetails={handleCloseSidebar}
        />
        {displayResults && searchResults?.length === 0 && commerceCards?.length > 0 && (
          <SearchNotFound
            sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            searchQuery={searchQuery}
          />
        )}
      </Stack>
    </Scrollbar>
  )

  return (
    <>
      {!isDesktop && (
        <ToggleButtonStyle onClick={handleToggleSidebar}>
          <CreditCard
            sx={{
              width: 16,
              height: 16
            }}
          />
        </ToggleButtonStyle>
      )}

      {isDesktop ? (
        <Drawer
          open={openSidebar}
          variant="persistent"
          PaperProps={{
            sx: {
              height: 1,
              borderRightStyle: 'none',
              bgcolor: 'background.default'
            }
          }}
          sx={{
            height: 1,
            width: SIDEBAR_WIDTH,
            transition: theme.transitions.create('width'),
            '& .MuiDrawer-paper': {
              position: 'static',
              backgroundColor: 'transparent!important',
              width: SIDEBAR_WIDTH
            },
            ...(isCollapse && {
              width: SIDEBAR_COLLAPSE_WIDTH,
              '& .MuiDrawer-paper': {
                width: SIDEBAR_COLLAPSE_WIDTH,
                backgroundColor: 'transparent!important',
                position: 'static',
                transform: 'none !important',
                visibility: 'visible !important'
              }
            })
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            height: 1,
            '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  )
}

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
