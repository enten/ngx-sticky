# DON'T FORK THIS BRANCH!

## ITS MUST BE USED FOR BACKWARD PURPOSES ONLY. IT CAN BE REBASED AND PUSH FORCED.

---
---
---

# @enten/ngx-sticky

[![NPM Version](https://img.shields.io/npm/v/@enten/ngx-sticky.svg)](https://npmjs.com/package/@enten/ngx-sticky)
[![CI-CD](https://github.com/enten/ngx-sticky/actions/workflows/main.yml/badge.svg)](https://github.com/enten/ngx-sticky/actions/workflows/main.yml)
[![Coverage Status](https://coveralls.io/repos/github/enten/ngx-sticky/badge.svg)](https://coveralls.io/github/enten/ngx-sticky)
![NPM bundle size](https://img.shields.io/bundlephobia/minzip/%40enten%2Fngx-sticky)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

:warning: WIP

An Angular directive for making things sticky when the user scrolls (for Angular 2+) with no jQuery Dependency.

## Requirements

* Angular (requires Angular 4.x or higher)
* Supports all major browsers and IE11 and up (lower versions might not be supported)

## Features

* Stick all the things!
* Super smooth!
* Tested in real world projects
* Support for Angular Universal
* Prevents page-jumping when switching to sticky mode
* No jQuery or other dependencies - pure Angular solution
* Support for boundaries to make elements stop

## Installation

with npm:

```shell
npm install @enten/ngx-sticky
```

with yarn:

```shell
yarn add @enten/ngx-sticky
```

Now import the NgxStickyModule in the corresponding Module

```ts
import { NgxStickyModule } from '@enten/ngx-sticky';

@NgModule({
  declarations: [
  ],
  imports: [
    NgxStickyModule,
  ],
  providers: [],
})
export class SomeModule { }
```

## Usage

```
<div ngxSticky>
  I am sticky!
</div>
```

## Showcases

| @enten/ngx-sticky | @angular/core | rxjs |
|-|-|-|
| [`16.0.0`](https://enten.github.io/ngx-sticky/v/16.0.0) | `^16.0.0` | `^6.5.3 \|\| ^7.4.0` |
| [`15.0.0`](https://enten.github.io/ngx-sticky/v/15.0.0) | `^15.0.0` | `^6.5.3 \|\| ^7.4.0` |
| [`14.0.0`](https://enten.github.io/ngx-sticky/v/14.0.0) | `^14.0.0` | `^6.5.3 \|\| ^7.4.0` |
| [`13.0.0`](https://enten.github.io/ngx-sticky/v/13.0.0) | `^13.0.0` | `^6.5.3 \|\| ^7.4.0` |
| [`12.0.0`](https://enten.github.io/ngx-sticky/v/12.0.0) | `^12.0.0` | `^6.5.3 \|\| ^7.0.0` |
| [`11.0.0`](https://enten.github.io/ngx-sticky/v/11.0.0) | `^11.0.0` | `^6.5.3` |
| [`10.0.0`](https://enten.github.io/ngx-sticky/v/10.0.0) | `^10.0.0` | `^6.5.3` |
| [`9.0.0`](https://enten.github.io/ngx-sticky/v/9.0.0) | `^9.0.0` | `^6.5.3` |
| [`8.0.0`](https://enten.github.io/ngx-sticky/v/8.0.0) | `^8.0.0` | `^6.4.0` |
| [`7.0.0`](https://enten.github.io/ngx-sticky/v/7.0.0) | `^7.0.0` | `>=6.0.0 <6.4.0` |
| [`6.0.0`](https://enten.github.io/ngx-sticky/v/6.0.0) | `^6.0.0` | `>=6.0.0 <6.4.0` |

## Thanks to

* [@w11k/angular-sticky-things](https://github.com/w11k/angular-sticky-things)

## License

[MIT](./LICENSE)
