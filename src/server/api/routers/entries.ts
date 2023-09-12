import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        price: z.string(),
        tip: z.string(),
        email: z.string(),
        comment: z.string(),
      }),
    )
    .mutation(async ({ input: { price, tip, email, comment }, ctx }) => {
      const entry = await ctx.prisma.entry.create({
        data: {
          price: Number(price),
          tip: Number(tip),
          authorId: email,
          comment: comment,
        },
      });

      return entry;
    }),
});
