import React from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles, createStyles,
  Theme, FormControl, FormControlLabel,
  FormLabel, FormGroup, Checkbox
} from "@material-ui/core";
import { Item } from "../../types";

import { Container } from "./styles";

import { removeFromList, toggleCheckbox } from "../../store/modules/list/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

interface Props {
  item?: Array<Item>;
}

const Todolist: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClicked = (item: Item) => {
    dispatch(toggleCheckbox(item));
  }
  const handleDoubleClicked = (item: Item) => {
    dispatch(removeFromList(item));
  }

  return (
    <Container>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Tarefas</FormLabel>
        <FormGroup>
          {item?.map((item) => (
            <FormControlLabel
              key={item.id} control={<Checkbox checked={item.isChecked}
                onClick={() => handleClicked(item)}
                onDoubleClick={() => handleDoubleClicked(item)}
                name={item.title} />}
              label={item.title}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default Todolist;
