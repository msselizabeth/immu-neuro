import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={`${styles.hero} relative w-full max-w-[100rem] m-auto pt-15 pb-15`}>
      <div className="md:w-3xl xl:w-7xl m-auto">
        <h1 className="text-[1.25rem] md:text-[1.55rem] xl:text-[2.1rem] xl:leading-[3.25rem] max-w-[770px] pl-21">
          <span className="text-[#458FF6] font-extrabold">
            <span className="text-[#97C3F9]">Імму</span>Нейро
          </span> 
          {` - кваліфікована допомога від досвідченого невролога.`}
        </h1>

        <nav className={`${styles.nav} ml-21 mt-10 max-w-[650px] rounded-3xl`}>
          <ul className="p-8 flex flex-col gap-5">
            <li className={`${styles.item} relative pl-[3rem]`}>
              <h2 className="font-bold xl:text-xl">Системний підхід до встановлення діагнозу</h2>
              <p className="text-slate-400">
                Ми враховуємо не лише окремі симптоми, а й загальний стан
                організму, спосіб життя та анамнез пацієнта для точного
                діагностування.
              </p>
            </li>
            <li className={`${styles.item} relative pl-[3rem]`}>
              <h2 className="font-bold xl:text-xl">Комплексне визначення тактики лікування</h2>

              <p className="text-slate-400">
                Лікування підбирається індивідуально з урахуванням всіх
                особливостей пацієнта, поєднуючи медикаментозні та
                немедикаментозні методи.
              </p>
            </li>
            <li className={`${styles.item} relative pl-[3rem]`}>
              <h2 className="font-bold xl:text-xl">Нетипові рішення у складних клінічних випадках</h2>
              <p className="text-slate-400">
                Ми підходимо до кожної ситуації творчо та аналітично,
                використовуючи сучасні знання та досвід для пошуку ефективного
                рішення навіть у нестандартних випадках.
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
