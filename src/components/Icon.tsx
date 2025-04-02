interface IconProps {
    icon: {
        path: string;
        hex: string;
    };
    size?: number;
    color?: string;
    className?: string;
}

export function Icon({ icon, size = 24, color, className = "" }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color || `#${icon.hex}`}
            className={className}
            role="img"
        >
            <path d={icon.path} />
        </svg>
    );
}
