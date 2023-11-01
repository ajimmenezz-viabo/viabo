/* eslint-disable camelcase */
import { useMaterialReactTable } from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'

export function useMaterialTable(isError, textError, others = {}) {
  const initialProps = {
    localization: MRT_Localization_ES,
    enableSortingRemoval: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableColumnResizing: true,
    layoutMode: 'grid',
    muiTableHeadCellProps: ({ column }) => ({
      sx: theme => ({
        color: column.getIsSorted() ? theme.palette.text.primary : theme.palette.text.secondary,
        backgroundColor: theme.palette.neutral
      })
    }),
    muiTableBodyRowProps: ({ row }) => ({
      onClick: row.getToggleSelectedHandler(),
      sx: theme => ({
        cursor: 'pointer',
        backgroundColor: theme.palette.background.paper,
        '&.Mui-selected': {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      })
    }),
    defaultColumn: {
      maxSize: 400,
      minSize: 80,
      size: 160 // default size is usually 180
    },
    muiTableBodyCellProps: {
      sx: theme => ({
        borderBottom: `dashed 1px ${theme.palette.divider}`
      })
    },
    muiBottomToolbarProps: {
      sx: theme => ({
        backgroundColor: theme.palette.background.paper
      })
    },
    muiTopToolbarProps: {
      sx: theme => ({
        backgroundColor: theme.palette.background.paper,
        '>div': {
          alignItems: 'center'
        }
      })
    },
    muiToolbarAlertBannerProps: isError
      ? {
          color: 'error',
          children: textError,
          sx: {
            fontSize: 12
          }
        }
      : {
          sx: theme => ({
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.main,
            fontSize: 12
          })
        },
    muiTablePaperProps: ({ table }) => ({
      style: {
        zIndex: table.getState().isFullScreen ? 1500 : undefined
      },
      sx: theme => ({
        boxShadow: theme.customShadows.card
      })
    }),
    muiTablePaginationProps: {
      sx: theme => ({
        borderTop: `none`
      })
    },
    displayColumnDefOptions: {
      'mrt-row-select': {
        size: 10
      },
      'mrt-row-actions': {
        header: 'Acciones', // change header text
        size: 80 // make actions column wider
      }
    },
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: true,
      variant: 'outlined'
    },
    paginationDisplayMode: 'default',
    columnFilterDisplayMode: 'popover'
  }

  return useMaterialReactTable({ ...initialProps, ...others })
}
