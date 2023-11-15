import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CollapseDrawerProvider, SettingsProvider } from '@theme/context'
import GlobalStyles from '@theme/overrides/components/GlobalStyles'
import { es } from 'date-fns/locale'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from '@/routes'
import { MotionLazyContainer } from '@/shared/components/animate'
import { NotistackProvider } from '@/shared/components/notifications'
import { ScrollToTop } from '@/shared/components/scroll'
import { CustomTheme } from '@/theme'

import './App.css'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <CustomTheme>
              <NotistackProvider>
                <MotionLazyContainer>
                  <GlobalStyles />
                  <ScrollToTop />
                  <AppRouter />
                </MotionLazyContainer>
              </NotistackProvider>
            </CustomTheme>
          </BrowserRouter>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </LocalizationProvider>
  )
}

export default App
