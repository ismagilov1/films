const Header = () => {
  return (
    <div className="flex justify-between w-full p-6 border-b-[1px] border-black">
      <a href="/">Фильмы</a>
      <button onClick={() => alert("Entry")}>Войти</button>
    </div>
  );
};

export default Header;
