import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import NavigationService from '@/services/Navigation'
import { HOME_PAGE_PATH, TOKEN_STORAGE_KEY, CALENDAR_PAGE_PATH } from '@/constants'

export const useRedirectIfAuthorized = setLoadingCallback => {
  useEffect(() => {
    setLoadingCallback(true)
    AsyncStorage.getItem(TOKEN_STORAGE_KEY).then(token => {
      if (token) {
        NavigationService.navigate(CALENDAR_PAGE_PATH)
      } else {
        setLoadingCallback(false)
      }
    })
  }, [])
}
