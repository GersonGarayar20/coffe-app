"use client";
import React from "react";
import { useCounter } from "../../global/CounterContext";
import useCart from "@/hooks/useCart";
import { MenuI } from "@/lib/definitions";
import toast, { Toaster } from "react-hot-toast";

export default function ButtonAddCart({ menu }: { menu: MenuI }) {
  const { counter, reset } = useCounter();
  const { addToCart } = useCart();

  const handleclick = () => {
    if (menu) {
      addToCart(menu, counter);
      reset();
      toast.success(`${counter} ${menu.name} añadido/a al carrito.`);
    }
  };

  return (
    <button
      onClick={handleclick}
      className="text-fourth bg-second rounded-lg py-3 text-center grow"
    >
      Agregar a carrito
      <Toaster />
    </button>
  );
}
