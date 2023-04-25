import React from "react";
import './Footer.css'

const Footer = () =>(
    <footer >
        <div class="container">
          <div class="grid grid-col-2 footer">
            <div class="copyright">
              <span>© 2023 Компьютерный клуб «Zasada»</span>
              <div>Бубенца 20/1, Пугачев</div>
            </div>
            <div class="contact">
              <address class="contact-address">
                <span>Группа </span>
                <a href="https://vk.com/zasada_pugachev">ВКонтакте</a>
              </address>
              <div class="contact-telephone">
                +7-937-240-45-93</div>
            </div>
          </div>
        </div>
      </footer>
);

export default Footer;