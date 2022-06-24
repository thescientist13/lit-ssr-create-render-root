import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { html } from 'lit';
import './greeting.js';

import Koa from 'koa';
import koaNodeResolve from 'koa-node-resolve';
import { Readable } from 'stream';
 
const { nodeResolve } = koaNodeResolve;
const app = new Koa();
const port = 8080;

app.use(async (ctx) => {
  ctx.type = 'text/html';
  ctx.body = Readable.from(render(html`
    <simple-greeting></simple-greeting>
    <simple-greeting name="SSR Works!"></simple-greeting>
  `));
});
app.use(nodeResolve({}));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});