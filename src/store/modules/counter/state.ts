const state = {
  count: 0,
};
export type State = typeof state;
export default (): State => state;
