import Image from "next/image"
import userPng from '../../public/userPng.jpeg';
import { FaRegHeart, FaRegEye, FaRegCommentAlt } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import '../styles/cardDiscussion.css'

const CardDiscussion = () => {
  return (
    <div className="cardComponent">
      <div className="imgDiv">
        <Image src={userPng} className="img" alt="user png"/>
      </div>
      <div className="cardDescription">
        <div className="cardHead">
            <h2 className="font-medium mr-3">Lorem Ipsum</h2>
            <button className="bg-indigo-600 py-0.5 px-3 text-white	rounded-lg">Sector</button>
        </div>
        <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit cumque veniam iure doloribus saepe reiciendis soluta consequatur nobis iste. Aliquam fugit earum itaque repellendus impedit necessitatibus facere fuga officia!</p>
        <div className="cardIcons">
            <span className="flex items-center"><FaRegHeart className="mr-1"/> {Math.floor((Math.random() * 100) + 1)}</span>
            <span className="flex items-center"><FaRegEye className="mr-1"/> {Math.floor((Math.random() * 100) + 1)}</span>
            <span className="flex items-center"><FaRegCommentAlt className="mr-1"/> {Math.floor((Math.random() * 100) + 1)}</span>
            <span className="flex items-center"><LuShare2 className="mr-1"/> {Math.floor((Math.random() * 100) + 1)}</span>
        </div>
      </div>
    </div>
  )
}

export default CardDiscussion
