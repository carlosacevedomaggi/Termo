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
  // Only consider configured if we have a valid client ID (not empty and not a placeholder)
  const isConfigured = Boolean(
    rawClientId && 
    rawClientId.length > 0 && 
    rawClientId !== '<YOUR_PAYPAL_CLIENT_ID>' &&
    rawClientId !== 'sb'
  )
  
  if (!isConfigured && process.env.NODE_ENV !== 'production') {
    console.warn('NEXT_PUBLIC_PAYPAL_CLIENT_ID is not configured. PayPal payment buttons will be disabled. Set NEXT_PUBLIC_PAYPAL_CLIENT_ID in .env.local to enable PayPal payments.')
  }

  const options = useMemo<ReactPayPalScriptOptions>(() => ({
    'client-id': rawClientId || '',
    intent: 'CAPTURE',
    currency: 'USD',
  }), [rawClientId])

  // Only wrap with PayPalScriptProvider if we have a valid client ID
  if (!isConfigured) {
    return (
      <PayPalConfigContext.Provider value={{ isConfigured }}>
        {children}
      </PayPalConfigContext.Provider>
    )
  }

  return (
    <PayPalConfigContext.Provider value={{ isConfigured }}>
      <PayPalScriptProvider options={options}>
        {children}
      </PayPalScriptProvider>
    </PayPalConfigContext.Provider>
  )
}

