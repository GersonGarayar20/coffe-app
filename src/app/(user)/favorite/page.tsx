'use client'
import CardFavorite from "@/components/CardFavorite";
import Navbar from "@/components/UserNavbar";
import useFavorite from "@/hooks/useFavorite";
import { MenuI } from "@/lib/definitions";
import Link from "next/link";

function Favorite() {

  const { favorite, removeToFavorite } = useFavorite()

  const handleclickRemove = (menu: MenuI) => {
    if (menu != undefined) {
      removeToFavorite(menu)
    }
  }

  console.log(favorite)
  return (<div className="w-full  bg-black py-4">
    <div className=" flex justify-center items-center text-center relative mb-8">
      <Link
        href="/home"
        className="w-8 absolute left-0 rounded-full aspect-square bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
        </svg>
      </Link>
      <h2 className="text-orange-500 text-xl">Favorite</h2>
    </div>
    <div className="flex flex-col gap-4">
      {
        favorite?.map((item: MenuI) => (<CardFavorite key={item.id_menu} menu={item} handleclickRemove={handleclickRemove} />))
      }
    </div>
    <Navbar />
  </div>);


}

export default Favorite;