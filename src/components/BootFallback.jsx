/** Full-screen spinner while lazy route chunks load (root Suspense). */
export default function BootFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-violet-50 dark:from-slate-950 dark:to-indigo-950">
      <div className="h-14 w-14 animate-spin rounded-full border-2 border-sky-400 border-t-transparent dark:border-violet-400" />
    </div>
  )
}
