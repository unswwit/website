import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

const PaginationComp = ({ totalPages, paginate, page }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: theme.spacing(4),
      padding: "2px 2px",
      display: "flex",
      justifyContent: "center",
      "& .Mui-selected": {
        backgroundColor: "#e85f5c",
        color: "white",
      },
    },
    pagItem: {
      backgroundColor: "transparent",
      color: "#676767",
      "&:hover:not(.selected)": {
        backgroundColor: "#feb14b",
        color: "white",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        className={classes.root}
        renderItem={(item) => (
          <PaginationItem {...item} className={classes.pagItem} />
        )}
        count={totalPages}
        onChange={(_, pageNumber) => paginate(pageNumber)}
        page={page}
      />
    </div>
  );
};

export default PaginationComp;
