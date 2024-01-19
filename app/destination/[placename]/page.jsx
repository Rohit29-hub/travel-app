export default function AboutPlacePage({params : {placename}}){
    return (
        <div className="text-4xl font-bold text-center">
            {decodeURI(placename)}
        </div>
    )
}