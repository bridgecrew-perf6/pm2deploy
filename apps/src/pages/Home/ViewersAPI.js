import React from "react";

export default (props) => {
  const { code, data, error } = props;

  const defClass = "ViewersAPI";
  let elemClass = defClass;
  if (code === 200) elemClass = `${defClass} success`;
  else if (code && code !== 200) elemClass = `${defClass} error`;

  return (
    <div className={elemClass}>
      <h2>{`Result: ${code || ""}`}</h2>
      <br />
      {data && (
        <div>
          <h3>DATA</h3>
          {JSON.stringify(data)}
        </div>
      )}
      {error && (
        <div>
          <h3>Error</h3>
          {JSON.stringify(error)}
        </div>
      )}
    </div>
  );
};
