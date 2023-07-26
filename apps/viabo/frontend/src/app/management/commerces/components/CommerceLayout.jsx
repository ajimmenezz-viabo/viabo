import { Box, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useCollapseDrawer } from '@theme/hooks'

import { CommerceDetails } from '@/app/management/commerces/components/CommerceDetails'
import { CommerceList } from '@/app/management/commerces/components/CommerceList'

const Container = styled('div')({
  display: 'flex',
  height: '100vh'
})

const FixedDiv = styled(Box)({
  flex: '1',
  height: '100%',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',
  display: 'flex'
})

const ColumnsContainer = styled('div')({
  display: 'flex',
  flex: '1'
})

const Column = styled(props => <Stack {...props} />)(({ theme }) => ({
  height: '100%',
  overflow: 'auto',
  scrollSnapAlign: 'start',
  padding: theme.spacing(2)
}))

export const CommerceLayout = () => {
  const { isCollapse } = useCollapseDrawer()

  return (
    <Container>
      <FixedDiv>
        <ColumnsContainer>
          <Column sx={{ minWidth: { xs: 350, md: 400 } }}>
            <CommerceList />
          </Column>

          <Column sx={{ flexGrow: 1, minWidth: { xs: 350, md: 400 } }}>
            <CommerceDetails />
          </Column>
        </ColumnsContainer>
      </FixedDiv>
    </Container>
  )
}
