(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/shared/payments.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYMENT_METHODS",
    ()=>PAYMENT_METHODS,
    "VENEZUELAN_BANK_OPTIONS",
    ()=>VENEZUELAN_BANK_OPTIONS
]);
const VENEZUELAN_BANK_OPTIONS = [
    {
        label: 'Banco de Venezuela (0102)',
        value: '0102'
    },
    {
        label: 'Banesco (0134)',
        value: '0134'
    },
    {
        label: 'Mercantil (0105)',
        value: '0105'
    },
    {
        label: 'Provincial (0108)',
        value: '0108'
    },
    {
        label: 'BNC (0191)',
        value: '0191'
    }
];
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
    bankAccountNumber: '01341740720021814454'
};
const PAYMENT_METHODS = [
    {
        id: 'paypal',
        label: 'PayPal (USD)',
        description: 'Pay using your PayPal account',
        currency: 'USD',
        merchantInfo: [
            {
                label: 'PayPal Business',
                value: 'paypal@termotronic.com'
            }
        ],
        fields: [
            {
                id: 'paypalEmail',
                label: 'Correo PayPal',
                type: 'email',
                required: true
            },
            {
                id: 'paypalTxn',
                label: 'ID de transacción (opcional)',
                type: 'text',
                placeholder: 'p. ej. 9AB12345CD6789012'
            }
        ]
    },
    {
        id: 'card',
        label: 'Credit/Debit Card',
        description: 'Pay securely with your card',
        currency: 'USD',
        merchantInfo: [
            {
                label: 'Proveedor',
                value: 'PayPal Checkout'
            },
            {
                label: 'Tarjetas',
                value: 'Visa, Mastercard, American Express'
            }
        ],
        fields: [
            {
                id: 'cardHolder',
                label: 'Nombre en la tarjeta',
                type: 'text',
                required: true
            },
            {
                id: 'cardEmail',
                label: 'Correo del titular',
                type: 'email',
                required: true
            }
        ]
    },
    {
        id: 'zelle',
        label: 'Zelle (USD)',
        description: 'Transfer via Zelle in USD',
        currency: 'USD',
        merchantInfo: [
            {
                label: 'Recipient name',
                value: MERCHANT.zelleName
            },
            {
                label: 'Zelle email',
                value: MERCHANT.zelleEmail
            }
        ],
        fields: [
            {
                id: 'senderName',
                label: 'Nombre del remitente',
                type: 'text',
                required: true
            },
            {
                id: 'senderEmail',
                label: 'Correo del remitente',
                type: 'email',
                required: true
            },
            {
                id: 'confirmation',
                label: 'Número de confirmación (opcional)',
                type: 'text',
                placeholder: 'p. ej. ABC123'
            }
        ]
    },
    {
        id: 'pagomovil',
        label: 'Pago Móvil (VES)',
        description: 'Pago móvil interbancario en bolívares',
        currency: 'VES',
        merchantInfo: [
            {
                label: 'Banco',
                value: "".concat(MERCHANT.pmBankName, " (").concat(MERCHANT.pmBankCode, ")")
            },
            {
                label: 'Titular',
                value: MERCHANT.pmFullName
            },
            {
                label: 'Teléfono',
                value: MERCHANT.pmPhone
            },
            {
                label: 'Cédula/RIF',
                value: MERCHANT.pmNationalId
            }
        ],
        fields: [
            {
                id: 'payerPhone',
                label: 'Tu teléfono (Pago Móvil)',
                type: 'text',
                required: true,
                placeholder: '04xx-xxxxxxx'
            },
            {
                id: 'payerId',
                label: 'Tu cédula/RIF',
                type: 'text',
                required: true,
                placeholder: 'V-xxxxxxx'
            },
            {
                id: 'payerBank',
                label: 'Tu banco',
                type: 'select',
                required: true,
                options: VENEZUELAN_BANK_OPTIONS
            },
            {
                id: 'reference',
                label: 'Referencia de pago',
                type: 'text',
                required: true
            }
        ]
    },
    {
        id: 'bank',
        label: 'Depósito Banesco Verde (USD)',
        description: 'Depósito directo en cuenta Banesco Verde en dólares',
        currency: 'USD',
        merchantInfo: [
            {
                label: 'Banco',
                value: MERCHANT.bankName
            },
            {
                label: 'Tipo de cuenta',
                value: MERCHANT.bankAccountType
            },
            {
                label: 'Nº de cuenta',
                value: MERCHANT.bankAccountNumber
            },
            {
                label: 'Titular',
                value: MERCHANT.bankFullName
            },
            {
                label: 'RIF',
                value: MERCHANT.bankNationalId
            },
            {
                label: 'Instrucción',
                value: 'Deposita en taquilla y envía el comprobante a tienda@termotronic.com'
            }
        ],
        fields: [
            {
                id: 'depositDate',
                label: 'Fecha del depósito',
                type: 'text',
                required: true,
                placeholder: 'DD/MM/AAAA'
            },
            {
                id: 'reference',
                label: 'Número de comprobante',
                type: 'text',
                required: true
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/checkout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/cart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/payments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paypal$2f$react$2d$paypal$2d$js$2f$dist$2f$esm$2f$react$2d$paypal$2d$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paypal/react-paypal-js/dist/esm/react-paypal-js.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$PayPalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/PayPalProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CheckoutPage() {
    _s();
    const { items, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[total]": ()=>items.reduce({
                "CheckoutPage.useMemo[total]": (acc, i)=>{
                    var _i_quantity;
                    return acc + i.price * ((_i_quantity = i.quantity) !== null && _i_quantity !== void 0 ? _i_quantity : 1);
                }
            }["CheckoutPage.useMemo[total]"], 0)
    }["CheckoutPage.useMemo[total]"], [
        items
    ]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [selectedMethodId, setSelectedMethodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"][0].id);
    const selectedMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[selectedMethod]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].find({
                "CheckoutPage.useMemo[selectedMethod]": (m)=>m.id === selectedMethodId
            }["CheckoutPage.useMemo[selectedMethod]"])
    }["CheckoutPage.useMemo[selectedMethod]"], [
        selectedMethodId
    ]);
    const [fieldValues, setFieldValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [{ isPending }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paypal$2f$react$2d$paypal$2d$js$2f$dist$2f$esm$2f$react$2d$paypal$2d$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePayPalScriptReducer"])();
    const { isConfigured: isPayPalConfigured } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$PayPalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePayPalConfig"])();
    const onSubmit = async (e)=>{
        e.preventDefault();
        const valid = validateForm();
        if (!valid) return;
        if ((selectedMethod.id === 'paypal' || selectedMethod.id === 'card') && isPayPalConfigured) {
            // PayPal buttons handle submission
            return;
        }
        await finalizeOrder(selectedMethod.id);
    };
    const validateForm = ()=>{
        const newErrors = {};
        selectedMethod.fields.forEach((f)=>{
            if (f.required && !fieldValues[f.id]) newErrors[f.id] = 'Required';
        });
        if (!fieldValues['name']) newErrors['name'] = 'Required';
        if (!fieldValues['email']) newErrors['email'] = 'Required';
        if (!fieldValues['address']) newErrors['address'] = 'Required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const finalizeOrder = async (methodId, externalId)=>{
        setStatus('processing');
        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fieldValues['name'],
                    email: fieldValues['email'],
                    address: fieldValues['address'],
                    method: methodId,
                    currency: selectedMethod.currency,
                    amount: Math.round(total * 100),
                    items: orderItems.map((i)=>({
                            id: i.key,
                            name: i.name,
                            price: i.total / i.quantity,
                            quantity: i.quantity
                        })),
                    reference: externalId
                })
            });
            if (!res.ok) throw new Error('Order creation failed');
            const data = await res.json();
            console.log('Order created', data);
            setStatus('done');
            clear();
        } catch (err) {
            console.error(err);
            setStatus('idle');
        }
    };
    const orderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[orderItems]": ()=>items.map({
                "CheckoutPage.useMemo[orderItems]": (i)=>{
                    var _i_quantity, _i_quantity1;
                    return {
                        key: i.id,
                        name: i.name,
                        quantity: (_i_quantity = i.quantity) !== null && _i_quantity !== void 0 ? _i_quantity : 1,
                        total: i.price * ((_i_quantity1 = i.quantity) !== null && _i_quantity1 !== void 0 ? _i_quantity1 : 1)
                    };
                }
            }["CheckoutPage.useMemo[orderItems]"])
    }["CheckoutPage.useMemo[orderItems]"], [
        items
    ]);
    if (status === 'done') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-edge py-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-semibold",
                    children: "Thank you"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 opacity-80",
                    children: "Your order has been placed."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    var _fieldValues_name, _fieldValues_email, _fieldValues_address;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-edge py-14 grid lg:grid-cols-2 gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold mb-6",
                        children: "Checkout"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm opacity-70",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 w-full rounded-lg border border-border px-3 py-2",
                                                value: (_fieldValues_name = fieldValues['name']) !== null && _fieldValues_name !== void 0 ? _fieldValues_name : '',
                                                onChange: (e)=>setFieldValues((v)=>({
                                                            ...v,
                                                            name: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            errors['name'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600 mt-1",
                                                children: errors['name']
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm opacity-70",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "mt-1 w-full rounded-lg border border-border px-3 py-2",
                                                value: (_fieldValues_email = fieldValues['email']) !== null && _fieldValues_email !== void 0 ? _fieldValues_email : '',
                                                onChange: (e)=>setFieldValues((v)=>({
                                                            ...v,
                                                            email: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            errors['email'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600 mt-1",
                                                children: errors['email']
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm opacity-70",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 w-full rounded-lg border border-border px-3 py-2",
                                                value: (_fieldValues_address = fieldValues['address']) !== null && _fieldValues_address !== void 0 ? _fieldValues_address : '',
                                                onChange: (e)=>setFieldValues((v)=>({
                                                            ...v,
                                                            address: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            errors['address'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600 mt-1",
                                                children: errors['address']
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: "Payment method"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "border rounded-xl p-3 cursor-pointer transition-colors ".concat(selectedMethodId === m.id ? 'border-black bg-black/[0.02]' : 'border-border hover:bg-muted'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "payment",
                                                            className: "accent-black",
                                                            checked: selectedMethodId === m.id,
                                                            onChange: ()=>setSelectedMethodId(m.id)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: m.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 114,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs opacity-70",
                                                                            children: m.currency
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 23
                                                                }, this),
                                                                m.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs opacity-70 mt-0.5",
                                                                    children: m.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            }, m.id, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium mb-2",
                                                children: "Instructions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm space-y-1",
                                                children: selectedMethod.merchantInfo.map((info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-70",
                                                                children: info.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: info.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, info.label, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            selectedMethod.id === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex items-center gap-3 opacity-80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: "We accept"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold border px-1.5 py-0.5 rounded",
                                                                children: "VISA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold border px-1.5 py-0.5 rounded",
                                                                children: "Mastercard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold border px-1.5 py-0.5 rounded",
                                                                children: "AmEx"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4",
                                        children: selectedMethod.fields.map((f)=>{
                                            var _fieldValues_f_id, _f_options, _fieldValues_f_id1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm opacity-70",
                                                        children: f.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    f.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white",
                                                        value: (_fieldValues_f_id = fieldValues[f.id]) !== null && _fieldValues_f_id !== void 0 ? _fieldValues_f_id : '',
                                                        onChange: (e)=>setFieldValues((v)=>({
                                                                    ...v,
                                                                    [f.id]: e.target.value
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select…"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this),
                                                            ((_f_options = f.options) !== null && _f_options !== void 0 ? _f_options : []).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: o.value,
                                                                    children: o.label
                                                                }, o.value, false, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 51
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: f.type === 'email' ? 'email' : 'text',
                                                        placeholder: f.placeholder,
                                                        className: "mt-1 w-full rounded-lg border border-border px-3 py-2",
                                                        value: (_fieldValues_f_id1 = fieldValues[f.id]) !== null && _fieldValues_f_id1 !== void 0 ? _fieldValues_f_id1 : '',
                                                        onChange: (e)=>setFieldValues((v)=>({
                                                                    ...v,
                                                                    [f.id]: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors[f.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-red-600 mt-1",
                                                        children: errors[f.id]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, f.id, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    (selectedMethod.id === 'paypal' || selectedMethod.id === 'card') && isPayPalConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paypal$2f$react$2d$paypal$2d$js$2f$dist$2f$esm$2f$react$2d$paypal$2d$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PayPalButtons"], {
                                            style: {
                                                layout: 'vertical',
                                                color: 'gold',
                                                shape: 'rect',
                                                label: selectedMethod.id === 'paypal' ? 'paypal' : 'pay'
                                            },
                                            fundingSource: selectedMethod.id === 'card' ? 'card' : undefined,
                                            disabled: status === 'processing' || isPending,
                                            createOrder: (_, actions)=>{
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                currency_code: selectedMethod.currency,
                                                                value: total.toFixed(2)
                                                            }
                                                        }
                                                    ]
                                                });
                                            },
                                            onApprove: async (_, actions)=>{
                                                var _actions_order_capture, _actions_order;
                                                const details = await ((_actions_order = actions.order) === null || _actions_order === void 0 ? void 0 : (_actions_order_capture = _actions_order.capture) === null || _actions_order_capture === void 0 ? void 0 : _actions_order_capture.call(_actions_order));
                                                var _details_id;
                                                const externalId = (_details_id = details === null || details === void 0 ? void 0 : details.id) !== null && _details_id !== void 0 ? _details_id : 'paypal-order';
                                                await finalizeOrder(selectedMethod.id, externalId);
                                            },
                                            onError: (err)=>{
                                                console.error('PayPal error', err);
                                                setStatus('idle');
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    (selectedMethod.id === 'paypal' || selectedMethod.id === 'card') && !isPayPalConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-orange-300 bg-orange-50 px-4 py-3 text-sm text-orange-800",
                                        children: "Configura `NEXT_PUBLIC_PAYPAL_CLIENT_ID` para habilitar los pagos en línea. Mientras tanto, por favor selecciona uno de los métodos manuales."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: status === 'processing',
                                        className: "btn btn-primary w-full",
                                        children: status === 'processing' ? 'Processing…' : 'Place order'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-border rounded-xl p-5 h-fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium mb-3",
                        children: "Order Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: orderItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            item.name,
                                            " × ",
                                            item.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "$",
                                            item.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-70",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    "$",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "rbmuTVQncaXK60JvePyk5XF/sfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paypal$2f$react$2d$paypal$2d$js$2f$dist$2f$esm$2f$react$2d$paypal$2d$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePayPalScriptReducer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$PayPalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePayPalConfig"]
    ];
});
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bc4fe2d7._.js.map