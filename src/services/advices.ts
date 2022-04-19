import axios from "axios";

export interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

const api = axios.create({
  baseURL: "https://api.adviceslip.com/advice",
});

const getAdvice = async (): Promise<IAdvice> => {
  const response = (await api.get("")).data;

  return response;
};

export { getAdvice };
