type Props = {
  onClose: () => void
}

export function LightboxCloseButton({ onClose }: Props) {
  return (
    <button
      type='button'
      onClick={onClose}
      aria-label='Zamknij'
      className='absolute -top-10 right-0 text-2xl leading-none text-brand-white/70 hover:text-brand-white cursor-pointer transition-colors'
    >
      ✕
    </button>
  )
}
