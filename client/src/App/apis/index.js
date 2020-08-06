import { EndPoints } from './endpoints';

export async function getAllHkbHist() {
  return new Promise((resolve, reject) => {
    fetch(EndPoints.GET_HKBHIST.url, {
      method: EndPoints.GET_HKBHIST.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export const createHkbHist = async (data) =>
  new Promise((resolve, reject) => {
    fetch(EndPoints.POST_HKBHIST.url, {
      method: EndPoints.POST_HKBHIST.method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export const removeHkbHist = async (id) =>
  new Promise((resolve, reject) => {
    fetch(EndPoints.DELETE_HKBHIST.url + id, {
      method: EndPoints.DELETE_HKBHIST.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export async function getCategory() {
  return new Promise((resolve, reject) => {
    fetch(EndPoints.GET_CATEGORY.url, {
      method: EndPoints.GET_CATEGORY.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export async function getPayment() {
  return new Promise((resolve, reject) => {
    fetch(EndPoints.GET_PAYMENT.url, {
      method: EndPoints.GET_PAYMENT.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
export const getLogin = async () => {
  const res = await fetch(EndPoints.GET_LOGIN.url, {
    method: EndPoints.GET_LOGIN.method,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
