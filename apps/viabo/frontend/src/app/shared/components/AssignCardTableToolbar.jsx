import { Box, IconButton, Tooltip } from '@mui/material'
import { AssignmentIndRounded } from '@mui/icons-material'

export function AssignCardTableToolbar({ handleAssign }) {
  return (
    <Box
      sx={{
        marginRight: 3
      }}
    >
      <Tooltip title="Asignar">
        <IconButton onClick={handleAssign}>
          <AssignmentIndRounded sx={{ color: theme => theme.palette.info.main }} width={24} height={24} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
