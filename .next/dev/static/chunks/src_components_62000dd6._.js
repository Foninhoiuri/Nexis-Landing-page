(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                            children: hasFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
const GlassExcelAsset = ({ isFilled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
const GlassWhatsAppAsset = ({ isSent })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                        children: isSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                    children: state.action === 'click' && state.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                    children: state.hasFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                            sceneIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                            sceneIndex === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                            sceneIndex === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                    children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                    children: leads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].path, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].path, {
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
        children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GradualBlur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GradualBlur.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TypingAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TypingAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$ManualProcessDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/ManualProcessDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$NotificationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/NotificationDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$UnfollowedLeadsDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/UnfollowedLeadsDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$RocketFallDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/demos/RocketFallDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AssetLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AssetLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageSkeletons.tsx [app-client] (ecmascript)");
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
;
const PROBLEMS = [
    {
        title: "Atendimento lento",
        description: "Se o cliente demora a ser respondido, ele vai embora. Simples assim. Cada minuto sem resposta é uma venda a menos.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$NotificationDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedListDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 21,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Leads sem acompanhamento",
        description: "As pessoas até chegam até você, mas sem um processo claro, elas se perdem no caminho. E cada conversa que não continua é uma oportunidade que morre.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$UnfollowedLeadsDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnfollowedLeadsDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 26,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Processos manuais",
        description: "Quando tudo depende de copiar, colar e conferir, o trabalho trava. O time se desgasta, o erro aumenta e o cliente sente o impacto.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$ManualProcessDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualProcessDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 31,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Falta de escala",
        description: "Seu negócio até cresce, mas sem estrutura ele começa a sofrer. Mais demanda vira mais caos — não mais resultado.",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$demos$2f$RocketFallDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RocketFallDemo"], {}, void 0, false, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 36,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Problems() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "problems",
        className: "py-24 relative bg-background overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AssetLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetLoader"], {
            urls: [],
            minDisplayTime: 1000,
            skeleton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemsSkeleton"], {}, void 0, false, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 46,
                columnNumber: 27
            }, void 0),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/Problems.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-2xl mx-auto mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h2, {
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
                                            lineNumber: 61,
                                            columnNumber: 29
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
                                                        lineNumber: 64,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Problems.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "hoje?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Problems.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Problems.tsx",
                                            lineNumber: 62,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Problems.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p, {
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
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Problems.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6",
                            children: PROBLEMS.map((problem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemCard, {
                                    ...problem,
                                    index: index
                                }, index, false, {
                                    fileName: "[project]/src/components/Problems.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Problems.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Problems.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Problems.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Problems.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = Problems;
function ProblemCard({ title, description, index, component }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div, {
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative h-[500px] bg-white/5 transition-all duration-500 rounded-[3rem] hover:scale-[1.02] bg-gradient-to-tr from-brand/5 via-zinc-950 to-transparent", "overflow-hidden z-20"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-0 rounded-[3rem] overflow-hidden"),
                children: component ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full opacity-100 transition-opacity duration-500",
                    children: component
                }, void 0, false, {
                    fileName: "[project]/src/components/Problems.tsx",
                    lineNumber: 114,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 112,
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
                        lineNumber: 129,
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
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-300 text-sm leading-relaxed text-balance min-h-[5rem] flex items-start justify-center",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Problems.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Problems.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Problems.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Problems.tsx",
        lineNumber: 101,
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
"[project]/src/components/Problems.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Problems.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_62000dd6._.js.map