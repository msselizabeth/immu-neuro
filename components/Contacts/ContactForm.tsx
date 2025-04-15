"use client";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import styles from "./Contacts.module.css";
import emailjs from "@emailjs/browser";

interface FormData {
  fullName: string;
  email: string;
  tel: string;
  comment: string;
}

// const {
//   NEXT_PUBLIC_SERVICE_ID,
//   NEXT_PUBLIC_TEMPLATE_ID,
//   NEXT_PUBLIC_PUBLIC_KEY,
// } = process.env;

// if (
//   !NEXT_PUBLIC_PUBLIC_KEY ||
//   !NEXT_PUBLIC_SERVICE_ID ||
//   !NEXT_PUBLIC_TEMPLATE_ID
// ) {
//   alert(
//     "Щось пішло не так. Спробуйте перезавантажити сторінку та повторити спробу."
//   );
// }

export default function ContactForm() {
  const [consultationType, setConsultationType] = useState("Онлайн");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    tel: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage("Ім’я обов’язкове для заповнення.");
      return;
    }

    if (!formData.tel.trim()) {
      setErrorMessage("Номер телефону є обов’язковим.");
      return;
    }

  
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage("Не вдалося відправити форму. Спробуйте ще раз.");
        }
      );

    setErrorMessage("");
    setFormData({
      fullName: "",
      email: "",
      tel: "",
      comment: "",
    });
    setConsultationType("Онлайн");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="md:w-[60%] xl:w-[50%] m-auto">
      {isSubmitted ? (
        <div className={`text-center p-8 text-lg text-[#458FF6] rounded-3xl flex flex-col gap-4 mt-10`}>
          Дякуємо! Ваш запит прийнято. Очікуйте зв’язку з лікарем протягом 2
          годин.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`my-shadow p-6 rounded-3xl flex flex-col gap-4 mt-10`}>
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
                  consultationType === "Онлайн"
                    ? "bg-[#93C1F9]"
                    : "bg-[#F7F9FC]"
                }`}
                onClick={() => setConsultationType("Онлайн")}>
                Онлайн
              </button>
              <button
                type="button"
                className={`px-6 py-2 rounded-3xl font-medium transition-all duration-300 ${
                  consultationType === "Особисто"
                    ? "bg-[#93C1F9]"
                    : "bg-[#F7F9FC]"
                }`}
                onClick={() => setConsultationType("Особисто")}>
                Особисто
              </button>
            </div>
          </div>
          <input type="hidden" name="type" value={consultationType} />

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Ім’я та Прізвище"
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
          />

          <IMaskInput
            mask="+{38}(000)-000-00-00"
            lazy={false}
            unmask={true}
            name="tel"
            value={formData.tel}
            onAccept={(value: any) => {
              setFormData((prev) => ({
                ...prev,
                tel: value,
              }));
            }}
            inputMode="tel"
            placeholder="+38(099)-999-99-99"
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш email"
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-sm"
          />

          <input
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            type="text"
            placeholder="Коментар"
            className="w-full p-3 border rounded-3xl border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none text-sm resize-none"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-[#458FF6] text-white rounded-full font-semibold hover:bg-[#BA68C8] transition-all duration-300">
            Відправити
          </button>
        </form>
      )}
    </div>
  );
}
