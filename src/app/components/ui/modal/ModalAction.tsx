export function ModalAction ({ children }: { children: React.ReactNode }) {
  return (
    <footer className='p-3 flex items-center justify-end'>
      {children}
    </footer>
  )
}
