import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileSpreadsheet,
    MessageCircle,
    Check,
    ArrowUp,
    FileText,
    Copy,
    FolderOpen
} from "lucide-react";

// --- ASSETS VISUAIS (DESIGN PREMIUM / GLASS) ---

// --- HELPER DE COR ---
const darkenColor = (hex: string, percent: number) => {
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color.split('').map(c => c + c).join('');
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

// 1. O FICHÁRIO (Interactive Design)
const Folder = ({
    hasFile,
    color = '#f97316', // Orange-500
    size = 1.2
}: {
    hasFile: boolean;
    color?: string;
    size?: number
}) => {
    const folderBackColor = darkenColor(color, 0.4); // Darker for back
    const folderFrontColor = color; // Main color

    // Scale style
    const scaleStyle = { transform: `scale(${size})` };
    const open = hasFile; // Open while it has the file to grab

    return (
        <div style={scaleStyle} className="relative group select-none">
            <motion.div
                className="relative w-[100px] h-[80px] transition-all duration-300"
                animate={{ y: open ? 0 : -4 }} // Slight bounce
            >
                {/* Back Plate (Bg of folder) */}
                <div
                    className="absolute inset-0 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
                    style={{ backgroundColor: folderBackColor }}
                >
                    {/* Tab */}
                    <span
                        className="absolute bottom-[98%] left-0 w-[40px] h-[10px] rounded-tl-[5px] rounded-tr-[5px]"
                        style={{ backgroundColor: folderBackColor }}
                    />
                </div>

                {/* Papers Container */}
                <div className="absolute inset-0 z-10 flex justify-center items-end pb-[10%] pointer-events-none">
                    {/* Paper 1 (Back) */}
                    <motion.div
                        className="absolute w-[70%] h-[80%] bg-neutral-300 rounded-[5px] origin-bottom shadow-sm"
                        animate={open ? {
                            y: -40,
                            x: -25,
                            rotate: -15,
                            scale: 1
                        } : {
                            y: 0,
                            x: 0,
                            rotate: 0,
                            scale: 0.95
                        }}
                    />
                    {/* Paper 2 (Middle) */}
                    <motion.div
                        className="absolute w-[80%] h-[80%] bg-neutral-200 rounded-[5px] origin-bottom shadow-sm"
                        animate={open ? {
                            y: -40,
                            x: 20,
                            rotate: 15,
                            scale: 1
                        } : {
                            y: 2,
                            x: 0,
                            rotate: 0,
                            scale: 0.98
                        }}
                    />

                    {/* Paper 3 (The Active File - Front) */}
                    <AnimatePresence>
                        {hasFile && (
                            <motion.div
                                className="absolute w-[90%] h-[90%] origin-bottom flex items-center justify-center z-20"
                                initial={{ y: 0, scale: 0.9 }}
                                animate={{
                                    y: -60, // Pop up significantly
                                    x: -5,
                                    scale: 1,
                                    rotate: -5
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 1, // Keep scale
                                    y: -60, // Stay in popped position
                                    rotate: -5
                                }}
                                transition={{ duration: 0.2 }}
                            >

                                {/* 2. Camada Glass (Frente) */}
                                <div
                                    className="absolute inset-0 rounded-[10px] bg-black/20 backdrop-blur-xl flex flex-col items-center justify-center gap-2"
                                    style={{
                                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.3) inset'
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-inner text-white">
                                        <FileText size={14} strokeWidth={2.5} />
                                    </div>

                                    {/* Mímica de Texto */}
                                    <div className="flex flex-col gap-1 items-center w-full px-4">
                                        <div className="w-full h-0.5 bg-white/40 rounded-full" />
                                        <div className="w-2/3 h-0.5 bg-white/30 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Front Flap (Cover) */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[80%] z-30 origin-bottom shadow-lg rounded-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border-t border-white/10"
                    style={{ backgroundColor: folderFrontColor }}
                    animate={open ? {
                        skewX: 15,
                        scaleY: 0.6, // Flatten to look open
                        filter: "brightness(1.1)"
                    } : {
                        skewX: 0,
                        scaleY: 1,
                        filter: "brightness(1)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {/* Shadow/Depth Layer for front flap */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[80%] z-30 origin-bottom rounded-[5px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-black/20 pointer-events-none mix-blend-multiply"
                    animate={open ? { skewX: 15, scaleY: 0.6, opacity: 0 } : { skewX: 0, scaleY: 1, opacity: 0.1 }}
                />
            </motion.div>
        </div>
    );
};

// 2. O EXCEL (Interactive Grid Design)
const GlassExcelAsset = ({ isFilled }: { isFilled: boolean }) => (
    <motion.div
        className="w-72 h-44 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col relative"
    >
        {/* Window Header */}
        <div className="h-7 bg-white/5 border-b border-white/5 flex items-center px-3 justify-between shrink-0">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
        </div>

        {/* Spreadsheet Container */}
        <div className="flex-1 flex flex-col">
            {/* Column Headers */}
            <div className="h-6 flex border-b border-white/5 bg-neutral-900/50">
                <div className="w-8 border-r border-white/5 shrink-0" /> {/* Corner */}
                <div className="flex-1 grid grid-cols-3 divide-x divide-white/5">
                    {[0, 1, 2].map(c => (
                        <div key={c} className="flex items-center justify-center">
                            <div className="w-6 h-1 bg-white/10 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Body */}
            <div className="flex-1 flex">
                {/* Sidebar (Row Lines Only) */}
                <div className="w-8 border-r border-white/5 flex flex-col divide-y divide-white/5 bg-neutral-900/30 shrink-0">
                    {[0, 1, 2].map(r => <div key={r} className="flex-1" />)}
                </div>

                {/* Cells Grid 3x3 */}
                <div className="flex-1 grid grid-cols-3 grid-rows-3 divide-x divide-y divide-white/5 bg-white/2">
                    {[...Array(9)].map((_, i) => {
                        const isTarget = i === 4; // Center cell
                        return (
                            <div key={i} className="relative flex items-center px-3 overflow-hidden">
                                {isTarget && isFilled ? (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 bg-emerald-500/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 0.5, 0.2] }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.div
                                            className="w-full h-1.5 bg-emerald-500/40 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: "80%" }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                        />
                                        <motion.div
                                            className="absolute right-1"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        >
                                            <Check size={10} className="text-emerald-400" />
                                        </motion.div>
                                    </>
                                ) : (
                                    // Empty State (Identical for all)
                                    <div className="w-full max-w-[80%] h-1.5 bg-white/5 rounded-full" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/20 blur-3xl pointer-events-none" />
    </motion.div>
);

// 3. O WHATSAPP (Glass Design - Mobile)
const GlassWhatsAppAsset = ({ isSent }: { isSent: boolean }) => (
    <motion.div
        className="w-40 h-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative"
    >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full border border-white/5 z-20" />

        {/* Header Transparente */}
        <div className="h-14 border-b border-white/5 flex items-center pt-4 px-4 gap-2 bg-white/5">
            <div className="w-6 h-6 rounded-full bg-white/10" />
            <div className="w-14 h-2 bg-white/10 rounded-full" />
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-3 flex flex-col justify-end space-y-3 relative">
            {/* Msg Recebida */}
            <div className="self-start bg-neutral-800/80 border border-white/5 p-2.5 rounded-2xl rounded-tl-none max-w-[80%]">
                <div className="w-12 h-1.5 bg-white/20 rounded-full" />
            </div>

            {/* Msg Enviada (Nossa) */}
            <AnimatePresence>
                {isSent && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        className="self-end bg-green-600/90 backdrop-blur border border-white/10 p-2.5 rounded-2xl rounded-tr-none max-w-[90%] shadow-lg shadow-green-900/20"
                    >
                        <div className="w-20 h-1.5 bg-white/90 rounded-full mb-1.5" />
                        <div className="w-12 h-1.5 bg-white/50 rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Botão de Enviar (Input Area) */}
        <div className="h-10 mx-3 mb-3 bg-white/5 rounded-full border border-white/5 flex items-center justify-between px-2 mt-2">
            <div className="w-16 h-1.5 bg-white/10 rounded-full ml-1" />
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isSent ? 'bg-green-500' : 'bg-white/10'}`}>
                <ArrowUp size={12} className="text-white" />
            </div>
        </div>
    </motion.div>
);

// --- 4. CURSOR 3D & PAYLOAD (Glass Payload) ---
const Cursor3D = ({ state }: { state: any }) => {
    // Configurações de profundidade (Z-Axis)
    const variants = {
        high: { scale: 1.1, opacity: 1 },
        low: { scale: 0.9, opacity: 0.9 }
    };

    const currentVariant = state.action === 'click' ? variants.low : variants.high;

    return (
        <motion.div
            className="absolute z-50 pointer-events-none"
            animate={{
                x: state.x,
                y: state.y,
                scale: currentVariant.scale
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <div className="relative -ml-2 -mt-2">
                {/* SVG do Cursor */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-2xl relative z-20">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>

                {/* Badge de Ação (Aparece ao clicar/colar) */}
                <AnimatePresence>
                    {state.action === 'click' && state.label && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 20 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 left-0 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-30"
                        >
                            {state.label}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Arquivo "Grudado" no cursor (Estilo Glass) */}
                <AnimatePresence>
                    {state.hasFile && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, x: 14, y: 14, rotate: -5 }}
                            exit={{ opacity: 0, scale: 0, y: 10 }}
                            className="absolute top-0 left-0 w-10 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded shadow-lg z-10 flex flex-col p-1.5 gap-1"
                        >
                            <div className="w-full h-0.5 bg-white/40 rounded" />
                            <div className="w-2/3 h-0.5 bg-white/40 rounded" />
                            <div className="w-full h-0.5 bg-white/20 rounded" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// --- MAIN COMPONENT ---
export function ManualProcessDemo() {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [actionState, setActionState] = useState({
        x: 0, y: 60, // Começa um pouco abaixo
        hasFile: false,
        action: 'move',
        completed: false,
        label: ''
    });

    useEffect(() => {
        const loop = async () => {
            while (true) {
                // --- CENA 1: PASTA ---
                setSceneIndex(0);
                setActionState({ x: 0, y: 80, hasFile: false, completed: false, action: 'move', label: '' });
                await wait(200);

                // Mouse vai até a pasta
                setActionState(prev => ({ ...prev, x: 0, y: -10 })); // Ajuste Vertical Manual (Pasta)
                await wait(800);

                // Pega arquivo
                setActionState(prev => ({ ...prev, action: 'click', label: 'Pega' }));
                await wait(300);

                // Levanta com arquivo
                setActionState(prev => ({ ...prev, action: 'move', hasFile: true, completed: true, label: '' }));
                await wait(800);

                // --- CENA 2: EXCEL ---
                setSceneIndex(1); // Slide Left

                // Move para o centro (trazendo arquivo)
                setActionState(prev => ({ ...prev, x: -80, y: 80, completed: false })); // Reset pos visual fora da tela
                await wait(50);
                setActionState(prev => ({ ...prev, x: 0, y: 50 })); // Ajuste Vertical Manual (Excel)
                await wait(800);

                // Cola
                setActionState(prev => ({ ...prev, action: 'click', label: 'Escreve' }));
                await wait(300);

                // Solta arquivo
                setActionState(prev => ({ ...prev, action: 'move', hasFile: false, completed: true, label: '' }));
                await wait(800);

                // Copia (Ação extra)
                setActionState(prev => ({ ...prev, action: 'click', label: 'Copia' }));
                await wait(300);
                setActionState(prev => ({ ...prev, action: 'move', hasFile: true, label: '' })); // Carrega "texto"
                await wait(800);

                // --- CENA 3: WHATSAPP ---
                setSceneIndex(2); // Slide Left

                // Move para input
                setActionState(prev => ({ ...prev, x: -60, y: 0, completed: false, hasFile: true }));
                await wait(50);
                setActionState(prev => ({ ...prev, x: -10, y: 100 })); // Ajuste Vertical Manual (Input Zap)
                await wait(800);

                // Cola
                setActionState(prev => ({ ...prev, action: 'click', label: 'Cola' }));
                await wait(300);
                setActionState(prev => ({ ...prev, action: 'move', hasFile: false, label: '' })); // Solta "texto"
                await wait(500);

                // Move p/ Enviar
                setActionState(prev => ({ ...prev, x: 53, y: 100 })); // Ajuste Vertical Manual (Enviar Zap)
                await wait(500);

                // Clica Enviar
                setActionState(prev => ({ ...prev, action: 'click', label: 'Enviar' }));
                await wait(300);

                // Mensagem enviada
                setActionState(prev => ({ ...prev, action: 'move', completed: true, label: '' }));
                await wait(1500);
            }
        };
        loop();
    }, []);

    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

    return (
        <div className="relative w-full h-full min-h-[400px] flex items-start justify-center overflow-hidden bg-transparent pt-12">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center origin-top transition-transform duration-300">

                {/* CARROUSEL DE CENAS */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {sceneIndex === 0 && (
                        <motion.div
                            key="folder"
                            className="absolute inset-0 flex items-center justify-center translate-y-12"
                            initial={{ x: 300, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: -300, opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 180, damping: 25 }}
                        >
                            <Folder hasFile={!actionState.hasFile && !actionState.completed} />
                        </motion.div>
                    )}

                    {sceneIndex === 1 && (
                        <motion.div
                            key="excel"
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ x: 300, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: -300, opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 180, damping: 25 }}
                        >
                            <GlassExcelAsset isFilled={actionState.completed} />
                        </motion.div>
                    )}

                    {sceneIndex === 2 && (
                        <motion.div
                            key="whatsapp"
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ x: 300, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: -300, opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 180, damping: 25 }}
                        >
                            <GlassWhatsAppAsset isSent={actionState.completed} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CURSOR GLOBAL */}
                <Cursor3D state={actionState} />

            </div>

            {/* Dots Indicadores (Estilo iOS) */}
            <div className="absolute bottom-6 flex gap-1.5 p-1 px-2 rounded-full bg-black/20 backdrop-blur border border-white/5">
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                        animate={{ opacity: sceneIndex === i ? 1 : 0.2 }}
                    />
                ))}
            </div>
        </div>
    );
}