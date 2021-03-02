import React from 'react';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { usersMockData } from './test-utils/mockData';

const server = setupServer(
  rest.get(`https://randomuser.me/api/`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const page = query.get('page');
    const results = query.get('results');
    console.log(results);
    return res(ctx.json(usersMockData));
  })
);

beforeAll(() => {
  server.listen();
});
afterAll(() => server.close());

describe('', () => {
  it('afo', () => {
    const container = render(<h2>Test</h2>);
    expect(1).toBe(1);
  });
});
