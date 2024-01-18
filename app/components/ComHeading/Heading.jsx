export function Heading({category,title}){
    return  (
        <div>
            <span className="text-[13px] text-[#F85E9F] font-bold uppercase">
                  {category}
            </span>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    )
}