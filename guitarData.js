import { randomUUID } from 'node:crypto';

const guitars = [
    { id: randomUUID(), brand: "Fender", model: "Stratocaster", color: "Sunburst", year: 1962, price: 2500 },
    { id: randomUUID(), brand: "Gibson", model: "Les Paul", color: "Cherry Burst", year: 1959, price: 5000 },
    { id: randomUUID(), brand: "PRS", model: "Custom 24", color: "Charcoal Burst", year: 2020, price: 3500 }
];

export default guitars;
