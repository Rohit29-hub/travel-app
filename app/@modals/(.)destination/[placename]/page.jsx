import { Modal } from "@/components/modals/Modal";
import Image from "next/image";
import { getSinglePlace } from "@/app/utils/getSinglePlace";
export default async function PlaceDetails({ params: { placename } }) {
  const placeDetails = await getSinglePlace(placename);
  return (
    <Modal>
      <div className="w-full h-full">
        <Image
          src={`/${placeDetails.image}`}
          width={300}
          height={300}
          alt={placeDetails.country}
          priority={true}
        />
        <h1 className="text-2xl font-medium py-2">{placeDetails.title}</h1>
      </div>
    </Modal>
  );
}
