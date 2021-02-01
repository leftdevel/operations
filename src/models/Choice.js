import { v4 as uuid } from "uuid";

class Choice {
  id = null;

  value = null;

  constructor({ id, value }) {
    this.id = id || uuid();
    this.value = value;
  }

  toJS() {
    return {
      id: this.id,
      value: this.value,
    };
  }
}

export default Choice;
