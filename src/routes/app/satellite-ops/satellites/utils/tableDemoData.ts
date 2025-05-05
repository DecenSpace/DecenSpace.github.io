export interface TableDemoData {
    id: string;
    name: string;
    transmissions: number;
    added: string;
}

export const tableDemoData = [
    { id: crypto.randomUUID(), name: "New satellite name", transmissions: 0, added: "1.2.2026" },
    { id: crypto.randomUUID(), name: "Satellite 1234", transmissions: 0, added: "1.2.2026" },
    { id: crypto.randomUUID(), name: "Satellite 2345", transmissions: 0, added: "1.3.2026" },
    { id: crypto.randomUUID(), name: "Satellite 3456", transmissions: 0, added: "2.1.2026" },
    { id: crypto.randomUUID(), name: "Satellite 4567", transmissions: 0, added: "7.4.2026" },
    { id: crypto.randomUUID(), name: "Satellite 5678", transmissions: 0, added: "1.5.2026" },
    { id: crypto.randomUUID(), name: "Satellite 6789", transmissions: 0, added: "12.2.2026" },
    { id: crypto.randomUUID(), name: "Satellite 7890", transmissions: 0, added: "24.1.2026" },
    { id: crypto.randomUUID(), name: "Satellite 8901", transmissions: 0, added: "12.3.2026" },
    { id: crypto.randomUUID(), name: "Satellite 9012", transmissions: 0, added: "9.4.2026" }
] satisfies Array<TableDemoData>;