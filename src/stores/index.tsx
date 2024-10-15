import { create } from "zustand";
import { AppLocation } from "../interfaces/app-data";

type AppData = {
    location: string;
    setLocation: (location: AppLocation) => void;
}

export const useAppStore = create<AppData>((set: Function) => ({
    location: "",
    setLocation: (location: AppLocation) => {
        set(
            (state: AppData) => {
                return {
                    ...state,
                    location: location
                }
            }
        )
    }
})) 