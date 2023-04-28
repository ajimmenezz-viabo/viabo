import { BrowserRouter } from 'react-router-dom'
import { CustomTheme } from '@/theme'
import { CollapseDrawerProvider, SettingsProvider } from '@theme/context'
import { AppRouter } from '@/routes'
import { NotistackProvider } from '@/shared/components/notifications'
import { ScrollToTop } from '@/shared/components/scroll'
import { MotionLazyContainer } from '@/shared/components/animate'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { es } from 'date-fns/locale'

import './App.css'
import GlobalStyles from '@theme/overrides/components/GlobalStyles'

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
