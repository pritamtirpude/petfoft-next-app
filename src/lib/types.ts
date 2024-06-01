import { Pet } from "@prisma/client";
import { petFormSchema } from "./validations";
import { z } from "zod";

export type PetEssentials = Omit<
  Pet,
  "id" | "createdAt" | "updatedAt" | "userId"
>;

export type PetFormType = z.infer<typeof petFormSchema>;
