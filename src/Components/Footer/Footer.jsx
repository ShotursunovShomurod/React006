import React from "react";
import logo from "../assets/logo.png";
import ins from "../assets/ins.png";

const Footer = () => {
  return (
    <>
      <div id="Footer" className="bg-slate-100 py-[40px] mt-36">
        <div className="container mx-auto px-4">
          <div>
            <div className="mb-7">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-15 items-start md:items-end mt-7 space-y-10 md:space-y-0">
              <div className="md:w-1/4">
                <ul className="flex flex-col gap-6">
                  <li className="font-bold">Информация</li>
                  <li>
                    Все права защищены © 2015 интернет-магазин AIKEA.BY
                    Беларусь.
                  </li>
                  <li>
                    УНП 191828159 ИП Парейко В.С., регистрационный номер в
                    торговом реестре 158299{" "}
                  </li>
                  <li>Политика конфиденциальности</li>
                </ul>
              </div>
              <div className="md:w-1/4">
                <ul className="flex flex-col gap-5">
                  <li className="font-bold">Меню</li>
                  <li>Главная | Каталог | Товары в наличии</li>
                  <li>Скидки | Популярное | Вдохновение</li>
                  <li>Доставка | Услуги | Условия</li>
                  <li>Контакты | Вставить | Cписок покупок</li>
                  <li>Корзина | Личный кабинет | Избранное</li>
                </ul>
              </div>
              <div className="md:w-1/4">
                <ul className="flex flex-col gap-5">
                  <li className="font-bold">Контакты</li>
                  <li>г.Минск</li>
                  <li>Ул. Первомайская, Д. 1, Кв. 43</li>
                  <li>+ 375 434 847 28 84</li>
                  <li>+ 375 448 473 09 48</li>
                  <li>ikeaekspress@gmail.com</li>
                </ul>
              </div>
              <div className="md:w-1/4">
                <img src={ins} alt="" className="mx-auto md:mx-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
