const Radio = ({ name, value, id, text }) => {
  return (
    <label className="">
      <input className="" type="radio" name={name} value={value} id={id} />
      <span className="first-letter:uppercase">{text}</span>
    </label>
  );
};

export default Radio;
