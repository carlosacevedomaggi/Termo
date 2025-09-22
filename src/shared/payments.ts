export type PaymentCurrency = 'USD' | 'VES' | 'USDT'

export type PaymentField = {
  id: string
  label: string
  type: 'text' | 'email' | 'select'
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}

export type PaymentMethod = {
  id: 'zelle' | 'pagomovil' | 'bank' | 'binance' | 'card' | 'paypal'
  label: string
  description?: string
  currency: PaymentCurrency
  merchantInfo: { label: string; value: string }[]
  fields: PaymentField[]
}

export const VENEZUELAN_BANK_OPTIONS: { label: string; value: string }[] = [
  { label: 'Banco de Venezuela (0102)', value: '0102' },
  { label: 'Banesco (0134)', value: '0134' },
  { label: 'Mercantil (0105)', value: '0105' },
  { label: 'Provincial (0108)', value: '0108' },
  { label: 'BNC (0191)', value: '0191' },
]

const MERCHANT = {
  zelleName: 'TerMo Store',
  zelleEmail: 'your-zelle-email@example.com',
  pmFullName: 'TerMo Store, C.A.',
  pmPhone: '0412-0000000',
  pmNationalId: 'V-12345678',
  pmBankName: 'Banesco',
  pmBankCode: '0134',
  bankFullName: 'TerMo Store, C.A.',
  bankNationalId: 'J-12345678-9',
  bankName: 'Mercantil',
  bankAccountType: 'Cuenta Corriente',
  bankAccountNumber: '0105-0000-00-0000000000',
  binancePayId: '123456789',
  usdtTrc20Address: 'Txxxxxxxxxxxxxxxxxxxxxxxxxxxx',
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'paypal',
    label: 'PayPal (USD)',
    description: 'Pay using your PayPal account',
    currency: 'USD',
    merchantInfo: [
      { label: 'PayPal', value: 'paypal-business@example.com' },
    ],
    fields: [
      { id: 'paypalEmail', label: 'Your PayPal email', type: 'email', required: true },
      { id: 'paypalTxn', label: 'Transaction ID (optional)', type: 'text', placeholder: 'e.g., 9AB12345CD6789012' },
    ],
  },
  {
    id: 'card',
    label: 'Credit/Debit Card',
    description: 'Pay securely with your card',
    currency: 'USD',
    merchantInfo: [
      { label: 'Status', value: 'Enabled' },
    ],
    fields: [
      { id: 'cardNumber', label: 'Card number', type: 'text', required: true, placeholder: '1234 5678 9012 3456' },
      { id: 'cardExpiry', label: 'Expiry (MM/YY)', type: 'text', required: true, placeholder: 'MM/YY' },
      { id: 'cardCvv', label: 'CVV', type: 'text', required: true, placeholder: '123' },
      { id: 'nationalId', label: 'N° de cédula', type: 'text', required: true, placeholder: 'V-00000000' },
    ],
  },
  {
    id: 'zelle',
    label: 'Zelle (USD)',
    description: 'Transfer via Zelle in USD',
    currency: 'USD',
    merchantInfo: [
      { label: 'Recipient name', value: MERCHANT.zelleName },
      { label: 'Zelle email', value: MERCHANT.zelleEmail },
    ],
    fields: [
      { id: 'senderName', label: 'Sender full name', type: 'text', required: true },
      { id: 'senderEmail', label: 'Sender email', type: 'email', required: true },
      { id: 'confirmation', label: 'Confirmation number (optional)', type: 'text', placeholder: 'e.g., ABC123' },
    ],
  },
  {
    id: 'pagomovil',
    label: 'Pago Móvil (VES)',
    description: 'Pago móvil interbancario en bolívares',
    currency: 'VES',
    merchantInfo: [
      { label: 'Banco', value: `${MERCHANT.pmBankName} (${MERCHANT.pmBankCode})` },
      { label: 'Titular', value: MERCHANT.pmFullName },
      { label: 'Teléfono', value: MERCHANT.pmPhone },
      { label: 'Cédula/RIF', value: MERCHANT.pmNationalId },
    ],
    fields: [
      { id: 'payerPhone', label: 'Tu teléfono (Pago Móvil)', type: 'text', required: true, placeholder: '04xx-xxxxxxx' },
      { id: 'payerId', label: 'Tu cédula/RIF', type: 'text', required: true, placeholder: 'V-xxxxxxx' },
      { id: 'payerBank', label: 'Tu banco', type: 'select', required: true, options: VENEZUELAN_BANK_OPTIONS },
      { id: 'reference', label: 'Referencia de pago', type: 'text', required: true },
    ],
  },
  {
    id: 'bank',
    label: 'Transferencia bancaria (VES)',
    description: 'Transferencia bancaria tradicional en bolívares',
    currency: 'VES',
    merchantInfo: [
      { label: 'Banco', value: MERCHANT.bankName },
      { label: 'Tipo de cuenta', value: MERCHANT.bankAccountType },
      { label: 'Nº de cuenta', value: MERCHANT.bankAccountNumber },
      { label: 'Titular', value: MERCHANT.bankFullName },
      { label: 'Cédula/RIF', value: MERCHANT.bankNationalId },
    ],
    fields: [
      { id: 'payerBank', label: 'Tu banco', type: 'select', required: true, options: VENEZUELAN_BANK_OPTIONS },
      { id: 'reference', label: 'Referencia de transferencia', type: 'text', required: true },
    ],
  },
  {
    id: 'binance',
    label: 'Binance Pay / USDT',
    description: 'Pago en USDT (Binance Pay o TRC20)',
    currency: 'USDT',
    merchantInfo: [
      { label: 'Binance Pay ID', value: MERCHANT.binancePayId },
      { label: 'USDT TRC20', value: MERCHANT.usdtTrc20Address },
    ],
    fields: [
      { id: 'payerHandle', label: 'Tu usuario (o email) de Binance', type: 'text', required: true },
      { id: 'txid', label: 'TXID / Comprobante', type: 'text', placeholder: 'Opcional' },
    ],
  },
]


