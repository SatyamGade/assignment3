import Link from "next/link";
import '../styles/sidebar.css'
import { FaRegUser } from "react-icons/fa6";
import { RiNotification3Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { TbClockDollar } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const SideBar = ({toggle, handleClick}) => {

    return (
        <section className={`sidebar ${toggle ? "active block":""}`}>
            <div className={`sidebarProfile`}>
                <FaRegUser className="h-12 w-5" />
                <h2 className="ml-2">Hello, User</h2>
                <RiNotification3Line className="ml-auto h-11 w-6" />
            </div>
            <div className="sidebarLinks">
                <div className="link">
                    <li>
                        <Link href={"/"} className="flex items-center">
                            <BsChatSquareText />
                            <p className="ml-2">Disscussion Forum</p>
                            <FaAngleDown className="ml-auto" />
                        </Link>
                    </li>
                </div>
                <div className="link">
                    <li>
                        <Link href={"/"} className="flex items-center">
                            <TbClockDollar />
                            <p className="ml-2">Market Stories</p>
                            <FaAngleDown className="ml-auto" />
                        </Link>
                    </li>
                </div>
                <LinkItems title={"Sentiment"} link={"/"}/>
                <LinkItems title={"Market"} link={"/"}/>
                <LinkItems title={"Watchlist"} link={"/"}/>
                <LinkItems title={"Events"} link={"/"}/>
                <LinkItems title={"News/Interview"} link={"/"}/>
            </div>
            <button className="sidebarArrow" onClick={(e)=> handleClick(e)}><IoIosArrowForward/></button>
        </section>
    )
}

// link items
const LinkItems = ({ title, Icon, link }) => (
    <div className="ml-6 link">
        <li>
            <Link href={link} className="flex">
                {/* Icon */}
                <p>{title}</p>
                {/* <FaAngleDown className="ml-auto" /> */}
            </Link>
        </li>
    </div>
)


export default SideBar
