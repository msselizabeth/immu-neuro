import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={`${styles.hero} relative pl-4 pr-4 pt-7 pb-7 w-full max-w-[100rem] m-auto xo:pt-15 xl:pb-15`}>
      <div className="w-full xl:w-7xl m-auto">
        <h1 className="text-[1.2rem] md:text-[1.45rem] xl:text-[2.1rem] xl:leading-[3.25rem] md:max-w-[650px] xl:max-w-[770px] pl-10 md:pl-12 xl:pl-21">
          <span className="text-[#458FF6] font-extrabold">
            <span className="text-[#97C3F9]">Імму</span>Нейро
          </span> 
          {` - кваліфікована допомога від досвідченого невролога.`}
        </h1>

        <div className={`my-shadow mt-4 md:ml-10 xl:ml-21 xl:mt-10 md:max-w-[430px] xl:max-w-[650px] rounded-3xl `}>
          <ul className="p-4 md:p-5 xl:p-8 flex flex-col gap-5">
            <li className={`${styles.item} relative pl-[2rem] md:pl-[2.15rem] xl:pl-[3rem]`}>
              <h2 className="text-sm md:text-[15px] font-bold xl:text-xl">Системний підхід до встановлення діагнозу</h2>
              <p className="text-[13px] md:text-[14px] text-slate-400">
                Ми враховуємо не лише окремі симптоми, а й загальний стан
                організму, спосіб життя та анамнез пацієнта для точного
                діагностування.
              </p>
            </li>
            <li className={`${styles.item} relative pl-[2rem] md:pl-[2.15rem] xl:pl-[3rem]`}>
              <h2 className="text-sm md:text-[15px] font-bold xl:text-xl">Комплексне визначення тактики лікування</h2>

              <p className="text-[13px] md:text-[14px] text-slate-400">
                Лікування підбирається індивідуально з урахуванням всіх
                особливостей пацієнта, поєднуючи медикаментозні та
                немедикаментозні методи.
              </p>
            </li>
            <li className={`${styles.item} relative pl-[2rem] md:pl-[2.15rem] xl:pl-[3rem]`}>
              <h2 className="text-sm md:text-[15px] font-bold xl:text-xl">Нетипові рішення у складних клінічних випадках</h2>
              <p className="text-[13px] md:text-[14px] text-slate-400">
                Ми підходимо до кожної ситуації творчо та аналітично,
                використовуючи сучасні знання та досвід для пошуку ефективного
                рішення навіть у нестандартних випадках.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
