# @enten/ngx-sticky

[![NPM Version](https://img.shields.io/npm/v/@enten/ngx-sticky.svg)](https://npmjs.com/package/@enten/ngx-sticky)
[![NPM Dependencies](https://img.shields.io/david/enten/ngx-sticky.svg)](https://david-dm.org/enten/ngx-sticky)
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

## Thanks to

* [@w11k/angular-sticky-things](https://github.com/w11k/angular-sticky-things)

## License

[MIT](./LICENSE)
