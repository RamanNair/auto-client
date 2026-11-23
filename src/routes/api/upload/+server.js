import "dotenv/config";
import { handleUpload } from "@vercel/blob/client";

export async function POST({ request }) {
  try {
    // TODO: Check that the user is logged in
    // and has administrator permissions.

    const body = await request.json();

    const result = await handleUpload({
      body,
      request,

      onBeforeGenerateToken: async (pathname) => {
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],

          addRandomSuffix: true,

          tokenPayload: JSON.stringify({
            folder: "vehicles",
          }),
        };
      },

      onUploadCompleted: async ({ blob }) => {
        console.log("kjhjhkjhkjhkjhkj");

        console.log("Upload completed:", blob.url);
      },
    });

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json({ error: error.message }, { status: 400 });
  }
}

// import "dotenv/config";

// import { handleUpload } from "@vercel/blob/client";

// console.log("BLOB TOKEN LOADED:", !!process.env.BLOB_READ_WRITE_TOKEN);

// export async function POST({ request }) {
//   const body = await request.json();

//   const result = await handleUpload({
//     body,
//     request,

//     onBeforeGenerateToken: async (pathname) => ({
//       allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
//       addRandomSuffix: true,
//     }),
//   });

//   return Response.json(result);
// }
