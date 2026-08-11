export default function TopoBackground({
    position = '50% 50%',
    opacity = 0.18,
    dark = false,
}) {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/background_countour_lines.webp?v=3)',
                backgroundRepeat: 'repeat',
                backgroundPosition: position,
                backgroundSize: 'auto',
                opacity,
                mixBlendMode: dark ? 'screen' : 'multiply',
                pointerEvents: 'none',
                zIndex: 0,
                userSelect: 'none',
            }}
        />
    );
}
