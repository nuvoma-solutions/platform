const PurpleGradientCircle = ({ className = "" }: { className?: string }) => {
    return (
        <div
            className={`absolute rounded-full bg-gradient-to-r from-[#748CAB] to-purple-500/40 blur-3xl ${className}`}
            aria-hidden="true"
        />
    )
}

export default PurpleGradientCircle

