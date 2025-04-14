import ContactForm from "./ContactForm";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className="w-full max-w-[100rem] m-auto pt-15 pb-15" id="contacts">
      <div className="md:w-3xl xl:w-7xl m-auto ">
        <h2 className="font-extrabold text-3xl">Контактна інформація</h2>
        <div className="xl:flex">
          <div
            className={`${styles.contacts} w-[50%] p-25 flex flex-col gap-4 mt-15`}>
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
            <p>
              або заповніть форму нижче та лікар самостійно з вами звʼяжеться.
            </p>
                  </div>
                  
              <ContactForm />
        </div>
      </div>
    </section>
  );
}
