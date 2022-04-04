# Stripe Money format

A simple js function to format numbers to stripe's smallest common currency unit format

Supports most International Curriences.

## Usage

### ES6

```js
import {toStripeFormat} from "stripe-money-format";

const number = "86,753.09";
console.log(toStripeFormat(number)); // 8675309
```

### CommonJS

```js
const toStripeFormat = require("stripe-money-format");

const number = "86,753.09";
console.log(toStripeFormat(number)); // 8675309
```

## International Currency Support

Should support any currency shown by the node Intl package: [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### ES6 Example

```js
import {toStripeFormatCustomCurrency} from "stripe-money-format";

const number = "123456.789";
const currency = "EUR";
const language = "de-DE";

console.log(toStripeFormatCustomCurrency(currency, language, number)); // 12345679
```

### Common JS Example

```js
const {toStripeCustomCurrency} = require("stripe-money-format");

const number = "123456.789";
const currency = "EUR";
const language = "de-DE";

console.log(toStripeCustomCurrency(currency, language, number)); // 12345679
```
