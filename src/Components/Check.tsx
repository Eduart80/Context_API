import React from "react"


type FilterProps = {
  total: number
  completed: number
}

export default function Check({ total, completed }: FilterProps) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        marginBottom: "1px",
      }}
    >
      <p>{total} item(s) left</p>
      <p>Completed {completed} </p>
    </div>
  );
}
