import { useRouter } from "@tanstack/react-router";

export function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-ink">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-5 py-2.5 text-sm hover:bg-foreground hover:text-background"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-2.5 text-sm hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
