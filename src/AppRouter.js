import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import App from './component/home/App';
import Contact from "./component/page/Contact";

const AppRouter = ()=>(
<BrowserRouter>
<div>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/kontak">Kontak</Link></li>
</ul>

<Route path="/" exact component={App} />
<Route path="/kontak" component={Contact}/>
</div>
</BrowserRouter>
);

export default AppRouter;
