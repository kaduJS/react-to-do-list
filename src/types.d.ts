import { type } from "os";

type Item = {
  id?: number;
  title?: string;
  isChecked?: boolean;
};

type Action = {
  type: string | undefined;
  payload: Array<Item> | any;
}