import { useState } from 'react';

const ChessBoard = ({ size }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const chessBoard = Array(size)
    .fill(null)
    .map(() => Array(size).fill(''));

  const itemHovered = function (rowIdx, colIdx) {
    setSelectedCell([rowIdx, colIdx]);
  };

  const itemRemovedFromHovered = function () {
    setSelectedCell(null);
  };

  const getSquareColor = function (rowIdx, colIdx) {
    if (!selectedCell) return '';

    const [selectedRowIdx, selectedColIdx] = selectedCell;

    if (rowIdx == selectedRowIdx && colIdx == selectedColIdx) {
      return 'lightBlue';
    }
    if (
      Math.abs(rowIdx - selectedRowIdx) === Math.abs(colIdx - selectedColIdx)
    ) {
      return 'darkBlue';
    }

    return '';
  };
  return (
    <>
      <div className="chessBoard">
        {chessBoard.map((row, rowIdx) =>
          row.map((_, colIdx) => {
            const isDark = (rowIdx + colIdx) % 2 === 1;
            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`square ${isDark ? 'black' : 'white'}`}
                style={{ backgroundColor: getSquareColor(rowIdx, colIdx) }}
                onMouseEnter={() => itemHovered(rowIdx, colIdx)}
                onMouseLeave={itemRemovedFromHovered}
              ></div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ChessBoard;
