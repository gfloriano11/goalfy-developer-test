import { createContext, useState, type ReactNode } from "react";

export interface Client{
    id: number,
    name: string,
    email: string,
    phone: string,
    CNPJ: string,
    address: string,
    CEP: string,
    city: string,
    state: string,
    uf: string,
    neighborhood: string
}

interface ClientContextType{
    clients: Client[],
    addClient: (client: Omit<Client, "id">) => void;
    deleteClient: (id: number) => void;
}

export const ClientsContext = createContext<ClientContextType | undefined>(
    undefined
);

export function ClientsProvider({children}: {children: ReactNode}){
    const [clients, setClients] = useState<Client[]>([
        {
            id: 1,
            name: "Gustavo Floriano",
            email: "gustavofloriano70@gmail.com",
            phone: "47992606543",
            CNPJ: "13759215920",
            address: "R. Conrado Kuehne",
            CEP: "89210016",
            city: "Joinville",
            state: "Santa Catarina",
            uf: "SC",
            neighborhood: "Itaum"
        },
        {
            id: 2,
            name: "Johann Gossen Ruth",
            email: "johann.ruth@gmail.com",
            phone: "99999999",
            CNPJ: "132456789",
            address: "Rua Legal",
            CEP: "89210017",
            city: "Joinville",
            state: "Santa Catarina",
            uf: "SC",
            neighborhood: "Anita Garibaldi"
        }
    ]);

    function addClient(client: Omit<Client, "id">){
        const newClient = { ...client, id:Date.now() };
        setClients((prev) => [...prev, newClient])
    }

    function deleteClient(id: number){
        setClients((prev) => prev.filter((client) => client.id !== id));
    }

    return (
        <ClientsContext.Provider value={{ clients, addClient, deleteClient }}>
            {children}
        </ClientsContext.Provider>
    )
}