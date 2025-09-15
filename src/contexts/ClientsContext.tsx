import { createContext, useState, type ReactNode } from "react";

export interface Client{
    id: number,
    fullname: string,
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
    loadClients: (data: Client[]) => void;
}

export const ClientsContext = createContext<ClientContextType | undefined>(
    undefined
);

export function ClientsProvider({children}: {children: ReactNode}){
    const [clients, setClients] = useState<Client[]>([]);

    function addClient(client: Omit<Client, "id">){
        const newClient = { ...client, id:Date.now() };
        setClients((prev) => [...prev, newClient])
    }

    function deleteClient(id: number){
        setClients((prev) => prev.filter((client) => client.id !== id));
    }

    function loadClients(data: Client[]){
        setClients(data)
    }

    return (
        <ClientsContext.Provider value={{ clients, addClient, deleteClient, loadClients }}>
            {children}
        </ClientsContext.Provider>
    )
}