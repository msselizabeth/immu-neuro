import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import MobliMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header className="p-5 md:p-4 xl:p-5">
      <div className=" xl:w-7xl m-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/immu-neuro-logo.png"
            alt="кабінет невропатолога одеса"
            width={300}
            height={150}
            className={styles.logo}
          />
        </Link>
        <MobliMenu />
        <nav className="hidden md:block">
          <ul className="flex gap-8 xl:gap-15 xl:text-lg">
            <li>
              <Link href="/" className="font-bold hover:text-primary">Головна</Link>
            </li>
            <li>
              <Link href="/" className="text-slate-400 transition  hover:text-[#17303c]">Послуги</Link>
            </li>
            <li>
              <Link href="/" className="text-slate-400 hover:text-[#17303c] transition">Про лікаря</Link>
            </li>
            <li>
              <Link href="/" className="text-slate-400 hover:text-[#17303c] transition">Контакти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
