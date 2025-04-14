import ContactForm from "./ContactForm";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section
      className="pl-4 pr-4 pt-7 pb-7 w-full max-w-[100rem] m-auto xl:pt-15 xl:pb-15"
      id="contacts">
      <div className="w-full xl:w-7xl m-auto ">
        <h2 className="font-extrabold text-2xl xl:text-3xl md:pl-3">
          Контактна інформація
        </h2>
        <div className="xl:flex">
          <div
            className={`${styles.contacts} p-10 md:p-14 xl:p-25 md:w-[70%] flex flex-col m-auto gap-4.5 mt-4 xl:mt-15 text-sm md:text-base`}>
            <p className="font-bold">Адреса: м.Одеса, вул. Успенська 34</p>
            <p>
              Години прийому:
              <span className="block font-bold">
                Пн, Ср, Чт – з 09.00 по 18.00
              </span>
              <span className="block font-bold"> Вт, Пт – з 9.00 по 14.00</span>
            </p>
            <p>
              Для запису на приойом:
              <span className="block font-bold">+38(063)-490-30-54</span>
            </p>
            <p>або заповніть форму та лікар самостійно з вами звʼяжеться.</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
