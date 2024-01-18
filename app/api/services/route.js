const servicesData = [
  {
    id: 1,
    img : "/destination.svg",
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
  {
    id: 2,
    img : "/booking.svg",
    title: "Easy Booking",
    description: "Square, was moving across the sand in their direction.",
  },
  {
    id: 3,
    img : "/cloudy.svg",
    title: "Wheather Forecast",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
  
];

export async function GET(request) {
  setTimeout(()=>{
    return Response.json(servicesData);
  },4000)
}
