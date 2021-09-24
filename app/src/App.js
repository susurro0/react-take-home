import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }
  console.log(data.campaigns);
  return (
    <div>
      <HomeScreen data={DUMMY_DATA} />
    </div>
  );
}

export default App;

const DUMMY_DATA = [
  {
    id: 1,
    campaign_name: "Tiktok",
    campaign_icon_url:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/11/d7/70/11d770fa-14d6-e6ee-b118-c273bcf91906/AppIcon_TikTok-1x_U007emarketing-85-220-0-5.png/230x0w.jpg",
    pay_per_install: "19.8",
    medias: [
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F44f871ab-a7de-4bcc-9ecf-4ecadbc5bc83.png?alt=media&token=ea854bfa-5fb7-4b23-b85c-312ae9860338",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F44f871ab-a7de-4bcc-9ecf-4ecadbc5bc83.mp4?alt=media&token=9580e0d2-f07e-4c78-bcab-d1b26d2c525a",
        tracking_link: "www.plugco.in/tiktok/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F1403e07a-24f0-4fef-9022-ffc433b0e767.png?alt=media&token=cf325104-5736-41e9-b79d-08644f79da8b",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F1403e07a-24f0-4fef-9022-ffc433b0e767.mp4?alt=media&token=e11aa682-482e-45f5-875e-06c60da8f04b",
        tracking_link: "www.plugco.in/tiktok/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F47766c1f-e280-428f-a22d-e9cf8765e259.png?alt=media&token=ae393f4e-ca3f-42d7-aa55-25f3285d73c5",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F47766c1f-e280-428f-a22d-e9cf8765e259.mp4?alt=media&token=3adb2011-a671-4ff0-9230-3d6c3b16ad97",
        tracking_link: "www.plugco.in/tiktok/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F5868ea0f-abd2-495b-a8bc-cf169d547d13.png?alt=media&token=46347dca-1a68-41dc-8d0c-2fcffd8bb9ed",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F5868ea0f-abd2-495b-a8bc-cf169d547d13.mp4?alt=media&token=ea11ceef-371d-4e30-b7df-7694e63bd69f",
        tracking_link: "www.plugco.in/tiktok/2",
        media_type: "video",
      },
    ],
  },
  {
    id: 2,
    campaign_name: "Yarn",
    campaign_icon_url:
      "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/17/77/65/17776586-c576-6a59-ede3-15790fe01d02/source/512x512bb.jpg",
    pay_per_install: "22.1",
    medias: [
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fd7615446-66f7-49be-b495-0c5f59153553.png?alt=media&token=08feaad6-eb0f-451c-820a-e3f9b0f78f89",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fd7615446-66f7-49be-b495-0c5f59153553.mp4?alt=media&token=bf3b8bdd-6715-4c59-8925-e7a13fcb9218",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fdf36a0cb-14c6-4cc2-a6d8-5797353ad7b6.png?alt=media&token=00429e77-9062-47ca-a3b9-ff604eda9a0a",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fdf36a0cb-14c6-4cc2-a6d8-5797353ad7b6.mp4?alt=media&token=2c22b307-49ba-4b21-aab9-52e95681e987",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fe41949f2-cd48-41db-9645-559a60f9092c.png?alt=media&token=43d4b8c8-eed6-4f4b-a438-7bacda80574e",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fe41949f2-cd48-41db-9645-559a60f9092c.mp4?alt=media&token=6a920bca-4d55-4fdf-bd27-8af7b461415a",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
    ],
  },
  {
    id: 3,
    campaign_name: "muhahaha",
    campaign_icon_url:
      "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/17/77/65/17776586-c576-6a59-ede3-15790fe01d02/source/512x512bb.jpg",
    pay_per_install: "22.1",
    medias: [
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fd7615446-66f7-49be-b495-0c5f59153553.png?alt=media&token=08feaad6-eb0f-451c-820a-e3f9b0f78f89",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fd7615446-66f7-49be-b495-0c5f59153553.mp4?alt=media&token=bf3b8bdd-6715-4c59-8925-e7a13fcb9218",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fdf36a0cb-14c6-4cc2-a6d8-5797353ad7b6.png?alt=media&token=00429e77-9062-47ca-a3b9-ff604eda9a0a",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fdf36a0cb-14c6-4cc2-a6d8-5797353ad7b6.mp4?alt=media&token=2c22b307-49ba-4b21-aab9-52e95681e987",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
      {
        cover_photo_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fe41949f2-cd48-41db-9645-559a60f9092c.png?alt=media&token=43d4b8c8-eed6-4f4b-a438-7bacda80574e",
        download_url:
          "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/yarn2%2Fe41949f2-cd48-41db-9645-559a60f9092c.mp4?alt=media&token=6a920bca-4d55-4fdf-bd27-8af7b461415a",
        tracking_link: "www.plugco.in/yarn2/2",
        media_type: "video",
      },
    ],
  },
];

