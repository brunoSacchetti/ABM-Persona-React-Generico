// Función genérica para obtener datos mediante una solicitud GET
export async function getData<T>(path: string): Promise<T> {
  try {
    const response = await fetch(`${path}`, {
      method: "GET",
      mode: 'cors',  // Añadir modo CORS
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json(); // Retorna los datos en formato JSON
  } catch (error) {
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función genérica para enviar datos mediante una solicitud POST
export async function postData<T>(path: string, data: T): Promise<T> {
  try {
    const response = await fetch(`${path}`, {
      method: "POST",
      mode: 'cors',  // Añadir modo CORS
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json(); // Retorna los datos en formato JSON
  } catch (error) {
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función genérica para actualizar datos mediante una solicitud PUT
export async function putData<T>(path: string, data: T): Promise<T> {
  try {
    const response = await fetch(`${path}`, {
      method: "PUT",
      mode: 'cors',  // Añadir modo CORS
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json(); // Retorna los datos en formato JSON
  } catch (error) {
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función genérica para eliminar datos mediante una solicitud DELETE
export async function deleteData(path: string) {
  try {
    const response = await fetch(`${path}`, {
      method: "DELETE",
      mode: 'cors',  // Añadir modo CORS
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error(error); // Imprime el error en la consola
  }
}