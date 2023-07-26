import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, ClickAwayListener, Drawer, InputAdornment, Stack } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { useResponsive } from '@theme/hooks'
import { CreditCard, Search } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { InputStyle } from '@/shared/components/form'
import { useFindCommerceCards } from '@/app/business/cards/hooks'
import { ErrorRequestPage, SearchNotFound } from '@/shared/components/notifications'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { useFindCommerceCardTypes } from '@/app/business/cards/hooks/useFindCommerceCardTypes'
import { CardList, CommerceCardTypes } from '@/app/business/cards/components/sidebar'
import { GlobalCard } from '@/app/business/cards/components/global-card'
import { arrowIcon } from '@/shared/assets/icons/CustomIcons'
import {
  SIDEBAR_COLLAPSE_WIDTH,
  SIDEBAR_WIDTH,
  SidebarButtonMobileStyle,
  SidebarButtonStyle
} from '@/app/business/cards/components/sidebar/SidebarStyles'

export function CardsSidebar() {
  const selectedCardId = useCommerceDetailsCard(state => state.card?.id)
  const cardTypeSelected = useCommerceDetailsCard(state => state.cardTypeSelected)

  const {
    data: cardTypes,
    isLoading: isLoadingCardTypes,
    isError: isErrorCardTypes,
    refetch: refetchCardTypes
  } = useFindCommerceCardTypes()

  const {
    data: commerceCards,
    isLoading: isLoadingCommerces,
    isRefetching: isRefetchingCommerces,
    isError,
    error,
    refetch,
    isSuccess
  } = useFindCommerceCards(cardTypeSelected, {
    enabled: false
  })

  const loadingCommerces = isLoadingCommerces || isRefetchingCommerces

  const theme = useTheme()

  const [openSidebar, setOpenSidebar] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')

  const [searchResults, setSearchResults] = useState(commerceCards || [])

  const [isSearchFocused, setSearchFocused] = useState(false)

  const isDesktop = useResponsive('up', 'md')

  const displayResults = searchQuery && isSearchFocused

  const isCollapse = isDesktop && !openSidebar

  useEffect(() => {
    if (cardTypeSelected) {
      refetch()
    }
  }, [cardTypeSelected])

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
        {openSidebar && (
          <CommerceCardTypes
            cardTypes={cardTypes}
            isLoading={isLoadingCardTypes}
            isError={isErrorCardTypes}
            refetch={refetchCardTypes}
          />
        )}
        {!cardTypeSelected && openSidebar && !isLoadingCardTypes && (
          <EmptyList pt={2.5} message={'Seleccione un tipo de tarjeta para obtener la lista de tarjetas'} />
        )}

        {cardTypeSelected && !isLoadingCardTypes && (
          <>
            <GlobalCard openSidebar={openSidebar} />
            <Box sx={{ p: 2, px: 0 }}>
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
                  <SidebarButtonStyle
                    size={'small'}
                    sx={{
                      ...(!openSidebar && {
                        transform: 'rotate(180deg)'
                      })
                    }}
                    onClick={handleToggleSidebar}
                  >
                    {arrowIcon}
                  </SidebarButtonStyle>
                </Stack>
              </Stack>
            </Box>

            {isError && openSidebar && !commerceCards && !loadingCommerces && (
              <ErrorRequestPage errorMessage={error} handleButton={refetch} />
            )}

            {commerceCards && openSidebar && commerceCards?.length === 0 && !loadingCommerces && (
              <EmptyList pt={2.5} message={'No hay tarjetas activas en este tipo de tarjeta'} />
            )}

            <CardList
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
          </>
        )}
      </Stack>
    </Scrollbar>
  )

  return (
    <>
      {!isDesktop && (
        <SidebarButtonMobileStyle onClick={handleToggleSidebar}>
          <CreditCard
            sx={{
              width: 16,
              height: 16
            }}
          />
        </SidebarButtonMobileStyle>
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
            '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, p: 2 }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  )
}
