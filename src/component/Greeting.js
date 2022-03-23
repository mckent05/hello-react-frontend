import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/GreetingPage/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  const randomGreeting = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="greeting">
      {
        randomGreeting.length > 0 ? <h1>{randomGreeting[0].text}</h1> : <h1>Loading...</h1>
      }
    </div>
  );
};

export default Greeting;
