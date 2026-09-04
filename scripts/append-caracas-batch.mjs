import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pipelinePath = path.join(__dirname, "..", "data", "leadsPipeline.json");

const data = JSON.parse(fs.readFileSync(pipelinePath, "utf8"));

const newLeads = [
  { slug: "ilduomodeisapori", name: "Il Duomo Dei Sapori", batch: "dia9", city: "Caracas (El Hatillo)", category: "Alta Cocina Italiana & Cava", phone: "584122118928" },
  { slug: "urrutia_rest", name: "Urrutia Restaurante Vasco", batch: "dia9", city: "Caracas (Sabana Grande)", category: "Cocina Vasca & Marisquería (+62 años)", phone: "584141330300" },
  { slug: "restaurantsanpietro", name: "San Pietro Restaurante", batch: "dia9", city: "Caracas (Las Mercedes)", category: "Ristorante Italiano & Terraza VIP", phone: "584124513645" },
  { slug: "corderoccs", name: "Cordero Caracas", batch: "dia9", city: "Caracas (Tolón Las Mercedes)", category: "Alta Cocina de Autor · 50 Best Discovery", phone: "584123764580" },
  { slug: "casacanela.ve", name: "Casa Canela Café & Bakery", batch: "dia9", city: "Caracas (El Hatillo & Las Mercedes)", category: "Cafetería de Especialidad & Bakery Top 100", phone: "584241343300" },
  { slug: "modoccs", name: "MoDo Caracas", batch: "dia9", city: "Caracas (Chacao)", category: "Macrocomplejo 5 Conceptos & MoDo Bowling", phone: "584126173395" },
  { slug: "lacastanuelave", name: "La Castañuela", batch: "dia9", city: "Caracas (Las Mercedes)", category: "Templo Ibérico, Paellas & Salones Privados", phone: "584147868373" },
  { slug: "casapuglia.ve", name: "Casa Puglia Trattoria", batch: "dia9", city: "Caracas (El Hatillo)", category: "Cucina Tipica Pugliese & Horno de Piedra", phone: "584122889771" },
  { slug: "miso_ccs", name: "Miso Caracas", batch: "dia9", city: "Caracas (Rooftop Las Mercedes)", category: "Japonés de Autor, Omakase & Vista 360°", phone: "584125861709" },
  { slug: "humboldtrestaurant", name: "Restaurante Hotel Humboldt", batch: "dia9", city: "Caracas (Cima del Ávila 2.140m)", category: "Ícono Gastronómico Nacional & Acceso Teleférico", phone: "584241274645" }
];

const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Caracas" });

let added = 0;
newLeads.forEach((nl) => {
  if (!data.some((d) => d.slug === nl.slug)) {
    data.push({
      ...nl,
      status: "NUEVO",
      createdAt: today,
      lastContactDate: null,
      nextFollowUpDate: today,
      history: []
    });
    added++;
  }
});

fs.writeFileSync(pipelinePath, JSON.stringify(data, null, 2), "utf8");
console.log(`✅ Agregados ${added} nuevos prospectos de Caracas.`);
console.log(`Total Leads Registrados en Pipeline: ${data.length}`);
