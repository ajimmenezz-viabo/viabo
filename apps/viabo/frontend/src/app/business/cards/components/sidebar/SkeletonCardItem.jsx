import { Skeleton, Stack } from '@mui/material'

export default function SkeletonCardItem({ isOpenSideBar }) {
  return (
    <Stack spacing={1} direction="row" alignItems="center" sx={{ px: 3, py: 1.5 }}>
      <Skeleton sx={{ backgroundColor: 'background.paper' }} variant="circular" width={48} height={48} />
      {isOpenSideBar && (
        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <Skeleton variant="text" sx={{ width: 0.5, height: 16, backgroundColor: 'background.paper' }} />
          <Skeleton variant="text" sx={{ width: 0.25, height: 12, backgroundColor: 'background.paper' }} />
        </Stack>
      )}
    </Stack>
  )
}
