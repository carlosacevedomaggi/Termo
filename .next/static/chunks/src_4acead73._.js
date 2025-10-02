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
"[project]/src/data/partner-coordinates.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"LAR FERRETERO|AV RIO QTA AVE MARIA Nº 16-1 COLINAS DEL NEVERI|Barcelona Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"LAR FERRETERO\",\"address\":\"AV RIO QTA AVE MARIA Nº 16-1 COLINAS DEL NEVERI\",\"cityState\":\"Barcelona Edo Anzoategui\",\"lat\":8.893672,\"lng\":-69.875222,\"source\":\"ors\"},\"MONIGAS ORIENTE|AV COSTANERA CON AV EL EJERCITO C.C CAMINO REAL PB,LOCAL MODULO C L8|Barcelona Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"MONIGAS ORIENTE\",\"address\":\"AV COSTANERA CON AV EL EJERCITO C.C CAMINO REAL PB,LOCAL MODULO C L8\",\"cityState\":\"Barcelona Edo Anzoategui\",\"lat\":10.133,\"lng\":-64.692001,\"source\":\"ors\"},\"SUMINISTROS EYLCA 6000|C.C GOLD COUNTRY, PISO 4, LOCAL D11|Barcelona Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"SUMINISTROS EYLCA 6000\",\"address\":\"C.C GOLD COUNTRY, PISO 4, LOCAL D11\",\"cityState\":\"Barcelona Edo Anzoategui\",\"lat\":10.656655,\"lng\":-71.606645,\"source\":\"ors\"},\"FERRETERIA CELMA|AV. FCO DE MIRANDA NRO 132, DIAGONAL A MEDITOTAL|El Tigre Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"FERRETERIA CELMA\",\"address\":\"AV. FCO DE MIRANDA NRO 132, DIAGONAL A MEDITOTAL\",\"cityState\":\"El Tigre Edo Anzoategui\",\"lat\":7.18646,\"lng\":-64.568705,\"source\":\"ors\"},\"ZETA|AV. FCO DE MIRANDA C/CALLE DIEZ SUR LOCAL 168 PUEBLO NUEVO SUR|El Tigre Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"ZETA\",\"address\":\"AV. FCO DE MIRANDA C/CALLE DIEZ SUR LOCAL 168 PUEBLO NUEVO SUR\",\"cityState\":\"El Tigre Edo Anzoategui\",\"lat\":8.890513,\"lng\":-64.248353,\"source\":\"ors\"},\"CERAMICMANIA|AV. INTERCOMUNAL C.C EMPRESARIAL LAS GARZAS, PB, LAS GARZAS|Lecheria Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"CERAMICMANIA\",\"address\":\"AV. INTERCOMUNAL C.C EMPRESARIAL LAS GARZAS, PB, LAS GARZAS\",\"cityState\":\"Lecheria Edo Anzoategui\",\"lat\":10.18183,\"lng\":-64.66625,\"source\":\"opencage\"},\"DECOGRIFOS|C.C EL PEÑON LOCAL E14|Lecheria Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"DECOGRIFOS\",\"address\":\"C.C EL PEÑON LOCAL E14\",\"cityState\":\"Lecheria Edo Anzoategui\",\"lat\":9,\"lng\":-64.33333,\"source\":\"opencage\"},\"Monigas (Pto la Cruz)|CC Vista Al Mar Calle 3 Local PB Casco Central|Lecheria Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"Monigas (Pto la Cruz)\",\"address\":\"CC Vista Al Mar Calle 3 Local PB Casco Central\",\"cityState\":\"Lecheria Edo Anzoategui\",\"lat\":8.71246,\"lng\":-64.193859,\"source\":\"ors\"},\"FERRE KSA JM|CALLE JUNCAL LOCAL Nº 18 CENTRO|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"FERRE KSA JM\",\"address\":\"CALLE JUNCAL LOCAL Nº 18 CENTRO\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":8.71246,\"lng\":-64.193859,\"source\":\"ors\"},\"FERRETERIA COMERCIAL LA COSTANERA|AV FABRICIO OJEDA LOCAL Nº 2 ENTRADA AL BARRIO FERNANDEZ PADILLA|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"FERRETERIA COMERCIAL LA COSTANERA\",\"address\":\"AV FABRICIO OJEDA LOCAL Nº 2 ENTRADA AL BARRIO FERNANDEZ PADILLA\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":8.71246,\"lng\":-64.193859,\"source\":\"ors\"},\"FERRETODO|AV MUNICIPAL, C.C MARIO SANCHEZ, LOCAL Nº M-5 PUEBLO NUEVO|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"FERRETODO\",\"address\":\"AV MUNICIPAL, C.C MARIO SANCHEZ, LOCAL Nº M-5 PUEBLO NUEVO\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":10.20412,\"lng\":-64.634211,\"source\":\"ors\"},\"TU SUMINISTRO FAVORITO|CALLE BOLIVAR, LOCAL Nº 156, CENTRO|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"TU SUMINISTRO FAVORITO\",\"address\":\"CALLE BOLIVAR, LOCAL Nº 156, CENTRO\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":8.71246,\"lng\":-64.193859,\"source\":\"ors\"},\"ALBA ELECTRONIC|CALLE AV MIRANDA LOCAL Nº 44 CENTRO|Maracay Edo Aragua\":{\"type\":\"distributor\",\"name\":\"ALBA ELECTRONIC\",\"address\":\"CALLE AV MIRANDA LOCAL Nº 44 CENTRO\",\"cityState\":\"Maracay Edo Aragua\",\"lat\":10,\"lng\":-67.16667,\"source\":\"ors\"},\"Marco Emarket, C.A||Maracay Edo Aragua\":{\"type\":\"distributor\",\"name\":\"Marco Emarket, C.A\",\"address\":\"\",\"cityState\":\"Maracay Edo Aragua\",\"lat\":10,\"lng\":-67.16667,\"source\":\"opencage\"},\"FERRETERIA LAS CUMBRES|AV FINAL AV. CASANOVA GODOY LOCAL GALPON Nº 12 Z/I METROPOLITANO|San Joaquin Edo Aragua\":{\"type\":\"distributor\",\"name\":\"FERRETERIA LAS CUMBRES\",\"address\":\"AV FINAL AV. CASANOVA GODOY LOCAL GALPON Nº 12 Z/I METROPOLITANO\",\"cityState\":\"San Joaquin Edo Aragua\",\"lat\":10,\"lng\":-67.16667,\"source\":\"ors\"},\"MATERIALES SORRENTO|AV DOCTOR MONTOYA CC LA PROVIDENCIA|San Joaquin Edo Aragua\":{\"type\":\"distributor\",\"name\":\"MATERIALES SORRENTO\",\"address\":\"AV DOCTOR MONTOYA CC LA PROVIDENCIA\",\"cityState\":\"San Joaquin Edo Aragua\",\"lat\":10.263,\"lng\":-67.78579,\"source\":\"opencage\"},\"FERRETERIA PRINCIPAL PZO|CALLE VENTAURI CON CARRERA NEKUIMA EDIF. DON REGALON PISO 1, ALTAVISTA|Ciudad Guayana Edo Bolivar\":{\"type\":\"distributor\",\"name\":\"FERRETERIA PRINCIPAL PZO\",\"address\":\"CALLE VENTAURI CON CARRERA NEKUIMA EDIF. DON REGALON PISO 1, ALTAVISTA\",\"cityState\":\"Ciudad Guayana Edo Bolivar\",\"lat\":8.363194,\"lng\":-62.637062,\"source\":\"ors\"},\"MATERIALES CARONI|Av Dalle Costa|Ciudad Guayana Edo Bolivar\":{\"type\":\"distributor\",\"name\":\"MATERIALES CARONI\",\"address\":\"Av Dalle Costa\",\"cityState\":\"Ciudad Guayana Edo Bolivar\",\"lat\":6.33333,\"lng\":-63.5,\"source\":\"opencage\"},\"Ferremateriales La Fuerte|Av. Principal local Pb Nro. 1 Castillito|Pto Ordaz Edo Bolivar\":{\"type\":\"distributor\",\"name\":\"Ferremateriales La Fuerte\",\"address\":\"Av. Principal local Pb Nro. 1 Castillito\",\"cityState\":\"Pto Ordaz Edo Bolivar\",\"lat\":10.199914,\"lng\":-64.617442,\"source\":\"ors\"},\"HIERROS SAN FELIX|AV ANTONIO CISNEROS ZONA INDUSTRIAL CHIRICA|San Felix Edo Bolivar\":{\"type\":\"distributor\",\"name\":\"HIERROS SAN FELIX\",\"address\":\"AV ANTONIO CISNEROS ZONA INDUSTRIAL CHIRICA\",\"cityState\":\"San Felix Edo Bolivar\",\"lat\":6.33333,\"lng\":-63.5,\"source\":\"opencage\"},\"COSEIMPA CORO|AV INTERCOMUNAL CORO LA VELA EDIF COSEIMPA PISO 1 SABANA LARGA|Coro Edo Falcon\":{\"type\":\"distributor\",\"name\":\"COSEIMPA CORO\",\"address\":\"AV INTERCOMUNAL CORO LA VELA EDIF COSEIMPA PISO 1 SABANA LARGA\",\"cityState\":\"Coro Edo Falcon\",\"lat\":11.4045,\"lng\":-69.67344,\"source\":\"ors\"},\"COSEIMPA|AV INTERCOMUNAL ALI PRIMERA ESQ. C/CALIFORNIA CREOLANDIA|Judibana Edo Falcon\":{\"type\":\"distributor\",\"name\":\"COSEIMPA\",\"address\":\"AV INTERCOMUNAL ALI PRIMERA ESQ. C/CALIFORNIA CREOLANDIA\",\"cityState\":\"Judibana Edo Falcon\",\"lat\":7.18646,\"lng\":-64.568705,\"source\":\"ors\"},\"FERRETERIA EL RELAMPAGO|CALLE 51 CON CARRERA 22 LOCAL Nº 22-6 OESTE|Barquisimeto Edo Lara\":{\"type\":\"distributor\",\"name\":\"FERRETERIA EL RELAMPAGO\",\"address\":\"CALLE 51 CON CARRERA 22 LOCAL Nº 22-6 OESTE\",\"cityState\":\"Barquisimeto Edo Lara\",\"lat\":10.16667,\"lng\":-69.83333,\"source\":\"opencage\"},\"FERRETERIA CAMILA|CALLE JUAN DE DIOS PONTE CON CALLE LA CRUZ - CENTRO|Cabudare Edo Lara\":{\"type\":\"distributor\",\"name\":\"FERRETERIA CAMILA\",\"address\":\"CALLE JUAN DE DIOS PONTE CON CALLE LA CRUZ - CENTRO\",\"cityState\":\"Cabudare Edo Lara\",\"lat\":10.16667,\"lng\":-69.83333,\"source\":\"opencage\"},\"FERRETERIA VARELA|CALLE LIBERTADOR EDIF BURATE 2 PISO PB|Cabudare Edo Lara\":{\"type\":\"distributor\",\"name\":\"FERRETERIA VARELA\",\"address\":\"CALLE LIBERTADOR EDIF BURATE 2 PISO PB\",\"cityState\":\"Cabudare Edo Lara\",\"lat\":7.18646,\"lng\":-64.568705,\"source\":\"ors\"},\"Casa Caby|Calle El Recreo, Edf. Nro. 6, local A,B,C. Sabana Grande|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"Casa Caby\",\"address\":\"Calle El Recreo, Edf. Nro. 6, local A,B,C. Sabana Grande\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.47639,\"lng\":-66.98333,\"source\":\"opencage\"},\"Ceramicas Rusti-Estrella|Av. Avila, Qta. Trebol, nro. 13. San Bernadino|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"Ceramicas Rusti-Estrella\",\"address\":\"Av. Avila, Qta. Trebol, nro. 13. San Bernadino\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.47639,\"lng\":-66.98333,\"source\":\"opencage\"},\"COMERCIAL FERROMONICA|AV. ARTURO MICHELENA CON AV. MANUEL DIAZ R SANTA MONICA|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"COMERCIAL FERROMONICA\",\"address\":\"AV. ARTURO MICHELENA CON AV. MANUEL DIAZ R SANTA MONICA\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.47639,\"lng\":-66.98333,\"source\":\"ors\"},\"DISTRIBUIDORA MARACANA|ESQ DE ALCABALA A PELIGRO LOCAL NRO 3 URB LA CANDELARIA|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"DISTRIBUIDORA MARACANA\",\"address\":\"ESQ DE ALCABALA A PELIGRO LOCAL NRO 3 URB LA CANDELARIA\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.47639,\"lng\":-66.98333,\"source\":\"ors\"},\"Ferreteria 42|Av Fuerzas Armadas, de Socorro a Plaza España - Edif Mazal Altagracia|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"Ferreteria 42\",\"address\":\"Av Fuerzas Armadas, de Socorro a Plaza España - Edif Mazal Altagracia\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.506007,\"lng\":-66.909235,\"source\":\"ors\"},\"Ferreteria SDS|Av. Panteon, Edf. San Bernardino Plaza, locales 3 y 4. La Candelaria|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"Ferreteria SDS\",\"address\":\"Av. Panteon, Edf. San Bernardino Plaza, locales 3 y 4. La Candelaria\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.47639,\"lng\":-66.98333,\"source\":\"opencage\"},\"FERRETERIA LA CALIZA|AV EL LAGO CC COLINAS DE CARRIZAL NIVEL PB LOCAL 1 Y 2|Carrizal Edo Miranda\":{\"type\":\"distributor\",\"name\":\"FERRETERIA LA CALIZA\",\"address\":\"AV EL LAGO CC COLINAS DE CARRIZAL NIVEL PB LOCAL 1 Y 2\",\"cityState\":\"Carrizal Edo Miranda\",\"lat\":10.34985,\"lng\":-66.98632,\"source\":\"opencage\"},\"COMERCIAL FERROCHARA|AV. BOLIVAR EDIFICIO FERROCHARA Nº 8-78|Charallave Edo Miranda\":{\"type\":\"distributor\",\"name\":\"COMERCIAL FERROCHARA\",\"address\":\"AV. BOLIVAR EDIFICIO FERROCHARA Nº 8-78\",\"cityState\":\"Charallave Edo Miranda\",\"lat\":10.24247,\"lng\":-66.85723,\"source\":\"opencage\"},\"COMERCIAL TITANIC CENTER|AV. BOLIVAR|Charallave Edo Miranda\":{\"type\":\"distributor\",\"name\":\"COMERCIAL TITANIC CENTER\",\"address\":\"AV. BOLIVAR\",\"cityState\":\"Charallave Edo Miranda\",\"lat\":10.25,\"lng\":-66.41667,\"source\":\"opencage\"},\"Pall Ferreteria|Av. Intercomunal Guarenas Guatire, parcela nro. LP1, (Diagonal al Buena Ventura)|Guarenas Edo Miranda\":{\"type\":\"distributor\",\"name\":\"Pall Ferreteria\",\"address\":\"Av. Intercomunal Guarenas Guatire, parcela nro. LP1, (Diagonal al Buena Ventura)\",\"cityState\":\"Guarenas Edo Miranda\",\"lat\":10.46736,\"lng\":-66.60663,\"source\":\"opencage\"},\"CENTRO FERRETERO FAZZI|CTRA PANAMERICANA KM 25 EDIF DON ANGELO PISO 1 LOCAL PB EL LLANO|Los Teques Edo Miranda\":{\"type\":\"distributor\",\"name\":\"CENTRO FERRETERO FAZZI\",\"address\":\"CTRA PANAMERICANA KM 25 EDIF DON ANGELO PISO 1 LOCAL PB EL LLANO\",\"cityState\":\"Los Teques Edo Miranda\",\"lat\":10.47459,\"lng\":-66.773232,\"source\":\"ors\"},\"PINTURAS DE AUTOMOVILES AUTOPIN|AV BICENTENARIA LOCAL FRENTE AL ANTIGUO DEPOSITO LA POLAR EL TAMBOR|Los Teques Edo Miranda\":{\"type\":\"distributor\",\"name\":\"PINTURAS DE AUTOMOVILES AUTOPIN\",\"address\":\"AV BICENTENARIA LOCAL FRENTE AL ANTIGUO DEPOSITO LA POLAR EL TAMBOR\",\"cityState\":\"Los Teques Edo Miranda\",\"lat\":10.290358,\"lng\":-66.395494,\"source\":\"ors\"},\"Centro Ferretero El Pico|Filas de Mariche Km 6, El Limoncito|Mariche Edo Miranda\":{\"type\":\"distributor\",\"name\":\"Centro Ferretero El Pico\",\"address\":\"Filas de Mariche Km 6, El Limoncito\",\"cityState\":\"Mariche Edo Miranda\",\"lat\":10.48246,\"lng\":-66.76175,\"source\":\"opencage\"},\"FERREMATERIALES DATE SAN ANTONIO|CTRA SAN ANTONIO-SAN DIEGO Nº CM-7176 LOCAL PARCELA Nº A URB LAS POLONIAS|San Antonio de los Altos Edo Miranda\":{\"type\":\"distributor\",\"name\":\"FERREMATERIALES DATE SAN ANTONIO\",\"address\":\"CTRA SAN ANTONIO-SAN DIEGO Nº CM-7176 LOCAL PARCELA Nº A URB LAS POLONIAS\",\"cityState\":\"San Antonio de los Altos Edo Miranda\",\"lat\":10.290358,\"lng\":-66.395494,\"source\":\"ors\"},\"Ferreteria Los Castores|Av. Perimetral, C.C. Los Altos, Local A-2.C|San Antonio de los Altos Edo Miranda\":{\"type\":\"distributor\",\"name\":\"Ferreteria Los Castores\",\"address\":\"Av. Perimetral, C.C. Los Altos, Local A-2.C\",\"cityState\":\"San Antonio de los Altos Edo Miranda\",\"lat\":10.262132,\"lng\":-66.849714,\"source\":\"ors\"},\"FERRO-TOOL|AV PRINCIPAL FRANCISCO LAS MINAS, Z/I LAS MINAS GALPON N-2|San Antonio de los Altos Edo Miranda\":{\"type\":\"distributor\",\"name\":\"FERRO-TOOL\",\"address\":\"AV PRINCIPAL FRANCISCO LAS MINAS, Z/I LAS MINAS GALPON N-2\",\"cityState\":\"San Antonio de los Altos Edo Miranda\",\"lat\":10.374832,\"lng\":-66.971736,\"source\":\"ors\"},\"TUBELEC|A 50 mts de la Pza. Bolivar|San Antonio de los Altos Edo Miranda\":{\"type\":\"distributor\",\"name\":\"TUBELEC\",\"address\":\"A 50 mts de la Pza. Bolivar\",\"cityState\":\"San Antonio de los Altos Edo Miranda\",\"lat\":10.290358,\"lng\":-66.395494,\"source\":\"ors\"},\"ELEKA|Av 31 De Julio Edf. IACA Suites, Pb Guatamare|El Valle Del Espiritu Santo Edo Nueva Esparta\":{\"type\":\"distributor\",\"name\":\"ELEKA\",\"address\":\"Av 31 De Julio Edf. IACA Suites, Pb Guatamare\",\"cityState\":\"El Valle Del Espiritu Santo Edo Nueva Esparta\",\"lat\":11,\"lng\":-64,\"source\":\"ors\"},\"COMERCIAL ALTAGRACIA|CALLE ALTAGRACIA EDIF FINA PISO PB LOCAL S/N ALTAGRACIA|Juangriego Edo Nueva Esparta\":{\"type\":\"distributor\",\"name\":\"COMERCIAL ALTAGRACIA\",\"address\":\"CALLE ALTAGRACIA EDIF FINA PISO PB LOCAL S/N ALTAGRACIA\",\"cityState\":\"Juangriego Edo Nueva Esparta\",\"lat\":11.689123,\"lng\":-70.213013,\"source\":\"ors\"},\"FERREMAR PAMPATAR|AV ALDONZA MANRIQUE CASA Nº -4 URB PLAYAS DEL ANGEL|Pampatar Edo Nueva Esparta\":{\"type\":\"distributor\",\"name\":\"FERREMAR PAMPATAR\",\"address\":\"AV ALDONZA MANRIQUE CASA Nº -4 URB PLAYAS DEL ANGEL\",\"cityState\":\"Pampatar Edo Nueva Esparta\",\"lat\":10.98905,\"lng\":-63.806125,\"source\":\"ors\"},\"Reprencentaciones La Fragata|Av. Paseo Cultura Ramon Vasquez Brito, CC Boulevard Local S-4|Porlamar Edo Nueva Esparta\":{\"type\":\"distributor\",\"name\":\"Reprencentaciones La Fragata\",\"address\":\"Av. Paseo Cultura Ramon Vasquez Brito, CC Boulevard Local S-4\",\"cityState\":\"Porlamar Edo Nueva Esparta\",\"lat\":10.95815,\"lng\":-63.849449,\"source\":\"ors\"},\"SERVIBOMBAS MARGARITA|CALLE STA. RITA, LA VECINDAD|Porlamar Edo Nueva Esparta\":{\"type\":\"distributor\",\"name\":\"SERVIBOMBAS MARGARITA\",\"address\":\"CALLE STA. RITA, LA VECINDAD\",\"cityState\":\"Porlamar Edo Nueva Esparta\",\"lat\":11,\"lng\":-64,\"source\":\"opencage\"},\"Multibrands Latina Maracay|Av las Delicias, Centro Empresarial Europa local PB30|Maracay Edo Aragua\":{\"type\":\"service\",\"name\":\"Multibrands Latina Maracay\",\"address\":\"Av las Delicias, Centro Empresarial Europa local PB30\",\"cityState\":\"Maracay Edo Aragua\",\"lat\":10.27801,\"lng\":-67.573411,\"source\":\"ors\"},\"ANTONIO GUZZO C.A|Av LAS PALMAS, EDIF GUAFRANSA BOLEITA SUR|Caracas Edo Miranda\":{\"type\":\"service\",\"name\":\"ANTONIO GUZZO C.A\",\"address\":\"Av LAS PALMAS, EDIF GUAFRANSA BOLEITA SUR\",\"cityState\":\"Caracas Edo Miranda\",\"lat\":10.502082,\"lng\":-66.878706,\"source\":\"ors\"},\"Comercial JAB|Av Ppal de Los Ruices, Edif Centro Corporativo, PB, Los Ruices|Caracas Edo Miranda\":{\"type\":\"service\",\"name\":\"Comercial JAB\",\"address\":\"Av Ppal de Los Ruices, Edif Centro Corporativo, PB, Los Ruices\",\"cityState\":\"Caracas Edo Miranda\",\"lat\":10.290358,\"lng\":-66.395494,\"source\":\"ors\"},\"Termocenter|Centro Comercial Santa FE|Caracas Edo Miranda\":{\"type\":\"service\",\"name\":\"Termocenter\",\"address\":\"Centro Comercial Santa FE\",\"cityState\":\"Caracas Edo Miranda\",\"lat\":10.25,\"lng\":-66.41667,\"source\":\"opencage\"},\"Calentadores Durán|CC Galería Los Proceres - Av Carabobo|San Cristóbal Edo Táchira\":{\"type\":\"service\",\"name\":\"Calentadores Durán\",\"address\":\"CC Galería Los Proceres - Av Carabobo\",\"cityState\":\"San Cristóbal Edo Táchira\",\"lat\":7.846016,\"lng\":-72.034959,\"source\":\"ors\"},\"DISTRIBUIDORA FERRELUX|AV PPAL DE LECHERIA CC CENTRO EMPRESARIAL PICOVI NIVEL PB LOCAL 2|Lecheria Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"DISTRIBUIDORA FERRELUX\",\"address\":\"AV PPAL DE LECHERIA CC CENTRO EMPRESARIAL PICOVI NIVEL PB LOCAL 2\",\"cityState\":\"Lecheria Edo Anzoategui\",\"lat\":10.186965,\"lng\":-64.688711,\"source\":\"manual\"},\"GRUPO CORPORATIVO LA COBRA|CR 6 LOCAL Nº 7-16 ROMULO GALLEGOS|Lecheria Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"GRUPO CORPORATIVO LA COBRA\",\"address\":\"CR 6 LOCAL Nº 7-16 ROMULO GALLEGOS\",\"cityState\":\"Lecheria Edo Anzoategui\",\"lat\":10.199751,\"lng\":-64.691905,\"source\":\"manual\"},\"FERRE SOLAR|AV INTERCOMUNAL LOCAL Nº 510 SIERRA MAESTRA, POZUELOS|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"FERRE SOLAR\",\"address\":\"AV INTERCOMUNAL LOCAL Nº 510 SIERRA MAESTRA, POZUELOS\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":10.191534,\"lng\":-64.640579,\"source\":\"manual\"},\"MEGA REPUESTOS CARIBE 88|AV MUNICIPAL ENTRE CALLE SUCRE Y BUENOS AIRES EDIF IBERIA PB, LOCAL Nº 115 CENTRO|Pto La Cruz Edo Anzoategui\":{\"type\":\"distributor\",\"name\":\"MEGA REPUESTOS CARIBE 88\",\"address\":\"AV MUNICIPAL ENTRE CALLE SUCRE Y BUENOS AIRES EDIF IBERIA PB, LOCAL Nº 115 CENTRO\",\"cityState\":\"Pto La Cruz Edo Anzoategui\",\"lat\":10.21767,\"lng\":-64.631768,\"source\":\"manual\"},\"Materiales Brasil|Esq. Saparados. La Candelaria|Caracas Edo Distrito Capital\":{\"type\":\"distributor\",\"name\":\"Materiales Brasil\",\"address\":\"Esq. Saparados. La Candelaria\",\"cityState\":\"Caracas Edo Distrito Capital\",\"lat\":10.509551,\"lng\":-66.906236,\"source\":\"manual\"},\"FERREALTO|CALLE ECTOR LOS BUDARES CC MONTE BELLO PLAZA PB LOCAL 7|Carrizal Edo Miranda\":{\"type\":\"distributor\",\"name\":\"FERREALTO\",\"address\":\"CALLE ECTOR LOS BUDARES CC MONTE BELLO PLAZA PB LOCAL 7\",\"cityState\":\"Carrizal Edo Miranda\",\"lat\":10.359705,\"lng\":-66.976105,\"source\":\"manual\"},\"Multibrands Latina Valencia|Av Bolivar Norte Urb. El Recreo calle #158 N97-106|Valencia Edo Carabobo\":{\"type\":\"service\",\"name\":\"Multibrands Latina Valencia\",\"address\":\"Av Bolivar Norte Urb. El Recreo calle #158 N97-106\",\"cityState\":\"Valencia Edo Carabobo\",\"lat\":10.228928,\"lng\":-68.008948,\"source\":\"manual\"},\"SUMINISTROS EYLCA 6000 C.A|CC Gold Country, piso 4 local D11|Barcelona Edo Anzoátegui\":{\"type\":\"service\",\"name\":\"SUMINISTROS EYLCA 6000 C.A\",\"address\":\"CC Gold Country, piso 4 local D11\",\"cityState\":\"Barcelona Edo Anzoátegui\",\"lat\":10.656655,\"lng\":-71.606645,\"source\":\"manual\"},\"Instavenca|Av 79 Casa Nro 93-48 Urb Santa Fe I|Maracaibo Edo Zulia\":{\"type\":\"service\",\"name\":\"Instavenca\",\"address\":\"Av 79 Casa Nro 93-48 Urb Santa Fe I\",\"cityState\":\"Maracaibo Edo Zulia\",\"lat\":10,\"lng\":-72.16667,\"source\":\"manual\"}}"));}),
"[project]/src/lib/partners.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPartners",
    ()=>getAllPartners,
    "getPartnerById",
    ()=>getPartnerById,
    "getPartnersByType",
    ()=>getPartnersByType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$partner$2d$coordinates$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/partner-coordinates.json (json)");
;
const partners = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$partner$2d$coordinates$2e$json__$28$json$29$__["default"]).map((param)=>{
    let [key, value] = param;
    return {
        id: key,
        type: value.type,
        name: value.name,
        address: value.address,
        cityState: value.cityState,
        lat: value.lat,
        lng: value.lng,
        source: value.source
    };
});
function getAllPartners() {
    return partners;
}
function getPartnersByType(type) {
    return partners.filter((partner)=>partner.type === type);
}
function getPartnerById(id) {
    if (!id) return null;
    var _partners_find;
    return (_partners_find = partners.find((partner)=>partner.id === id)) !== null && _partners_find !== void 0 ? _partners_find : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/maps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateHaversineDistance",
    ()=>calculateHaversineDistance,
    "sortPartnersByDistance",
    ()=>sortPartnersByDistance
]);
function calculateHaversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3;
    const toRad = (value)=>value * Math.PI / 180;
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lng2 - lng1);
    const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function sortPartnersByDistance(partners, userLat, userLng) {
    return [
        ...partners
    ].sort((a, b)=>{
        const distA = calculateHaversineDistance(userLat, userLng, a.lat, a.lng);
        const distB = calculateHaversineDistance(userLat, userLng, b.lat, b.lng);
        return distA - distB;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/checkout/components/LocationStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lodash.debounce'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/partners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/checkout/components/Map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/checkout/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Map;
const distributors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnersByType"])("distributor");
function LocationStep(param) {
    let { value, onChange, errors, onErrorsChange, onComplete } = param;
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationStep.useEffect": ()=>{
            var _value_customerLocation;
            var _value_customerLocation_label;
            setSearchQuery((_value_customerLocation_label = (_value_customerLocation = value.customerLocation) === null || _value_customerLocation === void 0 ? void 0 : _value_customerLocation.label) !== null && _value_customerLocation_label !== void 0 ? _value_customerLocation_label : "");
        }
    }["LocationStep.useEffect"], [
        value.customerLocation
    ]);
    const nearestPartners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocationStep.useMemo[nearestPartners]": ()=>{
            if (!value.customerLocation) return distributors.slice(0, 5);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPartnersByDistance"])(distributors, value.customerLocation.lat, value.customerLocation.lng).slice(0, 5);
        }
    }["LocationStep.useMemo[nearestPartners]"], [
        value.customerLocation
    ]);
    const selectedPartner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocationStep.useMemo[selectedPartner]": ()=>{
            var _distributors_find;
            return (_distributors_find = distributors.find({
                "LocationStep.useMemo[selectedPartner]": (partner)=>partner.id === value.selectedPartnerId
            }["LocationStep.useMemo[selectedPartner]"])) !== null && _distributors_find !== void 0 ? _distributors_find : null;
        }
    }["LocationStep.useMemo[selectedPartner]"], [
        value.selectedPartnerId
    ]);
    const performSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocationStep.useMemo[performSearch]": ()=>debounce({
                "LocationStep.useMemo[performSearch]": async (query)=>{
                    if (!query.trim()) {
                        setSearchResults([]);
                        return;
                    }
                    setIsSearching(true);
                    try {
                        const response = await fetch("/api/geocode", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                query
                            })
                        });
                        if (!response.ok) {
                            console.error("Geocode failed", await response.text());
                            return;
                        }
                        const data = await response.json();
                        setSearchResults(data.results);
                    } catch (error) {
                        console.error("Geocode error", error);
                    } finally{
                        setIsSearching(false);
                    }
                }
            }["LocationStep.useMemo[performSearch]"], 400)
    }["LocationStep.useMemo[performSearch]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationStep.useEffect": ()=>{
            var _value_customerLocation;
            if (searchQuery && searchQuery !== ((_value_customerLocation = value.customerLocation) === null || _value_customerLocation === void 0 ? void 0 : _value_customerLocation.label)) {
                performSearch(searchQuery);
            } else {
                setSearchResults([]);
            }
        }
    }["LocationStep.useEffect"], [
        searchQuery,
        value.customerLocation,
        performSearch
    ]);
    const handleLocationChange = (location)=>{
        var _sortPartnersByDistance_, _sortPartnersByDistance_1;
        var _sortPartnersByDistance__id, _sortPartnersByDistance__id1;
        onChange({
            ...value,
            customerLocation: location,
            selectedPartnerId: value.fulfillmentMode === "pickup" ? (_sortPartnersByDistance__id = (_sortPartnersByDistance_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPartnersByDistance"])(distributors, location.lat, location.lng)[0]) === null || _sortPartnersByDistance_ === void 0 ? void 0 : _sortPartnersByDistance_.id) !== null && _sortPartnersByDistance__id !== void 0 ? _sortPartnersByDistance__id : null : (_sortPartnersByDistance__id1 = (_sortPartnersByDistance_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPartnersByDistance"])(distributors, location.lat, location.lng)[0]) === null || _sortPartnersByDistance_1 === void 0 ? void 0 : _sortPartnersByDistance_1.id) !== null && _sortPartnersByDistance__id1 !== void 0 ? _sortPartnersByDistance__id1 : null
        });
        onErrorsChange({
            ...errors,
            customerLocation: ""
        });
    };
    const validateAndContinue = ()=>{
        const newErrors = {};
        if (!value.name.trim()) newErrors.name = "Requerido";
        if (!value.email.trim()) newErrors.email = "Requerido";
        if (!value.customerLocation) newErrors.customerLocation = "Selecciona una ubicación";
        if (value.fulfillmentMode === "pickup" && !value.selectedPartnerId) {
            newErrors.selectedPartnerId = "Selecciona un aliado";
        }
        onErrorsChange(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onComplete();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Nombre completo",
                        value: value.name,
                        onChange: (name)=>onChange({
                                ...value,
                                name
                            }),
                        error: errors.name,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Correo electrónico",
                        type: "email",
                        value: value.email,
                        onChange: (email)=>onChange({
                                ...value,
                                email
                            }),
                        error: errors.email,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Teléfono (opcional)",
                        value: value.phone,
                        onChange: (phone)=>onChange({
                                ...value,
                                phone
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                        children: "Modalidad"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleButton, {
                                label: "Retiro en distribuidor",
                                description: "Elige el aliado más conveniente.",
                                selected: value.fulfillmentMode === "pickup",
                                onClick: ()=>onChange({
                                        ...value,
                                        fulfillmentMode: "pickup"
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleButton, {
                                label: "Entrega a domicilio",
                                description: "Coordinamos la entrega con el aliado más cercano.",
                                selected: value.fulfillmentMode === "delivery",
                                onClick: ()=>onChange({
                                        ...value,
                                        fulfillmentMode: "delivery"
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                        children: value.fulfillmentMode === "pickup" ? "Selecciona tu punto aliado" : "Dirección de entrega"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchQuery,
                                onChange: (event)=>setSearchQuery(event.target.value),
                                placeholder: value.fulfillmentMode === "pickup" ? "Busca tu dirección o tu aliado" : "Escribe tu dirección",
                                className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Buscando…"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 177,
                                columnNumber: 27
                            }, this),
                            searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm",
                                children: searchResults.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            handleLocationChange({
                                                lat: result.lat,
                                                lng: result.lng,
                                                label: result.label
                                            });
                                            setSearchResults([]);
                                            setSearchQuery(result.label);
                                        },
                                        className: "flex w-full flex-col items-start px-3 py-2 text-left text-sm hover:bg-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-slate-900",
                                                children: result.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-600",
                                                children: result.locality ? "".concat(result.locality, " • ").concat(result.label) : result.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, result.id, true, {
                                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            errors.customerLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-600",
                                children: errors.customerLocation
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 203,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-80 overflow-hidden rounded-2xl border border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Map, {
                    customerLocation: value.customerLocation,
                    partners: distributors,
                    fulfillmentMode: value.fulfillmentMode,
                    selectedPartnerId: value.selectedPartnerId,
                    onCustomerLocationChange: handleLocationChange,
                    onSelectPartner: (partnerId)=>onChange({
                            ...value,
                            selectedPartnerId: partnerId
                        })
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            value.fulfillmentMode === "pickup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-slate-700",
                        children: "Aliados sugeridos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickupList, {
                        options: nearestPartners,
                        selectedId: value.selectedPartnerId,
                        onSelect: (id)=>onChange({
                                ...value,
                                selectedPartnerId: id
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    errors.selectedPartnerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-600",
                        children: errors.selectedPartnerId
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 226,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: validateAndContinue,
                    children: "Continuar"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(LocationStep, "7bB3VB1ny+DfOo902aKaZZGb31I=");
_c1 = LocationStep;
function Field(param) {
    let { label, value, onChange, error, required, type = "text" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block text-sm font-medium text-slate-700",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                required: required,
                onChange: (event)=>onChange(event.target.value),
                className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 264,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c2 = Field;
function ToggleButton(param) {
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
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-600",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_c3 = ToggleButton;
function PickupList(param) {
    let { options, selectedId, onSelect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onSelect(option.id),
                className: "flex w-full items-start justify-between rounded-xl border px-3 py-2 text-left text-sm transition ".concat(selectedId === option.id ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-slate-900",
                                children: option.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-600",
                                children: option.address
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] uppercase tracking-wide text-slate-400",
                                children: option.cityState
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: selectedId === option.id ? "Seleccionado" : "Elegir"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
                ]
            }, option.id, true, {
                fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/components/LocationStep.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c4 = PickupList;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Map");
__turbopack_context__.k.register(_c1, "LocationStep");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "ToggleButton");
__turbopack_context__.k.register(_c4, "PickupList");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$components$2f$LocationStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/checkout/components/LocationStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/partners.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
    const [locationValues, setLocationValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        fulfillmentMode: "pickup",
        customerLocation: null,
        selectedPartnerId: null
    });
    const [locationErrors, setLocationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [deliveryInfo, setDeliveryInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function fetchDirections(customerLat, customerLng, partner) {
        try {
            const response = await fetch("/api/directions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    start: {
                        lat: customerLat,
                        lng: customerLng
                    },
                    end: {
                        lat: partner.lat,
                        lng: partner.lng
                    }
                })
            });
            if (!response.ok) {
                console.error("Directions failed", await response.text());
                return null;
            }
            const data = await response.json();
            var _data_duration;
            const durationMinutes = Math.round(((_data_duration = data.duration) !== null && _data_duration !== void 0 ? _data_duration : 0) / 60);
            const minutesCapped = Math.min(durationMinutes, 45);
            const fee = minutesCapped * 0.5;
            return {
                partnerId: partner.id,
                partnerName: partner.name,
                partnerAddress: partner.address,
                partnerCityState: partner.cityState,
                minutes: durationMinutes,
                minutesCapped,
                fee
            };
        } catch (error) {
            console.error("Directions error", error);
            return null;
        }
    }
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
    const deliveryFee = locationValues.fulfillmentMode === "delivery" && deliveryInfo ? deliveryInfo.fee : 0;
    const orderTotal = baseTotal + deliveryFee;
    const phoneMasked = locationValues.phone ? "***-".concat(locationValues.phone.slice(-3)) : "No proporcionado";
    const canContinueStep2 = locationValues.fulfillmentMode === "pickup" && locationValues.selectedPartnerId || locationValues.fulfillmentMode === "delivery" && deliveryInfo;
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
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-slate-600",
                    children: "Agrega productos para iniciar el proceso de compra."
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 121,
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
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stepper, {
                currentStep: step
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                title: "1. Información y ubicación",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$checkout$2f$components$2f$LocationStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: locationValues,
                                    onChange: (updated)=>setLocationValues(updated),
                                    errors: locationErrors,
                                    onErrorsChange: setLocationErrors,
                                    onComplete: async ()=>{
                                        if (!locationValues.customerLocation) return;
                                        if (locationValues.fulfillmentMode === "delivery" && locationValues.selectedPartnerId) {
                                            const partner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId);
                                            if (partner) {
                                                const result = await fetchDirections(locationValues.customerLocation.lat, locationValues.customerLocation.lng, {
                                                    id: partner.id,
                                                    name: partner.name,
                                                    address: partner.address,
                                                    cityState: partner.cityState,
                                                    lat: partner.lat,
                                                    lng: partner.lng
                                                });
                                                if (result) {
                                                    setDeliveryInfo(result);
                                                }
                                            }
                                        } else {
                                            setDeliveryInfo(null);
                                        }
                                        setStep(2);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/checkout/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 135,
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
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 md:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionButton, {
                                                        label: "Retiro en distribuidor",
                                                        description: "Elige el punto aliado más conveniente para retirar tu pedido.",
                                                        selected: locationValues.fulfillmentMode === "pickup",
                                                        onClick: ()=>{
                                                            setLocationValues((prev)=>({
                                                                    ...prev,
                                                                    fulfillmentMode: "pickup"
                                                                }));
                                                            setDeliveryInfo(null);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionButton, {
                                                        label: "Entrega a domicilio",
                                                        description: "Coordinamos con el aliado más cercano y calculamos el cargo de envío.",
                                                        selected: locationValues.fulfillmentMode === "delivery",
                                                        onClick: async ()=>{
                                                            const partner = locationValues.selectedPartnerId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId) : null;
                                                            setLocationValues((prev)=>({
                                                                    ...prev,
                                                                    fulfillmentMode: "delivery"
                                                                }));
                                                            if (partner && locationValues.customerLocation) {
                                                                const result = await fetchDirections(locationValues.customerLocation.lat, locationValues.customerLocation.lng, {
                                                                    id: partner.id,
                                                                    name: partner.name,
                                                                    address: partner.address,
                                                                    cityState: partner.cityState,
                                                                    lat: partner.lat,
                                                                    lng: partner.lng
                                                                });
                                                                if (result) setDeliveryInfo(result);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
                                                children: locationValues.fulfillmentMode === "pickup" ? "Aliado seleccionado" : "Entrega coordinada"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FulfillmentSummary, {
                                                fulfillmentMode: locationValues.fulfillmentMode,
                                                selectedPartnerId: locationValues.selectedPartnerId,
                                                deliveryInfo: deliveryInfo,
                                                customerLocation: locationValues.customerLocation
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 215,
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
                                                lineNumber: 228,
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
                                                                    lineNumber: 240,
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
                                                                                    lineNumber: 248,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600",
                                                                                    children: method.currency
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                                    lineNumber: 249,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        method.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-sm text-slate-600",
                                                                            children: method.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, method.id, false, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 227,
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
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 173,
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
                                                lineNumber: 276,
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
                                                                lineNumber: 282,
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
                                                                        lineNumber: 291,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    ((_field_options = field.options) !== null && _field_options !== void 0 ? _field_options : []).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/app/checkout/page.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 284,
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
                                                                lineNumber: 299,
                                                                columnNumber: 27
                                                            }, this),
                                                            paymentErrors[field.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-red-600",
                                                                children: paymentErrors[field.id]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, field.id, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 13
                                            }, this),
                                            paypalSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800",
                                                children: "Modo de simulación activo: el pago con PayPal/Tarjeta se aprobará automáticamente al confirmar el pedido y se generará una referencia interna."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 318,
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
                                                        lineNumber: 325,
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
                                                                        lineNumber: 334,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Enviar al correo: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: locationValues.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 327,
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
                                                                        disabled: !locationValues.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "WhatsApp (",
                                                                    phoneMasked,
                                                                    ")",
                                                                    !locationValues.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-2 text-xs text-slate-500",
                                                                        children: "Agrega un número en el paso 1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/checkout/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/checkout/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 275,
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
                                            if (receiptPreference === "phone" && !locationValues.phone) {
                                                fieldErrors.receipt = "Debes registrar un número de teléfono";
                                            }
                                            setPaymentErrors(fieldErrors);
                                            if (Object.keys(fieldErrors).length > 0) {
                                                return;
                                            }
                                            setSubmitState("processing");
                                            try {
                                                var _locationValues_customerLocation, _getPartnerById, _getPartnerById1, _getPartnerById2, _getPartnerById3;
                                                var _locationValues_customerLocation_label, _getPartnerById_name, _getPartnerById_address, _deliveryInfo_minutes, _getPartnerById_lat, _getPartnerById_lng;
                                                const payload = {
                                                    name: locationValues.name,
                                                    email: locationValues.email,
                                                    phone: locationValues.phone || null,
                                                    address: (_locationValues_customerLocation_label = (_locationValues_customerLocation = locationValues.customerLocation) === null || _locationValues_customerLocation === void 0 ? void 0 : _locationValues_customerLocation.label) !== null && _locationValues_customerLocation_label !== void 0 ? _locationValues_customerLocation_label : "",
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
                                                    fulfillmentType: locationValues.fulfillmentMode === "pickup" ? "PICKUP" : "DELIVERY",
                                                    pickupLocationId: locationValues.selectedPartnerId,
                                                    pickupLocationName: (_getPartnerById_name = (_getPartnerById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId)) === null || _getPartnerById === void 0 ? void 0 : _getPartnerById.name) !== null && _getPartnerById_name !== void 0 ? _getPartnerById_name : null,
                                                    pickupLocationAddress: (_getPartnerById_address = (_getPartnerById1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId)) === null || _getPartnerById1 === void 0 ? void 0 : _getPartnerById1.address) !== null && _getPartnerById_address !== void 0 ? _getPartnerById_address : null,
                                                    fulfillmentLocationId: locationValues.selectedPartnerId,
                                                    deliveryEtaMinutes: (_deliveryInfo_minutes = deliveryInfo === null || deliveryInfo === void 0 ? void 0 : deliveryInfo.minutes) !== null && _deliveryInfo_minutes !== void 0 ? _deliveryInfo_minutes : null,
                                                    deliveryFee: deliveryInfo ? Math.round(deliveryInfo.fee * 100) : 0,
                                                    customerCoordinates: locationValues.customerLocation ? {
                                                        lat: locationValues.customerLocation.lat,
                                                        lng: locationValues.customerLocation.lng
                                                    } : null,
                                                    partnerCoordinates: locationValues.selectedPartnerId ? {
                                                        lat: (_getPartnerById_lat = (_getPartnerById2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId)) === null || _getPartnerById2 === void 0 ? void 0 : _getPartnerById2.lat) !== null && _getPartnerById_lat !== void 0 ? _getPartnerById_lat : null,
                                                        lng: (_getPartnerById_lng = (_getPartnerById3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(locationValues.selectedPartnerId)) === null || _getPartnerById3 === void 0 ? void 0 : _getPartnerById3.lng) !== null && _getPartnerById_lng !== void 0 ? _getPartnerById_lng : null
                                                    } : null,
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
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    paymentErrors.root && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-red-600",
                                        children: paymentErrors.root
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/checkout/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 274,
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
                                            lineNumber: 474,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-700",
                                            children: (orderResult === null || orderResult === void 0 ? void 0 : orderResult.status) === "paid" ? "Hemos registrado el pago y enviaremos el comprobante según su preferencia." : "Su solicitud quedó en revisión. Validaremos el pago manual en menos de 48 horas y recibirá su comprobante."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 479,
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
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        (_orderResult_id = orderResult === null || orderResult === void 0 ? void 0 : orderResult.id) !== null && _orderResult_id !== void 0 ? _orderResult_id : "-"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                    lineNumber: 485,
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
                                                            lineNumber: 489,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        receiptPreference === "email" ? locationValues.email : phoneMasked
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/checkout/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline",
                                            onClick: ()=>router.push("/"),
                                            children: "Volver al inicio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/checkout/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/checkout/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderSummary, {
                            items: (_submittedSummary_items = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.items) !== null && _submittedSummary_items !== void 0 ? _submittedSummary_items : orderItems,
                            baseTotal: (_submittedSummary_baseTotal = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.baseTotal) !== null && _submittedSummary_baseTotal !== void 0 ? _submittedSummary_baseTotal : baseTotal,
                            deliveryFee: (_submittedSummary_deliveryFee = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.deliveryFee) !== null && _submittedSummary_deliveryFee !== void 0 ? _submittedSummary_deliveryFee : deliveryFee,
                            orderTotal: (_submittedSummary_orderTotal = submittedSummary === null || submittedSummary === void 0 ? void 0 : submittedSummary.orderTotal) !== null && _submittedSummary_orderTotal !== void 0 ? _submittedSummary_orderTotal : orderTotal,
                            deliveryInfo: locationValues.fulfillmentMode === "delivery" ? deliveryInfo : null
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "A/aAJ69f+lZaPvHpxTv0+jJFy5U=", false, function() {
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
                        lineNumber: 541,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 font-semibold",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 542,
                        columnNumber: 13
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 531,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 525,
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
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 552,
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
                lineNumber: 580,
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
                lineNumber: 581,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 589,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 579,
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
                lineNumber: 610,
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
                lineNumber: 614,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 608,
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
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-600",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 638,
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
            lineNumber: 662,
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
                        lineNumber: 679,
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
                                        lineNumber: 689,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 686,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600",
                                children: option.address
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 694,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] uppercase tracking-wide text-slate-400",
                                children: option.cityState
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 695,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this)
                ]
            }, option.id, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 671,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 669,
        columnNumber: 5
    }, this);
}
_c6 = PickupChooser;
function FulfillmentSummary(param) {
    let { fulfillmentMode, selectedPartnerId, deliveryInfo, customerLocation } = param;
    const partner = selectedPartnerId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerById"])(selectedPartnerId) : null;
    if (!partner) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600",
            children: "Selecciona un aliado en el paso anterior."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 718,
            columnNumber: 7
        }, this);
    }
    const distanceKm = customerLocation ? (calculateDistance(customerLocation.lat, customerLocation.lng, partner.lat, partner.lng) / 1000).toFixed(1) : null;
    if (fulfillmentMode === "pickup") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-slate-900/5 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-semibold text-slate-900",
                    children: partner.name
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 731,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-600",
                    children: partner.address
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] uppercase tracking-wide text-slate-400",
                    children: partner.cityState
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 733,
                    columnNumber: 9
                }, this),
                distanceKm && customerLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-xs text-slate-500",
                    children: [
                        "Aproximadamente ",
                        distanceKm,
                        " km desde tu ubicación."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 735,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 730,
            columnNumber: 7
        }, this);
    }
    if (!deliveryInfo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600",
            children: "Calcularemos el aliado más cercano una vez ingreses tu dirección completa."
        }, void 0, false, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 743,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200 bg-slate-900/5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-slate-900",
                children: [
                    "Aliado asignado: ",
                    partner.name
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-600",
                children: partner.address
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] uppercase tracking-wide text-slate-400",
                children: partner.cityState
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Estimado: ",
                            deliveryInfo.minutes,
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Con tope: ",
                            deliveryInfo.minutesCapped,
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 756,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-slate-900/5 px-2 py-1 font-semibold",
                        children: [
                            "Cargo adicional: $",
                            deliveryInfo.fee.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 757,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 754,
                columnNumber: 7
            }, this),
            distanceKm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-xs text-slate-600",
                children: [
                    "Distancia aproximada: ",
                    distanceKm,
                    " km."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 760,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-xs text-slate-600",
                children: "El costo de envío se calcula a $0.50 por minuto (máximo 45 minutos), utilizando el aliado sugerido."
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 762,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 750,
        columnNumber: 5
    }, this);
}
_c7 = FulfillmentSummary;
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
                lineNumber: 772,
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
                                lineNumber: 776,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-900",
                                children: info.value
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 777,
                                columnNumber: 13
                            }, this)
                        ]
                    }, info.label, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 775,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 773,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 771,
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
                lineNumber: 800,
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
                                lineNumber: 804,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    item.total.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 807,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 803,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 801,
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
                                lineNumber: 813,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    baseTotal.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 814,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Envío"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: deliveryInfo ? "$".concat(deliveryFee.toFixed(2)) : "$0.00"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 816,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between text-base font-semibold text-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    orderTotal.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 811,
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
                lineNumber: 826,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 799,
        columnNumber: 5
    }, this);
}
_c9 = OrderSummary;
function derivePickupOptions(address) {
    if (!address) return [];
    const normalized = address.toLowerCase();
    const options = [];
    distributorLocations.forEach((location)=>{
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
        partnerId: best.id,
        partnerName: best.name,
        partnerAddress: best.address,
        partnerCityState: best.cityState,
        minutes: minutesEstimated,
        minutesCapped,
        fee
    };
}
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3;
    const toRad = (value)=>value * Math.PI / 180;
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lng2 - lng1);
    const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "CheckoutPage");
__turbopack_context__.k.register(_c1, "Stepper");
__turbopack_context__.k.register(_c2, "StepCard");
__turbopack_context__.k.register(_c3, "Field");
__turbopack_context__.k.register(_c4, "StepActions");
__turbopack_context__.k.register(_c5, "OptionButton");
__turbopack_context__.k.register(_c6, "PickupChooser");
__turbopack_context__.k.register(_c7, "FulfillmentSummary");
__turbopack_context__.k.register(_c8, "InstructionsList");
__turbopack_context__.k.register(_c9, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4acead73._.js.map