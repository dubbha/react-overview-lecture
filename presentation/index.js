// Import React
import React from 'react';

// Import emotion to override styles
// https://github.com/FormidableLabs/spectacle#faq
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Appear,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const imageFileNames = [
  // react
  'chernobyl.jpg',
  'react.svg',
  'books.png',
  'orly.png',
  'componentBasics1.webp',
  'componentBasics2.webp',
  'componentBasics3.webp',
  'componentBasics4.webp',
  // redux
  'collider.webp',
  'colliderBlurred.webp',
  // router
  'routes.webp',
  'routesBlurred.webp',
  'routerBasics1.webp',
  'routerBasics2.webp',
  'routerBasics3.webp',
  'hashRouter.png',
  'hashRouterOnStatic.gif',
  'browserRouter.png',
  'browserRouterOnStatic.gif',
  // hooks
  'useYourBrain.webp',
  'marvel.jpg',
  'karloff.webp',
  'hooks.jpg',
  'hooksBlurred.jpg',
  'danHowOld.webp',
  'whatever.jpg',
  'devCommunity.webp',
  'wrapperHell.webp',
  'reduxKiller.webp'
];
const reqImage = name => ({ [name.split('.')[0]]: require(`../assets/${name}`) });
const images = imageFileNames.reduce((acc, name) => ({ ...acc, ...reqImage(name) }), {});

const sourceFileNames = [
  // router
  'routerInstall.js',
  'routerInstallCRA.js',
  'importBrowserRouter.js',
  'importHashRouter.js',
  'defaultSPARouteExpress.js',
  'defaultSPARouteDevServer.js',
  'route.js',
  'routeInclusiveRouting.js',
  'routeInclusiveRoutingUseCase.js',
  'routerHelloWorld.js',
  'switch.js',
  'link.js',
  'navlink.js',
  'redirect.js',
  'match.js',
  'location.js',
  'history.js',
  'withRouter.js',

  'blockedUpdates.js',
  'connectedReactRouterState.js',
  'connectedReactRouterAction.js',
  'connectedReactRouter.js',
  // hooks
  'hoc.js',
  'hocWithRouter.js',
  'renderProps.js',
  'renderPropsChildren.js',
  'giantComponent.js',
  'useState.js',
  'useStateFunctionalUpdates.js',
  'useStateLazyInitialState.js',
  'useStateFunctionalUpdatesPassingFunction.js',
  'useEffect.js',
  'useEffectConditional.js',
  'useEffectOnMount.js',
  'useEffectCleanup.js',
  'useEffectFetch.js',
  'useContext.js',
  'useReducer.js',
  'useReducerInit.js',
  'useCallback.js',
  'useMemo.js',
  'useRef.js',
  'useImperativeHandle.js',
  'useLayoutEffect.js',
  'useDebugValue.js',
  'customHook.js',
  'customUseFormInput.js',
  'customUseDocumentTitle.js',
  'customUseInitialRender.js',
  'customUseCookie.js',
  'customUseDebounce.js',
  'reactReduxApiHooks.js',
  'reactRouterApiHooks.js',
];
const reqSource = name => ({ [name.split('.')[0]]: require(`../assets/code/${name}`) });
const sources = sourceFileNames.reduce((acc, name) => ({ ...acc, ...reqSource(name) }), {});

const videos = {
  separationOfConcerns: require('../assets/separationOfConcerns.mp4'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#c11b01',
    quaternary: '#cecece',
    brainDark: '#c11b01',
    brainLight: '#f08920',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f',
    gray: '#1F2022'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const FullScreenSlide = styled(Slide)`
  :first-child {
    max-width: 100%;
    max-height: 100%;
    padding: ${(props) => props.padding || 0};
  }
`;

const FullScreenImage = ({
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

const Corner = ({ top, right, bottom, left, children }) => (
  <div
    style={{
      position: 'absolute',
      top,
      right,
      bottom,
      left,
      textAlign: (right ? 'right' : (left ? 'left' : 'center')) // eslint-disable-line
    }}
  >
    {children}
  </div>
);

/* eslint-disable react/prop-types */
const FullScreenVideo = ({ name, format = 'webm', loop = null }) => (
  <video
    // controls
    autoPlay
    { ...(loop ? { loop: true } : {}) }
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const Example = ({ name }) => {
  const path = `${name[0].toLowerCase()}${name.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  return (
    <Link href={`http://localhost:3001/${path}`} target="_blank" style={{ fontSize: '4vh' }}>{name}</Link>
  );
};

const Examples = ({ names }) => (
  <>
    <span style={{ fontSize: '4vh' }}>{names.length > 1 ? 'Examples: ' : 'Example: '}</span>
    {names.map((name, index) => (<React.Fragment key={name}>{index ? ', ' : ''}<Example name={name} /></React.Fragment>))}
  </>
);

const styles = {
  brain: {
    color: theme.screen.colors.brainDark,
  },
  brain3D: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px,
      ${theme.screen.colors.brainLight} 0px 4px 0px`
  },
  brain3DLight: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px`
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl={false}
        controls={false}
        progress="bar"
      >
        {/* Intro */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <Appear transitionDuration={1000}>
            <div>
              <img src={images.react} style={{ height: '60vh' }} />
              <Heading caps style={{ ...styles.brain3D, fontSize: '21vh', lineHeight: 1.2 }}>React</Heading>
              <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk</Heading>
            </div>
          </Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.books}>
          <Corner bottom="5vh" left="5vw">
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Up & Running — Book by Stoyan Stefanov</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>The Road to Learn React — Book by Robin Wieruch</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React in Action — Book by Mark Tielens Thomas</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Learning React — Book by Alex Banks and Eve Porcello</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Quickstart Step-By-Step Guide — Book by Lionel Lopez</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Building React Applications with Redux — Book by David Geary</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Learn React Hooks — Book by Daniel Bugl</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Design Patterns and Best Practices — Book by Michele Bertoli</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Quickly — Book by Azat Mardan</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React for Real — Book by Ludovico Fischer</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React by Example — Book by Prathamesh Sonpatki</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Pro MERN Stack — Book by Sophia Brooks</Heading>
          </Corner>
          <Corner top="5vh" right="5vw">
            <Image src={images.orly} style={{ width: '30vh', height: '30vh', }} />
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide>
          <FullScreenImage src={images.whatever} />
          <Image src={images.devCommunity} style={{ position: 'absolute', width: '35vw', top: '40vh', marginLeft: '1vw', border: '1px solid black' }} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics1} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics2} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics3} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics4} />
        </FullScreenSlide>

        {/* Redux */}
        <FullScreenSlide bgImage={images.collider}>
          <Corner bottom="33vh" right="18.9vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>Redux</Heading>
          </Corner>
        </FullScreenSlide>
        <Slide bgImage={images.colliderBlurred}>
          <Heading caps style={{ ...styles.brain }}>Motivation</Heading>
          <Appear><Heading size={4} textColor="secondary">Why React Hooks?</Heading></Appear>
          <Appear><Heading fit textColor="secondary">What problems are we trying to solve?</Heading></Appear>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ marginBottom: '3vh', fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Isolation of effects is why I prefer redux-saga over thunks
            </Quote>
            {/* <Cite margin="10px 0 0 30px">Eric Elliot</Cite> */}
            <Quote textColor="secondary" style={{ fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Switch to redux-saga. Keep side-effects isolated from your reducers and action creators.
            </Quote>
            <Cite margin="10px 0 0 30px">Eric Elliot</Cite>
          </BlockQuote>
          <Corner right="2vw" bottom="2vh">
          <Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672#a971" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>, <Link href="https://medium.com/@_ericelliott/switch-to-redux-saga-keep-side-effects-isolated-from-your-reducers-and-action-creators-8bd846aa9dd1" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>
          </Corner>
        </Slide>

        {/* Router */}
        <FullScreenSlide bgImage={images.routes}>
          <Corner bottom="27vh" left="4vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>React Router</Heading>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>Concept of a Router</Heading>
          <Appear>
            <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'justify' }}>
              In Web Development:<br/> <span style={{ ...styles.brain }}>Routing</span> is a process of matching of a <span style={{ ...styles.brain }}>URL</span> to a <span style={{ ...styles.brain }}>View</span>.
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'justify' }}>
              In Single Page Applications:<br/> <span style={{ ...styles.brain }}>View</span> is a set of components being rendered.<br/><span style={{ ...styles.brain }}>Router</span> dynamically loads components and changes what's displayed in the Browser as user navigates the page changing the <span style={{ ...styles.brain }}>URL</span>.
            </Text>
          </Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 10vh">
          <Heading caps style={{ fontSize: '8vh', margin: 0 }}>
            Using Router allows to
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Keep UI in sync with the URL</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Bookmark individual SPA pages</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Use Browser history, Back/Forward buttons</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics1} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics2} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics3} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>
            React Router
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            <span style={{ ...styles.brain }}>React Router</span> is an external library that manages navigation and rendering of components in React applications.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>
            React Router <span style={{ ...styles.brain3D }}>V4+</span>
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            First thing to check when looking for a documentation, an article or a solution at StackOverflow, it that it is about React Router <span style={{ ...styles.brain, fontWeight: 'bold' }}>v4+</span>.
          </Text>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            Virtually the entire API is <span style={{ ...styles.brain, fontWeight: 'bold' }}>Just Components<sup>TM</sup></span>.
          </Text>
          <Corner right="0.5vw" bottom="1vh"><Link href="https://reacttraining.com/react-router/core/guides/philosophy" target="_blank" style={{ fontSize: '4vh' }}>https://reacttraining.com/react-router/core/guides/philosophy</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            React Router Packages
          </Heading>
          <List>
            <ListItem style={{ fontSize: '5vh' }}>Web – <span style={{ ...styles.brain, fontWeight: 'bold' }}>react-router-dom</span> package, used for Web Browser</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>Native – <span style={{ ...styles.brain, fontWeight: 'bold' }}>react-router-native</span> package, used for React Native</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>Core – <span style={{ ...styles.brain, fontWeight: 'bold' }}>react-router</span> package, normally not used directly</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          React Router is not included in React by default, so you need to install it on top of React itself:
          </Text>
          <CodePane source={sources.routerInstall} style={{ maxHeight: '75vh', overflowY: 'auto' }} theme="light" />
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          It's not even included in Create React App by default:
          </Text>
          <CodePane source={sources.routerInstallCRA} style={{ maxHeight: '75vh', overflowY: 'auto' }} theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 10vh">
          <Heading caps style={{ fontSize: '8vh', margin: 0 }}>
            Basic Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain, fontWeight: 'bold' }}>Router</span> components</ListItem>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain, fontWeight: 'bold' }}>Route matching</span> components</ListItem>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain, fontWeight: 'bold' }}>Navigation</span> components</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Router Components
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Browser related router types:
          </Text>
          <List style={{ margin: 0 }}>
            <ListItem style={{ fontSize: '4vh' }}>BrowserRouter – for modern browsers that support HTML5 History API</ListItem>
            <ListItem style={{ fontSize: '4vh' }}>HashRouter – for legacy browsers (uses window.location.hash)</ListItem>
          </List>
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Router types not related to browsers:
          </Text>
          <List style={{ margin: 0 }}>
            <ListItem style={{ fontSize: '4vh' }}>MemoryRouter – for Testing or non-DOM envs like React-Native</ListItem>
            <ListItem style={{ fontSize: '4vh' }}>StaticRouter – for Server-Side Rendering</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            BrowserRouter
          </Text>
          <Image src={images.browserRouter} margin="0 auto 2vh 0" />
          <CodePane source={sources.importBrowserRouter} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            HashRouter
          </Text>
          <Image src={images.hashRouter} margin="0 auto 2vh 0" />
          <CodePane source={sources.importHashRouter} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            BrowserRouter requires a default SPA route to be configured on Server. Otherwise here's what's happening:
          </Text>
          <Image src={images.browserRouterOnStatic} style={{ width: '100%' }} margin="0 auto 2vh 0" />
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            HashRouter is the fallback in case there is no control of Server side or static HTML. Like GitHub Pages. Or this presentation.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Default SPA route on Express server
          </Text>
          <CodePane source={sources.defaultSPARouteExpress} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Default SPA route on Webpack Dev Server
          </Text>
          <CodePane source={sources.defaultSPARouteDevServer} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 12vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Route Matching Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Route</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Switch</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.route} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <CodePane source={sources.routerHelloWorld} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.routeInclusiveRouting} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.routeInclusiveRoutingUseCase} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Switch
          </Text>
          <CodePane source={sources.switch} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 12vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Navigation Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Link</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Navlink</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Redirect</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Link
          </Text>
          <CodePane source={sources.link} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            NavLink
          </Text>
          <CodePane source={sources.navlink} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Redirect
          </Text>
          <CodePane source={sources.redirect} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Route render methods
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            There are 3 ways to render something with a &lt;Route&gt;:
          </Text>
          <List style={{ margin: '2vh 0 4vh' }}>
            <ListItem style={{ fontSize: '4.5vh' }}>&lt;Route <span style={{ ...styles.brain }}>component</span>&gt;</ListItem>
            <ListItem style={{ fontSize: '4.5vh' }}>&lt;Route <span style={{ ...styles.brain }}>render</span>&gt;</ListItem>
            <ListItem style={{ fontSize: '4.5vh' }}>&lt;Route <span style={{ ...styles.brain }}>children</span>&gt;</ListItem>
          </List>
          <Heading caps style={{ fontSize: '4.5vh', margin: 0, textAlign: 'left' }}>
            Route props
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            All the 3 render methods will be passed the same 3 route props:
          </Text>
          <List style={{ margin: '2vh 0' }}>
            <ListItem style={{ fontSize: '4.5vh' }}>match</ListItem>
            <ListItem style={{ fontSize: '4.5vh' }}>location</ListItem>
            <ListItem style={{ fontSize: '4.5vh' }}>history</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Match
          </Text>
          <CodePane source={sources.match} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Location
          </Text>
          <CodePane source={sources.location} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            History
          </Text>
          <CodePane source={sources.history} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            withRouter()
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '2vh', textAlign: 'left' }}>
            The match, location and history props are only available to the component immediately rendered by Route (a.k.a <span style={{ ...styles.brain, fontWeight: 'bold' }}>"route component"</span>).<br/>
            In case you need to access them in a deeper level component you may either forward them down in props, or use withRouter.<br/>
            The <span style={{ ...styles.brain, fontWeight: 'bold' }}>withRouter HOC</span> will pass the closest Route's match, location, and history props to the wrapped component whenever it renders.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            withRouter
          </Text>
          <CodePane source={sources.withRouter} lang="jsx" theme="light" />
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading caps style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Redux Integration</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            <span style={{ ...styles.brain }}>Blocked Updates</span> issue happens when a <span style={{ ...styles.brain }}>connected</span> component is not a <span style={{ ...styles.brain }}>route</span> component.
            Redux implements shouldComponentUpdate and there are no props from the Router.
            The fix is withRouter:
          </Text>
          <CodePane source={sources.blockedUpdates} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            <span style={{ ...styles.brain }}>Deep Integration</span> is required to:
            <ul style={{ margin: 0 }}>
              <li>Synchronize routing data with the store, access from the store</li>
              <li>Be able to navigate by dispatching actions</li>
              <li>Have support for time travel debugging for route changes</li>
            </ul>
          </Text>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            React Router team does not recomment Deep Integration:
            <ul style={{ margin: 0 }}>
              <li>Routing data is already a prop of route components</li>
              <li>For async navigation you can pass history object in action payload</li>
              <li>Route changes are unlikely to matter for time travel debugging</li>
            </ul>
          </Text>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://reacttraining.com/react-router/web/guides/redux-integration" target="_blank" style={{ fontSize: '4vh' }}>Redux Integration</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Connected React Router</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            Synchronizes Router state with Redux store through uni-directional flow:
          </Text>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            history → store → router → components
          </Text>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0.25vw 0 0', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterState}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0 0 0.25vw', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterAction}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://github.com/supasate/connected-react-router" target="_blank" style={{ fontSize: '4vh' }}>connected-react-router</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading style={{ ...styles.brain, lineHeight: '6vh', fontSize: '5vh', margin: 0 }}>Connected React Router</Heading>
          <CodePane
            lang="jsx"
            source={sources.connectedReactRouter}
            theme="light"
            style={{ maxHeight: '93vh', overflowY: 'auto' }}
          />
          <Corner right="2vw" bottom="0"><Link href="https://codesandbox.io/s/connected-react-router-yllkz" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>
        
        

        {/* Hooks */}
        {/* <FullScreenSlide padding="1.2em">
          <FullScreenImage src={images.useYourBrain} />
          <Appear>
            <div>
              <Corner right="1vw" bottom="2vh">
                <Heading caps style={{ ...styles.brain, fontSize: '6.1vh' }}>
                  Clawfinger
                </Heading>
                <div style={{ fontSize: '4.2vh' }}>1995 - Use Your Brain</div>
              </Corner>
            </div>
          </Appear>
        </FullScreenSlide>
        <Slide>
          <Image src={images.danHowOld} style={{ width: '55vw' }}/>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              When I grow up there will be a day<br/>
              When everybody has to do what I say
            </Quote>
            <Cite margin="10px 0 0 30px">Dan @ 3 years old</Cite>
          </BlockQuote>
        </Slide>
        <FullScreenSlide>
          <FullScreenImage src={images.whatever} />
          <Image src={images.devCommunity} style={{ position: 'absolute', width: '35vw', top: '40vh', marginLeft: '1vw', border: '1px solid black' }} />
        </FullScreenSlide>
        <Slide bgImage={images.marvel} />
        <Slide bgImage={images.karloff} /> */}
        <FullScreenSlide bgImage={images.hooks}>
          <Corner top="19.2vh" left="5.8vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>React Hooks</Heading>
          </Corner>
          {/* <Corner right="5.5vw" bottom="6vh">
            <Heading caps textAlign="right" textColor="quaternary" style={{ fontSize: '7vh' }}>performed by</Heading>
            <Heading caps textAlign="right" textColor="quaternary" style={{ fontSize: '7vh' }}>
              Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk
            </Heading>
          </Corner> */}
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading caps style={{ ...styles.brain }}>Motivation</Heading>
          <Appear><Heading size={4} textColor="secondary">Why React Hooks?</Heading></Appear>
          <Appear><Heading fit textColor="secondary">What problems are we trying to solve?</Heading></Appear>
        </Slide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading caps style={{ ...styles.brain }}>Problems</Heading>
          <List>
            <Appear><ListItem textSize="7vh" bold>Reusing Logic</ListItem></Appear>
            <Appear><ListItem textSize="7vh" bold>Giant Components</ListItem></Appear>
            <Appear><ListItem textSize="7vh" bold>Confusing Classes</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={2} style={{ ...styles.brain }}>Reusing Logic</Heading>
          <List>
            <Appear><ListItem fit bold style={{ fontSize: '7vh' }}>Higher Order Components</ListItem></Appear>
            <Appear><ListItem bold style={{ fontSize: '7vh' }}>Render Props</ListItem></Appear>
            <Appear>
              <Text textColor="secondary" bold textSize="5vh" margin="6vh 0 0 0">
                Both of these patterns have a downside:<br/>
                they change the component hierarchy
              </Text>
            </Appear>
          </List>
        </Slide>
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>Higher Order Components</Heading>
          <CodePane
            lang="jsx"
            source={sources.hoc}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide> */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>Higher Order Components</Heading>
          <CodePane
            lang="jsx"
            source={sources.hocWithRouter}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>Render Props</Heading>
          <CodePane
            lang="jsx"
            source={sources.renderProps}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>Render Props</Heading>
          <CodePane
            lang="jsx"
            source={sources.renderPropsChildren}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide> */}
        <Slide transition={['zoom']} bgImage={images.wrapperHell}>
          <Heading caps style={{ ...styles.brain, lineHeight: 1.2, border: `1vh solid ${theme.screen.colors.brainDark}` }}>Wrapper Hell</Heading>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={2} style={{ ...styles.brain, lineHeight: 1.3 }}>Giant Components</Heading>
          <CodePane
            lang="jsx"
            source={sources.giantComponent}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={2} style={{ ...styles.brain }}>Confusing Classes</Heading>
          <List>
            <Appear><ListItem fit bold style={{ fontSize: '8vh' }}>Hard for Humans</ListItem></Appear>
            <Appear><ListItem bold style={{ fontSize: '8vh' }}>Hard for Machines</ListItem></Appear>
            <Appear>
              <Text textColor="secondary" textSize="6vh" margin="6vh 0 0 0">
                Humans have problems with this.
                <br />Classes don't minify well because method names can't be changed. Unused class methods are not stripped out. Hard for compilers to optimize.
              </Text>
            </Appear>
          </List>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Before Hooks...</Heading>
          <Appear><Text textColor="secondary" textSize="5.3vh">You started with a <span style={{ ...styles.brain, fontWeight: 'bold' }}>Function/Dumb/Stateless</span> component</Text></Appear>
          <Appear><Text textColor="secondary" textSize="5.3vh">and then when you needed state or lifecycle</Text></Appear>
          <Appear><Text textColor="secondary" textSize="5.3vh">you re-wrote it to <span style={{ ...styles.brain, fontWeight: 'bold' }}>Class/Smart/Stateful</span> component</Text></Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Before Hooks...</Heading>
          <Text textColor="secondary" textSize="6.5vh">React didn't provide a <span style={{ ...styles.brain, fontWeight: 'bold' }}>stateful</span> primitive<br/>other than a <span style={{ ...styles.brain, fontWeight: 'bold' }}>class component</span></Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="7vh">Hooks let you use state<br/>and other React features<br/>without writing a class</Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="7vh">Hooks are functions<br/>that let you "hook into" React features<br/>from functional components</Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="7vh">Introduced in React v16.8.0</Text>
          <Text textColor="secondary" textSize="7vh">Supported by React Native since v0.59</Text>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading caps style={{ ...styles.brain }}>Basic Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '8vh' }}>useState</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useEffect</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useContext</ListItem>
          </List>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>useState</Heading>
          <CodePane
            lang="jsx"
            source={sources.useState}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">Returns a stateful value, and a function to update it.</Text>
          <Appear><Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">During the initial render, the returned state (<span style={{ ...styles.brain }}>state</span>) is the same as the value passed as the first argument (<span style={{ ...styles.brain }}>initialState</span>).</Text></Appear>
          <Appear><Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">The <span style={{ ...styles.brain }}>setState</span> function is used to update the state. It accepts a new state value and enqueues a re-render of the component.</Text></Appear>
          <Appear><div><Corner right="0.5vw" bottom="0.5vh"><Examples names={['useState', 'useStateTwoStates', 'useStateManyStates']} /></Corner></div></Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useState</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Functional updates:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useStateFunctionalUpdates}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 6vh">
            If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseStateFunctionalUpdates', 'UseStateFunctionalUpdatesObject', 'UseStateFunctionalUpdatesObject2', 'UseStateFunctionalUpdatesObject3']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useState</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Lazy initial state:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useStateLazyInitialState}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseStateHeavyInitialState', 'UseStateLazyInitialState']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useState</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            You have to use functional update if passing function to initial state:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useStateFunctionalUpdatesPassingFunction}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Otherwise it will be executed instead
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseStateFunctionalUpdatesPassingFunction']} /></Corner>
        </FullScreenSlide>
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <CodePane
            lang="jsx"
            source={sources.useEffect}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Accepts a function that contains imperative, possibly effectful code:<br/>mutations, subscriptions, timers, logging, and other side effect.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseEffect']} /></Corner>
        </FullScreenSlide> */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Conditionally firing an effect:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectConditional}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseEffectConditional']} /></Corner>
        </FullScreenSlide> */}
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Conditionally firing an effect:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectConditional}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Firing an effect on mount:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectOnMount}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Firing an effect on mount:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectOnMount}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Leave the dependency array empty to run once on mount.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseEffectOnMount']} /></Corner>
        </FullScreenSlide> */}
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Cleaning up an effect:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectCleanup}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
          Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function.
          </Text>
          {/* <Corner right="2vw" bottom="2vh"><Examples names={['UseEffectCleanup']} /></Corner> */}
        </FullScreenSlide>
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Fetching data:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectFetch}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Corner right="2vw" bottom="2vh"><Examples names={['UseEffectFetch', 'UseEffectFetchCleanup', 'UseEffectFetchCleanupClass']} /></Corner>
        </FullScreenSlide> */}
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useContext</Heading>
          <CodePane
            lang="jsx"
            source={sources.useContext}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseContext', 'UseContext2', 'UseContextRealistic']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 2vw">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>Rules of Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '8vh' }}>Only Call Hooks at the Top Level</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>Only Call Hooks from React Functions</ListItem>
          </List>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Don’t call Hooks from regular JavaScript functions. Only from function components or custom hooks.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            ESLint plugin enforcing the rules: <Link href="https://www.npmjs.com/package/eslint-plugin-react-hooks" target="_blank">eslint-plugin-react-hooks</Link>
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['RulesOfHooks', 'ExhaustiveDeps']} /></Corner>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={3} caps style={{ ...styles.brain }}>Additional Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '8vh' }}>useReducer</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useCallback</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useMemo</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useRef</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useImperativeHandle</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useLayoutEffect</ListItem>
            <ListItem style={{ fontSize: '8vh' }}>useDebugValue</ListItem>
          </List>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useReducer</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Passing the initial state:
          </Text>
          <CodePane source={sources.useReducer} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Lazy initialization:
          </Text>
          <CodePane source={sources.useReducerInit} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['UseReducer', 'UseReducerLazyInit']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useCallback</Heading>
          <CodePane source={sources.useCallback} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized callback.
          </Text>
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useMemo</Heading>
          <CodePane source={sources.useMemo} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized value.
          </Text>
          {/* <Corner right="2vw" bottom="2vh"><Examples names={['UseCallback', 'UseCallbackMemoization']} /></Corner> */}
        </FullScreenSlide>
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useCallback</Heading>
          <CodePane source={sources.useCallback} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized callback.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Pass an inline callback and an array of dependencies.<br/>useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseCallback', 'UseCallbackMemoization']} /></Corner>
        </FullScreenSlide> */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useMemo</Heading>
          <CodePane source={sources.useMemo} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized value.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Pass a "create" function and an array of dependencies.<br/>useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseMemoWhy', 'UseMemo', 'UseMemoWithUseCallback']} /></Corner>
        </FullScreenSlide> */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useRef</Heading>
          <CodePane source={sources.useRef} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            The returned object will persist for the full lifetime of the component.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseRef', 'UseCallbackRef', 'UseRefMeasureResize']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useImperativeHandle</Heading>
          <CodePane source={sources.useImperativeHandle} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            useImperativeHandle customizes the instance value that is exposed to parent components when using ref. useImperativeHandle should be used with forwardRef.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseImperativeHandle']} /></Corner>
        </FullScreenSlide> */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useLayoutEffect</Heading>
          <CodePane source={sources.useLayoutEffect} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
          The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
          Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
          </Text>
          <Corner right="2vw" bottom="2vh"><Examples names={['UseLayoutEffect']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useDebugValue</Heading>
          <CodePane source={sources.useDebugValue} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            useDebugValue can be used to display a label for custom hooks in React DevTools.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            So we'll see it soon...
          </Text>
        </FullScreenSlide> */}
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={3} caps style={{ ...styles.brain }}>Custom Hooks</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            Custom Hooks lets you extract component logic into reusable functions.
          </Text>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="4vh 0 0 0">
            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
          </Text>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom Hook</Heading>
          <CodePane source={sources.customHook} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['UseDebugValue', 'CustomUseMedia']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useFormInput</Heading>
          <CodePane source={sources.customUseFormInput} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['CustomUseFormInput', 'CustomUseFormInputElegant']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useDocumentTitle</Heading>
          <CodePane source={sources.customUseDocumentTitle} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['CustomUseDocumentTitle']} /></Corner>
        </FullScreenSlide>
        <Slide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              With hooks we separate code not based on the lifecycle method name but based on what the code is doing
            </Quote>
            <Cite margin="10px 0 0 30px">Dan @ React Conf 2018</Cite>
          </BlockQuote>
          <Appear><div><Corner right="2vw" bottom="2vh"><Examples names={['SeparationOfConcernsClass', 'SeparationOfConcernsHooks', 'SeparationOfConcernsCustomHooks']} /></Corner></div></Appear>
        </Slide>
        <FullScreenVideo name="separationOfConcerns" format="mp4" loop />
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useInitialRender</Heading>
          <CodePane source={sources.customUseInitialRender} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['CustomUseInitialRender']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useCookie</Heading>
          <CodePane source={sources.customUseCookie} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['CustomUseCookie', 'CustomUseCookieWithReload']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useDebounce</Heading>
          <CodePane source={sources.customUseDebounce} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['CustomUseDebounce']} /></Corner>
        </FullScreenSlide> */}
        <Slide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              Throw this thing on context...
            </Quote>
            <Cite margin="10px 0 0 30px">Ryan Florence</Cite>
          </BlockQuote>
          {/* <Appear><div><Corner right="2vw" bottom="2vh"><Examples names={['ReduxKiller']} /></Corner></div></Appear> */}
          <Appear><div style={{ fontSize: '4vh' }}><Corner right="2vw" bottom="2vh">useReducer + useContext = <Example name={'ReduxKiller'} /></Corner></div></Appear>
        </Slide>
        <Slide>
          <Image src={images.reduxKiller} />
          <Corner right="2vw" bottom="2vh"><Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672" target="_blank" style={{ fontSize: '4vh' }}>Do React Hooks Replace Redux?</Link></Corner>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Redux API Hooks</Heading>
          <CodePane source={sources.reactReduxApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['ReactReduxApiHooks']} /></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Router API Hooks</Heading>
          <CodePane source={sources.reactRouterApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Corner right="2vw" bottom="2vh"><Examples names={['ReactRouterApiHooks']} /></Corner>
        </FullScreenSlide>
        {/* <FullScreenSlide padding={0}>
          <iframe src="https://codesandbox.io/embed/j0y0vpz59" style={{ width: '100vw', height: '100vh', margin: 0, border: 'none' }}/>
        </FullScreenSlide> */}

        {/* Thanks */}
        <FullScreenSlide bgImage={images.hooks}>
          <Corner top="19.2vh" left="5.8vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>Thank You</Heading>
          </Corner>
          <Corner right="5.5vw" bottom="6vh">
            <Heading caps textAlign="right" textColor="quaternary" style={{ fontSize: '7vh', lineHeight: 1.5 }}>
              Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk
            </Heading>
            <Heading textAlign="right" style={{ fontSize: '5vh', lineHeight: 1.2 }}><Link href="http://github.com/dubbha/react-hooks-lecture/" target="_blank" textColor="quaternary">github.com/dubbha/react-hooks-lecture</Link></Heading>
            <Heading textAlign="right" textColor="quaternary" style={{ fontSize: '5vh', lineHeight: 1.2 }}><Link href="http://github.com/dubbha/react-hooks-examples/" target="_blank" textColor="quaternary">github.com/dubbha/react-hooks-examples</Link></Heading>
          </Corner>
        </FullScreenSlide>
      </Deck>
    );
  }
}
