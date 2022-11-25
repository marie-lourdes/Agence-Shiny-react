import React from 'react'

function App({ children }) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment >
  )
}

export default App

/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)*/


