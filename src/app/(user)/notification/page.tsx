import Navbar from "@/components/UserNavbar";
import Link from "next/link";

function Notification() {
  return (
    <div className="w-full min-h-screen bg-black py-4 flex ">
      <Navbar />
      <div className="p-4 grow">
        <div className=" flex justify-center items-center text-center relative mb-8">
          <Link
            href="/home"
            className="w-8 absolute left-0 rounded-full aspect-square bg-white sm:hidden"
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
          <h2 className="text-orange-500 text-xl">Notificaciones</h2>
        </div>
        <div className="w-full  text-sm  bg-slate-700 text-white p-4 rounded-lg">
          No hay notificaciones 😎
        </div>
      </div>
      
    </div>
  );
}

export default Notification;
