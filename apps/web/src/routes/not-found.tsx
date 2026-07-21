import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/not-found')({
  component: NotFoundPage,
});

function NotFoundPage() {
  return <h1>404 - Page not found</h1>;
}
