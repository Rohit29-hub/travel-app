export function TravelPointCard({number,name}){
    return (
        <div className=" travelPoint-box w-full h-full flex items-center justify-center p-3 rounded-2xl border border-solid flex-col gap-y-1">
            <h1 className="text-[#FF5722] font-bold text-2xl">{number}</h1>
            <h1 className="text-[#191825] opacity-50">{name}</h1>
        </div>
    )
}