const sum = (a, b) => a + b;

export const UseStateFunctionalUpdatesPassingFunction = () => {
  const [fn, setFn] = useState(() => sum);

  return (<div>{`Function: ${fn}`}</div>);
};
