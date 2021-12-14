import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./login.css";
import eParent from "../public/assets/eParents.png";
import eSchool from "../public/assets/eshool.png";
import arta from "../public/assets/arta.png";

const Login = () => {
  useEffect(() => {}, []);
  return (
    <body>
      <div class="center">
        <h1>
          <img src={eParent} alt="" width="40%" />
        </h1>
        <div class="text">
          <strong>Сайн байна уу?</strong>
          <br></br>
          Нэвтрэх бол дараах хэсэгт мэдээллээ оруулна уу!
        </div>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <label>Эцэг/Эх-н Имэйл хаяг</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <label>Нууц үг</label>
          </div>
          <div class="error">Нууц үг 8 тэмдэгтээс урт байх ёстой!</div>
          <div class="pass">Нууц үг Мартсан?</div>
          <input type="submit" value="Нэвтрэх" />
          {/* <!-- <input type="submit" value="Нэвтрэх" /> --> */}
          <div class="signup_link">
            Та бүртгэлгүй бол бүртгүүлэх товчыг дарна уу!
            <a href="signup.html">Бүртгүүлэх</a>
          </div>
        </form>
      </div>

      <div class="footer">
        <h1 class="logo">
          <img src={eSchool} />
          <img src={arta} />
        </h1>
        <h2 class="logoText">
          <p>eSchool + Arta Systems хамтран бүтээв. ICT Group JSC</p>
        </h2>
      </div>
    </body>
  );
};
export default Login;
