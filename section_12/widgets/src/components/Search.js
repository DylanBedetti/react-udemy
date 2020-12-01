import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log('')
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
