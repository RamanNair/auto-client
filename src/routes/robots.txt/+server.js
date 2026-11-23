const BASE_URL = "https://auto-client-sigma.vercel.app";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
