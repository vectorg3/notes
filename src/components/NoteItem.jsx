function NoteItem(props) {
  const {title, text} = props.props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
  );
}
export default NoteItem;
