import React, { useEffect, useRef, useState } from 'react'


const Albumcovers = React.memo((props) => {

 const albumref = useRef()


    const [images,setImages] = useState(
    [
        "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/aa/88/2c/aa882ccd-d153-9901-8ee1-c246e5b704b3/dj.esjczuop.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/83/55/53/83555381-1679-1525-0bd0-da2c3227a467/cover.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/ba/87/dd/ba87ddde-41b8-cb44-3675-61a2ba920e36/dj.nobsviqs.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/4c/86/1d/4c861dab-5428-f3b7-8068-82bb69db5e89/093624932130.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e9/23/d4/e923d475-9d36-2d19-5aaf-1568b1bfae3d/cover.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/5e/49/35/5e493511-d87b-5aa2-b379-30fffbae902b/093624932154.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/5f/87/ea5f87ea-4bc3-0e01-456c-37401a4268f2/14UMGIM60337.rgb.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/ec/27/73ec2771-a008-e55b-8ccd-faf6257d5cd0/093624932178.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/38/86/0b/38860be2-9e14-a558-ec2a-10d71ca6f596/16UMGIM76040.rgb.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/7b/1b/1b/7b1b1b0b-7ce2-b223-f9e0-8e36abe51877/19UMGIM78325.rgb.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/7e/3c/4e/7e3c4ef6-daa7-cc10-57d0-45f5a562eaf5/18UMGIM22101.rgb.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/22/3e/ed/223eedeb-3ad1-2bd8-c863-ab6fb39d658a/093624920137.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music111/v4/2d/1c/4f/2d1c4fd7-018c-0529-693b-c67fea53b698/190295851286.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/22/4d/3b224dad-38e5-fee8-e067-a32e5837cf97/5099968084257.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/32/f0/0f/32f00f6b-742b-df31-326a-bd0e7dc2cd01/dj.glgqiokw.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/38/92/6b/38926bff-0818-1f21-020b-53a7c0b1cb4e/5099968084455.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5c/27/42/5c274283-679c-8458-8805-5bcaaf783014/06UMGIM55727.rgb.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/56/bc/52/56bc527c-14a5-4ece-aeb2-380deba46d5b/20UMGIM02954.rgb.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7b/5b/5c/7b5b5c45-fcdf-6a40-e445-074ff7a5bd84/192562841808.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/3e/65/f5/3e65f54a-e8ec-9f3d-d0d9-a3574208445d/190296846489.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/0b/01/40/0b014055-6f12-94f6-6be6-35bb27676253/mzi.tciowflu.jpg/400x400cc.jpg",
        "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/e0/23/1c/e0231cb0-1e67-a4c1-0a3c-c81f7cdb1292/5054526887824_1.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0e/17/f0/0e17f011-aadf-d4d1-1c7e-b61ce39f968b/093624947301.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/f9/e6/41/f9e641da-bdd8-9640-dabc-4f9e3e0eb7b5/22UMGIM95507.rgb.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/db/22/4e/db224ee0-b058-5d06-9a8c-fa10662bd58e/18UMGIM17205.rgb.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/72/a7/17/72a71723-417b-b0a1-15a2-cd34cb77a6b2/20UMGIM19033.rgb.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/f8/2d/fb/f82dfb61-b107-297a-d395-5511ebdd277c/dj.hrcgnvji.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/20/c5/70/20c570b7-11fb-6b8f-803c-1b49f1db53ed/cover.jpg/400x400cc.jpg",
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/03/df/c5/03dfc56e-7f08-1d60-a253-3dcdd7b7dd83/cover.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/f9/11/c8/f911c8ab-6cf7-2e7b-dc73-6d184e04b2ce/00600753400715.rgb.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c0/79/27/c07927a4-e5dc-e958-4e69-0465fcea933b/artwork.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/be/69/e7be6972-605c-8aa5-7078-b01da83ee3b0/artwork.jpg/400x400cc.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/af/f8/62aff82c-9196-eac6-c829-614f043ba09d/cover.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/9e/fe/76/9efe7647-2309-d312-c099-4ed20957b1a1/cover.jpg/400x400cc.jpg",
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/e3/20/03/e32003a4-99bc-1c70-40ba-001882f35dba/00602537526840.rgb.jpg/400x400cc.jpg",
        "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/c2/f2/78/c2f2783f-8e65-0b2b-80ac-b52c4cfece2d/16UMGIM35657.rgb.jpg/400x400cc.jpg",
    ]
)



//fisher-yates shuffle
function shuffle(array) {
    let tempArray = [...array]
    let currentIndex = tempArray.length
    let randomIndex

    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [tempArray[currentIndex], tempArray[randomIndex]] = [ tempArray[randomIndex], tempArray[currentIndex]];
    }
    let shortArray = tempArray.slice(0,20)
    setImages(shortArray)
       
  }
 


 useEffect(()=>{

    
    // const app = document.getElementById("app")
    let temp = 1
    let loaded = false

    shuffle(images)
    


    const handleScroll = ()=>{
        albumref.current.scrollLeft += (props.appRef.current.scrollTop-temp)*0.5
        temp = props.appRef.current.scrollTop
      }     
      handleScroll()
  
    

    const albumObserver = new IntersectionObserver(entries=>{
        let entry = entries[0]
        if(entry.isIntersecting){
            props.appRef.current.addEventListener("scroll",handleScroll)
            setTimeout(() => {
                
                if(!loaded){
                    albumref.current.scrollLeft = 0,
                    loaded = true
                    document.querySelectorAll("#cover").forEach(cover=>coverObserver.observe(cover))
                }

            }, 50);
        }
        
    },{threshold:0.1})
    albumObserver.observe(albumref.current)

    const coverObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.className = " opacity-100 z-10 ds:hover:scale-[105%] pointer-events-auto transition-all duration-300 ps:h-[8rem] tp:h-[15rem] shadow-lg rounded-[0.5rem]"
            }else{
                entry.target.className = " opacity-0 transition-all duration-300 ps:h-[6rem] tp:h-[13rem] shadow-lg rounded-[0.5rem]"
            }
        })
    },{threshold:0.1})

    



 },[])


  return (
        <div ref={albumref} id="albumcovers" className="ps:h-[20rem] tp:h-[40rem] dl:h-[60rem] relative flex items-center overflow-x-auto will-change-transform pointer-events-none">
            <div className="absolute flex items-center gap-[1rem] ">
             {images.map((image)=>{return <img key={image} id="cover" className="opacity-0 transition-all duration-300  ps:h-[6rem] tp:h-[13rem] shadow-lg rounded-[0.5rem]" src={image}></img>})}    
            </div>
                
        </div>
  )
})

export default Albumcovers