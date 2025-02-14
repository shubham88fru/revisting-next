"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  const meal = {
    creator: formData.get("name"),
    creatorEmail: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  await saveMeal(meal);

  revalidatePath("/meals", "layout");
  redirect("/meals");
}
