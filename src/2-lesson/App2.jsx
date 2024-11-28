import { Component } from "react";
import "./style.css";
import Card from "./Card";

const App2 = () =>{
    return(
       <div className="main-wrapper">
        <Card img="https://wallpapers.com/images/hd/floral-arrangement-2560-x-1600-wallpaper-m2sv41lu3ywg2bb2.jpg"
              />
        <Card img={"https://get.wallhere.com/photo/russell-lisianthus-roses-freesia-decoration-flower-purple-decor-645083.jpg"  }/>
        <Card img=
        {"https://cvety-nadym.ru/assets/images/products/836/img-20210415-145835-510.jpg" }/>
        <Card img={"https://cyber-flora.ru/wa-data/public/shop/products/53/07/753/images/2759/2759.970.jpg"} />
         {/* <div className="flower_card">
        <div className="flower-wrapper">
            <img 
            className="flower-img"
            src={
                "https://wallpapers.com/images/hd/floral-arrangement-2560-x-1600-wallpaper-m2sv41lu3ywg2bb2.jpg"}
            alt="Flower-name" />
        </div>
        <div className="detail-wrapper">
                <h3>Flower Name:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
    </div>

    <div className="flower_card">
        <div className="flower-wrapper">
            
            <img 
            className="flower-img"
            src={
                "https://wallpapers.com/images/hd/floral-arrangement-2560-x-1600-wallpaper-m2sv41lu3ywg2bb2.jpg"}
            alt="Flower-name" />
        </div>
        <div className="detail-wrapper">
                <h3>Flower Name:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
    </div>

    <div className="flower_card">
        <div className="flower-wrapper">
            
            <img 
            className="flower-img"
            src={
                "https://wallpapers.com/images/hd/floral-arrangement-2560-x-1600-wallpaper-m2sv41lu3ywg2bb2.jpg"}
            alt="Flower-name" />
        </div>
        <div className="detail-wrapper">
                <h3>Flower Name:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
    </div> */}
       </div>
    ) 
};


export default App2;