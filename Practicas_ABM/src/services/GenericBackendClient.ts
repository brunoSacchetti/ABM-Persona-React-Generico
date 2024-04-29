import BaseEntity from "../types/BaseEntity";

abstract class GenericBackendClient<T extends BaseEntity<T>> {
    protected url: string;
  
    constructor(url: string) {
      this.url = url;
    }
  
    abstract getAll(): Promise<T[]>;
  
    abstract getById(id: number): Promise<T | null>;
  
    abstract post(data: T): Promise<T>;
  
    abstract put(id: number, data: T): Promise<T>;
  }
  
  
  export default GenericBackendClient;