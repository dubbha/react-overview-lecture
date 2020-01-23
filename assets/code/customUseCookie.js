const useCookie = cookieName => {
  const [value, setValue] = useState(() => getCookieByName(cookieName));
  useEffect(() => {
    value
      ? (document.cookie = `${cookieName}=${value}`)
      : (document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`);
  }, [value, cookieName]);

  const resetValue = () => setValue('');
  return [value, setValue, resetValue];
};