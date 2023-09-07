import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany();
  }),
  addEntry: publicProcedure
    .input(z.object({ price: z.number(), tip: z.number() }))
    .mutation(async (req) => {
      await req.ctx.prisma.entry.create({
        price: req.input.price,
        tip: req.input.tip,
      });
      return "true";
    }),
});
