import { EndPoints } from './endpoints';

export const getAllHkbHist = async () => {
  const res = await fetch(EndPoints.GET_HKBHIST.url, {
    method: EndPoints.GET_HKBHIST.method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  return res;
};

export const createHkbHist = async (data) => {
  const res = await fetch(EndPoints.POST_HKBHIST.url, {
    method : EndPoints.POST_HKBHIST.method,
    body: JSON.stringify(data),
  });

  console.log(res);
  return res;
};
