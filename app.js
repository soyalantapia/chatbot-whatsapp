const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");



// ----------------------------------------------------------------



const flowDeks = addKeyword(["Decks", "Deck", "Deckss"])
  .addAnswer([
    "Gracias por tu consulta",
    "Los deck que comercializamos son de WPC lo cual los hace un material libre de mantenimiento, el mismo se vende por metro cuadrado de kit, quiere decir que el metro cuadrado te incluye las tablas de deck, rieles de fijación, clips y tornillos, los valores del m2 serian los siguientes",
    "          ",
    "-Deck Rayado: 26.000 pesos por m2 de kit",
    "          ",
    "-Deck Veteado: 28.000 pesos por m2 de kit",
    "          ",
    "-Deck Co extrusión: 32.000 pesos por m2 de kit",
    "          ",
  ])
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/1.-decks-Milemor-.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.-decks-Milemor.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3.-decks-Milemor.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/4.-decks-Milemor.jpeg'})
  //MP4
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/5.-decks-Milemor.mp4'})
  //PDF
    .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/6.-decks-Milemor.pdf'})
  .addAnswer(
    "¿Que cantidad y que modelos estabas buscando?.",
    {
      delay: 4500,
    }
  );



// ----------------------------------------------------------------



const flowPuertaBlindada = addKeyword(["Puerta Blindada", "Puertas Blindada", "Puertas Blindadas,Puerta"])
  .addAnswer([
    "Hola!", 
    "Muchas gracias Por comunicarse con Puertas Terranova",
    "          ",
    "PRECIO Y FORMA DE PAGO",
    "Puerta 50mm (3 MODELO)",
    "Deposito/Tranferencia: 104.000$Ar",
    "Tarjetas Bancarias VISA, MASTER O CABAL / 12 Cuotas: 12.500$Ar",
    "          ",
    "CARACTERÍSTICAS TÉCNICAS DE LA PUERTA",
    "Mirador óptico 180°",
    "Marco de acero C18",
    "Hoja de acero doble estampado C20",
    "Cerradura multianclaje 10 pernos",
    "4 bisagras antibarreta",
    "Contramarco incluído",
    "5/7 llaves computadas",
    "Medida Externa de Marco a Marco: 96x205",
    "Medidas de paso: 82x196",
    "          ",
    "Para ver Videos de las puerta, por favor, haga CLICK en el siguiente enlace:",
    "https://www.youtube.com/watch?v=9071_mm2Ork&list=PLtcuXWodYnmrfvq2hiLB4EJkT6fWSnUP5",
    "          ",
    "Para ver Catalogo de las puerta, por favor, haga CLICK en el siguiente enlace:" ,
    "https://drive.google.com/file/d/1rsL1Oe7NuODvEwf7IMZG8is5NMhhwesN/view?usp=sharing",
    "          ",
    "para conocer otros productos que importamos y distribuimos click aqui",
    "https://www.milemor.com/shop",
    "          ",
    "consulte descuentos por pago contado",
    "          ",

  ])
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/1puerta.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.puerta.jpeg'})
  //MP4
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3.puerta.mp4'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/4.puerta.mp4'})

  //PDF
    .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.puertas.pdf'})
  .addAnswer("Te envié características, precios e imagines del producto, Tenes alguna otra duda, consulta o algo más en lo que te pueda ayudar? Avísame y con gusto te ayudo por aquí",{delay: 4500}
  );



// ----------------------------------------------------------------


const flowPiso1 = addKeyword(["1️⃣", "1", "primero", "el primero","numero uno"]).addAnswer([
    "Perfecto para ventas mayores de 100m2 tenemos los lotes a precio mayorista por pallet cerrados, aca te paso los modelos para que puedas ver los que disponemos","          ", "(EN EL CATALOGO TE FIGURA LA CANTIDAD DE METROS CUADRADOS QUE TRAE CADA PALLET)",
  ])
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/1.piso_.jpeg'})
  //MP4
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.piso_.mp4'})
  //PDF
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3.piso_.pdf'})
  
const flowPiso2 = addKeyword(["2️⃣", "2", "segundo", "el segundo","numero dos"]).addAnswer([
"Perfecto para esos metros te puedo ofrecer las siguientes lineas de pisos con estos tonos, el valor que te paso de cada una por m2",
"          ",
"-LÍNEA SMART 3,5MM SPC (7.350 PESOS EL METRO CUADRADO)",
"          ",
"-LÍNEA ETERNITY 4MM SPC (7.350 PESOS EL METRO CUADRADO)",
"          ",
"-LINEA TIMBERLUX 4MM TABLA EXTRA ANCHA (8.350 PESOS EL METRO CUADRADO)",
"          ",
"-LINEA CLIMATE 4MM (8.700 PESOS EL METRO CUADRADO)",
])
.addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/1.piso_.jpeg'})
//MP4
.addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.piso_.mp4'})
//PDF
.addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3.piso_.pdf'})


const flowPiso = addKeyword(["piso", "pisos", "pis"]).addAnswer([
  "Para conocer tu requerimiento y brindarte una asesoría personalizada respondé la siguiente encuesta:",
  "1️⃣ Quiero cotizar mas de 100m2 (venta por lotes cerrados)",
  " 2️⃣ Quiero cotizar menos de 100m2 (venta por cajas",
]);


// ----------------------------------------------------------------



const flowVerona = addKeyword(["Vereno", "Vereno - Duratej"])
  .addAnswer([
    'Gracias por su consulta, las simil tejas de la linea Duratej vienen con 25 años de garantia, son super resistentes, térmicas y no se oxidan, el costo de la chapa es de 5750 pesos el metro lineal y vienen de 1,05 de ancho y 2,3 milimetros de espesor total, le envio fotos y videos del producto! por cualquier otra consulta me avisa, mi nombre es Roger y quedo a disposición, que tengas un excelente día', 
    "          ",
    'Para conocer otros tejados click aquí',
    'https://www.milemor.com/shop/category/techos-38',
    'consulte descuentos por pago contado', 
    "          ",
  ])
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/1.-techo.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2.-techos.mp4'})
  //MP4
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3-techos.mp4'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/4.puerta.mp4'})
  //PDF
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/4.-techos-01-Duratej-Chapa-Transparente-FRP.pdf'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/5.-techos-01-Duratej-Chapa-UPVC.pdf'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/6.-trechos-01-Duratej-Teja-de-Resina-Romana-ASA.pdf'})


  .addAnswer(
    "Te envié características, precios e imagines del producto, Tenes alguna otra duda, consulta o algo más en lo que te pueda ayudar? Avísame y con gusto te ayudo por aquí",
    {
      delay: 4500,
    }
  );




// ----------------------------------------------------------------



const flowTecho = addKeyword(["techo", "Techos", "techos", "tech"])
  .addAnswer([
    "Hola buenos días",
    "Gracias por su consulta, las chapas de la linea Duratej vienen con 25 años de garantia, son super resistentes, térmicas y no se oxidan, Te puedo ofrecer estos 3 modelos en las siguientes medidas y valores:",
    "          ",
    "5.750 pesos el metro lineal (Lamina de 2,40 o 3,06 de largo x 1,05 de ancho, 2,3mm de espesor)",
    "          ",
    "5.350 pesos el metro lineal de la trapezoidal blanca (Lamina de 3,00 de largo x 1,13 de ancho, 2mm de espesor)",
    "          ",
    "2.750 pesos el metro lineal de la acanalada transparente (Lamina de 3,00 de largo x 0,93 de ancho, 1mm de espesor)",
    "          ",
    "le envio fotos y videos del producto! por cualquier otra consulta me avisa, quedo a disposición y aprovecho a desearle un excelente dia",
    "          ",
    "https://www.milemor.com/shop?search=duratej&order",
  ])
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/3techos-milemor-whatsapp.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/4.techos-milemor-whatsapp.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/2techos-milemor-whatsapp.jpeg'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/techos-milemor-whatsapp.jpeg'})
  .addAnswer('  ',{ media:'https://file-examples.com/storage/fe863385e163e3b0f92dc53/2017/04/file_example_MP4_480_1_5MG.mp4'})
  
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/WhatsApp-Video-2023-01-31-at-11.01.02-1.mp4'})
  .addAnswer('  ',{ media:'https://milemorlowcost.com/wp-content/uploads/2023/02/01-milemor-whatsapp-Duratej-Teja-de-Resina-Romana-ASA-1.pdf'})
  .addAnswer(
    "Te envié características, precios e imagines del producto, Tenes alguna otra duda, consulta o algo más en lo que te pueda ayudar? Avísame y con gusto te ayudo por aquí",
    {
      delay: 4500,
    }
  );



// ----------------------------------------------------------------


//Primer mensaje que se envia
const flowPrincipal = addKeyword(["hola", "ole", "alo", 'consulta', 'tengo una consulta', 'hol', 'hla'])
  .addAnswer(
    "🙌 Hola bienvenido *Milemor*, nos alegra tenerte por aqui, estoy para ayudarte. elige una de las opciones",
    {
      buttons: [
        {
          body: "Pisos",
        },
        {
          body: "Techos",
        },
        {
          body: "Vereno - Duratej",
        }
      ],
    }
  )
  .addAnswer("Aqui te dejo mas opciones, para que puedas elegir.", {
    buttons: [
      {
        body: "Puerta Blindada",
      },
      {
        body: "Decks",
      },
    ],
  });


// ----------------------------------------------------------------







const flowagradecimiento = addKeyword(["gracias", "grac"]).addAnswer(
  "🙌 Gracias a ti, cualquier cosa nos podras encontrar en",
  "www.milemor.com"
);

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([
    flowPrincipal,
    flowagradecimiento,
    flowPiso,
    flowTecho,
    flowVerona,
    flowPiso1,
    flowPiso2,
    flowDeks,
    flowPuertaBlindada
  ]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
