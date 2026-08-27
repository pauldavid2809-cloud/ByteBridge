import sys
import re

file_path = r'c:\Users\A\Documents\ByteBridge\data\demosData.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    r'(trustBadges: \["Mesa Garantizada con Reserva", "Sommelier en Sala", "Estacionamiento Privado"\],)': r'\1\n    whatsappPitchCopy: "Hola equipo de Grand Chef! 🌉 Diseñamos una propuesta y WebApp exclusiva para ustedes: permite a sus comensales reservar mesas en primera fila frente al Puente sobre el Lago, elegir paquetes románticos de degustación y ordenar su carta mediterránea con conversión automática a tasa oficial.\\n\\nPrueben la demo en vivo y vean su video comercial aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/grandchef",',

    r'(trustBadges: \["Acceso Directo sin Cola", "Coctelería de Autor", "Ambiente Nocturno Premium"\],)': r'\1\n    whatsappPitchCopy: "Hola amigos de Zu House! 🥩 Estuvimos preparando esta WebApp personalizada para su steakhouse en 5 de Julio (Terraza 77). Automatiza reservas after-work desde las 5:00 PM, comanda directa de cortes de carne a la brasa y control de aforo en tiempo real para el gerente.\\n\\nMiren la demo interactiva y el Reel vertical aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/zuhouse",',

    r'(trustBadges: \["Servicio Express 20 min", "Coordinador de Eventos", "Factura Digital"\],)': r'\1\n    whatsappPitchCopy: "Hola equipo de Tannous! 🥂 Creamos una WebApp especializada para sus dos grandes fortalezas: reserva express de almuerzos ejecutivos de lunes a viernes (en menos de 20 min) y cotización automática de paquetes exclusivos para pedidas de mano y eventos privados con pase QR.\\n\\nLes comparto la demo y el video promocional:\\n👉 https://byte-bridge-tau.vercel.app/demos/tannous",',

    r'(trustBadges: \["Reserva de Lounge con QR", "Shisha Master Dedicado", "Acceso VIP sin Fila"\],)': r'\1\n    whatsappPitchCopy: "Hola gente de Room 101! 🍸 Desarrollamos una WebApp con su identidad underground: reserva de lounges VIP con hookahs, carta de cócteles insignia (101 Mule, Magic Love) y pases con código QR para noches temáticas sin cola en la entrada.\\n\\nPueden probar la demo y ver su Reel animado aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/room101",',

    r'(trustBadges: \["Pase VIP Express Digital", "Entrada sin Cola", "DJ Residentes Internacionales"\],)': r'\1\n    whatsappPitchCopy: "Hola equipo de La Barra Ventura! 🪩 Preparamos una solución para agilizar el acceso nocturno: venta y emisión de pases VIP express con código QR (validación en puerta en 1 segundo), reserva de mesas de discoteca y servicios de botellas sin tickets de papel.\\n\\nVean la demo en vivo y el video promocional:\\n👉 https://byte-bridge-tau.vercel.app/demos/labarraventura",',

    r'(trustBadges: \["Ingredientes Importados", "Chef Italiano en Cocina", "Terraza con Brisa"\],)': r'\1\n    whatsappPitchCopy: "Ciao equipo de Ciao Gastrobar! 🍝 Diseñamos una WebApp a la altura de su cocina italiana en el nivel 2 de Terraza 77: reserva de mesas en terraza, carta interactiva de pastas frescas y pizzas napolitanas con maridaje de vinos y conversión en USD/Bs oficial.\\n\\nExploren la demo interactiva y el Reel aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/ciaogastrobar",',

    r'(trustBadges: \["B-Lunch Express 15 min", "Wi-Fi para Trabajo", "Terraza al Aire Libre"\],)': r'\1\n    whatsappPitchCopy: "Hola amigos de BLAO! 🌆 Creamos una WebApp interactiva pensada para su concepto dual en Plaza 75: reservas rápidas de B-Lunch para almuerzos corporativos y mesas de terraza para las noches de Blaoke y fiesta con cócteles de autor.\\n\\nPrueben la experiencia digital y el Reel aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/blaomcbo",',

    r'(trustBadges: \["Calzado Desinfectado", "Comanda a la Pista", "Torneos Oficiales"\],)': r'\1\n    whatsappPitchCopy: "Hola equipo de Pitts Bowling! 🎳 Desarrollamos una WebApp a medida para el único centro de bowling federado de Maracaibo (C.C. Costa Verde): reserva de pistas por hora + calzado profesional, comanda de comida directo a la pista y tasa BCV en vivo.\\n\\nMiren la demo y el video comercial de 15s aquí:\\n👉 https://byte-bridge-tau.vercel.app/demos/pittsbowling",',

    r'(trustBadges: \["Game Master Incluido", "Sin Límite de Tiempo", "Stand-Up Comedy Semanal"\],)': r'\1\n    whatsappPitchCopy: "Hola gente de The Corner! 🎲 Preparamos una WebApp temática con su ludoteca digital interactiva: catálogo de más de 50 juegos de mesa con filtros por jugadores y tiempo, carta de pociones/tragos y reserva de salón para eventos privados.\\n\\nLes comparto la demo y el Reel animado:\\n👉 https://byte-bridge-tau.vercel.app/demos/corner",'
}

for pattern, replacement in replacements.items():
    content = re.sub(pattern, replacement, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
