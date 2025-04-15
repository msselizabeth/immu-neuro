export default function Footer() {
  return (
    <footer className="pt-7 pb-7 pl-4 pr-4 md:p-10 bg-blue-100">
      <p className="text-center text-sm md:text-base">
        Приватний кабінет лікаря — ФОП "Іму Нейро".
      </p>
      <p className="text-center text-sm md:text-base">
      © {new Date().getFullYear()}. Всі права захищені.
      </p>
    </footer>
  );
}
