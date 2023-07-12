import PropTypes from 'prop-types'
import { List } from '@mui/material'
import SkeletonCardItem from '@/app/business/cards/components/cardsSidebar/SkeletonCardItem'
import CardItem from '@/app/business/cards/components/cardsSidebar/CardItem'
import { useTable } from '@/shared/hooks'
import { useEffect } from 'react'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { shallow } from 'zustand/shallow'

CardsSidebarList.propTypes = {
  cards: PropTypes.array,
  isOpenSidebar: PropTypes.bool,
  onOpenDetails: PropTypes.func,
  isLoading: PropTypes.bool,
  sx: PropTypes.object
}

export default function CardsSidebarList({ cards, isOpenSidebar, isLoading, sx, onOpenDetails, ...other }) {
  const setSelectedCards = useCommerceDetailsCard(state => state.setSelectedCards)
  const selectedCards = useCommerceDetailsCard(state => state.selectedCards, shallow)

  const { selected, onSelectRow, resetSelected } = useTable()

  useEffect(() => {
    setSelectedCards(selected)
  }, [selected])

  useEffect(() => {
    if (selectedCards?.length === 0) {
      resetSelected()
    }
  }, [selectedCards])

  return (
    <List disablePadding sx={sx} {...other}>
      {(isLoading ? [...Array(12)] : cards).map((card, index) =>
        card?.id ? (
          <CardItem
            key={card?.id}
            isOpenSidebar={isOpenSidebar}
            card={card}
            selected={selectedCards?.some(cardSelected => cardSelected?.id === card?.id)}
            onSelectRow={() => onSelectRow(card)}
            onOpenDetails={onOpenDetails}
          />
        ) : (
          <SkeletonCardItem key={index} />
        )
      )}
    </List>
  )
}
