function ToggleButtonPersonalizado({ children, name, type, id, value }) {
  return (
    <>
      <input
        className="btn-check"
        autoComplete="off"
        name={name}
        type={type}
        id={id}
        value={value}
      ></input>
      <label htmlFor={id} className="btn" tabIndex={0}>
        {children}
      </label>
    </>
  );
}

export default ToggleButtonPersonalizado;
