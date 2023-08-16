import React from 'react'
import AppRouter from './router/AppRouter'
import { AppTheme } from './theme'

const DisneyApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </>
  )
}

export default DisneyApp
