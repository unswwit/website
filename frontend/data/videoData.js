import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chip: {
    textTransform: "uppercase",
    color: "white",
    margin: "5px",
  },
});

const categories = {
  All: "All",
  "People and Blogs": "People and Blogs",
  Entertainment: "Entertainment",
};

export { useStyles, categories };
