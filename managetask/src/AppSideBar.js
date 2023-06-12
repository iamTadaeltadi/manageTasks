export default function SideBar(props) {
  return (
    <div className="sidebar">
      <section className="sidebarheader">
        <h2>Notes</h2>

        <button onClick={() => props.addClick()}>Add</button>
      </section>

      {props.note.map((n) => {
        return (
          <section
            key={n.id}
            className={`sidebarnote ${
              n.id === props.activeNode ? "active" : null
            }`}
            active
            onClick={() => {
              return props.setActiveNode(n.id);
            }}
          >
            <section>
              <p>{n.title}</p>
              <p>LastModified: {n.lastmodified}</p>
              {n.notepreview ? (
                <p>{n.notepreview.substring(0, 50)}...</p>
              ) : null}
            </section>
            <button
              onClick={() => {
                props.deleteClick(n.id);
              }}
              className={`${n.id === props.activeNode ? "buttonactive" : null}`}
            >
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
}
