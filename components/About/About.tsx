import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="pl-4 pr-4 pt-7 pb-7 w-full max-w-[100rem] m-auto xo:pt-15 xl:pb-15" id="about">
      <h2 className="font-extrabold text-2xl xl:text-3xl text-center">Про лікаря</h2>
      <div className={`mt-10 w-full xl:w-7xl m-auto md:flex md:gap-5 bg-linear-to-r from-[#DEEEFE] to-[#F3F7FF] rounded-2xl`}>
        <Image
          src="/doctor.jpg"
          alt="Гуслистий Артур Анатолійович"
          width={350}
          height={400}
          className={`${styles.image} rounded-2xl`}
        />
        <div className="xl:w-[70%] p-4 md:pr-5 xl:p-5">
          <input type="checkbox" id="toggle" className="peer hidden" />
          
          <div className="max-h-[15rem] md:max-h-[17rem] xl:max-h-[16rem] inline-block overflow-hidden peer-checked:max-h-[50rem] transition-all duration-300 text-slate-500 md:mt-8">
            <p>
              Гуслистий Артур Анатолійович – лікар-невролог з 18-ти річним
              стажем роботи. Має широкий досвід у діагностиці, лікуванні та
              профілактиці захворювань центральної та периферічної нервової
              системи. Також спеціалізуеться на лікуванні порушень функції
              нервової системи, обумовлених тривалим стресом та невротичними
              порушеннями.
            </p>
            <p className="mt-3">
              Біографія: в 2006 р. – закінчив Одеський Національний Університет.
              Після чого, в період з 2006 по 2008 р.р., проходив інтернатуру на
              базі Одеської ОКЛ поспеціальності «Неврологія». Для удосконалення
              навичків на поглиблення знань по обраній спеціальності, в період з
              2008 по 2010 р., навчався в клінординатурі на базі кафедри
              неврології та нейрохірургії. 13.09.2010 р. був зачислений в штат
              психоневрологічного відділення КНП «ООМЦПЗ» ООР, де працював
              лікарем- ординатором до 2023 р. За вказаний період, окрім здобуття
              клінічного досвіду з неврології освоїв навички індивідуальної
              психотерапії, використовуючи мультимодальний підхід до цього
              методу лікування.
            </p>
            <p className="mt-3">
              В квітні 2023 р. заснував приватний кабінет невропатолога
              «Імунейро», де працює донині. Спектр захворювань, лікуванням яких
              займаюсь доволі широкий. Серед них представлені як:{" "}
            </p>
            <p className="mt-3">
              Нейродегенеративні захворювання: судинної деменції,  хвороби
              Альцгеймера; хвороби Паркінсона; Боковий аміотрофічний склероз та
              його синдроми, та інше;
            </p>
            <p>Цереброваскулярні хвороби (дисциркуляторна енцефалопатія);</p>
            <p className="mt-3">
              Захворювання периферійної нервової системи: Краніальні невропатії
              (невралгія трійчастого нерву, параліч Бела та ін.); Тунельні
              невропатії (синдром зап’ясного каналу, невропатія серединного
              нерву, синдром ложа Гюйона);
            </p>
            <p className="mt-3">
              Поліневропатії (діабетична, при захворюваннях сполучної тканини,
              васкулітах та ін.);
            </p>
            <p className="mt-3">
              Аутоімунні захворювання: розсіяний склероз;  розсіяний
              енцефаломієліт; васкуліти (вузликовий періартеріїт, синдром
              Черджа-Стросса та ін.);
            </p>
            <p className="mt-3">Міастенія та міастеноподібні синдроми;</p>
            <p className="mt-3">
              Пограничні психіатричні розлади: органічний емоційно-астенічний
              розлад; змішаний тривожно-депресивний розлад; генералізований
              тривожний розлад; синдром подразненого кишківника;
              обсесивно-компульсивний розлад;
            </p>
          </div>
          <label
            htmlFor="toggle"
            className="text-[#458FF6] cursor-pointer font-semibold block peer-checked:hidden hover:text-[#BA68C8] transition-all duration-300">
            ...читати більше
          </label>
          <label
            htmlFor="toggle"
            className="text-[#BA68C8] cursor-pointer font-semibold hidden peer-checked:block hover:text-[#458FF6] transition-all duration-300">
            Згорнути назад
          </label>
        </div>
      </div>
    </section>
  );
}
