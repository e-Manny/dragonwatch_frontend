import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditAnalyst = ({ analyst }) => {
  const [first_name, setFirstName] = useState(analyst.first_name);
  const [last_name, setLastName] = useState(analyst.last_name);
  const [email, setEmail] = useState(analyst.email);

  const history = useHistory();

  const EditAnalyst = async () => {
    const response = await fetch(
      `#${analyst._id}`, // paht to server call that edits analyst in DD based on id
      {
        method: "PUT",
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      alert("Successfully edited analyst!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update analyst. Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/analysts");
  };

  return (
    <>
      <article>
        <h2>Edit an analyst and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label for="first_name">first_name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              id="first_name"
            />

            <label for="last_name">last_name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              id="last_name"
            />

            <label for="email">email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />

            <label for="submit">
              <button type="button" onClick={EditAnalyst} id="submit">
                Edit
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditAnalyst;
