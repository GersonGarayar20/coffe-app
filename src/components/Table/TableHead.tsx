import React from "react";

export default function TableHead({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <th className="py-2 px-4 text-start text-orange-800">{children}</th>;
}
