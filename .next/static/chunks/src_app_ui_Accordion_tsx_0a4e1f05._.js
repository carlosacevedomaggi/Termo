(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ui/Accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useMeasuredHeight(isOpen) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMeasuredHeight.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const measure = {
                "useMeasuredHeight.useEffect.measure": ()=>setHeight(el.scrollHeight)
            }["useMeasuredHeight.useEffect.measure"];
            measure();
            const ro = new ResizeObserver(measure);
            ro.observe(el);
            return ({
                "useMeasuredHeight.useEffect": ()=>ro.disconnect()
            })["useMeasuredHeight.useEffect"];
        }
    }["useMeasuredHeight.useEffect"], []);
    return {
        ref,
        height,
        isOpen
    };
}
_s(useMeasuredHeight, "thFOuN2Ng62aJXtxw2irmOmjSeg=");
function Chevron(param) {
    let { open } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-5 w-5 transition-transform duration-300 ".concat(open ? "rotate-180" : "rotate-0"),
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/ui/Accordion.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ui/Accordion.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Chevron;
function renderAnswer(answer) {
    const blocks = answer.split(/\n\s*\n/).map((b)=>b.trim()).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 leading-relaxed text-sm md:text-base",
        children: blocks.map((block, i)=>{
            const lines = block.split(/\n/).map((l)=>l.trim()).filter(Boolean);
            const looksLikeList = lines.length > 1 && lines.every((l)=>/^(-|\d+[\.)\-]?\s+)/.test(l) || /^\d+\s/.test(l));
            if (looksLikeList) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc pl-5 space-y-1",
                    children: lines.map((l, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: l.replace(/^(-|\d+[\.)\-]?\s+)/, "")
                        }, idx, false, {
                            fileName: "[project]/src/app/ui/Accordion.tsx",
                            lineNumber: 58,
                            columnNumber: 17
                        }, this))
                }, i, false, {
                    fileName: "[project]/src/app/ui/Accordion.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "opacity-90",
                children: block
            }, i, false, {
                fileName: "[project]/src/app/ui/Accordion.tsx",
                lineNumber: 63,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/ui/Accordion.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function Accordion(param) {
    let { items, allowMultiple = true, defaultOpenIndices = [] } = param;
    _s1();
    var _s = __turbopack_context__.k.signature();
    const [openSet, setOpenSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set(defaultOpenIndices));
    const toggle = (idx)=>{
        setOpenSet((prev)=>{
            const next = new Set(prev);
            if (next.has(idx)) next.delete(idx);
            else {
                if (!allowMultiple) next.clear();
                next.add(idx);
            }
            return next;
        });
    };
    const initialStagger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Accordion.useMemo[initialStagger]": ()=>Math.min(items.length, 6)
    }["Accordion.useMemo[initialStagger]"], [
        items.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-black/10 bg-white/80 backdrop-blur divide-y divide-black/10 shadow-sm",
        children: items.map(_s((item, idx)=>{
            _s();
            const open = openSet.has(idx);
            const { ref, height } = useMeasuredHeight(open);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-expanded": open,
                        "aria-controls": "faq-panel-".concat(idx),
                        onClick: ()=>toggle(idx),
                        className: "w-full text-left px-4 md:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                        style: {
                            transitionDelay: idx < initialStagger ? "".concat(idx * 30, "ms") : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base md:text-lg font-medium tracking-tight",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/Accordion.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chevron, {
                                open: open
                            }, void 0, false, {
                                fileName: "[project]/src/app/ui/Accordion.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ui/Accordion.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "faq-panel-".concat(idx),
                        role: "region",
                        className: "px-4 md:px-6 overflow-hidden",
                        style: {
                            height: open ? height : 0,
                            transition: "height 300ms ease"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: ref,
                            className: "pb-5 md:pb-6 ".concat(open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"),
                            style: {
                                transition: "opacity 300ms ease, transform 300ms ease"
                            },
                            children: renderAnswer(item.answer)
                        }, void 0, false, {
                            fileName: "[project]/src/app/ui/Accordion.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ui/Accordion.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/src/app/ui/Accordion.tsx",
                lineNumber: 92,
                columnNumber: 11
            }, this);
        }, "jrNAMlShdkOPa/bl23MHQ2j6kL0=", false, function() {
            return [
                useMeasuredHeight
            ];
        }))
    }, void 0, false, {
        fileName: "[project]/src/app/ui/Accordion.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s1(Accordion, "1Ue4ukUFDOP6hiL0lgcw1k/e3zs=");
_c1 = Accordion;
var _c, _c1;
__turbopack_context__.k.register(_c, "Chevron");
__turbopack_context__.k.register(_c1, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ui_Accordion_tsx_0a4e1f05._.js.map