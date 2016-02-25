# gulp-faker [![Build Status](https://travis-ci.org/lokesh-coder/gulp-faker.svg?branch=master)](https://travis-ci.org/lokesh-coder/gulp-faker)

> Fake random data injection


## Install

```
$ npm install --save gulp-faker
```


## Usage

```js
var gulp = require('gulp');
var faker = require('gulp-faker');

gulp.task('default', function () {
    return gulp.src('src/hello.html')
        .pipe(faker())
        .pipe(gulp.dest('dist'));
});
```


## In html

```html

<h1>Hello <faker-name-firstName/>!</h1>
<p>
    <faker-lorem-sentences/>
</p>
<h3>Details</h3>
<p>
    Title: <faker-name-jobTitle/> <br>
    Company: <faker-company-companyName/> <br>
    Phone: <faker-phone-phoneNumber/> <br>
    Portfolio: <faker-internet-url/> <br>
    Avatar: <faker-image-avatar/> <br>
    DOB: <faker-date-past/> <br>
    Address: <faker-address-streetAddress/> <br>
    Manager: <faker-name-firstName/>
</p>

``` 

## will return 

```html
<h1>Hello Luther!</h1>
<p>
    Eius deleniti voluptas iure necessitatibus non minima ut.
    Nihil aut repellendus voluptates veritatis minus.
    At culpa distinctio.
</p>
<h3>Details</h3>
<p>
    Title: Forward Marketing Strategist <br>
    Company: Ledner, Erdman and Jaskolski <br>
    Phone: 749-134-2560 <br>
    Portfolio: http://orin.com <br>
    Avatar: https://s3.amazonaws.com/uifaces/faces/twitter/diansigitp/128.jpg <br>
    DOB: Mon Nov 16 2015 22:49:32 GMT+0530 (India Standard Time) <br>
    Address: 171 Nicolas Spurs <br>
    Manager: Kathlyn
</p>

```

> Random data is produced even the same tag is repeated. for more details, take a look at [faker](https://www.npmjs.com/package/faker) library. 

### list of all tags

```html
<faker-address-zipCode/>
<faker-address-city/>
<faker-address-cityPrefix/>
<faker-address-citySuffix/>
<faker-address-streetName/>
<faker-address-streetAddress/>
<faker-address-streetSuffix/>
<faker-address-streetPrefix/>
<faker-address-secondaryAddress/>
<faker-address-county/>
<faker-address-country/>
<faker-address-countryCode/>
<faker-address-state/>
<faker-address-stateAbbr/>
<faker-address-latitude/>
<faker-address-longitude/>

<faker-commerce-color/>
<faker-commerce-department/>
<faker-commerce-productName/>
<faker-commerce-price/>
<faker-commerce-productAdjective/>
<faker-commerce-productMaterial/>
<faker-commerce-product/>

<faker-company-suffixes/>
<faker-company-companyName/>
<faker-company-companySuffix/>
<faker-company-catchPhrase/>
<faker-company-bs/>
<faker-company-catchPhraseAdjective/>
<faker-company-catchPhraseDescriptor/>
<faker-company-catchPhraseNoun/>
<faker-company-bsAdjective/>
<faker-company-bsBuzz/>
<faker-company-bsNoun/>

<faker-date-past/>
<faker-date-future/>
<faker-date-between/>
<faker-date-recent/>
<faker-date-month/>
<faker-date-weekday/>

<faker-fake/>

<faker-finance-account/>
<faker-finance-accountName/>
<faker-finance-mask/>
<faker-finance-amount/>
<faker-finance-transactionType/>
<faker-finance-currencyCode/>
<faker-finance-currencyName/>
<faker-finance-currencySymbol/>

<faker-hacker-abbreviation/>
<faker-hacker-adjective/>
<faker-hacker-noun/>
<faker-hacker-verb/>
<faker-hacker-ingverb/>
<faker-hacker-phrase/>

<faker-helpers-randomize/>
<faker-helpers-slugify/>
<faker-helpers-replaceSymbolWithNumber/>
<faker-helpers-replaceSymbols/>
<faker-helpers-shuffle/>
<faker-helpers-mustache/>
<faker-helpers-createCard/>
<faker-helpers-contextualCard/>
<faker-helpers-userCard/>
<faker-helpers-createTransaction/>

<faker-image-image/>
<faker-image-avatar/>
<faker-image-imageUrl/>
<faker-image-abstract/>
<faker-image-animals/>
<faker-image-business/>
<faker-image-cats/>
<faker-image-city/>
<faker-image-food/>
<faker-image-nightlife/>
<faker-image-fashion/>
<faker-image-people/>
<faker-image-nature/>
<faker-image-sports/>
<faker-image-technics/>
<faker-image-transport/>

<faker-internet-avatar/>
<faker-internet-email/>
<faker-internet-userName/>
<faker-internet-protocol/>
<faker-internet-url/>
<faker-internet-domainName/>
<faker-internet-domainSuffix/>
<faker-internet-domainWord/>
<faker-internet-ip/>
<faker-internet-userAgent/>
<faker-internet-color/>
<faker-internet-mac/>
<faker-internet-password/>

<faker-lorem-words/>
<faker-lorem-sentence/>
<faker-lorem-sentences/>
<faker-lorem-paragraph/>
<faker-lorem-paragraphs/>

<faker-name-firstName/>
<faker-name-lastName/>
<faker-name-findName/>
<faker-name-jobTitle/>
<faker-name-prefix/>
<faker-name-suffix/>
<faker-name-title/>
<faker-name-jobDescriptor/>
<faker-name-jobArea/>
<faker-name-jobType/>

<faker-phone-phoneNumber/>
<faker-phone-phoneNumberFormat/>
<faker-phone-phoneFormats/>

<faker-random-number/>
<faker-random-arrayElement/>
<faker-random-objectElement/>
<faker-random-uuid/>
<faker-random-boolean/>

```

## License

MIT © [lokesh-coder](https://github.com/lokesh-coder)
