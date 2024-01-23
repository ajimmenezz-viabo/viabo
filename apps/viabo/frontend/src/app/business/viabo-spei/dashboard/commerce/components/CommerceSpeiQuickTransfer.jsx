import { useEffect, useRef, useState } from 'react'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Input,
  Slider as MuiSlider,
  Stack,
  Tooltip,
  Typography,
  styled,
  useTheme
} from '@mui/material'
import Slider from 'react-slick'

import { beneficiaresMock } from '../services'

import { CarouselArrows } from '@/shared/components/carousel'
import { fCurrency } from '@/shared/utils'
import { cssStyles } from '@/theme/utils'

const MIN_AMOUNT = 0
const MAX_AMOUNT = 15000
const STEP = 100

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  ...cssStyles(theme).bgBlur({ blur: 20, opacity: 0.4, color: theme.palette.mode === 'light' ? '#f4f6f8' : '#212b36' })
}))

const CommerceSpeiQuickTransfer = () => {
  const theme = useTheme()
  const carouselRef = useRef(null)

  const [autoWidth, setAutoWidth] = useState(100)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [selectContact, setSelectContact] = useState(0)
  const [amount, setAmount] = useState(0.0)

  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 7,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelectContact(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  }

  useEffect(() => {
    if (amount) {
      handleAutoWidth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  const handleOpenConfirm = () => {
    setOpenConfirm(true)
  }

  const handleCloseConfirm = () => {
    setOpenConfirm(false)
  }

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length
    setAutoWidth(getNumberLength * 22)
  }

  const handleSliderChange = (event, newValue) => {
    setAmount(newValue)
  }

  const handleInputChange = event => {
    setAmount(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (amount < 0) {
      setAmount(0)
    } else if (amount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT)
    }
  }

  const handlePrevious = () => {
    carouselRef.current?.slickPrev()
  }

  const handleNext = () => {
    carouselRef.current?.slickNext()
  }

  return (
    <RootStyle variant="outlined">
      <CardHeader title="Transferencia Bancaria" />
      <Box sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Beneficiario
          </Typography>
        </Stack>

        <Box sx={{ position: 'relative', minHeight: 100 }}>
          <CarouselArrows
            filled
            onPrevious={handlePrevious}
            onNext={handleNext}
            customIcon={'eva:arrow-ios-forward-fill'}
            sx={{
              '& .arrow': {
                mt: '-14px',
                '&.left': { left: -16 },
                '&.right': { right: -16 },
                '& button': { width: 28, height: 28, borderRadius: '50%', p: 0.75 }
              }
            }}
          >
            <Slider ref={carouselRef} {...sliderSettings}>
              {beneficiaresMock.map((contact, index) => (
                <Box key={contact.id} sx={{ py: 5 }}>
                  <Box sx={{ width: 40, height: 40 }}>
                    <Tooltip key={contact.id} title={contact.name} arrow placement="top">
                      <Avatar
                        src={contact.avatar}
                        sx={{
                          opacity: 0.48,
                          cursor: 'pointer',
                          transition: theme => theme.transitions.create('all'),
                          ...(selectContact === index && {
                            opacity: 1,
                            transform: 'scale(1.25)',
                            boxShadow: '-4px 12px 24px 0 rgb(0,0,0,0.24)'
                          })
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>

        <Stack spacing={3}>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Ingresa monto
          </Typography>

          <InputAmount
            onBlur={handleBlur}
            onChange={handleInputChange}
            autoWidth={autoWidth}
            amount={amount}
            disableUnderline={false}
          />

          <MuiSlider
            value={typeof amount === 'number' ? amount : 0}
            valueLabelDisplay="auto"
            step={STEP}
            marks
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            onChange={handleSliderChange}
          />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Balance
            </Typography>
            <Typography variant="subtitle1">{fCurrency(34212)}</Typography>
          </Stack>

          <Button
            variant="contained"
            size="large"
            sx={{ fontWeight: 'bold' }}
            disabled={amount === 0}
            onClick={handleOpenConfirm}
          >
            Transferir
          </Button>
        </Stack>
      </Box>
    </RootStyle>
  )
}

function InputAmount({ autoWidth, amount, onBlur, onChange, sx, ...other }) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={sx}>
      <Typography variant="h5">$</Typography>
      <Input
        disableUnderline
        size="small"
        value={amount}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{ step: STEP, min: MIN_AMOUNT, max: MAX_AMOUNT, type: 'number' }}
        sx={{
          typography: 'h3',
          '& input': {
            p: 0,
            textAlign: 'center',
            width: autoWidth,
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            }
          }
        }}
        {...other}
      />
    </Stack>
  )
}

export default CommerceSpeiQuickTransfer
