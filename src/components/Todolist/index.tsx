import React from "react";
import { makeStyles, createStyles, Theme, FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox } from "@material-ui/core";
import { Item } from "../../types";

import { Container } from "./styles";

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
  const classes = useStyles();

  const handleChange = () => { };

  return (
    <Container>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Tarefas</FormLabel>
        <FormGroup>
          {item?.map((item) => (
            <FormControlLabel
              control={<Checkbox checked={item.isChecked} onChange={handleChange} name={item.title} />}
              label={item.title}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default Todolist;
