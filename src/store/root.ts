export interface State {
  foo: string;
}

export default {
  state: (): State => ({
    foo: "bar",
  }),
};
