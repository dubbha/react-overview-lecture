const [uid, setUid] = useState(1);
const [user, setUser] = useState();

useEffect(() => {
  fetchUser(uid).then(user => setUser(user));
}, [uid]);  // only fire when uid changes