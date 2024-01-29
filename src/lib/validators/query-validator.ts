import { z } from "zod";

export const QueryValidator = z.object({
  category: z.string().optional(),
  sort: z.enum(["asc", "dsc"]).optional(),
  limit: z.number().optional(),
})

export type TQueryValiidator = z.infer<typeof QueryValidator>