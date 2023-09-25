/* eslint-disable camelcase */
import PropTypes from 'prop-types'

import {
  MRT_FullScreenToggleButton,
  MRT_ShowHideColumnsButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  MaterialReactTable
} from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'

const MaterialDataTable = ({ isError, textError = '', ...props }) => (
  <MaterialReactTable
    localization={MRT_Localization_ES}
    enableSortingRemoval={false}
    muiTableHeadCellProps={({ column }) => ({
      sx: theme => ({
        color: column.getIsSorted() ? theme.palette.text.primary : theme.palette.text.secondary,
        backgroundColor: theme.palette.neutral
      })
    })}
    muiTableBodyRowProps={({ row }) => ({
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
    })}
    muiTableBodyCellProps={{
      sx: theme => ({
        borderBottom: `dashed 1px ${theme.palette.divider}`
      })
    }}
    muiBottomToolbarProps={{
      sx: theme => ({
        backgroundColor: theme.palette.background.paper
      })
    }}
    muiTopToolbarProps={{
      sx: theme => ({
        backgroundColor: theme.palette.background.paper
      })
    }}
    muiToolbarAlertBannerProps={
      isError
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
          }
    }
    muiTablePaperProps={{
      sx: theme => ({
        boxShadow: theme.customShadows.card
      })
    }}
    muiTablePaginationProps={{
      sx: theme => ({
        borderTop: `none`
      })
    }}
    displayColumnDefOptions={{
      'mrt-row-select': {
        size: 10
      }
    }}
    {...props}
  />
)

MaterialDataTable.propTypes = {
  isError: PropTypes.bool,
  textError: PropTypes.string
}

const FullScreenAction = MRT_FullScreenToggleButton
const ShowHideColumnsAction = MRT_ShowHideColumnsButton
const FiltersAction = MRT_ToggleFiltersButton
const SearchAction = MRT_ToggleGlobalFilterButton

export { FiltersAction, FullScreenAction, MaterialDataTable, SearchAction, ShowHideColumnsAction }
