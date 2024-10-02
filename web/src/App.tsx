import { RouterProvider } from 'react-router-dom';
import Router from './components/navigation/Routing/Router';
import { ThemeProvider } from './components/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
