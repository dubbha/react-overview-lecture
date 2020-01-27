// When location.pathname = '/about'
<BrowserRouter>
  <Route path='/about' component={About} />      // renders <About/>
  <Route path='/contact' component={Contact} />  // renders null
  <Route component={Always} />                   // renders <Always/>
</BrowserRouter>

// Inclusive Routing (v4+ default)
<BrowserRouter>                                 // v5: multiple <Router> children
  <Route exact path="/" component={Home} />     // exact match required
  <Route path="/about" component={About} />
</BrowserRouter>