import { Edit } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

import { useSpeiThirdAccounts } from '../store'

import { IOSSwitch } from '@/shared/components/form'
import { CircularLoading } from '@/shared/components/loadings'

export function getSpeiThirdAccountsTableActions(table) {
  const { row, closeMenu } = table
  const { original: rowData } = row
  const { status } = rowData
  const { setOpenNewSpeiThirdAccount, setSpeiThirdAccount } = useSpeiThirdAccounts()
  const isChangingStatus = false

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '8px'
      }}
    >
      {isChangingStatus ? (
        <CircularLoading
          size={15}
          containerProps={{
            display: 'flex',
            ml: 1
          }}
        />
      ) : (
        <IOSSwitch
          size="sm"
          color={!status ? 'error' : 'success'}
          checked={status || false}
          inputProps={{ 'aria-label': 'controlled' }}
          onChange={e => {}}
          onClick={e => {
            e.stopPropagation()
          }}
        />
      )}
      {status && (
        <IconButton
          size="small"
          color="primary"
          onClick={e => {
            e.stopPropagation()
            setSpeiThirdAccount(rowData)
            setOpenNewSpeiThirdAccount(true)
          }}
        >
          <Edit size="small" fontSize="16px" />
        </IconButton>
      )}
    </Box>
  )
}
