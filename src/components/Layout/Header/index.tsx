import React, { useState } from "react";
import { Button, TextField, makeStyles, createStyles, Theme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

import { addToList } from "../../../store/modules/list/actions";
import { Item } from "../../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface List {
  list?: Array<Item>;
}

const Header: React.FC = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const list = useSelector((state: List) => {
    return state.list?.length ? state.list?.length : 0;
  });

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Nova Tarefa" onChange={(e) => setInput(e.target.value)} />
      </form>
      <Button variant="contained" color="primary" onClick={() => input !== "" ? dispatch(addToList({ id: list + 1, title: input })) : {}}>
        Adicionar
      </Button>
    </Container>
  );
};

export default Header;
