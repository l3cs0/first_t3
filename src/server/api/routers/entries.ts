import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany({ orderBy: [{ createdAt: "desc" }] });
  }),
  create: publicProcedure
    .input(
      z.object({
        price: z.string().optional(),
        tip: z.string().optional(),
        email: z.string(),
        comment: z.string().optional(),
      }),
    )
    .mutation(async ({ input: { price, tip, email }, ctx }) => {
      const entry = await ctx.prisma.entry.create({
        data: {
          price: Number(price),
          tip: Number(tip),
          authorId: email,
          comment: "comment",
        },
      });

      return entry;
    }),
});
