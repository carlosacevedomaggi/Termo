'use client'

import { createContext, useContext, useMemo } from 'react'
import { PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js'

type PayPalConfig = {
  isConfigured: boolean
}

const PayPalConfigContext = createContext<PayPalConfig>({ isConfigured: false })

export function usePayPalConfig() {
  return useContext(PayPalConfigContext)
}

type PayPalProviderProps = {
  children: React.ReactNode
}

export function PayPalProvider({ children }: PayPalProviderProps) {
  const rawClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const isConfigured = Boolean(rawClientId && rawClientId.length > 0)
  if (!isConfigured && process.env.NODE_ENV !== 'production') {
    console.warn('NEXT_PUBLIC_PAYPAL_CLIENT_ID is not defined; using PayPal sandbox client id (sb). Configure a real key for production.')
  }
  const clientId = isConfigured ? rawClientId! : 'sb'
  const options = useMemo<ReactPayPalScriptOptions>(() => ({
    'client-id': clientId,
    intent: 'CAPTURE',
    currency: 'USD',
  }), [clientId])

  return (
    <PayPalConfigContext.Provider value={{ isConfigured }}>
      <PayPalScriptProvider options={options} deferLoading={!isConfigured}>
        {children}
      </PayPalScriptProvider>
    </PayPalConfigContext.Provider>
  )
}

