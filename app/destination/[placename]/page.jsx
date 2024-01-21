import Image from "next/image";
import { getSinglePlace } from "@/app/utils/getSinglePlace";
export default async function AboutPlacePage({ params: { placename } }) {
  const placeDetails =await getSinglePlace(placename);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-2">
      <Image
        src={`/${placeDetails.image}`}
        width={500}
        height={500}
        alt={placeDetails.country}
        priority={true}
      />
      <h1 className="text-2xl font-semibold py-2">{placeDetails.title}</h1>
      <h1 className="text-xl font-medium">${placeDetails.price}</h1>
    </div>
  );
}
