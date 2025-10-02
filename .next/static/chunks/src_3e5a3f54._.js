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
"[project]/src/app/support/partners/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distributorLocations",
    ()=>distributorLocations,
    "sections",
    ()=>sections,
    "serviceLocations",
    ()=>serviceLocations
]);
const distributorLocations = [
    {
        city: "Barcelona",
        businesses: [
            {
                name: "LAR FERRETERO",
                address: "AV RIO QTA AVE MARIA Nº 16-1 COLINAS DEL NEVERI",
                cityState: "Barcelona Edo Anzoategui",
                phones: "0414-8195452"
            },
            {
                name: "MONIGAS ORIENTE",
                address: "AV COSTANERA CON AV EL EJERCITO C.C CAMINO REAL PB,LOCAL MODULO C L8",
                cityState: "Barcelona Edo Anzoategui",
                phones: "0424-8265100 / 0424-8749332"
            },
            {
                name: "SUMINISTROS EYLCA 6000",
                address: "C.C GOLD COUNTRY, PISO 4, LOCAL D11",
                cityState: "Barcelona Edo Anzoategui",
                phones: "0424-8268689 / 0412-2585601 / 0416-4701866"
            }
        ]
    },
    {
        city: "El Tigre",
        businesses: [
            {
                name: "FERRETERIA CELMA",
                address: "AV. FCO DE MIRANDA NRO 132, DIAGONAL A MEDITOTAL",
                cityState: "El Tigre Edo Anzoategui",
                phones: "0283-2352260 / 0283-2350710"
            },
            {
                name: "ZETA",
                address: "AV. FCO DE MIRANDA C/CALLE DIEZ SUR LOCAL 168 PUEBLO NUEVO SUR",
                cityState: "El Tigre Edo Anzoategui",
                phones: "0424-9382000"
            }
        ]
    },
    {
        city: "Lecheria",
        businesses: [
            {
                name: "CERAMICMANIA",
                address: "AV. INTERCOMUNAL C.C EMPRESARIAL LAS GARZAS, PB, LAS GARZAS",
                cityState: "Lecheria Edo Anzoategui",
                phones: "0414-3023609"
            },
            {
                name: "DECOGRIFOS",
                address: "C.C EL PEÑON LOCAL E14",
                cityState: "Lecheria Edo Anzoategui",
                phones: "0424-3734434"
            },
            {
                name: "DISTRIBUIDORA FERRELUX",
                address: "AV PPAL DE LECHERIA CC CENTRO EMPRESARIAL PICOVI NIVEL PB LOCAL 2",
                cityState: "Lecheria Edo Anzoategui",
                phones: "0414-8164732"
            },
            {
                name: "GRUPO CORPORATIVO LA COBRA",
                address: "CR 6 LOCAL Nº 7-16 ROMULO GALLEGOS",
                cityState: "Lecheria Edo Anzoategui",
                phones: "0414-7930086"
            },
            {
                name: "Monigas (Pto la Cruz)",
                address: "CC Vista Al Mar Calle 3 Local PB Casco Central",
                cityState: "Lecheria Edo Anzoategui",
                phones: "0424-8265100 / 0281-2688622 / 0281-2687444"
            }
        ]
    },
    {
        city: "Pto La Cruz",
        businesses: [
            {
                name: "FERRE KSA JM",
                address: "CALLE JUNCAL LOCAL Nº 18 CENTRO",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0414-8068629 / 0414-8095613"
            },
            {
                name: "FERRE SOLAR",
                address: "AV INTERCOMUNAL LOCAL Nº 510 SIERRA MAESTRA, POZUELOS",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0424-8342540"
            },
            {
                name: "FERRETERIA COMERCIAL LA COSTANERA",
                address: "AV FABRICIO OJEDA LOCAL Nº 2 ENTRADA AL BARRIO FERNANDEZ PADILLA",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0412-8696209"
            },
            {
                name: "FERRETODO",
                address: "AV MUNICIPAL, C.C MARIO SANCHEZ, LOCAL Nº M-5 PUEBLO NUEVO",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0424-8996114 / 0424-8696007 / 0424-8696025"
            },
            {
                name: "MEGA REPUESTOS CARIBE 88",
                address: "AV MUNICIPAL ENTRE CALLE SUCRE Y BUENOS AIRES EDIF IBERIA PB, LOCAL Nº 115 CENTRO",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0412-4314949 / 0424-8716681"
            },
            {
                name: "TU SUMINISTRO FAVORITO",
                address: "CALLE BOLIVAR, LOCAL Nº 156, CENTRO",
                cityState: "Pto La Cruz Edo Anzoategui",
                phones: "0424-8459532"
            }
        ]
    },
    {
        city: "Maracay",
        businesses: [
            {
                name: "ALBA ELECTRONIC",
                address: "CALLE AV MIRANDA LOCAL Nº 44 CENTRO",
                cityState: "Maracay Edo Aragua",
                phones: "0412-5007217"
            },
            {
                name: "Marco Emarket, C.A",
                address: "",
                cityState: "Maracay Edo Aragua",
                phones: "0424-3154466"
            }
        ]
    },
    {
        city: "San Joaquin",
        businesses: [
            {
                name: "FERRETERIA LAS CUMBRES",
                address: "AV FINAL AV. CASANOVA GODOY LOCAL GALPON Nº 12 Z/I METROPOLITANO",
                cityState: "San Joaquin Edo Aragua",
                phones: "0412-1573724"
            },
            {
                name: "MATERIALES SORRENTO",
                address: "AV DOCTOR MONTOYA CC LA PROVIDENCIA",
                cityState: "San Joaquin Edo Aragua",
                phones: "0414-1460231"
            }
        ]
    },
    {
        city: "Ciudad Guayana",
        businesses: [
            {
                name: "FERRETERIA PRINCIPAL PZO",
                address: "CALLE VENTAURI CON CARRERA NEKUIMA EDIF. DON REGALON PISO 1, ALTAVISTA",
                cityState: "Ciudad Guayana Edo Bolivar",
                phones: "0414-0940933"
            },
            {
                name: "MATERIALES CARONI",
                address: "Av Dalle Costa",
                cityState: "Ciudad Guayana Edo Bolivar",
                phones: "0424-9204262 / 0286-9311776 / 0286-9320172 / 0286-9320312"
            }
        ]
    },
    {
        city: "Pto Ordaz",
        businesses: [
            {
                name: "Ferremateriales La Fuerte",
                address: "Av. Principal local Pb Nro. 1 Castillito",
                cityState: "Pto Ordaz Edo Bolivar",
                phones: "0414-0959895"
            }
        ]
    },
    {
        city: "San Felix",
        businesses: [
            {
                name: "HIERROS SAN FELIX",
                address: "AV ANTONIO CISNEROS ZONA INDUSTRIAL CHIRICA",
                cityState: "San Felix Edo Bolivar",
                phones: "0286-7129900"
            }
        ]
    },
    {
        city: "Coro",
        businesses: [
            {
                name: "COSEIMPA CORO",
                address: "AV INTERCOMUNAL CORO LA VELA EDIF COSEIMPA PISO 1 SABANA LARGA",
                cityState: "Coro Edo Falcon",
                phones: "0424-6729724 / 0424-6144909"
            }
        ]
    },
    {
        city: "Judibana",
        businesses: [
            {
                name: "COSEIMPA",
                address: "AV INTERCOMUNAL ALI PRIMERA ESQ. C/CALIFORNIA CREOLANDIA",
                cityState: "Judibana Edo Falcon",
                phones: "0412-4096352 / 0414-6479255"
            }
        ]
    },
    {
        city: "Barquisimeto",
        businesses: [
            {
                name: "FERRETERIA EL RELAMPAGO",
                address: "CALLE 51 CON CARRERA 22 LOCAL Nº 22-6 OESTE",
                cityState: "Barquisimeto Edo Lara",
                phones: "0424-5601881 / 0251-4463195"
            }
        ]
    },
    {
        city: "Cabudare",
        businesses: [
            {
                name: "FERRETERIA CAMILA",
                address: "CALLE JUAN DE DIOS PONTE CON CALLE LA CRUZ - CENTRO",
                cityState: "Cabudare Edo Lara",
                phones: "0251-2620676"
            },
            {
                name: "FERRETERIA VARELA",
                address: "CALLE LIBERTADOR EDIF BURATE 2 PISO PB",
                cityState: "Cabudare Edo Lara",
                phones: "0414-0739566"
            }
        ]
    },
    {
        city: "Caracas",
        businesses: [
            {
                name: "Casa Caby",
                address: "Calle El Recreo, Edf. Nro. 6, local A,B,C. Sabana Grande",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-7620008 / 0212-7621037"
            },
            {
                name: "Ceramicas Rusti-Estrella",
                address: "Av. Avila, Qta. Trebol, nro. 13. San Bernadino",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-5778268 / 0212-5764908"
            },
            {
                name: "COMERCIAL FERROMONICA",
                address: "AV. ARTURO MICHELENA CON AV. MANUEL DIAZ R SANTA MONICA",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-6612045 / 0212-6613004"
            },
            {
                name: "DISTRIBUIDORA AAC 2012",
                address: "AV NUEVA GRANADA CON CALLE BRANGER LOCAL NRO 10-19",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-6310064"
            },
            {
                name: "DISTRIBUIDORA MARACANA",
                address: "ESQ DE ALCABALA A PELIGRO LOCAL NRO 3 URB LA CANDELARIA",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0424-1197351"
            },
            {
                name: "Ferreteria 42",
                address: "Av Fuerzas Armadas, de Socorro a Plaza España - Edif Mazal Altagracia",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0412-9077927 / 0212-5625003"
            },
            {
                name: "Ferreteria SDS",
                address: "Av. Panteon, Edf. San Bernardino Plaza, locales 3 y 4. La Candelaria",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-5501612 / 0212-5501024"
            },
            {
                name: "Materiales Brasil",
                address: "Esq. Saparados. La Candelaria",
                cityState: "Caracas Edo Distrito Capital",
                phones: "0212-5622090 / 0212-5625500"
            }
        ]
    },
    {
        city: "Carrizal",
        businesses: [
            {
                name: "FERREALTO",
                address: "CALLE ECTOR LOS BUDARES CC MONTE BELLO PLAZA PB LOCAL 7",
                cityState: "Carrizal Edo Miranda",
                phones: "0414-3788109"
            },
            {
                name: "FERRETERIA LA CALIZA",
                address: "AV EL LAGO CC COLINAS DE CARRIZAL NIVEL PB LOCAL 1 Y 2",
                cityState: "Carrizal Edo Miranda",
                phones: "0212-3834545"
            }
        ]
    },
    {
        city: "Charallave",
        businesses: [
            {
                name: "COMERCIAL FERROCHARA",
                address: "AV. BOLIVAR EDIFICIO FERROCHARA Nº 8-78",
                cityState: "Charallave Edo Miranda",
                phones: "0239-2480661 / 0239-2483066"
            },
            {
                name: "COMERCIAL TITANIC CENTER",
                address: "AV. BOLIVAR",
                cityState: "Charallave Edo Miranda",
                phones: "0239-2482222 / 0239-2486345"
            }
        ]
    },
    {
        city: "Guarenas",
        businesses: [
            {
                name: "Pall Ferreteria",
                address: "Av. Intercomunal Guarenas Guatire, parcela nro. LP1, (Diagonal al Buena Ventura)",
                cityState: "Guarenas Edo Miranda",
                phones: "0212-3811445 / 0212-3810291"
            }
        ]
    },
    {
        city: "Los Teques",
        businesses: [
            {
                name: "CENTRO FERRETERO FAZZI",
                address: "CTRA PANAMERICANA KM 25 EDIF DON ANGELO PISO 1 LOCAL PB EL LLANO",
                cityState: "Los Teques Edo Miranda",
                phones: "0412-7399467"
            },
            {
                name: "PINTURAS DE AUTOMOVILES AUTOPIN",
                address: "AV BICENTENARIA LOCAL FRENTE AL ANTIGUO DEPOSITO LA POLAR EL TAMBOR",
                cityState: "Los Teques Edo Miranda",
                phones: "0414-1351522"
            }
        ]
    },
    {
        city: "Mariche",
        businesses: [
            {
                name: "Centro Ferretero El Pico",
                address: "Filas de Mariche Km 6, El Limoncito",
                cityState: "Mariche Edo Miranda",
                phones: "0212-5322018 / 0212-5320551"
            }
        ]
    },
    {
        city: "San Antonio de los Altos",
        businesses: [
            {
                name: "FERREMATERIALES DATE SAN ANTONIO",
                address: "CTRA SAN ANTONIO-SAN DIEGO Nº CM-7176 LOCAL PARCELA Nº A URB LAS POLONIAS",
                cityState: "San Antonio de los Altos Edo Miranda",
                phones: "0212-3722260 / 0414-2499824"
            },
            {
                name: "Ferreteria Los Castores",
                address: "Av. Perimetral, C.C. Los Altos, Local A-2.C",
                cityState: "San Antonio de los Altos Edo Miranda",
                phones: "0212-3714779 / 0212-3713561"
            },
            {
                name: "FERRO-TOOL",
                address: "AV PRINCIPAL FRANCISCO LAS MINAS, Z/I LAS MINAS GALPON N-2",
                cityState: "San Antonio de los Altos Edo Miranda",
                phones: "0412-6837229"
            },
            {
                name: "TUBELEC",
                address: "A 50 mts de la Pza. Bolivar",
                cityState: "San Antonio de los Altos Edo Miranda",
                phones: "0212-3720078 / 0212-3720371"
            }
        ]
    },
    {
        city: "El Valle Del Espiritu Santo",
        businesses: [
            {
                name: "ELEKA",
                address: "Av 31 De Julio Edf. IACA Suites, Pb Guatamare",
                cityState: "El Valle Del Espiritu Santo Edo Nueva Esparta",
                phones: "0424-8625302 / 0414-7934801 / 0295-2870668"
            }
        ]
    },
    {
        city: "Juangriego",
        businesses: [
            {
                name: "COMERCIAL ALTAGRACIA",
                address: "CALLE ALTAGRACIA EDIF FINA PISO PB LOCAL S/N ALTAGRACIA",
                cityState: "Juangriego Edo Nueva Esparta",
                phones: "0295-2356311 / 0416-6962382 / 0412-0924296"
            }
        ]
    },
    {
        city: "Pampatar",
        businesses: [
            {
                name: "FERREMAR PAMPATAR",
                address: "AV ALDONZA MANRIQUE CASA Nº -4 URB PLAYAS DEL ANGEL",
                cityState: "Pampatar Edo Nueva Esparta",
                phones: "0414-9816699 / 0424-8050366"
            }
        ]
    },
    {
        city: "Porlamar",
        businesses: [
            {
                name: "Reprencentaciones La Fragata",
                address: "Av. Paseo Cultura Ramon Vasquez Brito, CC Boulevard Local S-4",
                cityState: "Porlamar Edo Nueva Esparta",
                phones: "0412-0949396 / 0295-2648911 / 0295-2638553"
            },
            {
                name: "SERVIBOMBAS MARGARITA",
                address: "CALLE STA. RITA, LA VECINDAD",
                cityState: "Porlamar Edo Nueva Esparta",
                phones: "0295-4170922 / 0295-2531893 / 0295-2532139"
            }
        ]
    }
];
const serviceLocations = [
    {
        city: "Barcelona",
        businesses: [
            {
                name: "SUMINISTROS EYLCA 6000 C.A",
                address: "CC Gold Country, piso 4 local D11",
                cityState: "Barcelona Edo Anzoátegui",
                phones: "0424-8268689 / 0416-4701866 / 0412-2585601"
            }
        ]
    },
    {
        city: "Maracay",
        businesses: [
            {
                name: "Multibrands Latina Maracay",
                address: "Av las Delicias, Centro Empresarial Europa local PB30",
                cityState: "Maracay Edo Aragua",
                phones: "0243-2413697 / 0414-4964031"
            }
        ]
    },
    {
        city: "Valencia",
        businesses: [
            {
                name: "Multibrands Latina Valencia",
                address: "Av Bolivar Norte Urb. El Recreo calle #158 N97-106",
                cityState: "Valencia Edo Carabobo",
                phones: "0424-4610357 / 0424-4610269"
            }
        ]
    },
    {
        city: "Caracas",
        businesses: [
            {
                name: "ANTONIO GUZZO C.A",
                address: "Av LAS PALMAS, EDIF GUAFRANSA BOLEITA SUR",
                cityState: "Caracas Edo Miranda",
                phones: "0424-1528928 / 0424-2970013"
            },
            {
                name: "Comercial JAB",
                address: "Av Ppal de Los Ruices, Edif Centro Corporativo, PB, Los Ruices",
                cityState: "Caracas Edo Miranda",
                phones: "0212-2326160 / 0424-2524095"
            },
            {
                name: "Termocenter",
                address: "Centro Comercial Santa FE",
                cityState: "Caracas Edo Miranda",
                phones: "0414-7784090"
            }
        ]
    },
    {
        city: "Porlamar",
        businesses: [
            {
                name: "SERVIBOMBAS MARGARITA",
                address: "CALLE STA. RITA, LA VECINDAD",
                cityState: "Porlamar Edo Nueva Esparta",
                phones: "0295-4170922 / 0295-2531893 / 0295-2532139"
            }
        ]
    },
    {
        city: "San Cristóbal",
        businesses: [
            {
                name: "Calentadores Durán",
                address: "CC Galería Los Proceres - Av Carabobo",
                cityState: "San Cristóbal Edo Táchira",
                phones: "0414-7185665 / 0276-13558878"
            }
        ]
    },
    {
        city: "Maracaibo",
        businesses: [
            {
                name: "Instavenca",
                address: "Av 79 Casa Nro 93-48 Urb Santa Fe I",
                cityState: "Maracaibo Edo Zulia",
                phones: "0414-6709332"
            }
        ]
    }
];
const sections = [
    {
        id: "distributors",
        label: "Distribuidores",
        title: "Distribuidores Termotronic y CBX",
        description: "Lista completa de aliados comerciales con dirección y teléfonos actualizados.",
        locations: distributorLocations
    },
    {
        id: "services",
        label: "Garantías y servicios",
        title: "Garantías y Servicios para Termotronic y CBX",
        description: "Centros autorizados para garantías y mantenimiento especializado.",
        countriesTitle: "Centros de Servicio Autorizados",
        locations: serviceLocations
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/cart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/payments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$support$2f$partners$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/support/partners/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CheckoutPage() {
    var _PAYMENT_METHODS_;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { items, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const baseTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[baseTotal]": ()=>items.reduce({
                "CheckoutPage.useMemo[baseTotal]": (acc, item)=>{
                    var _item_quantity;
                    return acc + item.price * ((_item_quantity = item.quantity) !== null && _item_quantity !== void 0 ? _item_quantity : 1);
                }
            }["CheckoutPage.useMemo[baseTotal]"], 0)
    }["CheckoutPage.useMemo[baseTotal]"], [
        items
    ]);
    const orderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[orderItems]": ()=>items.map({
                "CheckoutPage.useMemo[orderItems]": (item)=>{
                    var _item_quantity, _item_quantity1;
                    return {
                        key: item.id,
                        name: item.name,
                        quantity: (_item_quantity = item.quantity) !== null && _item_quantity !== void 0 ? _item_quantity : 1,
                        total: item.price * ((_item_quantity1 = item.quantity) !== null && _item_quantity1 !== void 0 ? _item_quantity1 : 1)
                    };
                }
            }["CheckoutPage.useMemo[orderItems]"])
    }["CheckoutPage.useMemo[orderItems]"], [
        items
    ]);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const [customerErrors, setCustomerErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [pickupOptions, setPickupOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPickupId, setSelectedPickupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fulfillmentMode, setFulfillmentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pickup");
    const [deliveryInfo, setDeliveryInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var _PAYMENT_METHODS__id;
    const [paymentMethodId, setPaymentMethodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_PAYMENT_METHODS__id = (_PAYMENT_METHODS_ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"][0]) === null || _PAYMENT_METHODS_ === void 0 ? void 0 : _PAYMENT_METHODS_.id) !== null && _PAYMENT_METHODS__id !== void 0 ? _PAYMENT_METHODS__id : "paypal");
    const selectedMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[selectedMethod]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].find({
                "CheckoutPage.useMemo[selectedMethod]": (method)=>method.id === paymentMethodId
            }["CheckoutPage.useMemo[selectedMethod]"])
    }["CheckoutPage.useMemo[selectedMethod]"], [
        paymentMethodId
    ]);
    const [paymentFields, setPaymentFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [paymentErrors, setPaymentErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [receiptPreference, setReceiptPreference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("email");
    const [paypalOrderId, setPaypalOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderResult, setOrderResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitState, setSubmitState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [submittedSummary, setSubmittedSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const deliveryFee = fulfillmentMode === "delivery" && deliveryInfo ? deliveryInfo.fee : 0;
    const orderTotal = baseTotal + deliveryFee;
    const phoneMasked = customer.phone ? "***-".concat(customer.phone.slice(-3)) : "No proporcionado";
    const canContinueStep1 = customer.name && customer.email && customer.address;
    const canContinueStep2 = fulfillmentMode === "pickup" && selectedPickupId || fulfillmentMode === "delivery" && deliveryInfo;
    const paypalSelected = paymentMethodId === "paypal" || paymentMethodId === "card";
    const canContinueStep3 = submitState !== "processing";
    if (!items.length && !submittedSummary && step !== 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-edge py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold",
                    children: "Tu carrito está vacío"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-slate-600",
                    children: "Agrega productos para iniciar el proceso de compra."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    var _orderResult_id, _submittedSummary_items, _submittedSummary_baseTotal, _submittedSummary_deliveryFee, _submittedSummary_orderTotal;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-edge py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stepper, {
                currentStep: step
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                title: "1. Información del cliente",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Nombre completo",
                                                id: "name",
                                                value: customer.name,
                                                onChange: (value)=>setCustomer((prev)=>({
                                                            ...prev,
                                                            name: value
                                                        })),
                                                error: customerErrors.name,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Correo electrónico",
                                                id: "email",
                                                type: "email",
                                                value: customer.email,
                                                onChange: (value)=>setCustomer((prev)=>({
                                                            ...prev,
                                                            email: value
                                                        })),
                                                error: customerErrors.email,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Teléfono (opcional)",
                                                id: "phone",
                                                value: customer.phone,
                                                onChange: (value)=>setCustomer((prev)=>({
                                                            ...prev,
                                                            phone: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Dirección",
                                                id: "address",
                                                value: customer.address,
                                                onChange: (value)=>setCustomer((prev)=>({
                                                            ...prev,
                                                            address: value
                                                        })),
                                                error: customerErrors.address,
                                                className: "md:col-span-2",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepActions, {
                                        onNext: ()=>{
                                            var _options_;
                                            const errors = {};
                                            if (!customer.name) errors.name = "Requerido";
                                            if (!customer.email) errors.email = "Requerido";
                                            if (!customer.address) errors.address = "Requerido";
                                            setCustomerErrors(errors);
                                            if (Object.keys(errors).length > 0) return;
                                            const options = derivePickupOptions(customer.address);
                                            console.log({
                                                step: "pickup-options",
                                                address: customer.address,
                                                options
                                            });
                                            setPickupOptions(options);
                                            var _options__id;
                                            setSelectedPickupId((_options__id = (_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.id) !== null && _options__id !== void 0 ? _options__id : "");
                                            const delivery = deriveDeliveryInfo(customer.address, options);
                                            setDeliveryInfo(delivery);
                                            if (delivery) {
                                                setFulfillmentMode("delivery");
                                            } else {
                                                setFulfillmentMode("pickup");
                                            }
                                            setStep(2);
                                        },
                                        nextLabel: "Continuar",
                                        nextDisabled: !canContinueStep1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                title: "2. Entrega y método de pago",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                                                children: "Modalidad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 md:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionButton, {
                                                        label: "Retiro en distribuidor",
                                                        description: "Elige el punto aliado más conveniente para retirar tu pedido.",
                                                        selected: fulfillmentMode === "pickup",
                                                        onClick: ()=>setFulfillmentMode("pickup")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionButton, {
                                                        label: "Entrega a domicilio",
                                                        description: "Coordinamos con el aliado más cercano y calculamos el cargo de envío.",
                                                        selected: fulfillmentMode === "delivery",
                                                        onClick: ()=>setFulfillmentMode("delivery")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                                                children: fulfillmentMode === "pickup" ? "Selecciona tu punto aliado" : "Entrega coordinada"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            fulfillmentMode === "pickup" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickupChooser, {
                                                options: pickupOptions,
                                                selectedId: selectedPickupId,
                                                onSelect: setSelectedPickupId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliverySummary, {
                                                info: deliveryInfo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                                                children: "Método de pago"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$payments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "rounded-xl border p-3 transition ".concat(paymentMethodId === method.id ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    className: "mt-1 accent-slate-900",
                                                                    checked: paymentMethodId === method.id,
                                                                    onChange: ()=>setPaymentMethodId(method.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold text-slate-900",
                                                                                    children: method.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                                    lineNumber: 221,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600",
                                                                                    children: method.currency
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                                    lineNumber: 222,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        method.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-sm text-slate-600",
                                                                            children: method.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, method.id, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepActions, {
                                        onBack: ()=>setStep(1),
                                        onNext: ()=>setStep(3),
                                        nextDisabled: !canContinueStep2,
                                        nextLabel: "Confirmar medios",
                                        backLabel: "Regresar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                title: "3. Pago y recibo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructionsList, {
                                                method: selectedMethod
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            selectedMethod.fields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4",
                                                children: selectedMethod.fields.map((field)=>{
                                                    var _paymentFields_field_id, _field_options, _paymentFields_field_id1;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-slate-700",
                                                                children: field.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 25
                                                            }, this),
                                                            field.type === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
                                                                value: (_paymentFields_field_id = paymentFields[field.id]) !== null && _paymentFields_field_id !== void 0 ? _paymentFields_field_id : "",
                                                                onChange: (event)=>setPaymentFields((prev)=>({
                                                                            ...prev,
                                                                            [field.id]: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Selecciona…"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    ((_field_options = field.options) !== null && _field_options !== void 0 ? _field_options : []).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: field.type === "email" ? "email" : "text",
                                                                placeholder: field.placeholder,
                                                                className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
                                                                value: (_paymentFields_field_id1 = paymentFields[field.id]) !== null && _paymentFields_field_id1 !== void 0 ? _paymentFields_field_id1 : "",
                                                                onChange: (event)=>setPaymentFields((prev)=>({
                                                                            ...prev,
                                                                            [field.id]: event.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 27
                                                            }, this),
                                                            paymentErrors[field.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-red-600",
                                                                children: paymentErrors[field.id]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, field.id, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 13
                                            }, this),
                                            paypalSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800",
                                                children: "Modo de simulación activo: el pago con PayPal/Tarjeta se aprobará automáticamente al confirmar el pedido y se generará una referencia interna."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "¿Cómo prefieres recibir tu comprobante?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-2 md:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "rounded-xl border px-3 py-2 text-sm ".concat(receiptPreference === "email" ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "receipt",
                                                                        className: "mr-2 accent-slate-900",
                                                                        checked: receiptPreference === "email",
                                                                        onChange: ()=>setReceiptPreference("email")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Enviar al correo: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: customer.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "rounded-xl border px-3 py-2 text-sm ".concat(receiptPreference === "phone" ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "receipt",
                                                                        className: "mr-2 accent-slate-900",
                                                                        checked: receiptPreference === "phone",
                                                                        onChange: ()=>setReceiptPreference("phone"),
                                                                        disabled: !customer.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "WhatsApp (",
                                                                    phoneMasked,
                                                                    ")",
                                                                    !customer.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-2 text-xs text-slate-500",
                                                                        children: "Agrega un número en el paso 1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepActions, {
                                        onBack: ()=>setStep(2),
                                        onNext: async ()=>{
                                            const fieldErrors = {};
                                            selectedMethod.fields.forEach((field)=>{
                                                if (field.required && !paymentFields[field.id]) {
                                                    fieldErrors[field.id] = "Requerido";
                                                }
                                            });
                                            if (receiptPreference === "phone" && !customer.phone) {
                                                fieldErrors.receipt = "Debes registrar un número de teléfono";
                                            }
                                            setPaymentErrors(fieldErrors);
                                            if (Object.keys(fieldErrors).length > 0) {
                                                return;
                                            }
                                            setSubmitState("processing");
                                            try {
                                                var _this, _this1, _this2;
                                                var _pickupOptions_find, _pickupOptions_find1, _pickupOptions_find2, _deliveryInfo_minutes;
                                                const payload = {
                                                    name: customer.name,
                                                    email: customer.email,
                                                    phone: customer.phone || null,
                                                    address: customer.address,
                                                    method: paymentMethodId,
                                                    currency: selectedMethod.currency,
                                                    amount: Math.round(orderTotal * 100),
                                                    items: orderItems.map((item)=>({
                                                            id: item.key,
                                                            name: item.name,
                                                            price: Math.round(item.total / item.quantity * 100),
                                                            quantity: item.quantity
                                                        })),
                                                    reference: (()=>{
                                                        if (paypalSelected) {
                                                            const generated = paypalOrderId !== null && paypalOrderId !== void 0 ? paypalOrderId : "mock-paypal-".concat(Date.now());
                                                            setPaypalOrderId(generated);
                                                            return generated;
                                                        }
                                                        var _paymentFields_reference;
                                                        return (_paymentFields_reference = paymentFields.reference) !== null && _paymentFields_reference !== void 0 ? _paymentFields_reference : null;
                                                    })(),
                                                    receiptPreference,
                                                    manualPaymentMethod: paymentMethodId,
                                                    fulfillmentType: fulfillmentMode === "pickup" ? "PICKUP" : "DELIVERY",
                                                    pickupLocationId: selectedPickupId || (deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.option.id) || null,
                                                    pickupLocationName: (_this = (_pickupOptions_find = pickupOptions.find((option)=>option.id === selectedPickupId)) !== null && _pickupOptions_find !== void 0 ? _pickupOptions_find : deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.option) === null || _this === void 0 ? void 0 : _this.name,
                                                    pickupLocationAddress: (_this1 = (_pickupOptions_find1 = pickupOptions.find((option)=>option.id === selectedPickupId)) !== null && _pickupOptions_find1 !== void 0 ? _pickupOptions_find1 : deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.option) === null || _this1 === void 0 ? void 0 : _this1.address,
                                                    fulfillmentLocationId: (_this2 = (_pickupOptions_find2 = pickupOptions.find((option)=>option.id === selectedPickupId)) !== null && _pickupOptions_find2 !== void 0 ? _pickupOptions_find2 : deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.option) === null || _this2 === void 0 ? void 0 : _this2.id,
                                                    deliveryEtaMinutes: (_deliveryInfo_minutes = deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.minutes) !== null && _deliveryInfo_minutes !== void 0 ? _deliveryInfo_minutes : null,
                                                    deliveryFee: deliveryInfo ? Math.round(deliveryInfo.fee * 100) : 0,
                                                    metadata: {
                                                        ...paymentFields,
                                                        ...paypalSelected ? {
                                                            simulation: true
                                                        } : {}
                                                    }
                                                };
                                                console.log("submit-order payload:\n" + JSON.stringify(payload, null, 2));
                                                const response = await fetch("/api/orders", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(payload)
                                                });
                                                if (!response.ok) {
                                                    throw new Error("Order creation failed");
                                                }
                                                const data = await response.json();
                                                const snapshotItems = orderItems.map((item)=>({
                                                        ...item
                                                    }));
                                                setSubmittedSummary({
                                                    items: snapshotItems,
                                                    baseTotal,
                                                    deliveryFee,
                                                    orderTotal
                                                });
                                                setOrderResult(data);
                                                setStep(4);
                                                setTimeout(()=>clear(), 0);
                                            } catch (error) {
                                                console.error(error);
                                                setPaymentErrors((prev)=>({
                                                        ...prev,
                                                        root: "No se pudo procesar el pedido. Intenta nuevamente."
                                                    }));
                                            } finally{
                                                setSubmitState("idle");
                                            }
                                        },
                                        nextDisabled: !canContinueStep3 || submitState === "processing",
                                        nextLabel: "Confirmar pedido",
                                        backLabel: "Regresar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    paymentErrors.root && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-red-600",
                                        children: paymentErrors.root
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                title: "4. Confirmación",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-semibold text-slate-900",
                                            children: (orderResult === null || orderResult === void 0 ? void 0 : orderResult.status) === "paid" ? "¡Gracias por su compra!" : "Gracias por su pedido"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-700",
                                            children: (orderResult === null || orderResult === void 0 ? void 0 : orderResult.status) === "paid" ? "Hemos registrado el pago y enviaremos el comprobante según su preferencia." : "Su solicitud quedó en revisión. Validaremos el pago manual en menos de 48 horas y recibirá su comprobante."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "Número de seguimiento:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        (_orderResult_id = orderResult === null || orderResult === void 0 ? void 0 : orderResult.id) !== null && _orderResult_id !== void 0 ? _orderResult_id : "-"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "Recibo vía:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        receiptPreference === "email" ? customer.email : phoneMasked
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline",
                                            onClick: ()=>router.push("/"),
                                            children: "Volver al inicio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/checkout/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderSummary, {
                            items: (_submittedSummary_items = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.items) !== null && _submittedSummary_items !== void 0 ? _submittedSummary_items : orderItems,
                            baseTotal: (_submittedSummary_baseTotal = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.baseTotal) !== null && _submittedSummary_baseTotal !== void 0 ? _submittedSummary_baseTotal : baseTotal,
                            deliveryFee: (_submittedSummary_deliveryFee = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.deliveryFee) !== null && _submittedSummary_deliveryFee !== void 0 ? _submittedSummary_deliveryFee : deliveryFee,
                            orderTotal: (_submittedSummary_orderTotal = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.orderTotal) !== null && _submittedSummary_orderTotal !== void 0 ? _submittedSummary_orderTotal : orderTotal,
                            deliveryInfo: fulfillmentMode === "delivery" ? deliveryInfo : null
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "LmgKMMXyYuXiLmKThQBabGKkUc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CheckoutPage;
function Stepper(param) {
    let { currentStep } = param;
    const steps = [
        "Información",
        "Entrega",
        "Pago",
        "Confirmación"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 grid gap-3 md:grid-cols-4",
        children: steps.map((label, index)=>{
            const stepNumber = index + 1;
            const completed = currentStep > stepNumber;
            const active = currentStep === stepNumber;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border px-4 py-3 text-sm transition ".concat(active ? "border-slate-900 bg-slate-900 text-white" : completed ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-600"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs uppercase tracking-[0.3em]",
                        children: [
                            "Paso ",
                            index + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 508,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 font-semibold",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 509,
                        columnNumber: 13
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 498,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 492,
        columnNumber: 5
    }, this);
}
_c1 = Stepper;
function StepCard(param) {
    let { title, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-slate-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 519,
        columnNumber: 5
    }, this);
}
_c2 = StepCard;
function Field(param) {
    let { label, id, value, onChange, error, type = "text", required, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block ".concat(className !== null && className !== void 0 ? className : ""),
        htmlFor: id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-slate-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: type,
                required: required,
                value: value,
                onChange: (event)=>onChange(event.target.value),
                className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 556,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 546,
        columnNumber: 5
    }, this);
}
_c3 = Field;
function StepActions(param) {
    let { onBack, onNext, nextDisabled, nextLabel, backLabel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end",
        children: [
            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                type: "button",
                className: "btn btn-outline sm:w-auto",
                children: backLabel !== null && backLabel !== void 0 ? backLabel : "Anterior"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 577,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-primary sm:w-auto",
                disabled: nextDisabled,
                onClick: onNext,
                children: nextLabel
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 575,
        columnNumber: 5
    }, this);
}
_c4 = StepActions;
function OptionButton(param) {
    let { label, description, selected, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "rounded-2xl border px-4 py-3 text-left transition ".concat(selected ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-slate-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-600",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
_c5 = OptionButton;
function PickupChooser(param) {
    let { options, selectedId, onSelect } = param;
    if (!options.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600",
            children: "Completa tu dirección para sugerirte aliados cercanos o contáctanos para coordinar la entrega."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 629,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-start gap-3 rounded-2xl border px-4 py-3 transition ".concat(selectedId === option.id ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "radio",
                        className: "mt-1 accent-slate-900",
                        checked: selectedId === option.id,
                        onChange: ()=>onSelect(option.id)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 646,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm font-semibold text-slate-900",
                                children: [
                                    option.name,
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700",
                                        children: "Recomendado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 653,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600",
                                children: option.address
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] uppercase tracking-wide text-slate-400",
                                children: option.cityState
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 662,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, this)
                ]
            }, option.id, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 638,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 636,
        columnNumber: 5
    }, this);
}
_c6 = PickupChooser;
function DeliverySummary(param) {
    let { info } = param;
    if (!info) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600",
            children: "Calcularemos el aliado más cercano una vez ingreses tu dirección completa."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200 bg-slate-900/5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-slate-900",
                children: "Aliado asignado"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 681,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-600",
                children: info.option.name
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-500",
                children: info.option.address
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Estimado: ",
                            info.minutes,
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 685,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Con tope: ",
                            info.minutesCapped,
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Cargo adicional: $",
                            info.fee.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-xs text-slate-600",
                children: "El costo de envío se calcula a razón de $0.50 por minuto (máximo 45 minutos), utilizando el aliado sugerido."
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 680,
        columnNumber: 5
    }, this);
}
_c7 = DeliverySummary;
function InstructionsList(param) {
    let { method } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200 bg-slate-900/5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold uppercase tracking-[0.2em] text-slate-500",
                children: "Instrucciones"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-1 text-sm text-slate-700",
                children: method.merchantInfo.map((info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: info.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 703,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-900",
                                children: info.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 704,
                                columnNumber: 13
                            }, this)
                        ]
                    }, info.label, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 700,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 698,
        columnNumber: 5
    }, this);
}
_c8 = InstructionsList;
function OrderSummary(param) {
    let { items, baseTotal, deliveryFee, orderTotal, deliveryInfo } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-slate-900",
                children: "Resumen del pedido"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-3 text-sm text-slate-700",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 731,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    item.total.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 734,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 730,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 728,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border-t border-slate-200 pt-4 text-sm text-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 740,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    baseTotal.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 739,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Envío"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 744,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: deliveryInfo ? "$".concat(deliveryFee.toFixed(2)) : "$0.00"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between text-base font-semibold text-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    orderTotal.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 747,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, this),
            deliveryInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl border border-slate-200 bg-slate-900/5 px-3 py-2 text-xs text-slate-600",
                children: [
                    "Se cobrará $0.50 por minuto estimado (tope 45 min). Estimado original: ",
                    deliveryInfo.minutes,
                    " min, aplicado: ",
                    deliveryInfo.minutesCapped,
                    " min."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 753,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 726,
        columnNumber: 5
    }, this);
}
_c9 = OrderSummary;
function derivePickupOptions(address) {
    if (!address) return [];
    const normalized = address.toLowerCase();
    const options = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$support$2f$partners$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributorLocations"].forEach((location)=>{
        location.businesses.forEach((business)=>{
            const cityFragments = business.cityState.toLowerCase().split(/\s|,/).filter(Boolean);
            let score = 0;
            cityFragments.forEach((fragment)=>{
                if (fragment.length > 3 && normalized.includes(fragment)) {
                    score += 2;
                }
            });
            if (normalized.includes(business.name.toLowerCase())) {
                score += 3;
            }
            if (!score && normalized.includes(location.city.toLowerCase())) {
                score += 1;
            }
            options.push({
                id: "".concat(business.name, "-").concat(business.address),
                name: business.name,
                address: business.address,
                cityState: business.cityState,
                score
            });
        });
    });
    const sorted = options.sort((a, b)=>b.score - a.score);
    return sorted.slice(0, 3).map((option, index)=>({
            ...option,
            score: option.score + (3 - index)
        }));
}
function deriveDeliveryInfo(address, options) {
    if (!address) return null;
    const candidates = options.length ? options : derivePickupOptions(address);
    if (!candidates.length) return null;
    const best = candidates[0];
    const minutesEstimated = Math.max(20, 30 - best.score * 2);
    const minutesCapped = Math.min(minutesEstimated, 45);
    console.log({
        step: "delivery-estimate",
        selectedAlly: best.id,
        minutesEstimated,
        minutesCapped
    });
    const fee = minutesCapped * 0.5;
    return {
        option: best,
        minutes: minutesEstimated,
        minutesCapped,
        fee
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "CheckoutPage");
__turbopack_context__.k.register(_c1, "Stepper");
__turbopack_context__.k.register(_c2, "StepCard");
__turbopack_context__.k.register(_c3, "Field");
__turbopack_context__.k.register(_c4, "StepActions");
__turbopack_context__.k.register(_c5, "OptionButton");
__turbopack_context__.k.register(_c6, "PickupChooser");
__turbopack_context__.k.register(_c7, "DeliverySummary");
__turbopack_context__.k.register(_c8, "InstructionsList");
__turbopack_context__.k.register(_c9, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3e5a3f54._.js.map