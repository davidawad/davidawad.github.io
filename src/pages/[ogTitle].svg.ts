import { getPosts } from "@utils/posts";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  return new Response(await generateOgImage(params.ogTitle), {
    headers: { "Content-Type": "image/svg+xml" },
  });
};

const posts = await getPosts({ draft: false });

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
