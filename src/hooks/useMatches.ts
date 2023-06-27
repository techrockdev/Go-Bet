import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useMatches = () => {
    const [matches, setMatches] = useState<{ id: string; club1: any; club2: any; odds: any; date: any; }[]>([]);
    const queryKey = ['tableData', 'https://go-bet-auth-email-pass-default-rtdb.firebaseio.com/matches.json'];
    const { data } = useQuery(queryKey, async () => {
        const response = await fetch('https://go-bet-auth-email-pass-default-rtdb.firebaseio.com/matches.json');
        const data = await response.json();
        const loadedMatches = [];
        for (const key in data) {
            loadedMatches.push({
                id: key,
                club1: data[key].club1,
                club2: data[key].club2,
                odds: data[key].odds,
                date: data[key].date,
            })
        }
        setMatches(loadedMatches);
        return data;
    });

    return {matches, data}
}