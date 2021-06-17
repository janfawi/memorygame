import Cells from "./Cells";
import classes from "./CellItem.module.css";
const CellItem = (props) => {
  return (
    <div className={classes.item}>
      <p>
        <img alt={props.cellItemId} src={props.cellItemImage} />
        <p>{props.cellItemId}</p>
      </p>
    </div>
  );
};

export default CellItem;
