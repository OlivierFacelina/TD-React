function AmountInput({ label, value }) {
    return (
      <form action="">
        <label>{label}</label>
        <input
          type="number"
          name="result"
          value={value}
        />
      </form>
    );
  }

  export default AmountInput;