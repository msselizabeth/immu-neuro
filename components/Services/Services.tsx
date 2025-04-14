import Image from "next/image";
import styles from "./Services.module.css";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      className={`${styles.services} relative pl-4 pr-4 pt-7 pb-7 w-full max-w-[100rem] m-auto xo:pt-15 xl:pb-15`} id="services">
      
      <div className={`w-full xl:w-7xl m-auto`}>
      <h2 className="font-extrabold text-2xl xl:text-3xl text-center">Послуги</h2>
        <ul className="flex flex-wrap gap-5 xl:gap-10 items-start mt-10">
          {services.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles.item} relative p-7 z-100 bg-white rounded-3xl `}>
                <div className="flex gap-2 items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={70}
                    height={70}
                    className={styles.icon}
                  />
                  <h3 className="font-bold text-base xl:text-xl">{item.title}</h3>
                </div>
                <input
                  type="checkbox"
                  id={`toggle-${index}`}
                  className="peer hidden"
                />

                <div className="max-h-[4.5rem] xl:max-h-[4.85rem] inline-block overflow-hidden peer-checked:max-h-[600px] transition-all duration-300 text-slate-400 text-sm xl:text-base p-2">
                  <p>{item.description}</p>
                  {item.benefits.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-bold">Терапевтичні ефекти:</h4>
                      <ul>
                        {item.benefits.map((b: string, i: number) => (
                          <li key={i} className="pl-3">
                            {`- ${b}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.indications.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-bold">Показання:</h4>
                      <ul>
                        {item.indications.map((d: string, i: number) => (
                          <li key={i} className="pl-3">
                            {`- ${d}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.warnings.length > 0 && (
                    <div className="mt-2 text-red-400">
                      <h4 className="font-bold text-red-700">Протипоказання:</h4>
                      <ul>
                        {item.warnings.map((w: string, i: number) => (
                          <li key={i} className="pl-3">
                            {`- ${w}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <label
                  htmlFor={`toggle-${index}`}
                  className="text-[#458FF6] cursor-pointer font-semibold block peer-checked:hidden hover:text-[#BA68C8] transition-all duration-300">
                  ...читати більше
                </label>
                <label
                  htmlFor={`toggle-${index}`}
                  className="text-[#BA68C8] cursor-pointer font-semibold hidden peer-checked:block hover:text-[#458FF6] transition-all duration-300">
                  Згорнути назад
                </label>

                <p className="text-sm xl:text-base font-bold mt-2">Тривалість: {item.duration}</p>
                <p className="text-sm xl:text-base font-bold mt-2">Ціна: {item.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
