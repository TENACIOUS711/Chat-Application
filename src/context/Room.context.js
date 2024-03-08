import React, { createContext, useContext, useEffect, useState } from 'react';
import { Loader } from 'rsuite';
import transformToArrayWithId from '../misc/Helpers';

import { database } from '../misc/firebase';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = transformToArrayWithId(snap.val());
      setRooms(data);
    });

    return () => {
      roomListRef.off();
    };
  }, []);
  {
    !rooms && (
      <Loader center vertical content="Loading" speed="slow" size="md" />
    );
  }
  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export const useRooms = () => useContext(RoomsContext);
