export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-ink">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center border border-foreground px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
