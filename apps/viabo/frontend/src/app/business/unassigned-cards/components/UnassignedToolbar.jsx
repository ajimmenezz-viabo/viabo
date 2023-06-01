import { Button, Checkbox, Stack, Toolbar, Typography } from '@mui/material'
import { AssignmentIndRounded } from '@mui/icons-material'
import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { AssignCardsSidebar } from '@/app/business/unassigned-cards/components/AssignCardsSidebar'
import { useState } from 'react'

export function UnassignedToolbar({ cards }) {
  const cardsSelected = useUnassignedCards(state => state.cards)
  const setAllCards = useUnassignedCards(state => state.setAllCards)
  const resetCards = useUnassignedCards(state => state.resetCards)

  const numSelected = cardsSelected?.length || 0
  const rowCount = cards?.length || 0

  const [openAssignCards, setOpenAssignCards] = useState(false)
  const onSelectAllRows = checked => {
    if (checked) {
      setAllCards(cards)
      return
    }
    resetCards()
  }

  return (
    <>
      <Toolbar
        sx={theme => ({
          position: 'sticky',
          borderRadius: 1,
          py: 4,
          top: 0,
          boxShadow: theme.customShadows.z8,
          backgroundColor: theme.palette.info.lighter,
          color: 'white'
        })}
      >
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ width: 1 }}
          gap={2}
          alignItems={'center'}
        >
          <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={event => onSelectAllRows(event.target.checked)}
              color={'success'}
            />
            <Typography color={'success.main'} variant={'subtitle1'}>
              {numSelected === 1 ? `${numSelected} Tarjeta` : `${numSelected} Tarjetas`}
            </Typography>
          </Stack>

          <Stack flexDirection={'row'} gap={2} justifyContent="space-between">
            <Button
              startIcon={<AssignmentIndRounded />}
              variant={'outlined'}
              color={'info'}
              onClick={() => setOpenAssignCards(true)}
            >
              Asignar
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
      <AssignCardsSidebar open={openAssignCards} setOpen={setOpenAssignCards} />
    </>
  )
}
