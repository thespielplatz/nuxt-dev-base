# Nuxt Dev Base

<!-- Badges Start -->
<p>
  <a href="https://npmjs.com/package/@thespielplatz/nuxt-dev-base"><img src="https://img.shields.io/npm/v/@thespielplatz/nuxt-dev-base.svg?style=flat-square&colorA=202128&colorB=36936A" alt="Version"></a>
  <a href="https://npmjs.com/package/@thespielplatz/nuxt-dev-base"><img src="https://img.shields.io/npm/dm/@thespielplatz/nuxt-dev-base.svg?style=flat-square&colorA=202128&colorB=36936A" alt="Downloads"></a>
  <a href="https://github.com/thespielplatz/nuxt-dev-base/stargazers"><img src="https://img.shields.io/github/stars/thespielplatz/nuxt-dev-base.svg?style=flat-square&colorA=202128&colorB=36936A" alt="Stars"></a>
  <a href="https://github.com/thespielplatz/nuxt-dev-base/blob/main/LICENSE"><img src="https://img.shields.io/github/license/thespielplatz/nuxt-dev-base.svg?style=flat-square&colorA=202128&colorB=36936A" alt="License"></a>
</p>
<!-- Badges End -->

Development starter for doing amazing things.

## Features

### Localstorage PLugin

```typescript
const localStorageText = ref('')
const { $localStorage } = useNuxtApp()

onMounted(() => {
  localStorageText.value = $localStorage.getItem(LOCALSTORAGE_KEY) || ''
})

watch(localStorageText, (value) => {
  $localStorage.setItem(LOCALSTORAGE_KEY, value)
})
```

#### Local Storage created with prefix

```typescript
const FOOBAR_KEY_1 = 'fooBar1'
const FOOBAR_KEY_2 = 'fooBar2'
const fooBar1 = ref('')
const fooBar2 = ref('')
const { $localStorage } = useNuxtApp()
const localStorageForFooBar = $localStorage.create('with-prefix')

onMounted(() => {
  fooBar1.value = localStorageForFooBar.getItem(FOOBAR_KEY_1) || ''
  fooBar2.value = localStorageForFooBar.getItem(FOOBAR_KEY_2) || ''
})

watch(fooBar1, (value) => {
  localStorageForFooBar.setItem(FOOBAR_KEY_1, value)
})

watch(fooBar2, (value) => {
  localStorageForFooBar.setItem(FOOBAR_KEY_2, value)
})

```

### Simple Footer with Gitversion

You can use the `<FooterMain />`component to have an automatical footer in your project.

Example `package.json`:

```json
{
  "homepage": "https://github.com/thespielplatz/nuxt-dev-base",
  "version": "0.0.1",
  "meta": {
    "special-version": "0.0.1-for-testing"
  }
}
```

* It reads the `version` field from the `package.json` and displays a bage
* It reads the `meta.special-version` field from the `package.json` as an override for version badge
* It reads the `homepage` field from the `package.json` and uses it as Github Link Icon and Version Bagde Link (to the Github Release page)

### Release Notes

[✨ &nbsp;Release Notes](/CHANGELOG.md)

## Backlog

- empty

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npm i -D @thespielplatz/nuxt-dev-base
npx nuxi@latest module add ui
```

Edit Add it to the `modules` section in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@thespielplatz/nuxt-dev-base',
    '@nuxt/ui',
  ],
})
```

That's it! You can now use Nuxt Dev Base in your Nuxt app ✨

## Development

```sh
npm run dev:prepare
npm run dev
```

Experiment with the module in the playground environment 🎉

_(Inspired by the [Nuxt module guide](https://nuxt.com/docs/guide/going-further/modules))_

## Support

If you find this project helpful, please give it a star! ⭐

If you love it, consider forking it and taking it out for dinner. 🌟🍽️

[Tip the developer](https://thespielplatz.com/tip-jar) ❤️
