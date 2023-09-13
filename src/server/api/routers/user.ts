import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUserAvatarById: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const user = await clerkClient.users.getUser(input.userId);

      return {
        avatar: user?.profileImageUrl,
        firstname: user?.firstName,
        lastname: user?.lastName,
      };
    }),
});
