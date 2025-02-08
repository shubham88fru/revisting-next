"use client";

function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals data, please try again</p>
    </main>
  );
}

export default Error;
