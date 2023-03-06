function NoteItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
    </div>
  );
}
export default NoteItem;
