export interface TableDemoData {
    id: string;
    name: string;
    transmissions: number;
    added: string;
}

export const tableDemoData = [
    { id: crypto.randomUUID(), name: "New station name", transmissions: 0, added: "1.2.2026" },
    { id: crypto.randomUUID(), name: "Station 1234", transmissions: 0, added: "1.2.2026" },
    { id: crypto.randomUUID(), name: "Station 2345", transmissions: 0, added: "1.3.2026" },
    { id: crypto.randomUUID(), name: "Station 3456", transmissions: 0, added: "2.1.2026" },
    { id: crypto.randomUUID(), name: "Station 4567", transmissions: 0, added: "7.4.2026" },
    { id: crypto.randomUUID(), name: "Station 5678", transmissions: 0, added: "1.5.2026" },
    { id: crypto.randomUUID(), name: "Station 6789", transmissions: 0, added: "12.2.2026" },
    { id: crypto.randomUUID(), name: "Station 7890", transmissions: 0, added: "24.1.2026" },
    { id: crypto.randomUUID(), name: "Station 8901", transmissions: 0, added: "12.3.2026" },
    { id: crypto.randomUUID(), name: "Station 9012", transmissions: 0, added: "9.4.2026" }
] satisfies Array<TableDemoData>;