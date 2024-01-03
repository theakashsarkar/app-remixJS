import { cssBundleHref } from "@remix-run/css-bundle";
import appStylesHref from "./app.css";

import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <div>
       <div className='topbar-content'>
          <div></div>
          <div>
            <h1><Link href='/'>Salat Tracker</Link></h1>
          </div>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' className='user-pic' alt="pic" />
       </div> 
        
        <hr />

       <nav>
        <div></div>
        <div>
          <ul>
            <li><Link to={`/dashboard`}>Dashboard</Link></li>
            <li><Link to={`/today`}>Today</Link></li>
            <li><Link to={`/`}>Setting</Link></li>
          </ul>
        </div>
        <div></div>
       </nav> <hr />     

    </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
