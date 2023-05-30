import React from "react";
import "../styles/Banner.css";

const Banner: React.FC = () => {
  
  const inWaitingRoomBanner: string[] = [
    "控え室で",
    "野球をしては",
    "いけません！"
  ];

  const inDressRoomBanner: string[] = [
    "ここで",
    "野球をしては",
    "いけません！！"
  ];

  const inStretchRoomBanner: string[] = [
    "ここで",
    "野球ダメ",
    "ゼッタイ！"
  ]

  const bannerVariations: string[][] = [
    inWaitingRoomBanner,
    inDressRoomBanner,
    inStretchRoomBanner
  ];

  const lines: string[] = bannerVariations[Math.floor(Math.random() * bannerVariations.length)];

  return (
    <>
      <div className="banner">
        {lines.map((line: string, i: number) => {
          return (
            <p key={i} className="banner-line">
              {line}<br />
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Banner;
