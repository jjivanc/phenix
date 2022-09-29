

export function BoxItem(props){
    return (
        <div className="relative" >
            <img src={props.bannerURL} className='w-64 h-[21.5rem] ' />
            <div className="">
                <span className="absolute bottom-0 left-0 right-0" >{props.title}</span>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: "200px",
    },
    img: {
        width: '100px'
    }
}