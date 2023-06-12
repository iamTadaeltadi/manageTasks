import { useState } from "react";

export default function AppMain(props) {
  const [input, setInput] = useState({ title: "", note: "" });
  return (
    <div className="appmain">
      <section className="appmainedit">
        <input
          type="text"
          placeholder={
            props.activeNode && props.activeNode.title !== "new add"
              ? props.activeNode.title
              : "Write you title here"
          }
          onChange={(e) => {
            setInput((prev) => {
              return { ...prev, title: e.target.value };
            });
          }}
          autoFocus
        />
        <textarea
          placeholder={
            props.activeNode && props.activeNode.title !== "new add"
              ? props.activeNode.title
              : "Write you Note here"
          }
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setInput((prev) => {
              return { ...prev, note: e.target.value };
            });
          }}
        >
          {props.activeNode && props.activeNode.notepreview}
        </textarea>
        <button
          style={{
            width: "140px",
            border: "none",
            padding: "10px",
            background: "green",
            color: "white",
            fontSize: "23px",
            borderRadius: "20px",
          }}
          onClick={() => {
            props.handleUpDate(
              props.activeNode ? props.activeNode.id : "",
              input
            );
          }}
        >
          Update
        </button>
      </section>
      <section className="review">
        <h1 className="reviewtitle">Review Note</h1>
        <div>{props.activeNode && props.activeNode.notepreview}</div>
      </section>
    </div>
  );
}
