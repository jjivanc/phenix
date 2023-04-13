// pages/mangadex.js
import Image from "next/image";
import axios from "axios";

function BoxItem(props){
    return (
        <div className="relative h-80 w-60 sm:h-62 ">
            <Image  src={props.banner} alt="" className="w-64 h-auto" fill={true} />
            <div>
                <span className="absolute bottom-0 left-0 right-0 line-clamp-1">{props.title}</span>
            </div>
            
        </div>
    )
}



export default function MangaDex({ data }) {
    //console.log('final',data)
    return (
        <div className="flex w-auto h-[100vh] justify-center ">

        <div className="flex flex-wrap justify-center flex-row gap-1 max-w-[45rem] h-auto">
            {data.map( item => <BoxItem key={item.id} title={item.attributes.title.en} banner={item.bannerURL}/>)}
        </div>
        </div>
    );
}
async function getMangaCover(arr) {
    //const response = await axios.all(`https://api.mangadex.org/manga/cover/${coverId}`);
    //const cover = response.data;
    const dataa = arr.map(item => (item.relationships.find( item => item.type === 'cover_art')))
    axios.all(dataa.map( (item,index) => axios.get(`https://api.mangadex.org/manga/cover/${item.cover_art}`)))
    console.log('data',dataa)
    return ;
}
    
export async function getServerSideProps() {
  const response = await axios.get("https://api.mangadex.org/manga");
  //const data = response.data.data;
  const data = await axios('https://api.mangadex.org/manga')
    .then( response => {
        var array = new Array
        response.data.data.map( (item)=>{
            var obj = item.relationships.find( item => item.type === 'cover_art')
            array.push({id :obj.id})//axios(`https://api.mangadex.org/cover/${obj.id}`)

        })

        const data = axios.all(array.map( (id,index)=> axios.get(`https://api.mangadex.org/cover/${id.id}`)
        .then(res=> {return {...response.data.data[index],bannerURL:`https://uploads.mangadex.org/covers/${response.data.data[index].id}/${res.data.data.attributes.fileName}`}})))
        //.then(res=> console.log(res.data.data.attributes.fileName))))
        return data
    })
    console.log('data',data)
  
  return {
    props: {
      data,
    },
  };
}


/*
    Funcoes: Pegar Cover da cada um



*/