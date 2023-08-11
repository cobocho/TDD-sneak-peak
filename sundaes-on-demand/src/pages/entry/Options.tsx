import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Options = ({ option }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`/${option}`).then((res) => setItems(res.data));
  }, [option]);

  return <div></div>;
};

export default Options;
