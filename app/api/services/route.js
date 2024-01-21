import services from '@/data/ServicesData/services.json'

export async function GET(req){
    return Response.json({data:services});
}