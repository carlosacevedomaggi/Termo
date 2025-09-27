module.exports = [
"[project]/.next-internal/server/app/products/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/products/ProductsClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/products/ProductsClient.tsx'\n\nExpected '</', got '('");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/src/lib/product-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProducts",
    ()=>getAllProducts,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getProductCategories",
    ()=>getProductCategories
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const SOURCE_ROOT = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "images");
const PUBLIC_ROOT = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "images");
const CATEGORY_CONFIG = [
    {
        id: "calentadores-termotronic",
        name: "Calentadores Termotronic",
        tagline: "Calentadores eléctricos instantáneos con control inteligente.",
        dir: "termo",
        heroImage: "termo/termo-descriptivo.jpg",
        mode: "single"
    },
    {
        id: "calentadores-cbx",
        name: "Calentadores Industriales CBX",
        tagline: "Potencia multivoltaje y seguridad para aplicaciones exigentes.",
        dir: "cbx",
        heroImage: "CBX/CBX-descriptivo.jpg",
        mode: "single"
    },
    {
        id: "accesorios",
        name: "Accesorios y Repuestos",
        tagline: "Componentes originales para instalación y mantenimiento.",
        dir: "accesorios",
        heroImage: "accesorios/kit/kit descriptivo.jpg",
        mode: "collection"
    }
];
const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;
const CONDITION_CATEGORY_IDS = new Set([
    "calentadores-termotronic",
    "calentadores-cbx"
]);
const REFURBISHED_DISCOUNT = 0.85;
const REFURBISHED_PRICE_BY_CATEGORY = {
    "calentadores-termotronic": 298,
    "calentadores-cbx": 206
};
const CATEGORY_IMAGE_OVERRIDES = {
    "calentadores-termotronic": "termo/termo-descriptivo.jpg"
};
const CATEGORY_IMAGE_PRIORITY = {
    "calentadores-termotronic": [
        "termo-descriptivo"
    ],
    "calentadores-cbx": [
        "CBX-caja"
    ]
};
const categoryCache = new Map();
let cachedKitAddOn;
function getProductCategories() {
    return CATEGORY_CONFIG.map(loadCategory).filter(Boolean);
}
function getAllProducts() {
    const categories = CATEGORY_CONFIG.map(loadCategoryWithProducts).filter(Boolean);
    return categories.flatMap((category)=>category.products.map((product)=>({
                slug: product.slug,
                name: product.meta.name,
                description: product.meta.description,
                manufacturer: product.meta.manufacturer,
                model: product.meta.model,
                availability: product.meta.availability,
                price: product.meta.price,
                quantity: product.meta.quantity,
                images: product.images,
                categoryId: category.config.id,
                categoryName: category.config.name,
                categoryTagline: category.config.tagline,
                supportsCondition: CONDITION_CATEGORY_IDS.has(category.config.id) ? true : undefined,
                refurbishmentDiscount: CONDITION_CATEGORY_IDS.has(category.config.id) ? REFURBISHED_DISCOUNT : undefined,
                refurbishedPrice: CONDITION_CATEGORY_IDS.has(category.config.id) ? REFURBISHED_PRICE_BY_CATEGORY[category.config.id] : undefined,
                kitAddOn: CONDITION_CATEGORY_IDS.has(category.config.id) ? getKitAddOn() ?? undefined : undefined
            })));
}
function getProductBySlug(slug) {
    return getAllProducts().find((p)=>p.slug === slug) ?? null;
}
function loadCategory(config) {
    const loaded = loadCategoryWithProducts(config);
    if (!loaded || loaded.products.length === 0) return null;
    const heroImage = config.heroImage ? ensurePublicAsset(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(SOURCE_ROOT, config.heroImage)) : loaded.products[0]?.images[0];
    const overrideHero = CATEGORY_IMAGE_OVERRIDES[config.id];
    const hero = overrideHero ? ensurePublicAsset(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(SOURCE_ROOT, overrideHero)) : heroImage;
    return {
        id: config.id,
        name: config.name,
        tagline: config.tagline,
        heroImage: hero,
        products: loaded.products.map((product)=>({
                slug: product.slug,
                name: product.meta.name,
                price: product.meta.price,
                shortDescription: buildShortDescription(product.meta.description),
                image: product.images[0],
                manufacturer: product.meta.manufacturer,
                model: product.meta.model,
                availability: product.meta.availability,
                supportsCondition: CONDITION_CATEGORY_IDS.has(config.id) ? true : undefined,
                refurbishmentDiscount: CONDITION_CATEGORY_IDS.has(config.id) ? REFURBISHED_DISCOUNT : undefined,
                refurbishedPrice: CONDITION_CATEGORY_IDS.has(config.id) ? REFURBISHED_PRICE_BY_CATEGORY[config.id] : undefined,
                kitAddOn: CONDITION_CATEGORY_IDS.has(config.id) ? getKitAddOn() ?? undefined : undefined
            }))
    };
}
function loadCategoryWithProducts(config) {
    if (categoryCache.has(config.id)) {
        return categoryCache.get(config.id);
    }
    const baseDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(SOURCE_ROOT, config.dir);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(baseDir)) return null;
    const products = [];
    if (config.mode === "single") {
        const metaPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(baseDir, "title-price-desc.txt");
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(metaPath)) return null;
        const meta = parseMetadata(metaPath);
        if (!meta) return null;
        let images = collectImages(baseDir);
        images = applyPriority(config.id, images);
        const slug = slugify(`${config.id}-${meta.model || meta.name || config.dir}`);
        products.push({
            slug,
            meta,
            images
        });
    } else {
        const entries = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readdirSync(baseDir, {
            withFileTypes: true
        });
        for (const entry of entries){
            if (!entry.isDirectory()) continue;
            const folder = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(baseDir, entry.name);
            const metaPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(folder, "title-price-desc.txt");
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(metaPath)) continue;
            const meta = parseMetadata(metaPath);
            if (!meta) continue;
            const images = collectImages(folder);
            const slugBase = `${config.id}-${entry.name}-${meta.model || meta.name}`;
            const slug = slugify(slugBase);
            products.push({
                slug,
                meta,
                images
            });
        }
        // Keep deterministic order
        products.sort((a, b)=>a.meta.name.localeCompare(b.meta.name, "es", {
                sensitivity: "base"
            }));
    }
    const result = {
        config,
        products
    };
    categoryCache.set(config.id, result);
    return result;
}
function parseMetadata(filePath) {
    try {
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        const lines = raw.split(/\r?\n/).map((line)=>line.trim()).filter((line)=>line.length > 0);
        if (lines.length === 0) return null;
        let pointer = lines.length - 1;
        const readLine = (offset = 0)=>lines[pointer - offset];
        const popLine = ()=>lines.splice(pointer--, 1)[0];
        let quantity = 1;
        const quantityCandidate = readLine();
        if (quantityCandidate && /[0-9]/.test(quantityCandidate) && !/[a-zA-Z]/.test(quantityCandidate)) {
            quantity = parseInt(quantityCandidate.replace(/[^0-9]/g, ""), 10) || 1;
            popLine();
        }
        if (/^Cantidad/i.test(readLine() ?? "")) {
            popLine();
        }
        let price = 0;
        const priceCandidate = readLine();
        if (priceCandidate) {
            const match = priceCandidate.match(/\$\s*([0-9]+(?:[.,][0-9]{1,2})?)/);
            if (match) {
                price = Number(match[1].replace(/\./g, "").replace(/,/g, "."));
                popLine();
            }
        }
        let availability = 0;
        if (/^Disponibilidad:/i.test(readLine() ?? "")) {
            const line = popLine();
            availability = parseInt(line.replace(/^Disponibilidad:\s*/i, "").replace(/[^0-9]/g, ""), 10) || 0;
        }
        let model = "";
        if (/^Modelo:/i.test(readLine() ?? "")) {
            const line = popLine();
            model = line.replace(/^Modelo:\s*/i, "").trim();
        }
        let manufacturer = "";
        if (/^Fabricante:/i.test(readLine() ?? "")) {
            const line = popLine();
            manufacturer = line.replace(/^Fabricante:\s*/i, "").trim();
        }
        let name = "";
        if (pointer >= 0) {
            name = popLine()?.trim() ?? "";
        }
        const description = lines.slice(0, pointer + 1).join("\n").trim();
        return {
            name,
            manufacturer,
            model,
            availability,
            price,
            quantity,
            description
        };
    } catch (error) {
        console.error("Failed to parse metadata", filePath, error);
        return null;
    }
}
function collectImages(folder) {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(folder)) return [];
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readdirSync(folder);
    return files.filter((file)=>IMAGE_EXT.test(file)).map((file)=>ensurePublicAsset(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(folder, file)));
}
function ensurePublicAsset(fullPath) {
    const relative = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(SOURCE_ROOT, fullPath);
    const publicPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(PUBLIC_ROOT, relative);
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(publicPath), {
            recursive: true
        });
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(publicPath)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].copyFileSync(fullPath, publicPath);
        }
    } catch (error) {
        console.error("Failed to ensure public asset", fullPath, error);
    }
    return `/images/${relative.replace(/\\/g, "/")}`;
}
function buildShortDescription(description) {
    const cleaned = description.split(/\n+/).map((line)=>line.trim()).filter(Boolean);
    const summary = cleaned.slice(0, 2).join(" ");
    return summary.length > 160 ? summary.slice(0, 157) + "…" : summary;
}
function slugify(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function getKitAddOn() {
    if (cachedKitAddOn !== undefined) return cachedKitAddOn;
    const accessoriesConfig = CATEGORY_CONFIG.find((cfg)=>cfg.id === "accesorios");
    if (!accessoriesConfig) {
        cachedKitAddOn = null;
        return cachedKitAddOn;
    }
    const accessories = loadCategoryWithProducts(accessoriesConfig);
    if (!accessories) {
        cachedKitAddOn = null;
        return cachedKitAddOn;
    }
    const kitProduct = accessories.products.find((product)=>/kit/i.test(product.meta.name));
    if (!kitProduct) {
        cachedKitAddOn = null;
        return cachedKitAddOn;
    }
    cachedKitAddOn = {
        slug: kitProduct.slug,
        name: kitProduct.meta.name,
        price: kitProduct.meta.price > 0 ? kitProduct.meta.price : 50
    };
    return cachedKitAddOn;
}
function applyPriority(categoryId, images) {
    const priorities = CATEGORY_IMAGE_PRIORITY[categoryId];
    if (!priorities || !priorities.length) return images;
    const sorted = [
        ...images
    ];
    for(let i = priorities.length - 1; i >= 0; i--){
        const keyword = priorities[i];
        const index = sorted.findIndex((img)=>img.toLowerCase().includes(keyword.toLowerCase()));
        if (index > 0) {
            const [image] = sorted.splice(index, 1);
            sorted.unshift(image);
        }
    }
    return sorted;
}
}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$ProductsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/ProductsClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-data.ts [app-rsc] (ecmascript)");
;
;
;
function ProductsPage() {
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$ProductsClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        categories: categories
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13fd75a5._.js.map