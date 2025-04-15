"use client";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import styles from "./Contacts.module.css";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";

interface FormData {
  fullName: string;
  email: string;
  tel: string;
  comment: string;
}

export default function ContactForm() {
  const [consultationType, setConsultationType] = useState("Онлайн");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !key) {
      alert(
        "Щось пішло не так. Спробуйте перезавантажити сторінку та повторити спробу."
      );
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(serviceId, templateId || "", e.currentTarget, {
        publicKey: key,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setIsLoading(false)
          
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
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
        <div
          className={`text-center p-8 text-lg text-[#458FF6] rounded-3xl flex flex-col gap-4 mt-10`}>
             <div className="flex justify-center items-center w-15 h-15 rounded-[50%] border-2 m-auto">
                <img src="/check-icon.svg" alt="" className="block w-10 h-10"/>
              </div>
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
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-base"
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
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-base"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш email"
            className="w-full p-3 border border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none rounded-3xl text-base"
          />

          <input
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            type="text"
            placeholder="Коментар"
            className="w-full p-3 border rounded-3xl border-[#97C3F9] active:border-[#BA68C8] focus:border-[#BA68C8] outline-none text-base resize-none"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          {isLoading ? (
              <p className="flex items-center justify-center gap-2 text-[#BA68C8] p-3"><ClipLoader size={20} color="#BA68C8"/> Ваш запит оброблюється...</p>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-[#458FF6] text-white rounded-full font-semibold hover:bg-[#BA68C8] transition-all duration-300">
              Відправити
            </button>
          )}
        </form>
      )}
    </div>
  );
}
