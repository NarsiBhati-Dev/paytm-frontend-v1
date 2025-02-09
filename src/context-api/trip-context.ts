import { createContext } from "react";

interface TripContextTypes {
  trip: string;
  setTrip: React.Dispatch<React.SetStateAction<string>>;
}

const tripContext = createContext<TripContextTypes | null>(null);

export default tripContext;
