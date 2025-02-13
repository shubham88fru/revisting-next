"use client";

import { useFormStatus } from "react-dom";

function MealFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Sending..." : "Share Meal..."}
    </button>
  );
}

export default MealFormSubmit;
