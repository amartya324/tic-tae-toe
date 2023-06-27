const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassname = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassname}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
