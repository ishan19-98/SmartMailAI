import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export default function useAppContext() {
  const appContext = useContext(AppContext)

  return appContext
}
