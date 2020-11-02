// import { lowerCase } from '@micro-ux/micro-dash'; // its ok for node js usecases
// import { lowerCase } from '@micro-ux/micro-dash.string'; // we will not do this

// const lowerCase = require('@micro-ux/micro-dash.lowercase'); // optimal bundling

const { lowerCase } = require('@micro-ux/micro-dash'); // optimal bundling

// console.log('lowerCase', global);
// console.log('lowerCase', lowerCase);
console.log('lowerCase', lowerCase('Hello Worldsss'));
