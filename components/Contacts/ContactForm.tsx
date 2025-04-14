"use client";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import styles from "./Contacts.module.css";

export default function ContactForm() {
  const [consultationType, setConsultationType] = useState("Онлайн");

  return (
    <form
      className={`${styles.form} md:w-[60%] xl:w-[50%] m-auto p-6 rounded-3xl flex flex-col gap-4 mt-10`}>
      <h2 className="text-xl font-semibold text-[#458FF6]">
        Заповніть цю форму та лікар з вами сам зв’яжеться
      </h2>

      <div>
        <label className="block font-medium mb-2">
          Оберіть тип консультації
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            className={`px-6 py-2 rounded-3xl font-medium transition-all duration-300 ${
              consultationType === "Онлайн" ? "bg-[#93C1F9]" : "bg-[#F7F9FC]"
            }`}
            onClick={() => setConsultationType("Онлайн")}>
            Онлайн
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-3xl font-medium transition-all duration-300 ${
              consultationType === "Особисто" ? "bg-[#93C1F9]" : "bg-[#F7F9FC]"
            }`}
            onClick={() => setConsultationType("Особисто")}>
            Особисто
          </button>
        </div>
      </div>

      <input
        type="text"
        required
        placeholder="Ім’я та Прізвище"
        className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
      />

      {/* <input
        type="tel"
        required
        placeholder="Номер телефона"
        className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
      /> */}

      <IMaskInput
        mask="+{38}(000)-000-00-00"
        lazy={false}
        unmask={true}
        inputMode="tel"
        placeholder="+38(099)-999-99-99"
        className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
        required
      />
      <input
        type="email"
        placeholder="Ваш email"
        className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
      />

      <textarea
        placeholder="Коментар"
        rows={3}
        className="w-full p-3 border rounded-3xl border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none text-sm resize-none"
      />

      <button
        type="submit"
        className="w-full py-3 bg-[#458FF6] text-white rounded-full font-semibold hover:bg-[#BA68C8] transition-all duration-300">
        Відправити
      </button>
    </form>
  );
}
