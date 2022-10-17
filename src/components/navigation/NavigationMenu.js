import React from "react";
import NavigationMenuElement from "./NavigationMenuElement";

function NavigationMenu() {
  return (
    <div className="navigationMenuContainer">
      <NavigationMenuElement
        props={{
          name: "NOTIFICATIONS",
          counter: 23,
          image: {
            normal: "/icons/notification-colored.png",
            chose: "/icons/notification-white.png",
          },
        }}
      ></NavigationMenuElement>
      <NavigationMenuElement
        props={{
          name: "SUMMARY",
          image: {
            normal: "/icons/notification-colored.png",
            chose: "/icons/notification-white.png",
          },
          altMenu:[{name:"empty",link:"/"}]
        }}
      ></NavigationMenuElement>
      <NavigationMenuElement
        props={{
          name: "PUBLISH",
          image: {
            normal: "/icons/publish-colored.png",
            chose: "/icons/publish-white.png",
          },
          altMenu:[
            {name:"Compose",link:"/"},
            {name:"Feed",link:"/publish/feed"}
          ]
        }}
      ></NavigationMenuElement>
            <NavigationMenuElement
        props={{
          name: "ENAGE",
          image: {
            normal: "/icons/notification-colored.png",
            chose: "/icons/notification-white.png",
          },
          altMenu:[{name:"empty",link:"/"}]
        }}
      ></NavigationMenuElement>
            <NavigationMenuElement
        props={{
          name: "LISTEN",
          image: {
            normal: "/icons/notification-colored.png",
            chose: "/icons/notification-white.png",
          },
          altMenu:[{name:"empty",link:"/"}]
        }}
      ></NavigationMenuElement>
            <NavigationMenuElement
        props={{
          name: "REPORT",
          image: {
            normal: "/icons/notification-colored.png",
            chose: "/icons/notification-white.png",
          },
          altMenu:[{name:"empty",link:"/"}]
        }}
      ></NavigationMenuElement>
    </div>
  );
}

export default NavigationMenu;
