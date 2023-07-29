import axios from "axios";
import { useEffect, useState } from "react";
import { v1 as uuid } from "uuid";

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => setState(!state);
  return [state, toggleState];
};

const useAxios = () => {
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
    } catch {}
  };
  return [data, fetchData];
};

export { useFlip, useAxios };
