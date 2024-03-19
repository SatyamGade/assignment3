import Image from "next/image"
import tempImg from "../../public/tempImg.jpg";
import '../styles/cardMStories.css';


const CardMStories = () => {
  return (
    <div className="sideCard">
      <div><Image src={tempImg} height={0} width={0} alt="img" style={{height: "150px", width: "100%"}}/></div>
      <div className="sideCardText">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis porro eaque corporis quo harum modi dicta velit repellat, beatae ipsum maiores?</p>
      </div>
    </div>
  )
}

export default CardMStories
