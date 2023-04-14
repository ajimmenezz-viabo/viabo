import { BrowserRouter } from 'react-router-dom'
import { CustomTheme } from '@/theme'
import { CollapseDrawerProvider, SettingsProvider } from '@theme/context'
import { AppRouter } from '@/routes'
import { NotistackProvider } from '@/shared/components/notifications'
import { ScrollToTop } from '@/shared/components/scroll'
import { MotionLazyContainer } from '@/shared/components/animate'

import './App.css'
import GlobalStyles from '@theme/overrides/components/GlobalStyles'

function App() {
  return (
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
  )
}

export default App
