import VinylImage from "./VinylImage";

function InfoBox({name,num,image,link} : {name:string, num:string, image:string, link:string}) {
    return (
        <div className="pb-10 px-3">

            <div className="text-[42px] font-bold mb-2">{num}</div>
            <hr className="border-gray-500"></hr>
            <div className="pt-5 pb-5 text-[18px]">
                <span className="font-bold pr-7">
                    Name:
                </span>
                <span className="">
                    {name}
                </span>
            </div>
            <hr className="border-gray-500"></hr>
            
            <div className="pb-5"></div>
            <div className="">
                <VinylImage  imageSrc={image} link={link}/>
            </div>
            
        </div>
    );
    
}

export default InfoBox;