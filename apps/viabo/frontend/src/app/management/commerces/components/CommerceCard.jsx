import { memo } from 'react'
import { Box, Card, Stack, Typography } from '@mui/material'
import { Avatar } from '@/shared/components/avatar'
import { Person, QueryBuilderTwoTone } from '@mui/icons-material'
import { createAvatar } from '@theme/utils'
import { fDate } from '@/shared/utils'
import { Label } from '@/shared/components/form'

function CommerceCard({ commerce, selected }) {
  return (
    <Card
      sx={theme => ({
        backgroundColor: selected ? theme.palette.secondary.lighter : theme.palette.background.paper,
        color: selected
          ? theme.palette.primary[theme.palette.mode === 'light' ? 'dark' : 'light']
          : theme.palette.text.primary,
        '&:hover': {
          border: 2,
          borderColor: theme => theme.palette.primary.main
        }
      })}
    >
      <Box sx={{ p: 1, position: 'relative' }}>
        <Label
          variant={'filled'}
          color={'info'}
          sx={{
            right: 16,
            zIndex: 9,
            top: 16,
            bottom: 0,
            position: 'absolute',
            textTransform: 'capitalize'
          }}
        >
          {commerce?.status}
        </Label>
      </Box>
      <Stack spacing={2.5}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ p: 3, pb: 2.5 }}>
          <Avatar
            src={commerce?.avatar !== '' ? commerce?.avatar : ''}
            alt={commerce?.fiscalName}
            color={createAvatar(commerce?.fiscalName).color}
          >
            {createAvatar(commerce?.fiscalName).name}
          </Avatar>
          <div>
            <Typography variant="subtitle2">{commerce?.fiscalName}</Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}>
              nombre fiscal
            </Typography>
          </div>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={'space-between'}
          spacing={3}
          sx={theme => ({
            backgroundColor: selected ? theme.palette.secondary.main : theme.palette.background.neutral,
            color: selected
              ? theme.palette.primary[theme.palette.mode === 'light' ? 'dark' : 'light']
              : theme.palette.text.primary,
            p: 3,
            pb: 2.5
          })}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Person sx={{ width: 16, height: 16 }} />
            <Typography variant="caption">{commerce?.name}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <QueryBuilderTwoTone sx={{ width: 16, height: 16 }} />
            <Typography variant="caption">{fDate(commerce?.registerDate)} </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default memo(CommerceCard)
