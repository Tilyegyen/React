import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./home.css";
const Login = () => {
  useEffect(() => {
    let menuToggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    menuToggle.onclick = function () {
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    };

    const list = document.querySelectorAll(".list");
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }
  }, []);
  return (
    <body>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>
      <div class="navigation">
        <ul>
          <li class="list active">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Profile</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Messages</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span class="title">Settings</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Help</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Pasword</span>
            </a>
          </li>
          <li class="list">
            <b></b>
            <b></b>
            <a href="#">
              <span class="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="toggle">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </div>
    </body>
  );
};
export default Login;
