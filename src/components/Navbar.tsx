import Link from "next/link";
import React, { useState } from "react";
import { useSesion } from "@/global/sesion";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import Bars from "./icons/Bars";

const links = [
  {
    label: "Menus",
    route: "/admin/menus",
  },
  {
    label: "Categorias",
    route: "/admin/categories",
  },
  {
    label: "Ordenes",
    route: "/admin/orders",
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { cerrarSesion } = useSesion();

  const pathname = usePathname();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        className="md:hidden absolute right-4 top-2 z-50 p-2 text-orange-200"
        onClick={handleClick}
      >
        <Bars />
      </button>
      <aside className="md:flex flex-col hidden h-screen py-8 px-4 w-60">
        <header className="py-8">
          <Link className="text-orange-200 text-2xl font-bold" href={"/admin"}>
            Coffe App
          </Link>
        </header>
        <nav className="flex flex-col flex-1">
          {links.map(({ label, route }) => (
            <Link
              key={route}
              className={`p-2 rounded hover:text-orange-800 hover:bg-orange-300 ${
                pathname === route
                  ? "bg-orange-300 text-orange-800"
                  : "text-orange-300"
              }`}
              href={route}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button onClick={() => cerrarSesion()}>Cerrar sesion</Button>
      </aside>
      {isVisible && (
        <div className="fixed inset-0 z-30 overflow-hidden">
          <div
            className="absolute inset-0 z-10 bg-black/50 "
            onClick={handleClick}
          ></div>
          <aside className="bg-neutral-950 absolute bottom-0 z-40 w-full rounded-t-3xl fadeIn flex flex-col gap-8 px-8 py-16">
            <header className="">
              <Link
                className="text-orange-200 text-2xl font-bold"
                href={"/admin"}
                onClick={handleClick}
              >
                Coffe App
              </Link>
            </header>
            <nav className="flex flex-col flex-1">
              {links.map(({ label, route }) => (
                <Link
                  key={route}
                  className={` p-4  rounded hover:bg-orange-200 hover:text-orange-700 ${
                    pathname === route
                      ? "bg-orange-200 text-orange-700"
                      : "text-orange-300"
                  }`}
                  href={route}
                  onClick={handleClick}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Button onClick={() => cerrarSesion()}>Cerrar sesion</Button>
          </aside>
        </div>
      )}
    </>
  );
}
