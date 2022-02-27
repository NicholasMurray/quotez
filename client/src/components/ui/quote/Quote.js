const Quote = ({ quote }) => {
  return (
    <>
      <h2>"{quote.en}"</h2>
      <h3>
        <i>{quote.author}</i>
      </h3>
    </>
  );
};

export default Quote;
