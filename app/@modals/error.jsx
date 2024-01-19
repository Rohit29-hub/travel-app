"use client";
import { ErrorModal } from "@/components/modals/Errormodal";
export default function error({ error, reset }) {
  return (
    <ErrorModal>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </ErrorModal>
  );
}
