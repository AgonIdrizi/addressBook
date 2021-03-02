import {rest} from 'msw';

const delay = 1000;

const handlers = [
  rest.get(
    'https://randomuser.me/api',
    async (req, res, ctx) => {
      return res(
        ctx.json({})
      )
    }
  )
]