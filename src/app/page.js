"use client"
import SideBar from "@/components/SideBar";
import './globals.css';
import { useEffect, useState } from "react";
import useDeviceSize from "@/hooks/window";
import dynamic from "next/dynamic";

const CardDiscussion = dynamic(()=> import("@/components/CardDiscussion"), {ssr: false});
const CardMStories = dynamic(()=> import("@/components/CardMStories"), {ssr: false});

export default function Home() {

  const [toggle, setToggle] = useState(false);
  const [width] = useDeviceSize();
  const [disContainer, setDisContainer] = useState(true);
  const [markContainer, setMarContainer] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  }

  const handleMarContainer = () => {
    if (width < 640) {
      setDisContainer(false);
      setMarContainer(true);
    } else {
      setMarContainer(false);
    }
  }

  const handleDisContainer = () => {
    if (width < 640) {
      setDisContainer(true);
      setMarContainer(false);
    } else {
      setDisContainer(false);
    }
  }

  useEffect(() => {
    // es
  }, [width])

  return (
    <main>
      <SideBar toggle={toggle} handleClick={handleToggle} />
      <div className={`headings ps-1 ${toggle ? "lg:ps-72" : ""}`}>
        <h1 className="md:text-2xl sm:text-lg sm:w-full bg-slate-200 ps-9 md:ps-0 md:ms-9 px-2 mt-1 py-3 md:w-fit" >
          <button disabled={width<640? false: true} onClick={handleDisContainer}>Disscussion Forum</button>
        </h1>
        <h1 className="md:text-2xl sm:text-lg sm:w-full bg-slate-200 py-3 px-2 mt-1 md:w-fit">
          <button disabled={width<640? false: true} onClick={handleMarContainer}>Market Stories</button>
        </h1>
      </div>
      <section className={`mainSection md:ms-9 ps-1 ${toggle ? "lg:ps-72" : ""}`}>
        <div className="disscussionContainer">
          {
            width < 640 && disContainer &&
            <div className="cards">
              <CardDiscussion />
              <CardDiscussion />
              <CardDiscussion />
              <CardDiscussion />
            </div>
          }
          {
            width >= 640 &&
            <div className="cards">
              <CardDiscussion />
              <CardDiscussion />
              <CardDiscussion />
              <CardDiscussion />
              <CardDiscussion />
            </div>
          }
        </div>
        <div className="marketStoriesContainer mr-1">
          {
            width < 640 && markContainer &&
            <div>
              <CardMStories />
              <CardMStories />
              <CardMStories />
            </div>
          }
          {
            width >= 640 &&
            <div>
              <CardMStories />
              <CardMStories />
              <CardMStories />
            </div>
          }
        </div>
      </section>
    </main>
  );
}
