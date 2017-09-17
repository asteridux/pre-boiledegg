import { h, render } from 'preact';
import { assert } from 'chai';

import { App } from '../../src/app/';

describe('App', () => {
  let testingDiv;

  beforeAll(() => {
    testingDiv = document.createElement('div');

    (document.body || document.documentElement).appendChild(testingDiv);
  });

  beforeEach(() => {
    testingDiv.innerHTML = '';
  })

  afterAll(() => {
    testingDiv.parentNode.remove(testingDiv);
    testingDiv = null;
  });

  describe('Intro', () => {
    it('should render intro', async () => {
      render(<App />, testingDiv);

      await sleep(1);

      assert.include(testingDiv.innerHTML, 'Welcome to Pre-Boiledegg!');
    });
  });
});
