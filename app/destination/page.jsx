import { DestinationCard } from "@/components/ui/DestinationCard";

export default async function DestinationPage() {
  const destination = await getDestination();
  return (
    <div className="w-full h-auto py-4">
      <div className="w-[80%] m-auto h-full grid grid-cols-3 gap-y-5 place-content-center">
        {destination.map((place) => (
          <div className="w-full h-full col-span-1 flex items-center justify-center">
                <DestinationCard
                image={place.image}
                title={place.title}
                city={place.city}
                country={place.country}
                price={place.price}
                rating={place.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const getDestination = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/destination`);
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    throw error;
  }
};
