import destinations from "@/data/DestinationData/destination.json";

export async function GET(req, { params: { placename } }) {
  const data = destinations.find((dest) => dest.title === placename);
  return Response.json({ data });
}
