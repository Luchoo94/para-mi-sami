const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

const citasDeAmor = {

    uno : "Me gustan cuando tus ojos me miran sin parpadear,me gusta cuando me miras.",
    dos : "Tu sonrisa y la forma que miras a otro lado evitando la verguenza me enamora.",
    tres : "Tus ojos son lo mas bonito que vi en mi vida.",
    cuatro : "Me gusta cuando te concentras en tus cosas y olvidas al mundo,te ves tan bonita cuando lo haces.",
    cinco: "Me gusta sentir en mi cara tu pelo y reirme de las cosquillas.",
    seis: "Como dijo Cortazar.No sabes el desorden de emociones que me provoca tu sonrisa.",
    siete: "Me gusta cuando te reias de los nervios e intentabas evitar mi mirada.",
    ocho: "Me gustan tus labios sabor manteca de cacao.",
    nueve: "Amo lo hermosura que me presentas.",
    diez: "Amo que convivir con vos sea tan sencillo.",
    once: "Eternamente enamorado de tu playlist para bañarte.",
    doce: "Amo cumplir tus caprichos asi sean imposibles amo hacerlo.",
    trece: "En la noche a veces me duermo pensando que te tengo conmigo y me levanto extrañandote.",
    catorce:"Ni paris ni barcelona ni Estocolmo , ni ningun lugar se equiparan con estar simplemente acostados el uno al lado del otro.",
    quince: "Amo la forma en que me miras a mi y en la que miras al mundo.",
    dieciseis: "Sos mi comenzal favorita y nunca voy a cansarme de cocinarte.",
    dieciocho: "El mundo se ha encogido y solo somos vos y yo (Cortesia de me before you jaja).",
    diecinueve: "Tu sonrisa es el gesto mas dulce que jamas podria haber pedido.",
    veinte: "Mis ronquidos significaban una cosa y esa era que me sentia en casa,junto a vos.",
    veintiuno: "El despedirte por la ventana fue una de las cosas mas dificiles que vivi en mi vida.",
    veintidos: "Me hiciste el hombre mas feliz del mundo por esas tres semanas y un poco mas.",
    veintitres: "Ahora me gusta mi cumpleaños por que espero que vos me gastes por mi edad y me digas mi viejito.",
    veinticuatro: "No podia permitir llorar en frente tuyo por miedo al ridiculo pero sabia que en el fondo te sentias igual que yo.",
    veinticinco: "Agradezco a la vida por ponerme a tu lado y ojala la vida misma me siga poniendo dia a dia.",
    veintiseis: "Dormir con vos es el cielo en la tierra.",
    veintisiete: "Tus mates son la gloria.",
    veintiocho: "Comer pizza en tu colchon mientras vemos bake off siempre va a ser la cuspide de mis recuerdos.",
    veintinueve: "La anonima es nuestro lugar en el mundo.",
    treinta : "Junto a vos no existen malos momentos solo momentos donde al final terminamos abrazados.",
    treintayuno : "Tus pellizcos son la forma de amor mas pura.",
    treintaydos: "Las mordidas el labio duelen pero duele mas no sentirlas :( .",
    treintaytres: "Cuestion de tiempo me enseño a valorar momento a momento lo importante,aunque tambien quisiera revivir cada momento junto a vos una y otra vez.",
    treintaycuatro: "La espera se hizo dificil pero valio la pena cada segundo y volveria a esperarlo.",
    treintaycinco: "Gracias por amarme y dejar que te ame.",
    treintayseis: "Comprarte dulces es mi pasatiempo favorito.",
    treintayocho: "Siempre que me siento triste leo tu letra y recuerdo tu aroma y me siento bien.",
    treintaynueve: "Odio que la vida te haya puesto lejos de mi pero a la vez la amo todo por que me permitio encontrarte.",
    cuarenta: "Te extraño inclusive dormido.",
    cuarentayuno : "Amo cocinarte hamburguesas y que le pongas mucho ketchup ajsdjsa es muy lindo.",
    cuarentaydos: "Con vos crecio mi amor por la menta granizada.",
    cuarentaytres: "Las caminatas nocturnas por la ciudad son de mis memorias preferidas en el mundo.",
    cuarentaycuatro : "Siempre te voy a amar.",
    cuarentaycinco : "Sos la perfeccion hecha persona para mi,no hace falta que pienses que te falta algo,a mis ojos sos la perfeccion hecha persona.",
    cuarentayseis: "Mi cosa favorita tuya es cuando te acostas y estas por debajo mio y me miras,siempre hace que me derrita.",
    cuarentaysiete: "Orgulloso de por vida de vos y todo lo que sos.",
    cuarentayocho: "Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo Te amo.",
    cuarentaynueve: "Tu nombre es tan bonito que no puedo dejar de repetirlo ni ahora ni nunca.",
    cincuenta: "Admito haber pensado como queda mi apellido y el tuyo juntos varias veces pero no digas nada shh ajajja.",
    cincuentayuno: "Nunca me senti tan solo como cuando llegue a mi casa y no te tenia conmigo.",
    cincuentaydos: "El tiempo me enseño que cuando es con esa persona especial los contratiempos no importan.",
    cincuentaytres: "Contando los dias para verte.",
    cincuentaycuatro: "Te amo hoy y te voy a amar siempre.",
    cincuentaycinco: "Otro pasatiempo favorito es escucharte dormir a mi lado.",
    cincuentayseis: "Perdon por ser un mal novio a veces.",
    cincuentaysiete: "Tus anecdotas me iluminan el dia y la noche.",
    cincuentayocho: "Pasatiempo nuevo favorito es chusmear con vos acerca de cualquier tema.",
    cincuentaynueve: "Una vez paseando te dije lo importante que era para mi no solo la atraccion mental sino tambien la fisica y sigo pensando lo mismo,con vos me di cuenta lo sencillo que es tener ambas,amo cada parte de tu ser y estoy enamorado de vos de pies a cabeza.",
    sesenta: "Mi nuevo anhelo es poder ver one piece con vos ajjaja,es uno de mis tesoros para mi tesoro mas importante,vos.",
    sesentayuno: "Cuando no tengo ganas de levantarme y superarme me acuerdo que es por vos que quiero superarme y me levanto.",
    sesentaydos: "Mis manos no encajaron tan perfectamente con nadie en el mundo como con vos.",
    sesentaytres:"Amo las noches que pasamos y como me enamore de cada centimetro de tu cuerpo.",
    sesentaycuatro: "Mi nueva meta es aumentar mis recetas para poder darle mas comidas a mi comenzal mas hermosa.",
    sesentaycinco: "Extraño acapulco shore sonando de fondo.",
    sesentayseis: "Hiciste mi dia cuando le contaste a tus amigos sobre mi.",
    sesentaiysiete: "Tuvimos momentos dificiles y me alegra hasta el alma que hayamos podido superarlo juntos,por que vos y yo somos un equipo.",
    sesentayocho: "Cada segundo que pasa es un dia mas para mis 28 y da miedo,pero me llena el alma que vos estes ahi para hacerme reir de mi edad.",
    sesentaynueve: "La paz para mi significa vos y yo en el comedor,vos estudiando y yo cocinando con el canal de musica de fondo.",
    setenta: "Recorrer las calles vacias junto a vos y poder parar una vez por cuadra para besarte es de mis momentos favoritos.",
    setentayuno: "Sos una mujer increible.",
    setentaydos: "Imprimi nuestros dias y noches acostados en mi retina.",
    setentaytres: "Si tuviera que describir mi momento perfecto es vos y yo en la oscuridad abrazados viendo tik toks.",
    setentaycuatro: "Tu fyp era mejor que el mio jasjdja aunque aparecian muchos coreanos y me ponia celoso.",
    setentaycinco: "Perdon por ponerme celoso hasta del aire es que para mi sos lo mas grandioso y no seria para nada raro que alguien mas lo sepa.",
    setentayseis: "Una de mis memorias favoritas es mirar la de spider man que vos te asustes por las arañas y te duermas,despues de un rato te despiertes y me pidas que prenda la compu asjdasj te veias tan linda confundida y medio dormida,nunca senti tanto amor como en ese momento.",
    setentaysiete: "Me faltaron darte muchisimos mas besos.",
    setentayocho: "Amo tu pijama de tokyo ghoul.",
    setentaynueve: "Siempre vas a ser mi bebota hermosa.",
    ochenta: "Te amo por siempre amor mio firma el toxico ahre jajja."

}



function getObjectQuote(){
    loading();
    const quotes = Object.values(citasDeAmor);
    const props = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerText = props;
    complete();
}



// Event Listeners
newQuoteBtn.addEventListener('click', getObjectQuote);


// On Load
getObjectQuote();

