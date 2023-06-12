import "./index.css";

import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-brands-svg-icons";
import AppSideBar from "./AppSideBar";
import AppMain from "./AppMain";

function HomePage() {
  const [note, setNote] = React.useState([
    {
      id: 1,
      title: "FootBall",
      lastmodified: "1 mim ago",
      notepreview: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
      quaerat illum aspernatur omnis alias libero laborum laudantium vero
      repudiandae. Tenetur impedit veniam saepe libero quibusdam cupiditate,
      omnis temporibus nam dicta ipsam, nobis eveniet aspernatur corporis ipsa.
      Suscipit, aliquid perspiciatis nemo vel harum, dolor atque fugiat rerum
      nobis soluta aliquam?`,
    },
    {
      id: 2,
      title: "Arsenal",
      lastmodified: "2 mim ago",
      notepreview: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
    quaerat illum aspernatur omnis alias libero laborum laudantium vero
    repudiandae. Tenetur impedit veniam saepe libero quibusdam cupiditate,
    omnis temporibus nam dicta ipsam, nobis eveniet aspernatur corporis ipsa.
    Suscipit, aliquid perspiciatis nemo vel harum, dolor atque fugiat rerum
    nobis soluta aliquam?`,
    },
  ]);

  const [activeNode, setActiveNode] = React.useState(false);

  const addClick = () => {
    setNote((prevNote) => {
      return [
        ...prevNote,
        {
          id: prevNote.length + 1,
          title: "new add",
          lastmodified: "2 min ago",
        },
      ];
    });
  };

  const handleUpDate = (id, input) => {
    const notes = note.map((not) => {
      if (not.id === id) {
        return {
          id: id,
          title: input.title ? input.title : not.title,
          lastmodified: "2 min ago",

          notepreview: input.note ? input.note : not.notepreview,
        };
      }
      return not;
    });

    setNote(notes);
  };

  const deleteClick = (id) => {
    setNote(
      note.filter((n) => {
        return n.id !== id;
      })
    );
  };

  const findActiveNode = () => {
    const value = note.find((n) => activeNode === n.id);
    return value;
  };

  const node = findActiveNode();

  return (
    <div className="container">
      <AppSideBar
        note={note}
        deleteClick={deleteClick}
        addClick={addClick}
        activeNode={activeNode}
        setActiveNode={setActiveNode}
      />
      <AppMain activeNode={node} note={note} handleUpDate={handleUpDate} />
    </div>
  );
}

export default HomePage;
