import React from "react";
import Mainmenu from "./main/Mainmenu";
import Footermenu from "./main/Footermenu";

import Speaker_c from "./page_component/Speaker_c";
import Speaker_c2 from "./page_component/Speaker_c2";
import Page_header from "./page_component/Page_header";

export default function Speakers() {
  return (
    <>
      <Mainmenu />

    <Page_header/>

      <Speaker_c />
      <Speaker_c2 />
      <Footermenu />
    </>
  );
}
