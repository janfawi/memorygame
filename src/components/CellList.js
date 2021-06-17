import Cells from "./Cells";
import CellItem from "./CellItem";
import classes from "./Row.module.css";

function CellList(props) {
  return (
    <div className={classes.row}>
      {Cells.map((cell) => {
        return <CellItem cellItemId={cell.id} cellItemImage={cell.image} />;
      })}
    </div>
  );
}

export default CellList;
