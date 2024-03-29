"use client";

import CarMenuCart from "@/components/Cart/CardMenuCart";
import useCart from "@/hooks/useCart";
import { addOrder } from "@/lib/data";
import Modal from "./modal";

export default function Cart() {
  const { cart } = useCart();

  let totalPrice;
  let subtotal = 0;

  if (cart.length > 0) {
    subtotal = 0;
    totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price) * currentItem.quantity;
    }, 0);
  }

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8">
        <article className="flex flex-col gap-3">
          <h1 className="text-neutral-200 text-2xl">Carrito de Compras</h1>
          <ul className="flex flex-col gap-3">
            {cart.length > 0 ? (
              cart.map((menu) => <CarMenuCart key={menu.id_menu} menu={menu} />)
            ) : (
              <p className="text-neutral-400">No hay compras todavia.</p>
            )}
          </ul>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="text-neutral-200 text-2xl">Resumen</h2>
          <div className="flex justify-between text-neutral-300">
            <h3>Subtotal</h3>
            <span>S/{totalPrice || 0}</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <h3>Delivery Charge</h3>
            <span>S/{subtotal}</span>
          </div>
          <div className="flex justify-between border-y py-4 border-neutral-800 text-neutral-300">
            <h3>Total</h3>
            <span>S/{totalPrice || 0}</span>
          </div>
          <div className="py-3">
            <Modal />
          </div>
        </article>
      </section>
    </>
  );
}
