interface IconProps {
    width: string;
    height: string;
    color: string;
}

export function IconEmail({ width, height, color }: IconProps) {
    return (
        <svg id="Layer_1" fill={color} height={height} width={width} viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m105.182 97.82h-85.364a10.477 10.477 0 0 1 -10.465-10.466v-52.72a10.477 10.477 0 0 1 10.465-10.466h85.364a10.477 10.477 0 0 1 10.465 10.466v52.72a10.477 10.477 0 0 1 -10.465 10.466zm-85.364-69.652a6.472 6.472 0 0 0 -6.465 6.466v52.72a6.472 6.472 0 0 0 6.465 6.466h85.364a6.472 6.472 0 0 0 6.465-6.466v-52.72a6.472 6.472 0 0 0 -6.465-6.466z" /><path d="m62.5 72.764a2 2 0 0 1 -1.324-.5l-48.2-42.548 2.647-3 46.877 41.384 46.879-41.379 2.647 3-48.2 42.548a1.994 1.994 0 0 1 -1.326.495z" /><path d="m5.012 72.393h49.061v4h-49.061z" transform="matrix(.66 -.752 .752 .66 -45.859 47.529)" /><path d="m93.454 49.862h4v49.062h-4z" transform="matrix(.752 -.66 .66 .752 -25.361 81.43)" /></svg>
    );
}