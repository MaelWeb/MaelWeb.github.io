import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory, Router } from 'react-router';
import routes from './router';
import './style/style.less';


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the document body.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDom.render( <Router
    history = { hashHistory }
    routes = { routes } />, document.getElementById("page"));
