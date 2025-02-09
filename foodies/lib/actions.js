"use server";

export async function shareMeal(formData) {
  const meal = {
    creatror: formData.get("name"),
    creatorEmail: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  console.log(meal);
}
