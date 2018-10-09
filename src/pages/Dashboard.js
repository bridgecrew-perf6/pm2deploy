import React from "react";
import LazyImage from "../components/LazyImage/LazyImage";

const images = [
  "https://cdn.shibe.online/shibes/85636340081994a5954980fab8491bf61ebe1092.jpg",
  "https://cdn.shibe.online/shibes/f7afe1f5d69f7a4eab654b5f87a8c498fb7ef8ad.jpg",
  "https://cdn.shibe.online/shibes/6322edf0ea8c945322e0d88ad2772b5eca784735.jpg",
  "https://cdn.shibe.online/shibes/d4b763f0dc73e3599ffd5f7872b499272eaff42d.jpg",
  "https://cdn.shibe.online/shibes/155da6af33389a2c40ff4d13f8bfcb57b8578e4b.jpg",
  "https://cdn.shibe.online/shibes/8e668bbd026092a4af795641882dcebb0ef355df.jpg",
  "https://cdn.shibe.online/shibes/358ae06ccf7181a4e70169051744e0b927fc0536.jpg",
  "https://cdn.shibe.online/shibes/391b081bc12f8771fb6710fd50101de43a21b780.jpg",
  "https://cdn.shibe.online/shibes/a1ee51110bbbd3aed04fc2723dfc728551fd953f.jpg",
  "https://cdn.shibe.online/shibes/f5215b1f176c6bb6f53457efccccffcc69a41ec1.jpg"
];

const Dashboard = () => (
  <div>
    Dashboard
    <div>
      {images.map(image => (
        <div key={images}>
          <LazyImage src={image} />
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
