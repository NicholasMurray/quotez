import React, { useEffect, useState } from 'react';
import StyledApp from './App.styled';
import GlobalStyle from './globalStyles';
import { Button, Loader, Quote } from './components/ui';
import { Main } from './components/layouts';

function App() {
  const [quote, setQuote] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  const fetchProgrammingQuote = async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:8081/api/random-quote');
    const programmingQuote = await response.json();
    setQuote(programmingQuote);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProgrammingQuote();
    return () => {
      setQuote({});
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1>Quotez</h1>
        <Main>
          {isLoading ? <Loader /> : <Quote key={quote.id} quote={quote} />}
        </Main>
        <div>
          <Button disabled={isLoading} onClick={fetchProgrammingQuote}>
            Get Quotez
          </Button>
        </div>
      </StyledApp>
    </>
  );
}

export default App;
