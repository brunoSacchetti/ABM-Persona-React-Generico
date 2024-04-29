export default interface BaseEntity<T> {
    id: number;
    [key: string]: T | number | undefined | any[] | string | boolean | any;
}