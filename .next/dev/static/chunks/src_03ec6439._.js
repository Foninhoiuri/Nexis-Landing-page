(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-mobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDevice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDevice",
    ()=>useDevice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const TABLET_MIN = 768; // width >= 768
const TABLET_MAX = 1024; // width < 1024
function useDevice() {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDevice.useEffect": ()=>{
            const handleResize = {
                "useDevice.useEffect.handleResize": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        const w = window.innerWidth;
                        setWidth(w);
                        const tablet = w >= TABLET_MIN && w < TABLET_MAX;
                        setIsTablet(!isMobile && tablet);
                        setIsDesktop(!isMobile && !tablet);
                    }
                }
            }["useDevice.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "useDevice.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useDevice.useEffect"];
        }
    }["useDevice.useEffect"], [
        isMobile
    ]);
    return {
        isMobile,
        isTablet,
        isDesktop,
        width
    };
}
_s(useDevice, "4k/HRu6tGJI6zu78IN+dStgZxwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialIcons",
    ()=>SocialIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SocialIcons = {
    whatsapp: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 16 16",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Icons.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Icons.tsx",
            lineNumber: 5,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    instagram: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 16 16",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Icons.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Icons.tsx",
            lineNumber: 10,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    facebook: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 16 16",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Icons.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Icons.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/whatsapp-hover-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppHoverButton",
    ()=>WhatsAppHoverButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
;
;
;
function WhatsAppHoverButton({ text = "Começar", className, onClick, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative w-auto cursor-pointer overflow-hidden rounded-full border border-blue-600/30 bg-blue-600 p-2.5 px-6 text-center font-semibold text-white transition-all btn-green", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/whatsapp-hover-button.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
                        className: "w-5 h-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/whatsapp-hover-button.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/whatsapp-hover-button.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/whatsapp-hover-button.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/whatsapp-hover-button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = WhatsAppHoverButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppHoverButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/social.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_INFO",
    ()=>CONTACT_INFO,
    "SOCIAL",
    ()=>SOCIAL
]);
const SOCIAL = {
    whatsapp: {
        url: "https://wa.me/5519996599430",
        label: "+55 19 99659-9430",
        active: true
    },
    facebook: {
        url: "https://www.facebook.com/nexis",
        active: false
    },
    instagram: {
        url: "https://www.instagram.com/nexis_hub/",
        active: true
    },
    linkedin: {
        url: "https://www.linkedin.com/company/nexis",
        active: false
    },
    email: {
        url: "mailto:atendimento.nexis@gmail.com",
        label: "atendimento.nexis@gmail.com",
        active: true
    },
    maps: {
        url: "https://maps.google.com/?q=Americana,São+Paulo,SP",
        label: "Americana, São Paulo, SP",
        active: false
    }
};
const CONTACT_INFO = {
    address: {
        raw: "Americana, São Paulo, SP",
        label: [
            "Americana",
            "São Paulo, SP"
        ],
        active: true
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDevice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$whatsapp$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/whatsapp-hover-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/social.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// --- ASSETS ---
const ASSETS = {
    icon: "/nexis_logo.png"
};
// --- LINKS MAP ---
const LINKS = [
    {
        label: "Dores",
        id: "problems"
    },
    {
        label: "Soluções",
        id: "solutions"
    },
    {
        label: "Dashboard",
        id: "dashboard"
    },
    {
        label: "Métricas",
        id: "features"
    },
    {
        label: "Metodologia",
        id: "methodology"
    },
    {
        label: "Depoimentos",
        id: "reviews"
    },
    {
        label: "FAQ",
        id: "faq"
    }
];
// --- CONFIGURAÇÃO DE ALTURAS ---
const LOGO_ICON_SIZES = {
    desktop: 30,
    tablet: 30,
    mobile: 32
};
const NAVBAR_HEIGHTS = {
    desktop: 72,
    tablet: 72,
    mobile: 80
};
function Navbar() {
    _s();
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isMobile, isTablet, isDesktop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Soluções");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navbarHeight, setNavbarHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(NAVBAR_HEIGHTS.desktop);
    const [iconHeight, setIconHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(LOGO_ICON_SIZES.desktop);
    // --- UPDATE DIMENSIONS ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isDesktop) {
                setNavbarHeight(NAVBAR_HEIGHTS.desktop);
                setIconHeight(LOGO_ICON_SIZES.desktop);
            } else if (isTablet) {
                setNavbarHeight(NAVBAR_HEIGHTS.tablet);
                setIconHeight(LOGO_ICON_SIZES.tablet);
            } else {
                setNavbarHeight(NAVBAR_HEIGHTS.mobile);
                setIconHeight(LOGO_ICON_SIZES.mobile);
            }
        }
    }["Navbar.useEffect"], [
        isDesktop,
        isTablet,
        isMobile
    ]);
    // -- SECTION DETECTOR --
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const visibleSectionId = entry.target.id;
                                const link = LINKS.find({
                                    "Navbar.useEffect.link": (l)=>l.id === visibleSectionId
                                }["Navbar.useEffect.link"]);
                                if (link) setActiveTab(link.label);
                            }
                        }
                    }["Navbar.useEffect"]);
                }
            }["Navbar.useEffect"], {
                rootMargin: "-40% 0px -50% 0px"
            });
            LINKS.forEach({
                "Navbar.useEffect": (l)=>{
                    const el = document.getElementById(l.id);
                    if (el) observer.observe(el);
                }
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // --- SCROLL ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // --- ESTILOS ---
    const containerStyle = `
        backdrop-blur-[10px]
        bg-[#050505]/40
        rounded-full
        border border-white/5
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
    `;
    const transparentStyle = `bg-transparent border-transparent shadow-none rounded-0 `;
    const glassStyleMobile = `
        backdrop-blur-[20px]
        bg-black/80
        rounded-full
        border border-white/10
        shadow-2xl
    `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex fixed top-4 left-0 w-full z-50 justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: false,
                    animate: {
                        opacity: 1
                    },
                    className: `
                        pointer-events-auto relative
                        flex items-center justify-between px-6
                        
                        transition-all duration-300
                        ${scrolled ? containerStyle : transparentStyle}
                    `,
                    style: {
                        height: `${navbarHeight}px`,
                        width: "auto",
                        minWidth: "700px",
                        maxWidth: "1500px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            ref: logoRef,
                            className: "flex justify-start px-4 transition-opacity hover:cursor-pointer hover:transition-transform hover:scale-[1.1]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: ASSETS.icon,
                                alt: "Nexis Logo",
                                className: "object-contain",
                                style: {
                                    height: `${iconHeight}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this),
                        (!isTablet || scrolled) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center    backdrop-blur-[100px]   gap-1 bg-white/5 p-1.5    rounded-full    border border-white/5    mx-auto",
                            children: LINKS.map((link)=>{
                                const isActive = activeTab === link.label;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const el = document.getElementById(link.id);
                                        if (el) {
                                            el.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                            setActiveTab(link.label);
                                        } else {
                                            console.warn(`Elemento com id '${link.id}' não encontrado!`);
                                        }
                                    },
                                    className: `
                                            relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                                            ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : "text-zinc-400 hover:text-white hover:bg-white/5"}
                                        `,
                                    children: link.label
                                }, link.id, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 157,
                                    columnNumber: 37
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 148,
                            columnNumber: 25
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center ml-8 hover:cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$whatsapp$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppHoverButton"], {
                                className: "min-w-[140px]",
                                onClick: ()=>window.open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.url, "_blank")
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 187,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 186,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3 pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        className: `
                        w-14 h-14 rounded-full flex items-center justify-center
                        text-white shadow-xl transition-all duration-300 relative z-50
                        ${isMobileMenuOpen ? "bg-blue-600 rotate-90" : `${glassStyleMobile} rotate-0`}
                    `,
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 170
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 208
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 213,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "12",
                                    x2: "21",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 215,
                                    columnNumber: 170
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "6",
                                    x2: "21",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 215,
                                    columnNumber: 209
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "18",
                                    x2: "21",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 215,
                                    columnNumber: 246
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 215,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isMobileMenuOpen && // Alterado: items-end -> items-center para centralizar na "coluna" do botão
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 mb-2",
                            children: [
                                LINKS.slice().reverse().map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        initial: {
                                            opacity: 0,
                                            y: 20,
                                            scale: 0.8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.8
                                        },
                                        transition: {
                                            delay: (i + 1) * 0.05
                                        },
                                        onClick: ()=>{
                                            const el = document.getElementById(link.id);
                                            if (el) {
                                                el.scrollIntoView({
                                                    behavior: "smooth"
                                                });
                                                setActiveTab(link.label);
                                            }
                                            setIsMobileMenuOpen(false);
                                        },
                                        className: `
                                        px-6 py-3 rounded-full font-medium text-white shadow-lg min-w-[140px] items-end
                                        ${activeTab === link.label ? "bg-blue-600" : glassStyleMobile}
                                    `,
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this)),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0,
                                        y: 20,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.8
                                    },
                                    transition: {
                                        delay: 0.05
                                    },
                                    onClick: ()=>window.open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.url, "_blank"),
                                    className: " btn-blue bg-[var(--color-brand-blue)] px-6 py-3 rounded-full text-white font-bold shadow-lg min-w-[140px] text-center items-center",
                                    children: "Começar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 250,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "J+C6hWzm0juXA0VUOP7j3jZtYt4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/orbiting-circles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrbitingCircles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function OrbitingCircles({ className, children, reverse, duration = 20, delay = 10, radius = 50, path = true }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const fillGradientId = `orbit-fill-${id}`;
    const strokeGradientId = `orbit-stroke-${id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                // Adicionado overflow-visible explicitamente para garantir que o brilho não seja cortado
                className: "pointer-events-none absolute size-full overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: fillGradientId,
                                cx: "50%",
                                cy: "50%",
                                r: "50%",
                                fx: "50%",
                                fy: "50%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "white",
                                        stopOpacity: "0.02"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: strokeGradientId,
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "white",
                                        stopOpacity: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "white",
                                        stopOpacity: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "stroke-1 dark:stroke-white/5",
                        cx: "50%",
                        cy: "50%",
                        r: radius,
                        fill: `url(#${fillGradientId})`,
                        stroke: `url(#${strokeGradientId})`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--duration": duration,
                    "--radius": radius,
                    "--delay": -delay
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-none [animation-delay:calc(var(--delay)*1000ms)] z-30", {
                    "[animation-direction:reverse]": reverse
                }, className),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/orbiting-circles.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(OrbitingCircles, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = OrbitingCircles;
var _c;
__turbopack_context__.k.register(_c, "OrbitingCircles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroOrbitingBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroOrbitingBackground",
    ()=>HeroOrbitingBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/orbiting-circles.tsx [app-client] (ecmascript)");
"use client";
;
;
// ... (Mantenha o RenderLogo igual) ...
const RenderLogo = ({ src, alt, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-24 w-24 items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-[15px] opacity-90 pointer-events-none",
                style: {
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                className: "w-16 h-16 object-contain relative drop-shadow-sm"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RenderLogo;
function HeroOrbitingBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-full w-full flex-col items-center justify-center scale-75 md:scale-90 lg:scale-100 lg:translate-y-40 lg:-translate-x-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/nexis_icon.png",
                        alt: "Nexis",
                        className: "h-20 w-20 lg:h-24 lg:w-24 object-contain brightness-125 drop-shadow-[0_0_25px_rgba(62,207,142,0.4)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    duration: 20,
                    delay: 0,
                    radius: 190,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/instagram.png",
                        alt: "Instagram",
                        color: "#d62976"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    duration: 20,
                    delay: 5,
                    radius: 190,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/whatsapp.png",
                        alt: "WhatsApp",
                        color: "#25D366"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    duration: 20,
                    delay: 10,
                    radius: 190,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/gemini.png",
                        alt: "Gemini",
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    duration: 20,
                    delay: 15,
                    radius: 190,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/chatgpt.png",
                        alt: "OpenAI",
                        color: "#ffffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 300,
                    duration: 30,
                    delay: 0,
                    reverse: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/docs.png",
                        alt: "Docs",
                        color: "#4285F4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 300,
                    duration: 30,
                    delay: 6,
                    reverse: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/trello.png",
                        alt: "Trello",
                        color: "#0079BF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 300,
                    duration: 30,
                    delay: 12,
                    reverse: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/calendar.png",
                        alt: "Calendar",
                        color: "#f4e242ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 300,
                    duration: 30,
                    delay: 18,
                    reverse: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/drive.png",
                        alt: "Drive",
                        color: "#FFC107"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 300,
                    duration: 30,
                    delay: 24,
                    reverse: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/excel.png",
                        alt: "Excel",
                        color: "#217346"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 450,
                    duration: 40,
                    delay: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/mercadopago.png",
                        alt: "Mercado Pago",
                        color: "#009ee3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 450,
                    duration: 40,
                    delay: 10,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/shopify.png",
                        alt: "Shopify",
                        color: "#96bf48"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 450,
                    duration: 40,
                    delay: 20,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/bling.png",
                        alt: "Bling",
                        color: "#10a37f"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbiting$2d$circles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "size-[60px] border-none bg-transparent",
                    radius: 450,
                    duration: 40,
                    delay: 30,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderLogo, {
                        src: "/logos/supabase.png",
                        alt: "Supabase",
                        color: "#3ECF8E"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/HeroOrbitingBackground.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_c1 = HeroOrbitingBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "RenderLogo");
__turbopack_context__.k.register(_c1, "HeroOrbitingBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/RotatingBlurText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotatingBlurText",
    ()=>RotatingBlurText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RotatingBlurText({ texts, duration = 4000, className = "" }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingBlurText.useEffect": ()=>{
            const interval = setInterval({
                "RotatingBlurText.useEffect.interval": ()=>{
                    setIndex({
                        "RotatingBlurText.useEffect.interval": (prev)=>(prev + 1) % texts.length
                    }["RotatingBlurText.useEffect.interval"]);
                }
            }["RotatingBlurText.useEffect.interval"], duration);
            return ({
                "RotatingBlurText.useEffect": ()=>clearInterval(interval)
            })["RotatingBlurText.useEffect"];
        }
    }["RotatingBlurText.useEffect"], [
        texts.length,
        duration
    ]);
    const words = texts[index].split(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex relative h-[1.1em] w-full align-top overflow-visible justify-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex flex-nowrap gap-[0.25em] items-center absolute left-0 top-0 whitespace-nowrap",
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                children: words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: `inline-block ${className}`,
                        initial: {
                            filter: "blur(10px)",
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            filter: "blur(0px)",
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut",
                                delay: i * 0.1 // Stagger entrance
                            }
                        },
                        exit: {
                            filter: "blur(5px)",
                            opacity: 0,
                            y: -20,
                            transition: {
                                duration: 0.3,
                                ease: "easeIn",
                                delay: i * 0.03 // Stagger exit
                            }
                        },
                        children: word
                    }, i, false, {
                        fileName: "[project]/src/components/ui/RotatingBlurText.tsx",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this))
            }, index, false, {
                fileName: "[project]/src/components/ui/RotatingBlurText.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/RotatingBlurText.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/RotatingBlurText.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(RotatingBlurText, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = RotatingBlurText;
var _c;
__turbopack_context__.k.register(_c, "RotatingBlurText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOrbitingBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/HeroOrbitingBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RotatingBlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/RotatingBlurText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/social.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col items-center pt-4 md:pt-2 lg:pt-3 pb-20 xl:pb-16 overflow-visible xl:overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto relative z-20 px-4 grid grid-cols-1 xl:grid-cols-[58%_42%] gap-12 items-center min-h-[calc(100vh-100px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start text-left pt-10 xl:pt-0 order-2 xl:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8 hover:border-brand/30 transition-colors cursor-default",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-2 w-2 rounded-full bg-brand animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-neutral-300",
                                        children: "Infraestrutura, Inteligência e Controle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6 relative z-30 leading-tight",
                                children: [
                                    "Sua empresa no",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "block sm:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RotatingBlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotatingBlurText"], {
                                        texts: [
                                            "piloto automático!",
                                            "controle!",
                                            "próximo nível!",
                                            "topo do mercado!",
                                            "Futuro!"
                                        ],
                                        className: "text-transparent bg-clip-text bg-gradient-to-b from-brand to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] pb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                className: "text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-10 leading-relaxed relative z-30",
                                children: [
                                    "Integração de sistemas, implementação de IA e dashboards de gestão. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 54,
                                        columnNumber: 93
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Pare de gerenciar tarefas e comece a gerenciar resultados."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.3
                                },
                                className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 relative  w-full sm:w-auto",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn-blue-solid flex items-center gap-2 w-full sm:w-auto justify-center",
                                        children: [
                                            "Comece agora ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 71,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-blue bg-surface border border-white/10 flex items-center gap-2 w-full sm:w-auto justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-4 h-4 text-brand-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 75,
                                                columnNumber: 29
                                            }, this),
                                            "Automações"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center h-full xl:h-full order-1 xl:order-2 blur-[2px] md:blur-[2px] xl:blur-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOrbitingBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroOrbitingBackground"], {}, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/GradualBlur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
const DEFAULT_CONFIG = {
    position: 'bottom',
    strength: 2,
    height: '6rem',
    divCount: 5,
    exponential: false,
    zIndex: 10,
    animated: false,
    duration: '0.3s',
    easing: 'ease-out',
    opacity: 1,
    curve: 'linear',
    responsive: false,
    target: 'parent',
    className: '',
    style: {}
};
const PRESETS = {
    top: {
        position: 'top',
        height: '6rem'
    },
    bottom: {
        position: 'bottom',
        height: '6rem'
    },
    left: {
        position: 'left',
        height: '6rem'
    },
    right: {
        position: 'right',
        height: '6rem'
    },
    subtle: {
        height: '4rem',
        strength: 1,
        opacity: 0.8,
        divCount: 3
    },
    intense: {
        height: '10rem',
        strength: 4,
        divCount: 8,
        exponential: true
    },
    smooth: {
        height: '8rem',
        curve: 'bezier',
        divCount: 10
    },
    sharp: {
        height: '5rem',
        curve: 'linear',
        divCount: 4
    },
    header: {
        position: 'top',
        height: '8rem',
        curve: 'ease-out'
    },
    footer: {
        position: 'bottom',
        height: '8rem',
        curve: 'ease-out'
    },
    sidebar: {
        position: 'left',
        height: '6rem',
        strength: 2.5
    },
    'page-header': {
        position: 'top',
        height: '10rem',
        target: 'page',
        strength: 3
    },
    'page-footer': {
        position: 'bottom',
        height: '10rem',
        target: 'page',
        strength: 3
    }
};
const CURVE_FUNCTIONS = {
    linear: (p)=>p,
    bezier: (p)=>p * p * (3 - 2 * p),
    'ease-in': (p)=>p * p,
    'ease-out': (p)=>1 - Math.pow(1 - p, 2),
    'ease-in-out': (p)=>p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
};
const mergeConfigs = (...configs)=>configs.reduce((acc, c)=>({
            ...acc,
            ...c
        }), {});
const getGradientDirection = (position)=>{
    const directions = {
        top: 'to top',
        bottom: 'to bottom',
        left: 'to left',
        right: 'to right'
    };
    return directions[position] || 'to bottom';
};
const debounce = (fn, wait)=>{
    let t;
    return (...a)=>{
        clearTimeout(t);
        t = setTimeout(()=>fn(...a), wait);
    };
};
const useResponsiveDimension = (responsive, config, key)=>{
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(config[key]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResponsiveDimension.useEffect": ()=>{
            if (!responsive) return;
            const calc = {
                "useResponsiveDimension.useEffect.calc": ()=>{
                    const w = window.innerWidth;
                    let v = config[key];
                    // Note: Assuming config has keys like mobileHeight, tabletHeight etc.
                    if (w <= 480 && config['mobile' + key[0].toUpperCase() + key.slice(1)]) v = config['mobile' + key[0].toUpperCase() + key.slice(1)];
                    else if (w <= 768 && config['tablet' + key[0].toUpperCase() + key.slice(1)]) v = config['tablet' + key[0].toUpperCase() + key.slice(1)];
                    else if (w <= 1024 && config['desktop' + key[0].toUpperCase() + key.slice(1)]) v = config['desktop' + key[0].toUpperCase() + key.slice(1)];
                    setVal(v);
                }
            }["useResponsiveDimension.useEffect.calc"];
            const deb = debounce(calc, 100);
            calc();
            window.addEventListener('resize', deb);
            return ({
                "useResponsiveDimension.useEffect": ()=>window.removeEventListener('resize', deb)
            })["useResponsiveDimension.useEffect"];
        }
    }["useResponsiveDimension.useEffect"], [
        responsive,
        config,
        key
    ]);
    return responsive ? val : config[key];
};
_s(useResponsiveDimension, "KCyovYlvTeOkYf9aE4eMe2FnTgU=");
const useIntersectionObserver = (ref, shouldObserve = false)=>{
    _s1();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!shouldObserve);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!shouldObserve || !ref.current) return;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": ([entry])=>setIsVisible(entry.isIntersecting)
            }["useIntersectionObserver.useEffect"], {
                threshold: 0.1
            });
            observer.observe(ref.current);
            return ({
                "useIntersectionObserver.useEffect": ()=>observer.disconnect()
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        shouldObserve
    ]);
    return isVisible;
};
_s1(useIntersectionObserver, "qWfkRchSz1HMIf5S7ILAWwQPHDg=");
const GradualBlur = (props)=>{
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[config]": ()=>{
            const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
            return mergeConfigs(DEFAULT_CONFIG, presetConfig, props);
        }
    }["GradualBlur.useMemo[config]"], [
        props
    ]);
    const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
    const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');
    const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');
    const blurDivs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[blurDivs]": ()=>{
            const divs = [];
            const increment = 100 / config.divCount;
            const currentStrength = isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;
            const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;
            for(let i = 1; i <= config.divCount; i++){
                let progress = i / config.divCount;
                progress = curveFunc(progress);
                let blurValue;
                if (config.exponential) {
                    blurValue = Math.pow(2, progress * 4) * 0.0625 * currentStrength;
                } else {
                    blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
                }
                const p1 = Math.round((increment * i - increment) * 10) / 10;
                const p2 = Math.round(increment * i * 10) / 10;
                const p3 = Math.round((increment * i + increment) * 10) / 10;
                const p4 = Math.round((increment * i + increment * 2) * 10) / 10;
                let gradient = `transparent ${p1}%, black ${p2}%`;
                if (p3 <= 100) gradient += `, black ${p3}%`;
                if (p4 <= 100) gradient += `, transparent ${p4}%`;
                const direction = getGradientDirection(config.position);
                const divStyle = {
                    position: 'absolute',
                    inset: '0',
                    maskImage: `linear-gradient(${direction}, ${gradient})`,
                    WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
                    backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
                    WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
                    opacity: config.opacity,
                    transition: config.animated && config.animated !== 'scroll' ? `backdrop-filter ${config.duration} ${config.easing}` : undefined
                };
                divs.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: divStyle
                }, i, false, {
                    fileName: "[project]/src/components/ui/GradualBlur.tsx",
                    lineNumber: 182,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)));
            }
            return divs;
        }
    }["GradualBlur.useMemo[blurDivs]"], [
        config,
        isHovered
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[containerStyle]": ()=>{
            const isVertical = [
                'top',
                'bottom'
            ].includes(config.position);
            const isHorizontal = [
                'left',
                'right'
            ].includes(config.position);
            const isPageTarget = config.target === 'page';
            // Typed explicitly
            const baseStyle = {
                position: isPageTarget ? 'fixed' : 'absolute',
                pointerEvents: config.hoverIntensity ? 'auto' : 'none',
                opacity: isVisible ? 1 : 0,
                transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
                zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
                ...config.style
            };
            if (isVertical) {
                baseStyle.height = responsiveHeight;
                baseStyle.width = responsiveWidth || '100%';
                baseStyle[config.position] = 0;
                baseStyle.left = 0;
                baseStyle.right = 0;
            } else if (isHorizontal) {
                baseStyle.width = responsiveWidth || responsiveHeight;
                baseStyle.height = '100%';
                baseStyle[config.position] = 0;
                baseStyle.top = 0;
                baseStyle.bottom = 0;
            }
            return baseStyle;
        }
    }["GradualBlur.useMemo[containerStyle]"], [
        config,
        responsiveHeight,
        responsiveWidth,
        isVisible
    ]);
    const { hoverIntensity, animated, onAnimationComplete, duration } = config;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GradualBlur.useEffect": ()=>{
            if (isVisible && animated === 'scroll' && onAnimationComplete) {
                const t = setTimeout({
                    "GradualBlur.useEffect.t": ()=>onAnimationComplete()
                }["GradualBlur.useEffect.t"], parseFloat(duration) * 1000);
                return ({
                    "GradualBlur.useEffect": ()=>clearTimeout(t)
                })["GradualBlur.useEffect"];
            }
        }
    }["GradualBlur.useEffect"], [
        isVisible,
        animated,
        onAnimationComplete,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `gradual-blur ${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} ${config.className}`,
        style: containerStyle,
        onMouseEnter: hoverIntensity ? ()=>setIsHovered(true) : undefined,
        onMouseLeave: hoverIntensity ? ()=>setIsHovered(false) : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gradual-blur-inner relative w-full h-full",
            children: blurDivs
        }, void 0, false, {
            fileName: "[project]/src/components/ui/GradualBlur.tsx",
            lineNumber: 236,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/GradualBlur.tsx",
        lineNumber: 229,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(GradualBlur, "1UoKlkVouai2fcOR8xz0nJLuJJ0=", false, function() {
    return [
        useResponsiveDimension,
        useResponsiveDimension,
        useIntersectionObserver
    ];
});
_c = GradualBlur;
const GradualBlurMemo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(GradualBlur);
_c1 = GradualBlurMemo;
const __TURBOPACK__default__export__ = GradualBlurMemo;
var _c, _c1;
__turbopack_context__.k.register(_c, "GradualBlur");
__turbopack_context__.k.register(_c1, "GradualBlurMemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TypingAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingAnimation",
    ()=>TypingAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TypingAnimation({ words, className, loop = true, typingSpeed = 150, deletingSpeed = 80, pauseTime = 1500 }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [subIndex, setSubIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reverse, setReverse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blink, setBlink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Blinking cursor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingAnimation.useEffect": ()=>{
            const timeout2 = setInterval({
                "TypingAnimation.useEffect.timeout2": ()=>{
                    setBlink({
                        "TypingAnimation.useEffect.timeout2": (prev)=>!prev
                    }["TypingAnimation.useEffect.timeout2"]);
                }
            }["TypingAnimation.useEffect.timeout2"], 500);
            return ({
                "TypingAnimation.useEffect": ()=>clearInterval(timeout2)
            })["TypingAnimation.useEffect"];
        }
    }["TypingAnimation.useEffect"], []);
    // Typing logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingAnimation.useEffect": ()=>{
            if (index === words.length && !loop) return;
            if (subIndex === words[index].length + 1 && !reverse) {
                // Word finished typing
                const timeout = setTimeout({
                    "TypingAnimation.useEffect.timeout": ()=>{
                        setReverse(true);
                    }
                }["TypingAnimation.useEffect.timeout"], pauseTime);
                return ({
                    "TypingAnimation.useEffect": ()=>clearTimeout(timeout)
                })["TypingAnimation.useEffect"];
            }
            if (subIndex === 0 && reverse) {
                // Word finished deleting
                setReverse(false);
                setIndex({
                    "TypingAnimation.useEffect": (prev)=>(prev + 1) % words.length
                }["TypingAnimation.useEffect"]);
                return;
            }
            const timeout = setTimeout({
                "TypingAnimation.useEffect.timeout": ()=>{
                    setSubIndex({
                        "TypingAnimation.useEffect.timeout": (prev)=>prev + (reverse ? -1 : 1)
                    }["TypingAnimation.useEffect.timeout"]);
                }
            }["TypingAnimation.useEffect.timeout"], reverse ? deletingSpeed : typingSpeed);
            return ({
                "TypingAnimation.useEffect": ()=>clearTimeout(timeout)
            })["TypingAnimation.useEffect"];
        }
    }["TypingAnimation.useEffect"], [
        subIndex,
        index,
        reverse,
        words,
        loop,
        typingSpeed,
        deletingSpeed,
        pauseTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center", className),
        children: [
            '\u200B',
            words[index].substring(0, subIndex),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-1 w-[3px] h-[1em] bg-white block", blink ? "opacity-100" : "opacity-0")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TypingAnimation.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TypingAnimation.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
_s(TypingAnimation, "Z7/gouKFf/Z2FiHoa6UOE9G/zko=");
_c = TypingAnimation;
var _c;
__turbopack_context__.k.register(_c, "TypingAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/ManualProcessDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualProcessDemo",
    ()=>ManualProcessDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
// --- ASSETS VISUAIS (DESIGN PREMIUM / GLASS) ---
// --- HELPER DE COR ---
const darkenColor = (hex, percent)=>{
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color.split('').map((c)=>c + c).join('');
    }
    const num = parseInt(color, 16);
    let r = num >> 16 & 0xff;
    let g = num >> 8 & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};
// 1. O FICHÁRIO (Interactive Design)
const Folder = ({ hasFile, color = '#f97316', size = 1.2 })=>{
    const folderBackColor = darkenColor(color, 0.4); // Darker for back
    const folderFrontColor = color; // Main color
    // Scale style
    const scaleStyle = {
        transform: `scale(${size})`
    };
    const open = hasFile; // Open while it has the file to grab
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: scaleStyle,
        className: "relative group select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative w-[100px] h-[80px] transition-all duration-300",
            animate: {
                y: open ? 0 : -4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]",
                    style: {
                        backgroundColor: folderBackColor
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-[98%] left-0 w-[40px] h-[10px] rounded-tl-[5px] rounded-tr-[5px]",
                        style: {
                            backgroundColor: folderBackColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-10 flex justify-center items-end pb-[10%] pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-[70%] h-[80%] bg-neutral-300 rounded-[5px] origin-bottom shadow-sm",
                            animate: open ? {
                                y: -40,
                                x: -25,
                                rotate: -15,
                                scale: 1
                            } : {
                                y: 0,
                                x: 0,
                                rotate: 0,
                                scale: 0.95
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-[80%] h-[80%] bg-neutral-200 rounded-[5px] origin-bottom shadow-sm",
                            animate: open ? {
                                y: -40,
                                x: 20,
                                rotate: 15,
                                scale: 1
                            } : {
                                y: 2,
                                x: 0,
                                rotate: 0,
                                scale: 0.98
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: hasFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute w-[90%] h-[90%] origin-bottom flex items-center justify-center z-20",
                                initial: {
                                    y: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    y: -60,
                                    x: -5,
                                    scale: 1,
                                    rotate: -5
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 1,
                                    y: -60,
                                    rotate: -5
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-[10px] bg-black/20 backdrop-blur-xl flex flex-col items-center justify-center gap-2",
                                    style: {
                                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.3) inset'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-inner text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 14,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                lineNumber: 128,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                            lineNumber: 127,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 items-center w-full px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-0.5 bg-white/40 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2/3 h-0.5 bg-white/30 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                            lineNumber: 132,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 121,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 102,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-0 left-0 w-full h-[80%] z-30 origin-bottom shadow-lg rounded-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border-t border-white/10",
                    style: {
                        backgroundColor: folderFrontColor
                    },
                    animate: open ? {
                        skewX: 15,
                        scaleY: 0.6,
                        filter: "brightness(1.1)"
                    } : {
                        skewX: 0,
                        scaleY: 1,
                        filter: "brightness(1)"
                    },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-0 left-0 w-full h-[80%] z-30 origin-bottom rounded-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-black/20 pointer-events-none mix-blend-multiply",
                    animate: open ? {
                        skewX: 15,
                        scaleY: 0.6,
                        opacity: 0
                    } : {
                        skewX: 0,
                        scaleY: 1,
                        opacity: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 159,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Folder;
// 2. O EXCEL (Interactive Grid Design)
const GlassExcelAsset = ({ isFilled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-72 h-44 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 bg-white/5 border-b border-white/5 flex items-center px-3 justify-between shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-red-500/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 176,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-yellow-500/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 177,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-green-500/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 178,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 175,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 flex border-b border-white/5 bg-neutral-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 border-r border-white/5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 186,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 grid grid-cols-3 divide-x divide-white/5",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-1 bg-white/10 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, c, false, {
                                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 border-r border-white/5 flex flex-col divide-y divide-white/5 bg-neutral-900/30 shrink-0",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1"
                                    }, r, false, {
                                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                        lineNumber: 200,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 199,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 grid grid-cols-3 grid-rows-3 divide-x divide-y divide-white/5 bg-white/2",
                                children: [
                                    ...Array(9)
                                ].map((_, i)=>{
                                    const isTarget = i === 4; // Center cell
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center px-3 overflow-hidden",
                                        children: isTarget && isFilled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute inset-0 bg-emerald-500/10",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: [
                                                            0,
                                                            0.5,
                                                            0.2
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 0.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "w-full h-1.5 bg-emerald-500/40 rounded-full",
                                                    initial: {
                                                        width: 0
                                                    },
                                                    animate: {
                                                        width: "80%"
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 100
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute right-1",
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        delay: 0.1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 10,
                                                        className: "text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : // Empty State (Identical for all)
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-[80%] h-1.5 bg-white/5 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                            lineNumber: 234,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/20 blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GlassExcelAsset;
// 3. O WHATSAPP (Glass Design - Mobile)
const GlassWhatsAppAsset = ({ isSent })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-40 h-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full border border-white/5 z-20"
            }, void 0, false, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 border-b border-white/5 flex items-center pt-4 px-4 gap-2 bg-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-2 bg-white/10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-3 flex flex-col justify-end space-y-3 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-start bg-neutral-800/80 border border-white/5 p-2.5 rounded-2xl rounded-tl-none max-w-[80%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1.5 bg-white/20 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 266,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 265,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.5,
                                y: 10,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                x: 0
                            },
                            className: "self-end bg-green-600/90 backdrop-blur border border-white/10 p-2.5 rounded-2xl rounded-tr-none max-w-[90%] shadow-lg shadow-green-900/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-1.5 bg-white/90 rounded-full mb-1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-1.5 bg-white/50 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 278,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 272,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 mx-3 mb-3 bg-white/5 rounded-full border border-white/5 flex items-center justify-between px-2 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-1.5 bg-white/10 rounded-full ml-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isSent ? 'bg-green-500' : 'bg-white/10'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                            size: 12,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                            lineNumber: 288,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 287,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = GlassWhatsAppAsset;
// --- 4. CURSOR 3D & PAYLOAD (Glass Payload) ---
const Cursor3D = ({ state })=>{
    // Configurações de profundidade (Z-Axis)
    const variants = {
        high: {
            scale: 1.1,
            opacity: 1
        },
        low: {
            scale: 0.9,
            opacity: 0.9
        }
    };
    const currentVariant = state.action === 'click' ? variants.low : variants.high;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute z-50 pointer-events-none",
        animate: {
            x: state.x,
            y: state.y,
            scale: currentVariant.scale
        },
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative -ml-2 -mt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "drop-shadow-2xl relative z-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z",
                        fill: "white",
                        stroke: "black",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 317,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 316,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: state.action === 'click' && state.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 10
                        },
                        animate: {
                            opacity: 1,
                            x: 20
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "absolute top-0 left-0 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-30",
                        children: state.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 323,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: state.hasFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            x: 14,
                            y: 14,
                            rotate: -5
                        },
                        exit: {
                            opacity: 0,
                            scale: 0,
                            y: 10
                        },
                        className: "absolute top-0 left-0 w-10 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded shadow-lg z-10 flex flex-col p-1.5 gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-0.5 bg-white/40 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 343,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2/3 h-0.5 bg-white/40 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 344,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-0.5 bg-white/20 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 345,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 337,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                    lineNumber: 335,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
            lineNumber: 314,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
        lineNumber: 305,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Cursor3D;
function ManualProcessDemo() {
    _s();
    const [sceneIndex, setSceneIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [actionState, setActionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 60,
        hasFile: false,
        action: 'move',
        completed: false,
        label: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManualProcessDemo.useEffect": ()=>{
            const loop = {
                "ManualProcessDemo.useEffect.loop": async ()=>{
                    while(true){
                        // --- CENA 1: PASTA ---
                        setSceneIndex(0);
                        setActionState({
                            x: 0,
                            y: 80,
                            hasFile: false,
                            completed: false,
                            action: 'move',
                            label: ''
                        });
                        await wait(200);
                        // Mouse vai até a pasta
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: 0,
                                    y: -10
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Ajuste Vertical Manual (Pasta)
                        await wait(800);
                        // Pega arquivo
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'click',
                                    label: 'Pega'
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(300);
                        // Levanta com arquivo
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'move',
                                    hasFile: true,
                                    completed: true,
                                    label: ''
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(800);
                        // --- CENA 2: EXCEL ---
                        setSceneIndex(1); // Slide Left
                        // Move para o centro (trazendo arquivo)
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: -80,
                                    y: 80,
                                    completed: false
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Reset pos visual fora da tela
                        await wait(50);
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: 0,
                                    y: 50
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Ajuste Vertical Manual (Excel)
                        await wait(800);
                        // Cola
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'click',
                                    label: 'Escreve'
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(300);
                        // Solta arquivo
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'move',
                                    hasFile: false,
                                    completed: true,
                                    label: ''
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(800);
                        // Copia (Ação extra)
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'click',
                                    label: 'Copia'
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(300);
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'move',
                                    hasFile: true,
                                    label: ''
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Carrega "texto"
                        await wait(800);
                        // --- CENA 3: WHATSAPP ---
                        setSceneIndex(2); // Slide Left
                        // Move para input
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: -60,
                                    y: 0,
                                    completed: false,
                                    hasFile: true
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(50);
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: -10,
                                    y: 100
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Ajuste Vertical Manual (Input Zap)
                        await wait(800);
                        // Cola
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'click',
                                    label: 'Cola'
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(300);
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'move',
                                    hasFile: false,
                                    label: ''
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Solta "texto"
                        await wait(500);
                        // Move p/ Enviar
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    x: 53,
                                    y: 100
                                })
                        }["ManualProcessDemo.useEffect.loop"]); // Ajuste Vertical Manual (Enviar Zap)
                        await wait(500);
                        // Clica Enviar
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'click',
                                    label: 'Enviar'
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(300);
                        // Mensagem enviada
                        setActionState({
                            "ManualProcessDemo.useEffect.loop": (prev)=>({
                                    ...prev,
                                    action: 'move',
                                    completed: true,
                                    label: ''
                                })
                        }["ManualProcessDemo.useEffect.loop"]);
                        await wait(1500);
                    }
                }
            }["ManualProcessDemo.useEffect.loop"];
            loop();
        }
    }["ManualProcessDemo.useEffect"], []);
    const wait = (ms)=>new Promise((r)=>setTimeout(r, ms));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full min-h-[400px] flex items-start justify-center overflow-hidden bg-transparent pt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[400px] aspect-square flex items-center justify-center origin-top transition-transform duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        initial: false,
                        children: [
                            sceneIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 flex items-center justify-center translate-y-12",
                                initial: {
                                    x: 300,
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    x: -300,
                                    opacity: 0,
                                    scale: 0.9,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 25
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Folder, {
                                    hasFile: !actionState.hasFile && !actionState.completed
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, this)
                            }, "folder", false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 448,
                                columnNumber: 25
                            }, this),
                            sceneIndex === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 flex items-center justify-center",
                                initial: {
                                    x: 300,
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    x: -300,
                                    opacity: 0,
                                    scale: 0.9,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 25
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassExcelAsset, {
                                    isFilled: actionState.completed
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 469,
                                    columnNumber: 29
                                }, this)
                            }, "excel", false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 461,
                                columnNumber: 25
                            }, this),
                            sceneIndex === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 flex items-center justify-center",
                                initial: {
                                    x: 300,
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    x: -300,
                                    opacity: 0,
                                    scale: 0.9,
                                    filter: "blur(4px)"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 25
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassWhatsAppAsset, {
                                    isSent: actionState.completed
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                    lineNumber: 482,
                                    columnNumber: 29
                                }, this)
                            }, "whatsapp", false, {
                                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                                lineNumber: 474,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 446,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cursor3D, {
                        state: actionState
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 488,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 443,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 flex gap-1.5 p-1 px-2 rounded-full bg-black/20 backdrop-blur border border-white/5",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-1.5 h-1.5 rounded-full bg-white",
                        animate: {
                            opacity: sceneIndex === i ? 1 : 0.2
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                        lineNumber: 495,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
                lineNumber: 493,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/ManualProcessDemo.tsx",
        lineNumber: 442,
        columnNumber: 9
    }, this);
}
_s(ManualProcessDemo, "uI4RFQsMviIGBk0iJoy5u8ZuAks=");
_c4 = ManualProcessDemo;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Folder");
__turbopack_context__.k.register(_c1, "GlassExcelAsset");
__turbopack_context__.k.register(_c2, "GlassWhatsAppAsset");
__turbopack_context__.k.register(_c3, "Cursor3D");
__turbopack_context__.k.register(_c4, "ManualProcessDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedList",
    ()=>AnimatedList,
    "AnimatedListItem",
    ()=>AnimatedListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const AnimatedList = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ className, children, delay = 1000 })=>{
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: false,
        amount: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedList.useEffect": ()=>{
            if (!isInView) {
                setIndex(0);
                return;
            }
            if (index < childrenArray.length - 1) {
                const timeout = setTimeout({
                    "AnimatedList.useEffect.timeout": ()=>{
                        setIndex({
                            "AnimatedList.useEffect.timeout": (prevIndex)=>prevIndex + 1
                        }["AnimatedList.useEffect.timeout"]);
                    }
                }["AnimatedList.useEffect.timeout"], delay);
                return ({
                    "AnimatedList.useEffect": ()=>clearTimeout(timeout)
                })["AnimatedList.useEffect"];
            }
        }
    }["AnimatedList.useEffect"], [
        index,
        delay,
        isInView,
        childrenArray.length
    ]);
    const itemsToShow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedList.useMemo[itemsToShow]": ()=>childrenArray.slice(0, index + 1).reverse()
    }["AnimatedList.useMemo[itemsToShow]"], [
        index,
        childrenArray
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `flex flex-col items-center gap-4 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: itemsToShow.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedListItem, {
                    index: i,
                    children: item
                }, item.key, false, {
                    fileName: "[project]/src/components/ui/AnimatedList.tsx",
                    lineNumber: 40,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/AnimatedList.tsx",
            lineNumber: 38,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedList.tsx",
        lineNumber: 37,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
}, "h6o1LjHj80lhEF66IwRgJJNs4Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
})), "h6o1LjHj80lhEF66IwRgJJNs4Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = AnimatedList;
AnimatedList.displayName = "AnimatedList";
function AnimatedListItem({ children, index = 0 }) {
    const animations = {
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1 - index * 0.1,
            opacity: 1 - index * 0.3,
            originY: 0
        },
        exit: {
            scale: 0,
            opacity: 0
        },
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 40
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...animations,
        layout: true,
        className: "mx-auto w-full",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedList.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_c2 = AnimatedListItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedList$React.memo");
__turbopack_context__.k.register(_c1, "AnimatedList");
__turbopack_context__.k.register(_c2, "AnimatedListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/NotificationDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedListDemo",
    ()=>AnimatedListDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
;
;
;
;
;
let notifications = [
    {
        name: "Cliente 01",
        description: "Péssimo atendimento, ninguém responde🙄",
        time: "15m atrás",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 19,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#25D366"
    },
    {
        name: "Cliente 02",
        description: "Alguém ai?? Estou esperando...",
        time: "10m atrás",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 26,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#25D366"
    },
    {
        name: "Cliente 03",
        description: "Já fechei com outro, demoraram demais!",
        time: "5m atrás",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 33,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#25D366"
    },
    {
        name: "Cliente 04",
        description: "Vou cancelar meu pedido 🤬",
        time: "2m atrás",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 40,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#25D366"
    },
    {
        name: "Cliente 05",
        description: "Oi? Você viu minha mensagem?",
        time: "agora",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 47,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#25D366"
    }
];
notifications = Array.from({
    length: 10
}, ()=>notifications).flat();
const Notification = ({ name, description, icon, color, time })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-3xl p-4", "transform-gpu bg-transparent dark:backdrop-blur-md ", "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-10 items-center justify-center rounded-2xl overflow-hidden",
                    style: {
                        backgroundColor: color
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                            className: "flex flex-row items-center text-lg font-medium whitespace-pre text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500",
                                    children: time
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-normal text-white/60",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/demos/NotificationDemo.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Notification;
function AnimatedListDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex max-h-[500px] min-h-[500px] w-full max-w-[32rem] flex-col overflow-hidden p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedList"], {
            delay: 1500,
            className: "w-full",
            children: notifications.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Notification, {
                    ...item,
                    key: idx,
                    __source: {
                        fileName: "[project]/src/components/demos/NotificationDemo.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    },
                    __self: this
                }))
        }, void 0, false, {
            fileName: "[project]/src/components/demos/NotificationDemo.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/demos/NotificationDemo.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_c1 = AnimatedListDemo;
var _c, _c1;
__turbopack_context__.k.register(_c, "Notification");
__turbopack_context__.k.register(_c1, "AnimatedListDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/UnfollowedLeadsDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnfollowedLeadsDemo",
    ()=>UnfollowedLeadsDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-client] (ecmascript) <export default as Snowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LeadCard = ({ isHero, stage, timeLabel, stepTrigger })=>{
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const prevStepRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(stepTrigger);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LeadCard.useEffect": ()=>{
            // Só executa se for o Hero
            if (isHero) {
                // Verifica se o passo mudou (avançou)
                const hasChangedStep = stepTrigger !== prevStepRef.current;
                // Lógica: Pula se mudou de passo E se não for o passo inicial (0)
                if (hasChangedStep && stepTrigger > 0) {
                    controls.start({
                        y: [
                            0,
                            -25,
                            0
                        ],
                        scale: [
                            1,
                            2,
                            1
                        ],
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    });
                }
                prevStepRef.current = stepTrigger;
            }
        }
    }["LeadCard.useEffect"], [
        stepTrigger,
        isHero,
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: controls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full p-3 rounded-full transition-all duration-500", "border overflow-hidden", "transform-gpu dark:backdrop-blur-md dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", !isHero ? "bg-transparent opacity-40 border-white/5 border-dashed" : "border-white/10", isHero && stage === 0 && "bg-orange-500/10 border-orange-500/30", isHero && stage === 1 && "bg-yellow-500/10 border-yellow-500/30", isHero && stage === 2 && "bg-neutral-800/40 border-white/5 opacity-60"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500", isHero && stage === 0 ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "bg-white/10 text-white/50", isHero && stage === 1 && "bg-yellow-600 text-white", isHero && stage === 2 && "bg-neutral-700 text-neutral-400", !isHero && "bg-white/5"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-0.5 min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium truncate leading-tight transition-colors duration-300", isHero ? "text-white" : "text-white/40"),
                            children: isHero ? "Lead Qualificado" : "Lead Desqualificado"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-xs text-white/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    size: 10
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: timeLabel || (isHero ? stage === 0 ? "Agora" : stage === 1 ? "24h atrás" : "7 dias atrás" : "2h atrás")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                isHero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-2 py-0.5 rounded-full flex items-center justify-center gap-1 font-medium shrink-0 text-[10px] transition-colors duration-500", stage === 0 ? "bg-orange-500/20 text-orange-400 border border-orange-500/20" : stage === 1 ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" : "bg-neutral-700/50 text-neutral-400 border border-white/5"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex items-center gap-1",
                        children: [
                            stage === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                size: 10,
                                className: "text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                lineNumber: 90,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            stage === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 10
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                lineNumber: 91,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            stage === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"], {
                                size: 10
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                lineNumber: 92,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            stage === 0 ? "Quente" : stage === 1 ? "Aguardando" : "Esfriou"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                        lineNumber: 89,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeadCard, "5+zqpeCJALeRBY3hPcA9lZMKPK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = LeadCard;
function UnfollowedLeadsDemo() {
    _s1();
    const [activeStep, setActiveStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [leads, setLeads] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([
        {
            id: "hero",
            isHero: true,
            stage: 0,
            timeLabel: "Agora"
        }
    ]);
    const steps = [
        "Novo Lead",
        "Em Atendimento",
        "Proposta",
        "Negociação",
        "Fechamento"
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "UnfollowedLeadsDemo.useEffect": ()=>{
            let mounted = true;
            const runSequence = {
                "UnfollowedLeadsDemo.useEffect.runSequence": async ()=>{
                    while(mounted){
                        // --- INICIO DO CICLO ---
                        // Passo 0: Recentes
                        setActiveStep(0); // Reset
                        setLeads([
                            {
                                id: "hero",
                                isHero: true,
                                stage: 0,
                                timeLabel: "Agora"
                            }
                        ]);
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 2000)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        if (!mounted) break;
                        // Passo 1: PULA para Negociação
                        setActiveStep(1); // O Card vai pular agora
                        // Atualiza o texto um pouco depois do pulo começar para suavidade
                        setTimeout({
                            "UnfollowedLeadsDemo.useEffect.runSequence": ()=>{
                                if (mounted) setLeads({
                                    "UnfollowedLeadsDemo.useEffect.runSequence": (prev)=>prev.map({
                                            "UnfollowedLeadsDemo.useEffect.runSequence": (l)=>l.isHero ? {
                                                    ...l,
                                                    timeLabel: "2 min"
                                                } : l
                                        }["UnfollowedLeadsDemo.useEffect.runSequence"])
                                }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                            }
                        }["UnfollowedLeadsDemo.useEffect.runSequence"], 200);
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 2000)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        if (!mounted) break;
                        // Passo 2: PULA para Aguardando
                        setActiveStep(2); // O Card vai pular agora
                        setTimeout({
                            "UnfollowedLeadsDemo.useEffect.runSequence": ()=>{
                                if (mounted) setLeads({
                                    "UnfollowedLeadsDemo.useEffect.runSequence": (prev)=>prev.map({
                                            "UnfollowedLeadsDemo.useEffect.runSequence": (l)=>l.isHero ? {
                                                    ...l,
                                                    stage: 0,
                                                    timeLabel: "1 dia"
                                                } : l
                                        }["UnfollowedLeadsDemo.useEffect.runSequence"])
                                }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                            }
                        }["UnfollowedLeadsDemo.useEffect.runSequence"], 200);
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 2000)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        if (!mounted) break;
                        // Passo 3: PULA para Fechamento
                        setActiveStep(3); // O Card vai pular agora
                        setTimeout({
                            "UnfollowedLeadsDemo.useEffect.runSequence": ()=>{
                                if (mounted) setLeads({
                                    "UnfollowedLeadsDemo.useEffect.runSequence": (prev)=>prev.map({
                                            "UnfollowedLeadsDemo.useEffect.runSequence": (l)=>l.isHero ? {
                                                    ...l,
                                                    stage: 0,
                                                    timeLabel: "3 dias"
                                                } : l
                                        }["UnfollowedLeadsDemo.useEffect.runSequence"])
                                }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                            }
                        }["UnfollowedLeadsDemo.useEffect.runSequence"], 200);
                        // FASE FINAL: Soterramento (Sem pular, apenas novos leads entrando)
                        const heroAging = [
                            "1 semana",
                            "2 semanas",
                            "1 mês",
                            "3 meses",
                            "6 meses"
                        ];
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 2000)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        // Envelhece mais uma vez antes do caos (3 dias -> 5 dias)
                        if (mounted) setLeads({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (prev)=>prev.map({
                                    "UnfollowedLeadsDemo.useEffect.runSequence": (l)=>l.isHero ? {
                                            ...l,
                                            stage: 1,
                                            timeLabel: "5 dias"
                                        } : l
                                }["UnfollowedLeadsDemo.useEffect.runSequence"])
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 1500)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        for(let i = 0; i < 4; i++){
                            await new Promise({
                                "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 800)
                            }["UnfollowedLeadsDemo.useEffect.runSequence"]); // Espera um pouco antes de começar a soterrar
                            if (!mounted) break;
                            setLeads({
                                "UnfollowedLeadsDemo.useEffect.runSequence": (prev)=>{
                                    const newLead = {
                                        id: `new-${i}`,
                                        isHero: false,
                                        stage: 0,
                                        timeLabel: "Agora"
                                    };
                                    return [
                                        newLead,
                                        ...prev.map({
                                            "UnfollowedLeadsDemo.useEffect.runSequence": (l)=>{
                                                if (l.isHero) {
                                                    const ageLabel = heroAging[i] || "6 meses";
                                                    return {
                                                        ...l,
                                                        stage: i >= 2 ? 2 : 1,
                                                        timeLabel: ageLabel
                                                    };
                                                }
                                                return l;
                                            }
                                        }["UnfollowedLeadsDemo.useEffect.runSequence"]).slice(0, 4)
                                    ];
                                }
                            }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                        }
                        await new Promise({
                            "UnfollowedLeadsDemo.useEffect.runSequence": (r)=>setTimeout(r, 3000)
                        }["UnfollowedLeadsDemo.useEffect.runSequence"]);
                    }
                }
            }["UnfollowedLeadsDemo.useEffect.runSequence"];
            runSequence();
            return ({
                "UnfollowedLeadsDemo.useEffect": ()=>{
                    mounted = false;
                }
            })["UnfollowedLeadsDemo.useEffect"];
        }
    }["UnfollowedLeadsDemo.useEffect"], []);
    const getPillStyle = (index)=>{
        const isActive = activeStep === index;
        if (index === 3 && isActive) return "bg-orange-500/10 border-orange-500/20 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.1)]";
        if (isActive) return "bg-white/10 border-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]";
        return "bg-transparent border-transparent text-neutral-500/50";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-[2rem] p-4 flex flex-col pt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-12 flex items-center justify-center mb-4 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute left-1/2 flex items-center gap-16",
                    initial: {
                        x: -50
                    },
                    animate: {
                        x: -50 - activeStep * 164
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeInOut"
                    },
                    children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 rounded-full border text-[10px] font-medium whitespace-nowrap transition-all duration-300 w-[100px] flex items-center justify-center", getPillStyle(i)),
                            animate: {
                                scale: activeStep === i ? 1.1 : 0.9,
                                opacity: activeStep === i ? 1 : 0.4
                            },
                            children: step === "Fechamento" && activeStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: step
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                        lineNumber: 224,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                        lineNumber: 225,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                lineNumber: 223,
                                columnNumber: 33
                            }, this) : step
                        }, step, false, {
                            fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                    lineNumber: 204,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[320px] h-[350px] relative px-4 flex-1 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    initial: false,
                    children: leads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                x: -20,
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.8,
                                transition: {
                                    duration: 0.2
                                }
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                layout: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }
                            },
                            className: "mb-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadCard, {
                                isHero: lead.isHero,
                                stage: lead.stage,
                                timeLabel: lead.timeLabel,
                                stepTrigger: activeStep
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                                lineNumber: 251,
                                columnNumber: 29
                            }, this)
                        }, lead.id, false, {
                            fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                            lineNumber: 237,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/UnfollowedLeadsDemo.tsx",
        lineNumber: 200,
        columnNumber: 9
    }, this);
}
_s1(UnfollowedLeadsDemo, "iW8Z4CmQYJ9VnPfXoxeUg6qvXdk=");
_c1 = UnfollowedLeadsDemo;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeadCard");
__turbopack_context__.k.register(_c1, "UnfollowedLeadsDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CountUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CountUp({ to, from = 0, direction = 'up', delay = 0, duration = 2, className = '', startWhen = true, separator = '', onStart, onEnd }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(direction === 'down' ? to : from);
    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(motionValue, {
        damping,
        stiffness
    });
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '0px'
    });
    const getDecimalPlaces = (num)=>{
        const str = num.toString();
        if (str.includes('.')) {
            const decimals = str.split('.')[1];
            if (parseInt(decimals) !== 0) {
                return decimals.length;
            }
        }
        return 0;
    };
    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
    const formatValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CountUp.useCallback[formatValue]": (latest)=>{
            const hasDecimals = maxDecimals > 0;
            const options = {
                useGrouping: !!separator,
                minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                maximumFractionDigits: hasDecimals ? maxDecimals : 0
            };
            const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
            return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
        }
    }["CountUp.useCallback[formatValue]"], [
        maxDecimals,
        separator
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (ref.current) {
                ref.current.textContent = formatValue(direction === 'down' ? to : from);
            }
        }
    }["CountUp.useEffect"], [
        from,
        to,
        direction,
        formatValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (isInView && startWhen) {
                if (typeof onStart === 'function') onStart();
                const timeoutId = setTimeout({
                    "CountUp.useEffect.timeoutId": ()=>{
                        motionValue.set(direction === 'down' ? from : to);
                    }
                }["CountUp.useEffect.timeoutId"], delay * 1000);
                const durationTimeoutId = setTimeout({
                    "CountUp.useEffect.durationTimeoutId": ()=>{
                        if (typeof onEnd === 'function') onEnd();
                    }
                }["CountUp.useEffect.durationTimeoutId"], delay * 1000 + duration * 1000);
                return ({
                    "CountUp.useEffect": ()=>{
                        clearTimeout(timeoutId);
                        clearTimeout(durationTimeoutId);
                    }
                })["CountUp.useEffect"];
            }
        }
    }["CountUp.useEffect"], [
        isInView,
        startWhen,
        motionValue,
        direction,
        from,
        to,
        delay,
        onStart,
        onEnd,
        duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            const unsubscribe = springValue.on('change', {
                "CountUp.useEffect.unsubscribe": (latest)=>{
                    if (ref.current) {
                        ref.current.textContent = formatValue(latest);
                    }
                }
            }["CountUp.useEffect.unsubscribe"]);
            return ({
                "CountUp.useEffect": ()=>unsubscribe()
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        springValue,
        formatValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CountUp.tsx",
        lineNumber: 111,
        columnNumber: 12
    }, this);
}
_s(CountUp, "AYXSaBwN/l9GyMQgy4mUstgqGuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/demos/RocketFallDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RocketFallDemo",
    ()=>RocketFallDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CountUp.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function RocketFallDemo() {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('entry');
    const [cycle, setCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [altitude, setAltitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isWarning, setIsWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RocketFallDemo.useEffect": ()=>{
            let mounted = true;
            const loop = {
                "RocketFallDemo.useEffect.loop": async ()=>{
                    while(mounted){
                        // Nova rodada -> Incrementa ciclo para resetar componente
                        setCycle({
                            "RocketFallDemo.useEffect.loop": (c)=>c + 1
                        }["RocketFallDemo.useEffect.loop"]);
                        // 1. O Início (Vindo da direita inferior)
                        setPhase('entry');
                        setAltitude(30);
                        setIsWarning(false);
                        await wait(2500); // Tempo para chegar e estabilizar
                        if (!mounted) break;
                        // Fica em idle um pouco ("segundos antes do boost")
                        setPhase('idle');
                        setAltitude(150); // Começa a subir um pouco
                        await wait(1500);
                        if (!mounted) break;
                        // 2. O Dash (Propulsão forte + Star Wars)
                        setPhase('boost');
                        setAltitude(10000); // Sobe até 10000
                        await wait(2500); // Sobe...
                        if (!mounted) break;
                        setIsWarning(true); // "Dessacelerando" -> Alerta
                        await wait(1000); // Stall
                        if (!mounted) break;
                        // 3. A Falha (Motor falhando)
                        setPhase('failure');
                        setAltitude(45); // Cai rapidamenet para quase 0
                        await wait(1500); // Engasgando
                        if (!mounted) break;
                        // A Queda
                        setPhase('fall');
                        setAltitude(0);
                        await wait(1000); // Caindo
                        // Reset
                        setAltitude(0);
                        await wait(500);
                    }
                }
            }["RocketFallDemo.useEffect.loop"];
            loop();
            return ({
                "RocketFallDemo.useEffect": ()=>{
                    mounted = false;
                }
            })["RocketFallDemo.useEffect"];
        }
    }["RocketFallDemo.useEffect"], []);
    const wait = (ms)=>new Promise((r)=>setTimeout(r, ms));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarWarp, {
                active: phase === 'boost'
            }, void 0, false, {
                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-12 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center justify-center pointer-events-none",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: phase === 'boost' || phase === 'failure' ? 1 : 0,
                    color: isWarning || phase === 'failure' ? '#ef4444' : phase === 'boost' ? '#4ade80' : '#ffffff'
                },
                transition: {
                    duration: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    to: altitude,
                    duration: phase === 'boost' ? 3 : phase === 'failure' ? 0.3 : 1,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-6xl md:text-7xl font-black tabular-nums text-center drop-shadow-2xl", (isWarning || phase === 'failure') && "animate-pulse")
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 filter drop-shadow-xl",
                initial: {
                    x: 100,
                    y: 400,
                    scale: 0.3,
                    rotate: -60,
                    opacity: 1
                },
                animate: getRocketAnimation(phase),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartoonRocket, {
                    phase: phase
                }, void 0, false, {
                    fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            }, cycle, false, {
                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_s(RocketFallDemo, "Ff07X/LI9CyK358QclN+wVIqnQg=");
_c = RocketFallDemo;
// Animation Logic
function getRocketAnimation(phase) {
    switch(phase){
        case 'entry':
            return {
                x: [
                    100,
                    0,
                    0
                ],
                y: [
                    400,
                    -30,
                    0
                ],
                rotate: [
                    -60,
                    2,
                    0
                ],
                scale: [
                    0.3,
                    1
                ],
                opacity: 1,
                transition: {
                    duration: 2.2,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ],
                    times: [
                        0,
                        0.7,
                        1
                    ]
                }
            };
        case 'idle':
            return {
                x: 0,
                y: [
                    0,
                    -8,
                    0
                ],
                rotate: [
                    0,
                    1,
                    -1,
                    0
                ],
                scale: 1,
                transition: {
                    y: {
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut"
                    },
                    rotate: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear"
                    }
                }
            };
        case 'boost':
            return {
                x: [
                    -1,
                    1,
                    -1,
                    1,
                    0
                ],
                y: [
                    0,
                    10,
                    -100
                ],
                scale: 1.1,
                rotate: 0,
                transition: {
                    x: {
                        repeat: Infinity,
                        duration: 0.1
                    },
                    y: {
                        duration: 0.5,
                        times: [
                            0,
                            0.2,
                            1
                        ],
                        ease: "easeInOut"
                    },
                    scale: {
                        duration: 0.3
                    }
                }
            };
        case 'failure':
            return {
                x: [
                    0,
                    -3,
                    3,
                    -1,
                    1,
                    0
                ],
                y: [
                    -80,
                    -20
                ],
                rotate: [
                    0,
                    -5,
                    5,
                    -8,
                    8
                ],
                scale: 1,
                transition: {
                    duration: 1.5,
                    y: {
                        ease: "easeInOut"
                    },
                    rotate: {
                        repeat: Infinity,
                        duration: 0.3,
                        repeatType: "reverse"
                    }
                }
            };
        case 'fall':
            return {
                y: 600,
                rotate: [
                    10,
                    90
                ],
                x: 50,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeIn"
                }
            };
    }
}
// Visual Components
const CartoonRocket = ({ phase })=>{
    const isBoost = phase === 'boost';
    const isFailure = phase === 'failure';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "200",
        height: "200",
        viewBox: "0 0 200 200",
        className: "overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "glow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "4",
                                result: "coloredBlur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "softShadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "2",
                            dy: "4",
                            stdDeviation: "2",
                            floodColor: "#000",
                            floodOpacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "bodyGradient",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(255, 255, 255, 0.69)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "rgba(243, 244, 246, 0.69)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 197,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(209, 213, 219, 0.69)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "bodyStrokeGrad",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(255,255,255,0.8)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(255,255,255,0.2)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "redGradient",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(239, 68, 68, 1)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 209,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(185, 28, 28, 0.9)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 210,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "glassGradient",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(59, 130, 246, 0.6)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(37, 99, 235, 0.3)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "metalGradient",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#4b5563"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "#9ca3af"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#374151"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fireCore",
                        x1: "0.5",
                        y1: "0",
                        x2: "0.5",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#fef08a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 229,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fireOuter",
                        x1: "0.5",
                        y1: "0",
                        x2: "0.5",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#facc15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#ea580c"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 233,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fireBlueCore",
                        x1: "0.5",
                        y1: "0",
                        x2: "0.5",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 237,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#bfdbfe"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 238,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fireBlueOuter",
                        x1: "0.5",
                        y1: "0",
                        x2: "0.5",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#60a5fa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#2563eb"
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(100, 100)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -15 45 L 15 45 L 0 75 Z",
                        fill: "#7f1d1d",
                        stroke: "#500724",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    (phase === 'entry' || phase !== 'fall') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        filter: "url(#glow)",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M -18 68 Q 0 140 18 68 Q 0 85 -18 68",
                                fill: isBoost ? "url(#fireBlueOuter)" : "url(#fireOuter)",
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: isBoost ? [
                                        1,
                                        1.3,
                                        1
                                    ] : isFailure ? [
                                        1,
                                        0.2,
                                        0
                                    ] : [
                                        1,
                                        1.05,
                                        1
                                    ],
                                    opacity: isFailure ? [
                                        1,
                                        0
                                    ] : 0.9
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 0.15
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M -8 68 Q 0 100 8 68 Q 0 75 -8 68",
                                fill: isBoost ? "url(#fireBlueCore)" : "url(#fireCore)",
                                animate: {
                                    scale: isBoost ? [
                                        1,
                                        1.2,
                                        1
                                    ] : [
                                        1,
                                        1.1,
                                        0.9
                                    ],
                                    y: [
                                        0,
                                        2,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 0.1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                                lineNumber: 268,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 255,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -35 35 Q -65 65 -50 75 L -20 60 Z",
                        fill: "#b91c1c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -35 30 Q -60 60 -50 70 L -20 55 Z",
                        fill: "url(#redGradient)",
                        stroke: "#7f1d1d",
                        strokeWidth: "1",
                        filter: "url(#softShadow)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 283,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 35 35 Q 65 65 50 75 L 20 60 Z",
                        fill: "#b91c1c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 35 30 Q 60 60 50 70 L 20 55 Z",
                        fill: "url(#redGradient)",
                        stroke: "#7f1d1d",
                        strokeWidth: "1",
                        filter: "url(#softShadow)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 -75 C 45 -20 45 45 22 65 L -22 65 C -45 45 -45 -20 0 -75",
                        fill: "url(#bodyGradient)",
                        stroke: "none",
                        filter: "url(#softShadow)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 293,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 -75 C 24 -40 24 -40 24 -40 L -24 -40 C -24 -40 -24 -40 0 -75",
                        fill: "url(#redGradient)",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "8",
                        cy: "-55",
                        rx: "3",
                        ry: "8",
                        fill: "white",
                        opacity: "0.15",
                        transform: "rotate(-15)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "0",
                        cy: "-10",
                        r: "22",
                        fill: "#1f2937",
                        stroke: "rgba(255,255,255,0.1)",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "0",
                        cy: "-10",
                        r: "16",
                        fill: "url(#glassGradient)",
                        stroke: "rgba(255,255,255,0.2)",
                        strokeWidth: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 314,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -10 -20 Q 0 -26 10 -20",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        opacity: "0.8",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "-8",
                        cy: "-8",
                        rx: "3",
                        ry: "6",
                        fill: "white",
                        opacity: "0.4",
                        transform: "rotate(20)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8",
                        cy: "0",
                        r: "1.5",
                        fill: "white",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -22 65 L 22 65 L 18 72 L -18 72 Z",
                        fill: "url(#metalGradient)",
                        stroke: "#1f2937",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 323,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -10 65 L -8 72",
                        stroke: "#1f2937",
                        strokeWidth: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 325,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 65 L 0 72",
                        stroke: "#1f2937",
                        strokeWidth: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 326,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 10 65 L 8 72",
                        stroke: "#1f2937",
                        strokeWidth: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
        lineNumber: 178,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CartoonRocket;
const StarWarp = ({ active })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 z-0 overflow-hidden rounded-3xl",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: [
                ...Array(30)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bg-blue-100 rounded-full",
                    style: {
                        width: Math.random() > 0.5 ? '2px' : '3px',
                        height: '20px',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    },
                    animate: {
                        y: [
                            0,
                            800
                        ],
                        opacity: [
                            0,
                            1,
                            0
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: Math.random() * 0.3 + 0.1,
                        ease: "linear",
                        delay: Math.random() * 0.2
                    }
                }, i, false, {
                    fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
                    lineNumber: 346,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
            lineNumber: 338,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/demos/RocketFallDemo.tsx",
        lineNumber: 336,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = StarWarp;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RocketFallDemo");
__turbopack_context__.k.register(_c1, "CartoonRocket");
__turbopack_context__.k.register(_c2, "StarWarp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Problems.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Problems",
    ()=>Problems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GradualBlur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GradualBlur.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypingAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TypingAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$ManualProcessDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/ManualProcessDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$NotificationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/NotificationDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$UnfollowedLeadsDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/UnfollowedLeadsDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$RocketFallDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/RocketFallDemo.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const PROBLEMS = [
    {
        title: "Atendimento lento",
        description: "Se o cliente demora a ser respondido, ele vai embora. Simples assim. Cada minuto sem resposta é uma venda a menos.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$NotificationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedListDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 19,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Leads sem acompanhamento",
        description: "As pessoas até chegam até você, mas sem um processo claro, elas se perdem no caminho. E cada conversa que não continua é uma oportunidade que morre.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$UnfollowedLeadsDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnfollowedLeadsDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 24,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Processos manuais",
        description: "Quando tudo depende de copiar, colar e conferir, o trabalho trava. O time se desgasta, o erro aumenta e o cliente sente o impacto.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$ManualProcessDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualProcessDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 29,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Falta de escala",
        description: "Seu negócio até cresce, mas sem estrutura ele começa a sofrer. Mais demanda vira mais caos — não mais resultado.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$RocketFallDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RocketFallDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 34,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Problems() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "problems",
        className: "py-24 relative bg-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight flex flex-col items-center gap-2 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Onde sua empresa está perdendo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Problems.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex flex-wrap justify-center items-center gap-2 md:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypingAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypingAnimation"], {
                                                    words: [
                                                        'dinheiro',
                                                        'tempo',
                                                        'clientes',
                                                        'oportunidades'
                                                    ],
                                                    loop: true,
                                                    typingSpeed: 150,
                                                    deletingSpeed: 220,
                                                    pauseTime: 2500,
                                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Problems.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Problems.tsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "hoje?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Problems.tsx",
                                                lineNumber: 66,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Problems.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "text-neutral-400 text-lg leading-relaxed",
                                children: "Quando tudo é manual, o preço aparece em tempo perdido, clientes frustrados e vendas que não acontecem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6",
                        children: PROBLEMS.map((problem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemCard, {
                                ...problem,
                                index: index
                            }, index, false, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Problems.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = Problems;
function ProblemCard({ title, description, index, component }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative h-[500px] bg-white/5 transition-all duration-500 rounded-[3rem] hover:scale-[1.02] bg-gradient-to-tr from-brand/5 via-transparent to-transparent", "overflow-hidden z-20"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-0 rounded-[3rem] overflow-hidden"),
                children: component ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full opacity-100 transition-opacity duration-500",
                    children: component
                }, void 0, false, {
                    fileName: "[project]/src/components/Problems.tsx",
                    lineNumber: 106,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 112,
                        columnNumber: 25
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 flex flex-col justify-end pointer-events-none px-6 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GradualBlur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        position: "bottom",
                        height: "200px",
                        strength: 4,
                        className: "z-10 !bottom-0 pointer-events-none",
                        opacity: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 text-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-brand mb-2 transition-colors min-h-[3.5rem] flex items-end justify-center",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-300 text-sm leading-relaxed text-balance min-h-[5rem] flex items-start justify-center",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Problems.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_c1 = ProblemCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Problems");
__turbopack_context__.k.register(_c1, "ProblemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
"use client";
;
;
function ListItem({ icon, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex gap-4 items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 p-2 rounded-lg bg-surface border border-white/5 shadow-inner",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-white font-medium mb-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-400 text-sm",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Dashboard.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = ListItem;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "dashboard",
        className: "pt-24 pb-0 relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-1 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight leading-tight",
                                children: [
                                    "Fale com sua ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-6xl text-brand",
                                        children: "Estrutura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 30,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-400 text-lg mb-8",
                                children: "A Nexis integra voce diretamente com sua infraestrutura. te dando controle total sobre ela."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "w-5 h-5 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 38,
                                            columnNumber: 39
                                        }, void 0),
                                        title: "Gestão Centralizada",
                                        description: "Gerencie múltiplas redes em um só lugar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                            className: "w-5 h-5 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 43,
                                            columnNumber: 39
                                        }, void 0),
                                        title: "Controle de IA",
                                        description: "Gerencie sua inteligência artificial individualmente."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-5 h-5 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 48,
                                            columnNumber: 39
                                        }, void 0),
                                        title: "Automação Simples",
                                        description: "Execute ações em massa sem decorar scripts."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "w-5 h-5 text-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Dashboard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 39
                                        }, void 0),
                                        title: "Diagnóstico Rápido",
                                        description: "Diagnostique gargalos em segundos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative lg:self-end flex justify-center lg:justify-end mt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/macbook com tela.png",
                            alt: "Nexis Dashboard",
                            className: "w-[110%] sm:w-[80%] lg:w-[140%] max-w-none object-contain drop-shadow-2xl transform translate-x-0 translate-y-0 lg:translate-x-[40%]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Dashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Dashboard.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Dashboard.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c1 = Dashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ListItem");
__turbopack_context__.k.register(_c1, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/BlueRainbowButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RainbowButton",
    ()=>RainbowButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function RainbowButton({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative inline-flex h-9 animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-6 py-1 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", // Blue/Cyan/Violet Gradient for "Blue Tone" effect
        // We use linear-gradient for the background content (black), and another for the border
        // The magic is: background-image: linear-gradient(bg, bg), linear-gradient(rainbow)
        // With background-clip: padding-box, border-box
        // This makes the first gradient (black) cover the padding area (inner), and the second (rainbow) cover the border area.
        "bg-[linear-gradient(#000,#000),linear-gradient(90deg,#3b82f6,#06b6d4,#8b5cf6,#3b82f6)]", // colors: blue-500, cyan-500, violet-500, back to blue-500
        // Text color
        "text-white", // Shadow/Glow
        "shadow-[0_0_15px_-3px_rgba(59,130,246,0.6)]", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
            @keyframes rainbow {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
            }
            .animate-rainbow {
                animation: rainbow 4s linear infinite;
            }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/BlueRainbowButton.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/BlueRainbowButton.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = RainbowButton;
var _c;
__turbopack_context__.k.register(_c, "RainbowButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dot-pattern.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotPattern",
    ()=>DotPattern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DotPattern({ width = 16, height = 16, x = 0, y = 0, cx = 1, cy = 1, cr = 1, className, glow = false, ...props }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                    id: id,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    patternContentUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        id: "pattern-circle",
                        cx: cx,
                        cy: cy,
                        r: cr,
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dot-pattern.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dot-pattern.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dot-pattern.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${id})`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dot-pattern.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dot-pattern.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(DotPattern, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = DotPattern;
var _c;
__turbopack_context__.k.register(_c, "DotPattern");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Solutions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Solutions",
    ()=>Solutions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BlueRainbowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BlueRainbowButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GradualBlur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GradualBlur.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dot-pattern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
// --- Config (Mantendo azul para contraste: Vermelho = Problema / Azul = Solução) ---
const DEFAULT_PARTICLE_COUNT = 0;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '56, 189, 248'; // Blue-400
const MOBILE_BREAKPOINT = 768;
// --- Data (Mesmos dados) ---
const cardData = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
        title: 'Agente SDR',
        description: 'Atendente virtual inteligente que qualifica leads e agenda reuniões automaticamente 24/7.',
        label: 'Prospecção Automática',
        isAI: true,
        useShine: true,
        compatibleApps: [
            'Meta',
            'Google',
            'Telegram',
            'CRM'
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: 'Automação CRM & ERP',
        description: 'Agentes que sincronizam dados e atualizam etapas entre sistemas de gestão sem intervenção humana.',
        label: 'Gestão Inteligente',
        isAI: false,
        compatibleApps: [
            'Bling',
            'Olist',
            'Clickup'
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: 'Agente de Vendas BPA',
        description: 'Automação full-service: do atendimento inicial à emissão de NFs e logística de envio.',
        label: 'Automação Autônoma',
        isAI: true,
        compatibleApps: [
            'Stripe',
            'Shopify',
            'Meta'
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        title: 'Infraestrutura High-End',
        description: 'Workstations de alta performance e redes empresariais robustas para operações exigentes.',
        label: 'Hardware & Redes',
        compatibleApps: [
            'Unifi',
            'Dell',
            'Lenovo'
        ]
    }
];
// --- Helpers e Componentes Internos (ParticleCard, Spotlight) ---
// ... (Mantenha createParticleElement, calculateSpotlightValues, updateCardGlowProperties, GlobalSpotlight iguais ao anterior) ...
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR)=>{
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `position: absolute; width: 4px; height: 4px; border-radius: 50%; background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6); pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;`;
    return el;
};
const calculateSpotlightValues = (radius)=>({
        proximity: radius * 0.5,
        fadeDistance: radius * 0.75
    });
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius)=>{
    const rect = card.getBoundingClientRect();
    const relativeX = (mouseX - rect.left) / rect.width * 100;
    const relativeY = (mouseY - rect.top) / rect.height * 100;
    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};
const ParticleCard = ({ children, className = '', disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false, useShine = false })=>{
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const memoizedParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const magnetismAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[initializeParticles]": ()=>{
            if (particlesInitialized.current || !cardRef.current) return;
            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({
                length: particleCount
            }, {
                "ParticleCard.useCallback[initializeParticles]": ()=>createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            }["ParticleCard.useCallback[initializeParticles]"]);
            particlesInitialized.current = true;
        }
    }["ParticleCard.useCallback[initializeParticles]"], [
        particleCount,
        glowColor
    ]);
    const clearAllParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[clearAllParticles]": ()=>{
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            magnetismAnimationRef.current?.kill();
            particlesRef.current.forEach({
                "ParticleCard.useCallback[clearAllParticles]": (particle)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(particle, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'back.in(1.7)',
                        onComplete: {
                            "ParticleCard.useCallback[clearAllParticles]": ()=>{
                                particle.parentNode?.removeChild(particle);
                            }
                        }["ParticleCard.useCallback[clearAllParticles]"]
                    });
                }
            }["ParticleCard.useCallback[clearAllParticles]"]);
            particlesRef.current = [];
        }
    }["ParticleCard.useCallback[clearAllParticles]"], []);
    const animateParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[animateParticles]": ()=>{
            if (!cardRef.current || !isHoveredRef.current) return;
            if (!particlesInitialized.current) {
                initializeParticles();
            }
            memoizedParticles.current.forEach({
                "ParticleCard.useCallback[animateParticles]": (particle, index)=>{
                    const timeoutId = setTimeout({
                        "ParticleCard.useCallback[animateParticles].timeoutId": ()=>{
                            if (!isHoveredRef.current || !cardRef.current) return;
                            const clone = particle.cloneNode(true);
                            cardRef.current.appendChild(clone);
                            particlesRef.current.push(clone);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(clone, {
                                scale: 0,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.3,
                                ease: 'back.out(1.7)'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                x: (Math.random() - 0.5) * 100,
                                y: (Math.random() - 0.5) * 100,
                                rotation: Math.random() * 360,
                                duration: 2 + Math.random() * 2,
                                ease: 'none',
                                repeat: -1,
                                yoyo: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                opacity: 0.3,
                                duration: 1.5,
                                ease: 'power2.inOut',
                                repeat: -1,
                                yoyo: true
                            });
                        }
                    }["ParticleCard.useCallback[animateParticles].timeoutId"], index * 100);
                    timeoutsRef.current.push(timeoutId);
                }
            }["ParticleCard.useCallback[animateParticles]"]);
        }
    }["ParticleCard.useCallback[animateParticles]"], [
        initializeParticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCard.useEffect": ()=>{
            if (disableAnimations || !cardRef.current) return;
            const element = cardRef.current;
            const handleMouseEnter = {
                "ParticleCard.useEffect.handleMouseEnter": ()=>{
                    isHoveredRef.current = true;
                    animateParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 5,
                            rotateY: 5,
                            duration: 0.3,
                            ease: 'power2.out',
                            transformPerspective: 1000
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "ParticleCard.useEffect.handleMouseLeave": ()=>{
                    isHoveredRef.current = false;
                    clearAllParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                    if (enableMagnetism) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseLeave"];
            const handleMouseMove = {
                "ParticleCard.useEffect.handleMouseMove": (e)=>{
                    if (!enableTilt && !enableMagnetism) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    if (enableTilt) {
                        const rotateX = (y - centerY) / centerY * -10;
                        const rotateY = (x - centerX) / centerX * 10;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: 'power2.out',
                            transformPerspective: 1000
                        });
                    }
                    if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;
                        magnetismAnimationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseMove"];
            const handleClick = {
                "ParticleCard.useEffect.handleClick": (e)=>{
                    if (!clickEffect) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                    const ripple = document.createElement('div');
                    ripple.style.cssText = `position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%; background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%); left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;`;
                    element.appendChild(ripple);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                        scale: 0,
                        opacity: 1
                    }, {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: {
                            "ParticleCard.useEffect.handleClick": ()=>ripple.remove()
                        }["ParticleCard.useEffect.handleClick"]
                    });
                }
            }["ParticleCard.useEffect.handleClick"];
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('click', handleClick);
            return ({
                "ParticleCard.useEffect": ()=>{
                    isHoveredRef.current = false;
                    element.removeEventListener('mouseenter', handleMouseEnter);
                    element.removeEventListener('mouseleave', handleMouseLeave);
                    element.removeEventListener('mousemove', handleMouseMove);
                    element.removeEventListener('click', handleClick);
                    clearAllParticles();
                }
            })["ParticleCard.useEffect"];
        }
    }["ParticleCard.useEffect"], [
        animateParticles,
        clearAllParticles,
        disableAnimations,
        enableTilt,
        enableMagnetism,
        clickEffect,
        glowColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: `${className} relative overflow-hidden ${useShine ? '!border-transparent' : ''}`,
        style: {
            ...style,
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            useShine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--border-width": `2px`,
                    "--border-radius": `32px`,
                    "--duration": `14s`,
                    "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    "--background-radial-gradient": `radial-gradient(transparent, transparent, #3B82F6, #2563EB, #1D4ED8, transparent, transparent)`
                },
                className: `pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`
            }, void 0, false, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 176,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Solutions.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleCard, "8H+Z7UUSOy00JZLTsdrtDvxLl+c=");
_c = ParticleCard;
const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR })=>{
    _s1();
    const spotlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSpotlight.useEffect": ()=>{
            if (disableAnimations || !gridRef?.current || !enabled) return;
            const spotlight = document.createElement('div');
            spotlight.className = 'global-spotlight';
            spotlight.style.cssText = `position: fixed; width: 800px; height: 800px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 20%, rgba(${glowColor}, 0.02) 45%, transparent 70%); z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;`;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;
            let animationFrameId;
            // Cache cards to avoid repeated querySelectorAll
            const cards = Array.from(gridRef.current.querySelectorAll('.card'));
            const handleMouseMove = {
                "GlobalSpotlight.useEffect.handleMouseMove": (e)=>{
                    if (!spotlightRef.current || !gridRef.current) return;
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = requestAnimationFrame({
                        "GlobalSpotlight.useEffect.handleMouseMove": ()=>{
                            const section = gridRef.current.closest('.bento-section');
                            const rect = section?.getBoundingClientRect();
                            if (!rect || !(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                                    opacity: 0,
                                    duration: 0.3,
                                    ease: 'power2.out'
                                });
                                cards.forEach({
                                    "GlobalSpotlight.useEffect.handleMouseMove": (card)=>card.style.setProperty('--glow-intensity', '0')
                                }["GlobalSpotlight.useEffect.handleMouseMove"]);
                                return;
                            }
                            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                            let minDistance = Infinity;
                            cards.forEach({
                                "GlobalSpotlight.useEffect.handleMouseMove": (cardElement)=>{
                                    const cardRect = cardElement.getBoundingClientRect();
                                    const distance = Math.hypot(e.clientX - (cardRect.left + cardRect.width / 2), e.clientY - (cardRect.top + cardRect.height / 2)) - Math.max(cardRect.width, cardRect.height) / 2;
                                    const effectiveDistance = Math.max(0, distance);
                                    minDistance = Math.min(minDistance, effectiveDistance);
                                    let glowIntensity = 0;
                                    if (effectiveDistance <= proximity) {
                                        glowIntensity = 1;
                                    } else if (effectiveDistance <= fadeDistance) {
                                        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                                    }
                                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                                }
                            }["GlobalSpotlight.useEffect.handleMouseMove"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                                left: e.clientX,
                                top: e.clientY,
                                duration: 0.1,
                                ease: 'power2.out'
                            });
                            const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? (fadeDistance - minDistance) / (fadeDistance - proximity) * 0.8 : 0;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                                opacity: targetOpacity,
                                duration: targetOpacity > 0 ? 0.2 : 0.5,
                                ease: 'power2.out'
                            });
                        }
                    }["GlobalSpotlight.useEffect.handleMouseMove"]);
                }
            }["GlobalSpotlight.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "GlobalSpotlight.useEffect.handleMouseLeave": ()=>{
                    if (spotlightRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }["GlobalSpotlight.useEffect.handleMouseLeave"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            return ({
                "GlobalSpotlight.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
                    cancelAnimationFrame(animationFrameId);
                }
            })["GlobalSpotlight.useEffect"];
        }
    }["GlobalSpotlight.useEffect"], [
        gridRef,
        disableAnimations,
        enabled,
        spotlightRadius,
        glowColor
    ]);
    return null;
};
_s1(GlobalSpotlight, "MpzMTYhL5AYc+dL0ItIn/WqZWPY=");
_c1 = GlobalSpotlight;
const BentoCardGrid = ({ children, gridRef })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bento-section grid gap-4 p-4 mx-auto max-w-7xl relative",
        ref: gridRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Solutions.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = BentoCardGrid;
const useMobileDetection = ()=>{
    _s2();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileDetection.useEffect": ()=>{
            const checkMobile = {
                "useMobileDetection.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
            }["useMobileDetection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "useMobileDetection.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["useMobileDetection.useEffect"];
        }
    }["useMobileDetection.useEffect"], []);
    return isMobile;
};
_s2(useMobileDetection, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
function Solutions() {
    _s3();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = isMobile;
    const glowColor = DEFAULT_GLOW_COLOR;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Solutions.useEffect": ()=>{
            if (!isMobile) return;
            const observer = new IntersectionObserver({
                "Solutions.useEffect": (entries)=>{
                    entries.forEach({
                        "Solutions.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number(entry.target.getAttribute('data-index'));
                                setActiveIndex(index);
                            }
                        }
                    }["Solutions.useEffect"]);
                }
            }["Solutions.useEffect"], {
                root: null,
                rootMargin: '-20% 0px -20% 0px',
                threshold: 0.1
            });
            const cards = document.querySelectorAll('.card-item');
            cards.forEach({
                "Solutions.useEffect": (card)=>observer.observe(card)
            }["Solutions.useEffect"]);
            return ({
                "Solutions.useEffect": ()=>observer.disconnect()
            })["Solutions.useEffect"];
        }
    }["Solutions.useEffect"], [
        isMobile
    ]);
    return(// MUDANÇA 1: Adicionei min-h-screen e flex para centralizar se quiser, 
    // mas o principal é o gradiente de background para não ficar um preto chapado.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solutions",
        className: "relative py-12 md:py-24 overflow-hidden bg-black selection:bg-blue-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotPattern"], {
                width: 30,
                height: 30,
                cx: 1,
                cy: 1,
                cr: 1.5,
                glow: !isMobile,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-white/20", "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" // Aumentado area visivel
                )
            }, void 0, false, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
            .bento-section {
              --glow-x: 50%;
              --glow-y: 50%;
              --glow-intensity: 0;
              --glow-radius: 300px; /* Aumentei o raio para espalhar mais a luz */
              --glow-color: ${glowColor};
            }
            /* ... (mantenha os outros estilos CSS iguais) ... */
            
            /* Ajuste na Tag de IA para ficar mais legível */
            .animate-spin-slow {
                animation: spin-slow 4s linear infinite; /* Restoration: Faster spin for visibility */
            }
            @keyframes spin-slow {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
          `
            }, void 0, false, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-10 mx-auto px-4 mb-12 md:mb-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BlueRainbowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RainbowButton"], {
                        className: "mb-6 h-9 rounded-full px-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse shadow-[0_0_10px_rgba(147,197,253,0.8)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 343,
                                    columnNumber: 25
                                }, this),
                                "A Nova Era da Eficiência"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Solutions.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight",
                        children: [
                            "Tecnologia que ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Solutions.tsx",
                                lineNumber: 349,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-b from-brand to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]",
                                children: "Impulsiona o Futuro"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Solutions.tsx",
                                lineNumber: 350,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Solutions.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light",
                        children: "Substituímos processos manuais e lentos por uma infraestrutura autônoma que trabalha 24/7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Solutions.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 338,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSpotlight, {
                gridRef: gridRef,
                disableAnimations: shouldDisableAnimations,
                enabled: true,
                spotlightRadius: 300,
                glowColor: glowColor
            }, void 0, false, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 359,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoCardGrid, {
                gridRef: gridRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full relative z-10",
                    children: cardData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleCard, {
                            "data-index": index,
                            className: `
                          card card-item relative 
                          bg-zinc-950/40 backdrop-blur-[1.5px]
                          rounded-[1.5rem] md:rounded-[2rem] border border-white/0 
                          overflow-hidden group
                          mx-4 md:mx-0 /* Add margin on mobile to prevent full-width square look */
                          min-h-[240px] md:min-h-[280px] flex flex-col justify-between 
                          pt-10 px-8 pb-8 md:p-8 /* Increased top padding mainly for mobile gap */
                          transition-all duration-500 
                          hover:bg-zinc-900/60 hover:border-white/5
                          hover:shadow-2xl hover:shadow-blue-900/10
                          [&.is-active]:bg-zinc-900/60 [&.is-active]:border-white/5
                          [&.is-active]:shadow-2xl [&.is-active]:shadow-blue-900/10
                          card--border-glow
                          ${isMobile && index === activeIndex ? 'is-active' : ''}
                      `,
                            glowColor: glowColor,
                            disableAnimations: shouldDisableAnimations,
                            enableTilt: false,
                            clickEffect: true,
                            enableMagnetism: false,
                            /* @ts-ignore */ useShine: card.useShine,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-8 -right-8 opacity-[0.02] transform rotate-[-15deg] group-hover:scale-110 group-hover:opacity-[0.06] group-[.is-active]:scale-110 group-[.is-active]:opacity-[0.06] transition-all duration-700 ease-out pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                        strokeWidth: 1,
                                        className: "w-32 h-32 md:w-48 md:h-48 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Solutions.tsx",
                                        lineNumber: 397,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 396,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GradualBlur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "absolute bottom-0 left-0 w-full h-32 pointer-events-none z-0",
                                    preset: "bottom",
                                    strength: 0.4,
                                    opacity: 0.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 400,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-20 flex flex-col h-full justify-between w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `
                                         w-12 h-12 rounded-xl flex items-center justify-center
                                         transition-all duration-300
                                         ${isMobile && index === activeIndex ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] -translate-y-2' : 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:-translate-y-2 group-[.is-active]:bg-blue-500 group-[.is-active]:text-white group-[.is-active]:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-[.is-active]:-translate-y-2' /* Add group-[.is-active] variants */ }
                                     `,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                                className: "w-7 h-7",
                                                                strokeWidth: 1.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Solutions.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Solutions.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 41
                                                        }, this),
                                                        card.isAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BlueRainbowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RainbowButton"], {
                                                            className: "mb-6 h-7 w-12 rounded-full px-5 opacity-80",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent",
                                                                children: "IA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Solutions.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Solutions.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-medium text-zinc-100 mb-3 group-hover:text-white group-[.is-active]:text-white transition-colors tracking-tight",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-400 leading-7 group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors line-clamp-3",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Solutions.tsx",
                                            lineNumber: 408,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 pt-6 border-t border-white/0 flex items-center justify-between group/footer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-zinc-500 group-hover:text-blue-400/80 group-[.is-active]:text-blue-400/80 uppercase tracking-widest transition-colors relative z-10",
                                                    children: card.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-[.is-active]:translate-y-0 relative z-10",
                                                    children: card.compatibleApps?.map((app, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-medium text-zinc-500 grayscale hover:grayscale-0 hover:text-zinc-300 transition-all cursor-default",
                                                            children: app
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/Solutions.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Solutions.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Solutions.tsx",
                                            lineNumber: 440,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Solutions.tsx",
                                    lineNumber: 407,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Solutions.tsx",
                            lineNumber: 369,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Solutions.tsx",
                    lineNumber: 367,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Solutions.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Solutions.tsx",
        lineNumber: 298,
        columnNumber: 9
    }, this));
}
_s3(Solutions, "YcQ81HCItKDy4nXPsJ1RBxpVvqM=", false, function() {
    return [
        useMobileDetection
    ];
});
_c3 = Solutions;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParticleCard");
__turbopack_context__.k.register(_c1, "GlobalSpotlight");
__turbopack_context__.k.register(_c2, "BentoCardGrid");
__turbopack_context__.k.register(_c3, "Solutions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/animated-beam.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBeam",
    ()=>AnimatedBeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AnimatedBeam = ({ className, containerRef, fromRef, toRef, curvature = 0, reverse = false, duration = Math.random() * 3 + 4, delay = 0, pathColor = "gray", pathWidth = 2, pathOpacity = 0.2, gradientStartColor = "#ffaa40", gradientStopColor = "#9c40ff", startXOffset = 0, startYOffset = 0, endXOffset = 0, endYOffset = 0 })=>{
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [pathD, setPathD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [svgDimensions, setSvgDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    // Calculate the gradient coordinates based on the reverse prop
    const gradientCoordinates = reverse ? {
        x1: [
            "90%",
            "-10%"
        ],
        x2: [
            "100%",
            "0%"
        ],
        y1: [
            "0%",
            "0%"
        ],
        y2: [
            "0%",
            "0%"
        ]
    } : {
        x1: [
            "10%",
            "110%"
        ],
        x2: [
            "0%",
            "100%"
        ],
        y1: [
            "0%",
            "0%"
        ],
        y2: [
            "0%",
            "0%"
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBeam.useEffect": ()=>{
            const updatePath = {
                "AnimatedBeam.useEffect.updatePath": ()=>{
                    if (containerRef.current && fromRef.current && toRef.current) {
                        const containerRect = containerRef.current.getBoundingClientRect();
                        const rectA = fromRef.current.getBoundingClientRect();
                        const rectB = toRef.current.getBoundingClientRect();
                        const svgWidth = containerRect.width;
                        const svgHeight = containerRect.height;
                        setSvgDimensions({
                            width: svgWidth,
                            height: svgHeight
                        });
                        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
                        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
                        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
                        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
                        const controlY = startY - curvature;
                        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
                        setPathD(d);
                    }
                }
            }["AnimatedBeam.useEffect.updatePath"];
            // Initialize ResizeObserver
            const resizeObserver = new ResizeObserver({
                "AnimatedBeam.useEffect": ()=>{
                    updatePath();
                }
            }["AnimatedBeam.useEffect"]);
            // Observe the container element
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }
            // Call the updatePath initially to set the initial path
            updatePath();
            // Clean up the observer on component unmount
            return ({
                "AnimatedBeam.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["AnimatedBeam.useEffect"];
        }
    }["AnimatedBeam.useEffect"], [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        width: svgDimensions.width,
        height: svgDimensions.height,
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute top-0 left-0 transform-gpu stroke-2", className),
        viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathD,
                stroke: pathColor,
                strokeWidth: pathWidth,
                strokeOpacity: pathOpacity,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-beam.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathD,
                strokeWidth: pathWidth,
                stroke: `url(#${id})`,
                strokeOpacity: "1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-beam.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].linearGradient, {
                    className: "transform-gpu",
                    id: id,
                    gradientUnits: "userSpaceOnUse",
                    initial: {
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%"
                    },
                    animate: {
                        x1: gradientCoordinates.x1,
                        x2: gradientCoordinates.x2,
                        y1: gradientCoordinates.y1,
                        y2: gradientCoordinates.y2
                    },
                    transition: {
                        delay,
                        duration,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ],
                        repeat: Infinity,
                        repeatDelay: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: gradientStartColor,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-beam.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: gradientStartColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-beam.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "32.5%",
                            stopColor: gradientStopColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-beam.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: gradientStopColor,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-beam.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/animated-beam.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-beam.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/animated-beam.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedBeam, "F00/UrBEnGlb2U4HzMvhlxnPSQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = AnimatedBeam;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBeam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Methodology.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Methodology",
    ()=>Methodology
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$beam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-beam.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Methodology() {
    _s();
    const [activeStep, setActiveStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const step1Ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const step2Ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const step3Ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const step4Ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Methodology.useEffect": ()=>{
            const interval = setInterval({
                "Methodology.useEffect.interval": ()=>{
                    setActiveStep({
                        "Methodology.useEffect.interval": (prev)=>(prev + 1) % 4
                    }["Methodology.useEffect.interval"]);
                }
            }["Methodology.useEffect.interval"], 2000); // 2 seconds per step for slower, clearer highlight
            return ({
                "Methodology.useEffect": ()=>clearInterval(interval)
            })["Methodology.useEffect"];
        }
    }["Methodology.useEffect"], []);
    const steps = [
        {
            id: "01",
            title: "Imersão",
            description: "Entendemos o gargalo da sua empresa.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Methodology.tsx",
                lineNumber: 28,
                columnNumber: 19
            }, this),
            ref: step1Ref
        },
        {
            id: "02",
            title: "Arquitetura",
            description: "Desenhamos a infraestrutura e o fluxo de automação.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Methodology.tsx",
                lineNumber: 35,
                columnNumber: 19
            }, this),
            ref: step2Ref
        },
        {
            id: "03",
            title: "Deploy",
            description: "Implementação segura e testes rigorosos.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Methodology.tsx",
                lineNumber: 42,
                columnNumber: 19
            }, this),
            ref: step3Ref
        },
        {
            id: "04",
            title: "Monitoramento",
            description: "Acompanhamento e melhoria contínua.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Methodology.tsx",
                lineNumber: 49,
                columnNumber: 19
            }, this),
            ref: step4Ref
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "methodology",
        className: "py-24 border-y border-white/5 bg-neutral-900/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white mb-4",
                            children: "A Metodologia"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-400",
                            children: "Como transformamos problemas complexos em soluções simples."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Methodology.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative flex flex-col items-center justify-center overflow-hidden p-6 md:p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 w-full max-w-6xl",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex flex-col items-center text-center group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: step.ref,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 relative z-10 transition-all duration-700 shadow-2xl", activeStep === index ? "border-blue-500 bg-blue-500/20 text-white scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "border-white/10 bg-neutral-950 text-neutral-400 group-hover:border-blue-500/50 group-hover:text-white"),
                                            children: [
                                                step.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-2 -right-2 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono transition-colors duration-700", activeStep === index ? "bg-blue-500 border-blue-400 text-white" : "bg-neutral-800 border-white/10 text-neutral-500"),
                                                    children: step.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Methodology.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Methodology.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold mb-2 transition-colors duration-700", activeStep === index ? "text-white" : "text-white/80"),
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Methodology.tsx",
                                            lineNumber: 90,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-400 max-w-[200px]",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Methodology.tsx",
                                            lineNumber: 93,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/Methodology.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$beam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBeam"], {
                                    containerRef: containerRef,
                                    fromRef: step1Ref,
                                    toRef: step2Ref,
                                    duration: 2,
                                    delay: 0,
                                    startXOffset: 0,
                                    endXOffset: 0,
                                    curvature: 0,
                                    gradientStartColor: activeStep === 0 ? "#3b82f6" : "#262626",
                                    gradientStopColor: activeStep === 0 ? "#06b6d4" : "#262626",
                                    pathWidth: 3,
                                    pathOpacity: 0.1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Methodology.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$beam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBeam"], {
                                    containerRef: containerRef,
                                    fromRef: step2Ref,
                                    toRef: step3Ref,
                                    duration: 2,
                                    delay: 0,
                                    startXOffset: 0,
                                    endXOffset: 0,
                                    curvature: 0,
                                    gradientStartColor: activeStep === 1 ? "#3b82f6" : "#262626",
                                    gradientStopColor: activeStep === 1 ? "#06b6d4" : "#262626",
                                    pathWidth: 3,
                                    pathOpacity: 0.1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Methodology.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$beam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBeam"], {
                                    containerRef: containerRef,
                                    fromRef: step3Ref,
                                    toRef: step4Ref,
                                    duration: 2,
                                    delay: 0,
                                    startXOffset: 0,
                                    endXOffset: 0,
                                    curvature: 0,
                                    gradientStartColor: activeStep === 2 ? "#3b82f6" : "#262626",
                                    gradientStopColor: activeStep === 2 ? "#06b6d4" : "#262626",
                                    pathWidth: 3,
                                    pathOpacity: 0.1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Methodology.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Methodology.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Methodology.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Methodology.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Methodology.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s(Methodology, "9yNx/Elob8LsPMMnHdhoUwrDKwg=");
_c = Methodology;
var _c;
__turbopack_context__.k.register(_c, "Methodology");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reviews",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2d$half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarHalf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star-half.js [app-client] (ecmascript) <export default as StarHalf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
// ---------------- CONFIGURAÇÕES ----------------
const TEXT_LIMIT = 150;
const SCROLL_SPEED = 0.7;
const CARD_WIDTH_DESKTOP = 400;
const CARD_WIDTH_MOBILE = 250;
const CARD_GAP = 24;
// -----------------------------------------------
// Mock Data for Nexis - Automation & AI
const REVIEWS_DATA = [
    {
        nome: "Carlos M.",
        foto: "",
        estrelas: 5,
        texto: "A automação da Nexis transformou nosso fluxo de trabalho. O que levava horas agora é feito em minutos. Incrível!"
    },
    {
        nome: "Ana P.",
        foto: "",
        estrelas: 5,
        texto: "O atendimento via IA é surreal. Tivemos um aumento de 30% na retenção de clientes no primeiro mês."
    },
    {
        nome: "Ricardo S.",
        foto: "",
        estrelas: 4.5,
        texto: "Implementação rápida e suporte técnico de primeira. A equipe entendeu exatamente nossa necessidade de infraestrutura."
    },
    {
        nome: "Juliana T.",
        foto: "",
        estrelas: 5,
        texto: "Dashboards claros e precisos. Finalmente temos controle total sobre nossos dados de vendas em tempo real."
    },
    {
        nome: "Fernanda L.",
        foto: "",
        estrelas: 5,
        texto: "A redução de erros nos processos fiscais foi imediata. A Nexis trouxe a segurança que precisávamos."
    },
    {
        nome: "Roberto G.",
        foto: "",
        estrelas: 5,
        texto: "O ROI foi visível em semanas. A eficiência que a Nexis trouxe para nossa operação é impagável."
    }
];
const RATING = 5.0;
const TOTAL_REVIEWS = "50+";
function Reviews() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reviews.useEffect": ()=>{
            const checkMobile = {
                "Reviews.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 768)
            }["Reviews.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Reviews.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Reviews.useEffect"];
        }
    }["Reviews.useEffect"], []);
    const imgSize = isMobile ? "h60" : "h200";
    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
    const processedReviews = [
        ...REVIEWS_DATA
    ];
    if (isMobile) {
        processedReviews.sort((a, b)=>a.texto.length - b.texto.length);
    }
    const splitIndex = Math.ceil(processedReviews.length / 2);
    const row1 = processedReviews.slice(0, splitIndex);
    const row2 = processedReviews.slice(splitIndex);
    const renderStars = (score)=>{
        const stars = [];
        const full = Math.floor(score);
        const half = score % 1 >= 0.5;
        for(let i = 0; i < 5; i++){
            if (i < full) {
                stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-4 h-4 fill-brand text-brand"
                }, i, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 92,
                    columnNumber: 28
                }, this));
            } else if (i === full && half) {
                stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-4 h-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-4 h-4 text-neutral-800 absolute"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.tsx",
                            lineNumber: 96,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2d$half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarHalf$3e$__["StarHalf"], {
                            className: "w-4 h-4 fill-brand text-brand absolute"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 95,
                    columnNumber: 21
                }, this));
            } else {
                stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-4 h-4 text-neutral-800"
                }, i, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 101,
                    columnNumber: 28
                }, this));
            }
        }
        return stars;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "relative py-24 bg-black overflow-hidden border-t border-white/5",
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-48 z-20 pointer-events-none bg-gradient-to-r from-black to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 w-48 z-20 pointer-events-none bg-gradient-to-l from-black to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-4 text-white",
                        children: "Confiança Técnica"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-white",
                                children: RATING.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reviews.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex",
                                children: renderStars(RATING)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reviews.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-500 font-medium",
                        children: [
                            TOTAL_REVIEWS,
                            " projetos entregues"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-12 py-10 pb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            items: row1,
                            direction: "left",
                            renderStars: renderStars,
                            imgSize: imgSize,
                            cardWidth: cardWidth,
                            isMobile: isMobile
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        row2.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            items: row2,
                            direction: "right",
                            renderStars: renderStars,
                            imgSize: imgSize,
                            cardWidth: cardWidth,
                            isMobile: isMobile
                        }, void 0, false, {
                            fileName: "[project]/src/components/Reviews.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
_s(Reviews, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = Reviews;
// ---------------- CARD INDIVIDUAL ----------------
const ReviewCard = ({ item, renderStars, imgSize, cardWidth, isMobile })=>{
    _s1();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLongText = item.texto.length > TEXT_LIMIT;
    const Header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center text-white font-bold",
                children: item.foto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.foto,
                    alt: item.nome,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 175,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : item.nome.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-bold text-white text-lg",
                        children: item.nome
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-0.5",
                        children: renderStars(item.estrelas)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 183,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 172,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: cardWidth
            },
            className: "rounded-[1.5rem] p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm",
            children: [
                Header,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-400 italic",
                    children: [
                        '"',
                        item.texto,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.tsx",
            lineNumber: 190,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: cardWidth,
            height: 220
        },
        className: "relative shrink-0",
        children: [
            isLongText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10",
                onMouseEnter: ()=>setIsHovered(true)
            }, void 0, false, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 203,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    maxHeight: isHovered ? 600 : 220,
                    zIndex: isHovered ? 50 : 1
                },
                transition: {
                    duration: 0.25,
                    ease: "easeOut"
                },
                onMouseLeave: ()=>setIsHovered(false),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 w-full overflow-hidden rounded-[1.5rem] p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-colors", isHovered ? "shadow-2xl bg-neutral-900 border-brand/50" : "hover:bg-neutral-900/80"),
                children: [
                    Header,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-neutral-400 italic transition-all duration-300", isLongText && !isHovered && "line-clamp-4"),
                        children: [
                            '"',
                            item.texto,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-6 left-0 w-full h-8 bg-transparent pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 236,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 201,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ReviewCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c1 = ReviewCard;
// ---------------- LINHA DO MARQUEE ----------------
function MarqueeRow({ items, direction, renderStars, imgSize, cardWidth, isMobile }) {
    _s2();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const duplicated = [
        ...items,
        ...items,
        ...items
    ];
    const contentWidth = items.length * (cardWidth + CARD_GAP);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeRow.useEffect": ()=>{
            if (direction === "right") {
                x.set(-contentWidth);
            }
        }
    }["MarqueeRow.useEffect"], [
        direction,
        contentWidth,
        x
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "MarqueeRow.useAnimationFrame": ()=>{
            if (paused) return;
            const move = SCROLL_SPEED * (direction === "left" ? -1 : 1);
            const current = x.get();
            if (direction === "left") {
                x.set(current <= -contentWidth ? 0 : current + move);
            } else {
                x.set(current >= 0 ? -contentWidth : current + move);
            }
        }
    }["MarqueeRow.useAnimationFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        style: {
            height: isMobile ? "auto" : 240
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                x,
                width: "max-content"
            },
            className: "flex gap-6 px-4 items-start",
            drag: "x",
            onDragStart: ()=>setPaused(true),
            onDragEnd: ()=>setPaused(false),
            children: duplicated.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
                    item: item,
                    renderStars: renderStars,
                    imgSize: imgSize,
                    cardWidth: cardWidth,
                    isMobile: isMobile
                }, i, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 280,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Reviews.tsx",
            lineNumber: 272,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 271,
        columnNumber: 9
    }, this);
}
_s2(MarqueeRow, "eKV1Xk8S+yB520TBmlD4ECWwTEg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"]
    ];
});
_c2 = MarqueeRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Reviews");
__turbopack_context__.k.register(_c1, "ReviewCard");
__turbopack_context__.k.register(_c2, "MarqueeRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQ",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FAQ_ITEMS = [
    {
        question: "Quanto tempo leva a implementação?",
        answer: "O MVP (Produto Mínimo Viável) para automações de atendimento e triagem pode estar rodando em 5 a 10 dias úteis. Projetos completos de infraestrutura e dashboards personalizados variam de 3 a 6 semanas."
    },
    {
        question: "Preciso trocar meus sistemas atuais (ERP/CRM)?",
        answer: "Não. A arquitetura Nexis é agnóstica. Nós criamos 'pontes' (APIs/Webhooks) que conectam seu sistema legado às novas automações, sem necessidade de migração traumática."
    },
    {
        question: "A IA substitui minha equipe de atendimento?",
        answer: "Ela expande a capacidade. A IA lida com o volume massivo, triagem e dúvidas repetitivas (80% da demanda), liberando seu time humano para fechar negócios complexos e resolver problemas críticos."
    },
    {
        question: "E se a automação parar de funcionar?",
        answer: "Nossos contratos incluem monitoramento ativo. Se um fluxo falha, nossa equipe é notificada antes mesmo de você perceber. Além disso, entregamos documentação completa para sua equipe de TI."
    },
    {
        question: "Como funciona a segurança dos dados?",
        answer: "Seguimos rigorosamente a LGPD. Os dados trafegam criptografados e, dependendo do plano, podem ser processados em servidores (VPS) exclusivos da sua empresa, sem compartilhamento com terceiros."
    }
];
function FAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleItem = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-24 bg-black relative overflow-hidden border-t border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/FAQ.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white",
                                    children: [
                                        "Dúvidas ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.tsx",
                                            lineNumber: 54,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-500",
                                            children: "Frequentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQ.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FAQ.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: 0.1
                                    },
                                    className: "text-lg text-neutral-400 max-w-md",
                                    children: "Entenda como a Nexis se integra à sua operação. Se tiver dúvidas técnicas específicas, fale com nossos engenheiros."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FAQ.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FAQ.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: FAQ_ITEMS.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                    item: item,
                                    isOpen: openIndex === index,
                                    onClick: ()=>toggleItem(index)
                                }, index, false, {
                                    fileName: "[project]/src/components/FAQ.tsx",
                                    lineNumber: 73,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FAQ.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FAQ.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FAQ.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(FAQ, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQ;
function FAQItem({ item, isOpen, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: false,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group cursor-pointer rounded-[2rem] border p-6 transition-all duration-300", isOpen ? "bg-neutral-900 border-brand/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]" : "bg-black border-white/10 hover:border-white/20 hover:bg-neutral-900/40"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold transition-colors leading-tight", isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"),
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/src/components/FAQ.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors", isOpen ? "bg-brand text-white" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"),
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.tsx",
                            lineNumber: 111,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQ.tsx",
                            lineNumber: 111,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FAQ.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FAQ.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0,
                        marginTop: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1,
                        marginTop: 16
                    },
                    exit: {
                        height: 0,
                        opacity: 0,
                        marginTop: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-400 leading-relaxed",
                        children: item.answer
                    }, void 0, false, {
                        fileName: "[project]/src/components/FAQ.tsx",
                        lineNumber: 124,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FAQ.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FAQ.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FAQ.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
_c1 = FAQItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "FAQ");
__turbopack_context__.k.register(_c1, "FAQItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/social.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const SOCIAL_CONFIG = {
    iconSize: "w-5 h-5",
    hoverColor: "var(--color-brand-blue)"
};
// Define social items with their config key to check 'active' status
const SOCIAL_MEDIA_ITEMS = [
    {
        name: "Instagram",
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].instagram,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].instagram, {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 19,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Facebook",
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].facebook,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].facebook, {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 24,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "WhatsApp",
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 29,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const NAV_LINKS = [
    {
        label: "Dores",
        id: "problems"
    },
    {
        label: "Soluções",
        id: "solutions"
    },
    {
        label: "Dashboard",
        id: "dashboard"
    },
    {
        label: "Métricas",
        id: "features"
    },
    {
        label: "Metodologia",
        id: "methodology"
    },
    {
        label: "Depoimentos",
        id: "reviews"
    },
    {
        label: "FAQ",
        id: "faq"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative text-white pb-10 pt-64 lg:pt-56 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 bg-black overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-40"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "flex items-center gap-2 group mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/nexis_logo.png",
                                            alt: "Nexis Logo",
                                            className: "h-8 w-auto object-contain transition-transform group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex",
                                        children: SOCIAL_MEDIA_ITEMS.map((social)=>social.config.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.config.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `flex items-center justify-center w-10 h-10 text-neutral-400 transition-all hover:text-brand hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`,
                                                "aria-label": social.name,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 ",
                                                    children: social.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 41
                                                }, this)
                                            }, social.name, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-lg max-w-sm",
                                        children: "Sua parceira em automação e infraestrutura digital."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold mb-4 text-white",
                                                children: "Navegação"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `#${link.id}`,
                                                            className: "flex items-center gap-2 text-white/60 hover:text-white transition-colors text-base",
                                                            children: link.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, link.id, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mb-4 text-white",
                                                        children: "Contato"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-4",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.url,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "flex items-center gap-3 text-white/80 hover:text-white transition-colors group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"].whatsapp, {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                                lineNumber: 121,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Footer.tsx",
                                                                            lineNumber: 120,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].whatsapp.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Footer.tsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 41
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].email.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].email.url,
                                                                    className: "flex items-center gap-3 text-white/80 hover:text-white transition-colors group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                                lineNumber: 131,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Footer.tsx",
                                                                            lineNumber: 130,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].email.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Footer.tsx",
                                                                            lineNumber: 133,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mb-4 text-white",
                                                        children: "Endereço"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 33
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].address.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL"].maps.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-start gap-3 text-white/80 hover:text-white transition-colors group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].address.label[0],
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Footer.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 78
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$social$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_INFO"].address.label[1]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-neutral-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/favicon.ico",
                                        alt: "Nexis",
                                        className: "w-5 h-5 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "© 2026 Nexis Inc. Todos os direitos reservados."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-bold text-white cursor-default",
                                    children: "Nexis"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Problems$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Problems.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Solutions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Solutions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Methodology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Methodology.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reviews.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background relative selection:bg-brand/30 selection:text-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-noise z-50 pointer-events-none opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Problems$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Problems"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Solutions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Solutions"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Methodology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Methodology"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reviews"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQ"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_03ec6439._.js.map