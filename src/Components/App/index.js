import React from 'react'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import { Provider } from 'Store'
/*
* Overwriting default theme for ui-material
*/
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})

/*
* <App /> component serves as entrypoint for the provider and wraps the entire application to pass the state down
*/
const App = ({ children }) => (
  <Provider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </Provider>
)

export default App
