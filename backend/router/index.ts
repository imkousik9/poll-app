import * as trpc from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';

import { questionRouter } from './questions';

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge('question.', questionRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
