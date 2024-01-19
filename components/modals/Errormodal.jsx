export function ErrorModal({ children }) {
  return (
    <div className="errorLayoutContainer w-96 h-96 m-auto border border-solid flex flex-col items-center justify-center gap-3 shadow-2xl mt-14">
      {children}
    </div>
  );
}
