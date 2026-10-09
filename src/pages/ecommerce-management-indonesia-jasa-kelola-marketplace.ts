import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const GET: APIRoute = () => {
  const pdfPath = join(process.cwd(), 'public', 'Cardi.co.id - Pricing.pdf');
  const file = readFileSync(pdfPath);
  return new Response(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Cardi-Pricing.pdf"',
    },
  });
};

