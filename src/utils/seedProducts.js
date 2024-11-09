import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

// Datos de los productos
const zapatillasDB = [
  // Adidas
    {
    id: "a1",
    category: "Adidas",
    name: "Adidas Ultraboost",
    description: "Zapatillas de running con amortiguación Boost.",
    price: 180,
    img: "/src/assets/Adidas_Ultraboost.jpg",
    stock: 20
    },
    {
    id: "a2",
    category: "Adidas",
    name: "Adidas NMD R1",
    description: "Zapatillas con diseño futurista y confort urbano.",
    price: 150,
    img: "/src/assets/Adidas_NMD_R1.jpg",
    stock: 15
    },
    {
    id: "a3",
    category: "Adidas",
    name: "Adidas Superstar",
    description: "Zapatillas icónicas con puntera de concha.",
    price: 85,
    img: "/src/assets/Adidas_Superstar.jpg",
    stock: 25
    },
    {
    id: "a4",
    category: "Adidas",
    name: "Adidas Stan Smith",
    description: "Zapatillas clásicas de cuero blanco.",
    price: 100,
    img: "/src/assets/Adidas_Stan_Smith.jpg",
    stock: 18
    },
    {
    id: "a5",
    category: "Adidas",
    name: "Adidas Gazelle",
    description: "Zapatillas retro de estilo casual.",
    price: 90,
    img: "/src/assets/Adidas_Gazelle.jpg",
    stock: 22
    },
  
    // Nike
    {
    id: "n1",
    category: "Nike",
    name: "Nike Air Max 90",
    description: "Zapatillas con unidad Air para máxima comodidad.",
    price: 120,
    img: "/src/assets/Nike_Air_Max_90.jpg",
    stock: 30
    },
    {
    id: "n2",
    category: "Nike",
    name: "Nike Air Force 1",
    description: "Zapatillas clásicas con suela gruesa y amortiguada.",
    price: 110,
    img: "/src/assets/Nike_Air_Force_1.jpg",
    stock: 12
    },
    {
    id: "n3",
    category: "Nike",
    name: "Nike React Infinity",
    description: "Zapatillas de running con amortiguación React.",
    price: 160,
    img: "/src/assets/Nike_React_Infinity.jpg",
    stock: 10
    },
    {
    id: "n4",
    category: "Nike",
    name: "Nike Blazer Mid",
    description: "Zapatillas de baloncesto retro.",
    price: 95,
    img: "/src/assets/Nike_Blazer_Mid.jpg",
    stock: 20
    },
    {
    id: "n5",
    category: "Nike",
    name: "Nike ZoomX Vaporfly",
    description: "Zapatillas de competición con tecnología ZoomX.",
    price: 250,
    img: "/src/assets/Nike_ZoomX_Vaporfly.jpg",
    stock: 8
    },
  
    // Puma
    {
    id: "p1",
    category: "Puma",
    name: "Puma Suede Classic",
    description: "Zapatillas clásicas de gamuza.",
    price: 80,
    img: "/src/assets/Puma_Suede_Classic.jpg",
    stock: 25
    },
    {
    id: "p2",
    category: "Puma",
    name: "Puma RS-X",
    description: "Zapatillas de estilo retro-futurista.",
    price: 110,
    img: "/src/assets/Puma_RSX.jpg",
    stock: 18
    },
    {
    id: "p3",
    category: "Puma",
    name: "Puma Future Rider",
    description: "Zapatillas ligeras de diseño vintage.",
    price: 85,
    img: "/src/assets/Puma_Future_Rider.jpg",
    stock: 20
    },
    {
    id: "p4",
    category: "Puma",
    name: "Puma Cali",
    description: "Zapatillas inspiradas en el estilo de vida californiano.",
    price: 90,
    img: "/src/assets/Puma_Cali.jpg",
    stock: 14
    },
    {
    id: "p5",
    category: "Puma",
    name: "Puma Softride",
    description: "Haz tu próximo movimiento con el mejor estilo de baloncesto con las Playmaker.",
    price: 120,
    img: "/src/assets/Puma_Softride.jpg",
    stock: 16
    }
];

// Función para cargar productos en Firebase
const seedProducts = async () => {
  const productsRef = collection(db, "products");

  try {
    // Recorremos los productos y los subimos a Firestore
    for (const product of zapatillasDB) {
      const { id, ...dataProduct } = product; // Desestructuramos para no enviar el id directamente
      await addDoc(productsRef, dataProduct); // Usamos await para asegurar que cada producto se suba correctamente
    }
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
};

seedProducts();
