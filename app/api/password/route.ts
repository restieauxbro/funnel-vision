import { cookies } from "next/headers";

export async function POST(request: Request, params: { slug: string }) {
  const data: { password: string } = await request.json();
  const password = data.password;

  const cookieStore = cookies();
  const userIdFromCookie = cookieStore.get("userId")?.value;
  const userId = userIdFromCookie ?? crypto.randomUUID();

  if (process.env.PAGE_PASSWORD !== password) {
    return new Response("incorrect password", {
      status: 401,
    });
  }

  if (!userIdFromCookie) {
    cookieStore.set("userId", userId, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
  }

  cookieStore.set("hasAccess", "true", {
    httpOnly: true,
    path: "/",
  });

  return new Response("password correct", {
    status: 200,
  });
}
