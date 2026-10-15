type Props = {
  text: string
  onClick: () => void
  className?: string
  ariaLabel?: string
}

export function LightboxButton({ text, onClick, className, ariaLabel }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 bg-brand-black/50 px-3 py-4 text-2xl text-brand-white hover:bg-brand-black/80 cursor-pointer transition-colors ${className}`}
    >
      {text}
    </button>
  )
}
