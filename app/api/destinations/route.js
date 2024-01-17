const data = [
    {
        id : 1,
        title : "Paradise Beach, Bantayan Island",
        price : "550.16",
        city  : "Rome",
        country  : "Italy",
        image : "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating  : "4.8"
    },
    {
        id : 2,
        title : "Ocean with full of Colors",
        price : "20.99",
        city  : "",
        country  : "Maldives",
        image : "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating  : "4.5"
    },
    {
        id : 3,
        title : "Mountain View, Above the cloud",
        price : "150.99",
        city  : "",
        image : "https://images.unsplash.com/photo-1620370219275-65b5d008f41a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country  : "United Arab Emeries",
        rating  : "5.0"
    }
]


export async function GET(req){
    return Response.json(data);
}