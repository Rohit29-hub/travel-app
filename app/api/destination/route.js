import destinations from "@/data/DestinationData/destination.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");

  if(limit) {
    if (parseInt(limit) > 0) {
        const data = destinations.slice(0, limit);
        return Response.json({ data });
    }
  }
  return Response.json({ data: destinations });
}
