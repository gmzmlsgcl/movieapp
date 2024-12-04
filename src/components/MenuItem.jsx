import Link from "next/link";
import React from "react";

function Menu({ mn }) {
  return <Link href={mn.url}>{mn.name}</Link>;
}

export default Menu;
