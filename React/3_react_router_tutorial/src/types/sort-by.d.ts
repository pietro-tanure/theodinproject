declare module "sort-by" {
  export default function sortBy<T>(...fields: string[]): (a: T, b: T) => number;
}