export function Backdrop ({ children }: { children: React.ReactNode }) {
  return (
    <main className='
      h-screen w-full grid place-content-center fixed inset-0
      bg-neutral-900/30 dark:bg-neutral-500/30
      '
    >
      {children}
    </main>
  )
}
