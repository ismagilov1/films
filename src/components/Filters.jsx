import Radio from "./ui/radio";

const Filters = () => {
  return (
    <div className="flex flex-col gap-y-4 border border-black p-6 m-6 w-max h-full">
      <div className="flex justify-between min-w-52">
        <p>Фильтры</p>
        <button>X</button>
      </div>
      <form className="flex flex-col">
        <label className="text-gray-500 font-light text-sm" htmlFor="sorting">
          Сортировать по:
        </label>
        <select className="border-b-2 py-1" name="sorting" id="sorting">
          <option value="price">Цене</option>
          <option value="rating">Рейтингу</option>
          <option value="name">Названию</option>
          <option value="date">Дате</option>
        </select>
      </form>
      <form className="flex flex-col">
        <fieldset className="radio-set">
          <legend className="py-1.5">Жанры</legend>
          <div className="flex flex-col gap-1.5">
            <Radio id={"Comedy"} name={"genre"} text={"Комедия"} />
            <Radio id={"Action"} name={"genre"} text={"Боевик"} />
            <Radio id={"Drama"} name={"genre"} text={"Драма"} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
