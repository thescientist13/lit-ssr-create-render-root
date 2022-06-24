# lit-ssr-create-render-root

Demo repo for verifying Lit SSR + createRenderRoot behavior.

## Setup

1. Run `npm ci`
1. Run `npm start`
1. Open `localhost:8080` in your browser

When using `createRenderRoot` in _greeting.js_, Lit is still rendering into a Declarative Shadow DOM.

```html
<simple-greeting>
  <template shadowroot="open">
    <style>p { color: blue }</style>
    <!--lit-part EvGichL14uw=--><p>Hello, <!--lit-part-->Somebody<!--/lit-part-->!</p><!--/lit-part-->
  </template>
</simple-greeting>
```