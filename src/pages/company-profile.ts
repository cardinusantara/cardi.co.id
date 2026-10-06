import type { APIRoute } from 'astro';

// Redirect to the static PDF served from public/
export const GET: APIRoute = () => {
  return new Response(null, {
    status: 301,
    headers: { Location: '/company-profile.pdf' },
  });
};
