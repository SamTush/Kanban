import moviesCounter from './itemsCounter.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.document = dom.window.document;

dom.window.document.body.innerHTML = `<div class='home'></div>`;

test('it should display the correct number of items', () => {
  const movies = [
    { name: 'Movie 1' },
    { name: 'Movie 2' },
    { name: 'Movie 3' },
  ];
  const expectedResult = `<span>${movies.length}</span>`;
  const mockElement = document.querySelector('.home');
  moviesCounter(movies, mockElement);
  expect(mockElement.innerHTML).toBe(expectedResult);
});