'use client'

import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'
import { localStorageManager } from '@chakra-ui/react'
import { theme } from '#theme'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme} colorModeManager={localStorageManager}>
      <AuthProvider>{props.children}</AuthProvider>
    </SaasProvider>
  )
}
