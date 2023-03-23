import { BrowserRouter } from 'react-router-dom'
import { CustomTheme } from '@/theme'
import { SettingsProvider } from '@theme/context'
import { AppRouter } from '@/routes'
import { NotistackProvider } from '@/shared/components/notifications'
import { ScrollToTop } from '@/shared/components/scroll'
import { MotionLazyContainer } from '@/shared/components/animate'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <CustomTheme>
          <NotistackProvider>
            <MotionLazyContainer>
              <ScrollToTop />
              <AppRouter />
            </MotionLazyContainer>
          </NotistackProvider>
        </CustomTheme>
      </SettingsProvider>
    </BrowserRouter>
  )
}

export default App
