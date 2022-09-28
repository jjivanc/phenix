import axios from "axios"

// const coverArt = async ()=> {
//     const api = await axios('https://api.mangadex.org/manga')
//     .then( response => {
//         var array = new Array
//         response.data.data.map( (item)=>{
//             var obj = item.relationships.find( item => item.type === 'cover_art')
//             var coverArt = array.push({id :obj.id})//axios(`https://api.mangadex.org/cover/${obj.id}`)

//             return 
//         })

//         const data = axios.all(array.map( (id,index)=> axios.get(`https://api.mangadex.org/cover/${id.id}`)
//         .then(res=> {return {...response.data.data[index],bannerURL:`https://uploads.mangadex.org/covers/${response.data.data[index].id}/${res.data.data.attributes.fileName}`}})))
//         //.then(res=> console.log(res.data.data.attributes.fileName))))
//         return data
//     })
    
//     return api
// }

export async function apiData(){
    const api = await axios('https://api.mangadex.org/manga')
    .then( response => {
        var array = new Array
        response.data.data.map( (item)=>{
            var obj = item.relationships.find( item => item.type === 'cover_art')
            var coverArt = array.push({id :obj.id})//axios(`https://api.mangadex.org/cover/${obj.id}`)

            return 
        })

        const data = axios.all(array.map( (id,index)=> axios.get(`https://api.mangadex.org/cover/${id.id}`)
        .then(res=> {return {...response.data.data[index],bannerURL:`https://uploads.mangadex.org/covers/${response.data.data[index].id}/${res.data.data.attributes.fileName}`}})))
        //.then(res=> console.log(res.data.data.attributes.fileName))))
        return data
    })
    
    return api
}

