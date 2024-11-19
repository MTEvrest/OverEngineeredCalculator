import React, { createContext } from 'react';

export const CalcContext = createContext<React.Dispatch<React.SetStateAction<number>>>(() => undefined);