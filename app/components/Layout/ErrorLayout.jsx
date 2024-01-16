export function Error({children}){
    return (
        <div className="w-96 h-96 m-auto border border-solid flex flex-col items-center justify-center gap-3 shadow mt-14">
            {children}
        </div>
    )
}