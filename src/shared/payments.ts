export type PaymentCurrency = 'USD' | 'VES'

export type PaymentField = {
  id: string
  label: string
  type: 'text' | 'email' | 'select'
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}

export type PaymentMethod = {
  id: 'zelle' | 'pagomovil' | 'bank' | 'card' | 'paypal'
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
  zelleName: 'INDUSTRIAS TERMOTRONIC',
  zelleEmail: 'pagos@termotronic.com',
  pmFullName: 'INDUSTRIAS TERMOTRONIC',
  pmPhone: '0412-TERMOTRO',
  pmNationalId: 'J-301781899',
  pmBankName: 'Banesco',
  pmBankCode: '0134',
  bankFullName: 'INDUSTRIAS TERMOTRONIC',
  bankNationalId: 'J-301781899',
  bankName: 'Banesco',
  bankAccountType: 'Cuenta Verde Efectivo US$',
  bankAccountNumber: '01341740720021814454',
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'paypal',
    label: 'PayPal (USD)',
    description: 'Pay using your PayPal account',
    currency: 'USD',
    merchantInfo: [
      { label: 'PayPal Business', value: 'paypal@termotronic.com' },
    ],
    fields: [
      { id: 'paypalEmail', label: 'Correo PayPal', type: 'email', required: true },
      { id: 'paypalTxn', label: 'ID de transacción (opcional)', type: 'text', placeholder: 'p. ej. 9AB12345CD6789012' },
    ],
  },
  {
    id: 'card',
    label: 'Credit/Debit Card',
    description: 'Pay securely with your card',
    currency: 'USD',
    merchantInfo: [
      { label: 'Proveedor', value: 'PayPal Checkout' },
      { label: 'Tarjetas', value: 'Visa, Mastercard, American Express' },
    ],
    fields: [
      { id: 'cardHolder', label: 'Nombre en la tarjeta', type: 'text', required: true },
      { id: 'cardEmail', label: 'Correo del titular', type: 'email', required: true },
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
      { id: 'senderName', label: 'Nombre del remitente', type: 'text', required: true },
      { id: 'senderEmail', label: 'Correo del remitente', type: 'email', required: true },
      { id: 'confirmation', label: 'Número de confirmación (opcional)', type: 'text', placeholder: 'p. ej. ABC123' },
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
    label: 'Depósito Banesco Verde (USD)',
    description: 'Depósito directo en cuenta Banesco Verde en dólares',
    currency: 'USD',
    merchantInfo: [
      { label: 'Banco', value: MERCHANT.bankName },
      { label: 'Tipo de cuenta', value: MERCHANT.bankAccountType },
      { label: 'Nº de cuenta', value: MERCHANT.bankAccountNumber },
      { label: 'Titular', value: MERCHANT.bankFullName },
      { label: 'RIF', value: MERCHANT.bankNationalId },
      { label: 'Instrucción', value: 'Deposita en taquilla y envía el comprobante a tienda@termotronic.com' },
    ],
    fields: [
      { id: 'depositDate', label: 'Fecha del depósito', type: 'text', required: true, placeholder: 'DD/MM/AAAA' },
      { id: 'reference', label: 'Número de comprobante', type: 'text', required: true },
    ],
  },
]


