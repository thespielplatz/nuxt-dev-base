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

#### Configuration of Docker Build

```Docker
WORKDIR /app
COPY package.json /app
```

#### Configuration of Github Actions

```yml
name: Run pipeline if commit has contains 'RUN_PIPELINE'
on:
  push:
    branches:
      - main

jobs:
  docker:
    if: |
      contains(github.event.head_commit.message, 'RUN_PIPELINE')
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4.2.2
        
      - name: Extract version from package.json & short commit hash & check for RUN_PIPELINE in commit message
        id: extract_version
        run: |
          VERSION=$(jq -r '.version' package.json)
          SHORT_HASH=$(git rev-parse --short HEAD)
          if echo "${{ github.event.head_commit.message }}" | grep -q "RUN_PIPELINE"; then
            echo "version=${VERSION}.${SHORT_HASH}" >> $GITHUB_OUTPUT
          else
            echo "version=${VERSION}" >> $GITHUB_OUTPUT
          fi

      - name: if RUN_PIPELINE, add special-version to package.json
        run: |
          if echo "${{ github.event.head_commit.message }}" | grep -q "RUN_PIPELINE"; then
            jq '.meta["special-version"] = "${{ steps.extract_version.outputs.version }}"' package.json > package.tmp.json && mv package.tmp.json package.json
          fi          
```

### Legal Pages loaded from data

If you want some legal pages simply shown in your footer, you can create the following files and the content will magicly appear in a popup:

* `data/legal-notice.html`
* `data/privacy-policy.html`

FYI: You can easily mount the `/data` directory outside of your docker container ;)

### Full Changelog

[✨ &nbsp;Changelog](/CHANGELOG.md)

## Backlog

* empty

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
