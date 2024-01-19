
export function getStar(rating){
    const star = [];
    rating = parseInt(rating);
    for(let i = 0; i<rating; i++){
        star.push('★')
    }
    return star;
}