import { BrowserRouter } from 'react-router-dom'
import { CustomTheme } from '@/theme'
import { SettingsProvider } from '@theme/context'
import { AppRouter } from '@/routes'

import './App.css'

function App() {
  return (
    <SettingsProvider>
      <CustomTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CustomTheme>
    </SettingsProvider>
  )
}

export default App
