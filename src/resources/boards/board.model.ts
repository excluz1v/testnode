import {  BoardInterface, ColumnInterface } from 'src/ts/interfaces';
import uuid from 'uuid';
import {Column} from '../column/Column.model';


export class Board implements BoardInterface {
  constructor({ id = uuid.v4(), title, columns }:BoardInterface) {
    this.id = id;
    this.title = title;
    this.columns = Board.createColumn(columns);
  }

  id: string;

  title: string;

  columns: ColumnInterface[];

  static createColumn(ArrOfColumns:ColumnInterface[]|[]) {
    return [...ArrOfColumns].map((col) => new Column(col));
  }
}