const ReloadLink = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = to; // Performs the full page reload
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ReloadLink;