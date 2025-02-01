import { useAppDispatch } from "./store";
import { fetchRandomNumber } from "./randomNumberSlice";


export const useFetchRandomNumber = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(fetchRandomNumber());
  };
};