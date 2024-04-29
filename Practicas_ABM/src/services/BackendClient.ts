import BaseEntity from "../types/BaseEntity";
import GenericBackendClient from "./GenericBackendClient";


class BackendClient<T extends BaseEntity<T>> extends GenericBackendClient<T> {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(`${this.url}/`);
    const data = await response.json();
    return data as T[];
  }

  async getById(id: number): Promise<T | null> {
    const response = await fetch(`${this.url}/${id}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data as T;
  }

  async post(data: T): Promise<T> {
    const response = await fetch(`${this.url}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as T;
  }

  async put(id: number, data: T): Promise<T> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const updatedData = await response.json();
    return updatedData as T;
  }
}

export default BackendClient;