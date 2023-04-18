import { createContext } from 'react';
import { settings } from 'config';

const AppContext = createContext(settings);

export default AppContext;
