import React from "react";
import logoWhitePath from "../img/logo-white.svg";
import { PetsPath } from "../img/icons/icons";

function Footer(): JSX.Element {
  return (
    <footer className="flex-col-center relative h-80 bg-primary_A11y text-white">
      <div className="flex w-1/2 items-center">
        <img src={logoWhitePath} alt="logo" />
        <p className="ml-10">
          寵物坊城市提供您的毛小孩最適合的住宿照顧服務，以最安心的篩選服務，讓飼主放心為宗旨，讓忙於工作或外出的飼主不用擔心毛小孩到陌生環境而緊張。
        </p>
      </div>
      <ul className="absolute bottom-6 flex text-sm">
        <li>© 2022 Pet City, Inc.版權所有</li>
        <li className="px-6">|</li>
        <li>隱私</li>
        <li className="px-6">|</li>
        <li>相關條款</li>
      </ul>
      <img
        src={PetsPath}
        alt="pets icon"
        className="absolute bottom-9 right-10"
      />
    </footer>
  );
}

export default Footer;