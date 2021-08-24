import React from "../deno/react.ts";
import { renderToString } from "../deno/dom_server.ts";

const code = (<ul>
  <li>One</li>
</ul>);

console.log(renderToString(code));