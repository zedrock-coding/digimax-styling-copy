import '../index.css';

const StyleButton = ({ matter, fullWidth = false }) => {
    const widthClasses = fullWidth
        ? 'w-full py-[clamp(0.25rem,0.5vw,0.75rem)]'
        : 'px-[clamp(0.5rem,1.25vw,1.5rem)] py-[clamp(0.15rem,0.25vw,0.5rem)] size-fit';

    return (
        <button className={`${widthClasses} flex items-center justify-center bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-yellow hover:opacity-90 hover:brightness-125 transition-opacity rounded-4xl whitespace-nowrap text-[clamp(0.65rem,1.1vw,1rem)] font-extrabold text-gray-200 shadow-lg transition duration-300 ease-in-out font-sans`}>
            {matter}
        </button>
    )
}

export default StyleButton;