

function Header({bgColor,color,text}) {
  const HeaderStyle = { backgroundColor: bgColor, color : color };
  return (
    <header style = {HeaderStyle}>
      <h1>{text}</h1>
    </header>
  );
}
Header.defaultProps = {
  bgColor: '#6f736f',
  color: 'black',
  text: 'Shopping List'
};

export default Header;