import { Add } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Tooltip } from '@mui/material'

import { useSpeiCompaniesTableColumns } from '../hooks'
import { useFindSpeiCompanies } from '../hooks/useFindSpeiCompanies'
import { useSpeiCompaniesStore } from '../store'

import { MaterialDataTable } from '@/shared/components/dataTables'
import { useMaterialTable } from '@/shared/hooks'

export const ViaboSpeiCompaniesList = () => {
  const { data: companies, isLoading, isError, error, isFetching } = useFindSpeiCompanies()

  const { setOpenNewSpeiCompany } = useSpeiCompaniesStore()

  const columns = useSpeiCompaniesTableColumns()

  const table = useMaterialTable(isError, error, {
    columns,
    data: companies || [],
    enableColumnPinning: true,
    enableColumnFilterModes: true,
    enableStickyHeader: true,
    enableRowVirtualization: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    enableDensityToggle: false,
    positionActionsColumn: 'last',
    selectAllMode: 'all',
    initialState: {
      density: 'compact',
      sorting: [
        {
          id: 'name',
          desc: false
        }
      ]
    },
    state: {
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching
    },
    displayColumnDefOptions: {
      'mrt-row-select': {
        maxSize: 10
      },
      'mrt-row-actions': {
        header: 'Acciones',
        maxSize: 80
      }
    },
    muiTableContainerProps: { sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } },
    enableColumnResizing: true,
    layoutMode: 'grid',
    renderTopToolbarCustomActions: () => <Box></Box>
  })

  return (
    <Card
      variant="outlined"
      sx={theme =>
        !table.getState().isFullScreen
          ? {
              boxShadow: theme.customShadows.z24,
              backgroundColor: theme.palette.mode === 'light' ? 'inherit' : theme.palette.grey[500_12],
              backdropFilter: `blur(10px)`,
              WebkitBackdropFilter: `blur(10px)`
            }
          : {}
      }
    >
      <CardHeader
        sx={theme => ({
          pb: 2
        })}
        title="Lista de Empresas"
        subheader={`Tienes ${companies?.length || 0} empresas dadas de alta`}
        action={
          <Tooltip title="Nueva Empresa">
            <IconButton color="primary" size="large" onClick={() => setOpenNewSpeiCompany(true)}>
              <Add />
            </IconButton>
          </Tooltip>
        }
      />
      <MaterialDataTable table={table} />
    </Card>
  )
}
