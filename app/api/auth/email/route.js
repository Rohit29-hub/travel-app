import { cookies } from "next/headers";
export async function POST(req) {
  const body = await req.json();
  const cookiesStore = cookies();

  if (cookiesStore.get("uar")) {
    return Response.json({ message: "Already Submitted", status: 200 });
  } else {
    cookiesStore.set("uar", true);
    return Response.json({ message: "Submit SuccessFully", status: 200 });
  }
}
