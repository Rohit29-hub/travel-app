import { Modal } from "@/components/modals/Modal";

export default function PlaceDetails({ params: { placename } }) {
  return (
    <Modal>
      <h1 className="text-3xl font-bold text-white">{decodeURI(placename)}</h1>
    </Modal>
  );
}
