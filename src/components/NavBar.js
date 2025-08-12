import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const colorDisplay = links.map((links) => {
  return <a key = {links} href={`#${links}`}>{links}</a>
  })

  return <nav>{colorDisplay}</nav>;
}

export default NavBar;
