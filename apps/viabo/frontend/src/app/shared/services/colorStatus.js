const CATALOG_CARD_STATUS = [
  {
    id: 4,
    name: 'Sin Asignar',
    color: 'info'
  },
  {
    id: 5,
    name: 'Asignado',
    color: 'primary'
  }
]

const getColorCardStatusById = id =>
  CATALOG_CARD_STATUS.find(status => status.id.toString() === id.toString())?.color || 'info'

export { getColorCardStatusById }
