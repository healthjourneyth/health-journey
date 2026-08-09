const IMAGE_URL = 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=85&w=1600&auto=format&fit=crop';

export async function GET() {
  const response = await fetch(IMAGE_URL, { next: { revalidate: 86400 } });
  if (!response.ok) return new Response('Image unavailable', { status: 502 });

  return new Response(response.body, {
    headers: {
      'Content-Type': response.headers.get('content-type') || 'image/jpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
    },
  });
}
