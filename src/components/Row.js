import Cells from "./Cells";
import CellList from "./CellList";
import classes from "./Row.module.css";

const Row = () => (
  <div className={classes.row}>
    <CellList />
  </div>
);
export default Row;
