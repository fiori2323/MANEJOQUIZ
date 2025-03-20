// preguntassss
const questions = [
    {
      numb: 1,
      question: "En una vía urbana de sentido único ¿dónde se colocará para girar a la izquierda?",
      answer: "En el borde izquierdo de la calzada.",
      options: [
        "En el centro de la calzada.",
        "En el borde derecho de la calzada.",
        "En el borde izquierdo de la calzada."
      ]
    },
    {
      numb: 2,
      question: "Como norma general, las luces delanteras de los vehículos son de color:",
      answer: "Blanco",
      options: [
        "Blanco",
        "Rojo",
        "Amarillo"
      ]
    },
    {
      numb: 3,
      question: "Qué deben hacer los conductores para facilitar el paso a un coche de bomberos en servicio de emergencia?",
      answer: "Apartarse normalmente a la derecha y, si es necesario, detenerse.",
      options: [
        "Avisar a otros conductores usando repetidamente la bocina.",
        "Aumentar la velocidad para no ser un obstáculo.",
        "Apartarse normalmente a la derecha y, si es necesario, detenerse."
      ]
    },
    {
      numb: 4,
      question: "Debido al tránsito, lleva detenido más de dos minutos en el interior de un túnel. ¿Qué medida de seguridad, de las indicadas a continuación, debe tomar?",
      answer: "Parar el motor.",
      options: [
        "Conectar la señal de emergencia.",
        "Apagar las luces.",
        "Parar el motor."
      ]
    },
    {
      numb: 5,
      question: "Al circular sobre una calzada mojada la distancia de detención será:",
      answer: "Mayor que cuando la calzada se encuentra seca.",
      options: [
        "Menor que cuando la calzada se encuentra seca.",
        "Mayor que cuando la calzada se encuentra seca.",
        "Igual que cuando la calzada se encuentra seca."
      ]
    },
    {
      numb: 6,
      question: " Cuando no hay senda peatonal marcada en el piso ¿por dónde debemos cruzarlas calles?",
      answer: "En la esquina, por la prolongación de la vereda sobre la calle.",
      options: [
        "A mitad de cuadra.",
        "En coincidencia con las paradas de transporte.",
        "En la esquina, por la prolongación de la vereda sobre la calle."
      ]
    },
    {
      numb: 7,
      question: "Ud. está llegando a un cruce de calles sin semáforos ni policía, una persona está cruzando por la senda peatonal, Ud. debe:",
      answer: "Parar y cederle el paso al peatón.",
      options: [
        "Parar y cederle el paso al peatón.",
        "Disminuir la marcha y tener cuidado.",
        "Seguir y atravesar el cruce, porque tiene prioridad."
      ]
    },
    {
      numb: 8,
      question: "Al atravesar túneles o puentes en una ruta ¿Está permitido adelantarse a otro vehículo?",
      answer: "No.",
      options: [
        "Sí.",
        "No.",
        "Según los días y horas."
      ]
    },
    {
      numb: 9,
      question: "¿Qué significa la doble línea continua amarilla?",
      answer: "Indica para ambos sentidos de circulación que no debe ser traspasada ni se puede circular sobre ella.",
      options: [
        "Indica para ambos sentidos de circulación que no debe ser traspasada ni se puede circular sobre ella.",
        "Es una señalización que se utiliza únicamente para dividir los sentidos decirculación.",
        "Significa que sólo pueden circular vehículos particulares."
      ]
    },
    {
      numb: 10,
      question: "¿Qué es una arteria de doble mano?",
      answer: "Una vía donde se circula en ambos sentidos de tránsito.",
      options: [
        "Una vía reservada al uso de transporte público.",
        "Una vía ancha que se cruza con otra vía.",
        "Una vía donde se circula en ambos sentidos de tránsito."
      ]
    },
    {
      numb: 11,
      question: "De noche, dentro de la ciudad ¿Está permitido utilizar la luz de largo alcance o luces altas?",
      answer: "No, dentro de la ciudad está prohibida su utilización.",
      options: [
        "No, dentro de la ciudad está prohibida su utilización.",
        "Sí, pero únicamente cuando circule a más de 40 kilómetros por hora y la víano esté iluminada.",
        "Sí, cuando la vía esté insuficientemente iluminada, siempre que observe queno hay posibilidad de producir encandilamientos."
      ]
    },
    {
      numb: 12,
      question: "¿Cuál es la velocidad máxima permitida en calles?",
      answer: "40 km/h.",
      options: [
        "30 km/h.",
        "40 km/h.",
        "50km/h."
      ]
    },
    {
      numb: 13,
      question: "¿Cuál es la velocidad máxima permitida en semi autopistas según la Ley 24.449?",
      answer: "120 km/h.",
      options: [
        "80 km/h.",
        "100 km/h.",
        "120 km/h."
      ]
    },
    {
      numb: 14,
      question: "Entre los efectos que produce el alcohol en el conductor se encuentra la:",
      answer: "Incorrecta apreciación de distancias y velocidades.",
      options: [
        "Ampliación del campo visual.",
        "Incorrecta apreciación de distancias y velocidades.",
        "Disminución de la distancia de frenado."
      ]
    },
    {
      numb: 15,
      question: "¿Cuál es la velocidad máxima permitida en autopista según la Ley 24.449?",
      answer: "130 km/h.",
      options: [
        "60 km/h.",
        "80 km/h.",
        "130 km/h."
      ]
    },
    {
      numb: 16,
      question: "¿Cuál es la forma correcta de adelantarse a otro vehículo?",
      answer: "Por la izquierda, haciendo las señales respectivas.",
      options: [
        "Por la izquierda, haciendo las señales respectivas.",
        "Por la banquina.",
        "Por la derecha."
      ]
    },
    {
      numb: 17,
      question: "¿Qué debe hacer si observa que un vehículo está a punto dealcanzarlo y pasarlo?",
      answer: "Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.",
      options: [
        "Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.",
        "Aumentar la velocidad.",
        "Es indiferente la velocidad de su vehículo."
      ]
    },
    {
      numb: 18,
      question: "¿Qué identifica la Cruz de San Andrés?",
      answer: "Cruce de vías férreas.",
      options: [
        "Cruce de caminos",
        "Cruce de vías férreas.",
        "Cruce de peatones."
      ]
    },
    {
      numb: 19,
      question: "La densidad del tránsito en zona urbana produce frecuentes congestionamientos, por lo que el conductor de una motocicleta deberá:",
      answer: "Prever y anticiparse a los posibles comportamientos de los demás usuarios.",
      options: [
        "Prever y anticiparse a los posibles comportamientos de los demás usuarios.",
        "Advertir su presencia a los demás usuarios accionando la luz de largo alcance.",
        "Aumentar la velocidad para evitar cuanto antes esta situación."
      ]
    },
    {
      numb: 20,
      question: "Cuando la luz roja del semáforo peatonal se torna intermitente ¿Qué conducta debe tomar el peatón que espera para cruzar?",
      answer: "Ambas respuestas (A y B) son correctas.",
      options: [
        "No comenzar a cruzar la calzada.",
        "Si está cruzando, finalizar el cruce con mucha precaución.",
        "Ambas respuestas (A y B) son correctas."
      ]
    },
    {
      numb: 21,
      question: "En un incidente de tránsito ¿qué significa que el conductor es considerado responsable por impericia?",
      answer: "Que no ha respondido adecuadamente a una circunstancia del tránsitopor falta de conocimiento o práctica en la conducción.",
      options: [
        "Que no ha respondido adecuadamente a una circunstancia del tránsitopor falta de conocimiento o práctica en la conducción.",
        "Que ha realizado un acto con su vehículo que las reglas de prudenciaindican no hacer, o sea, que ha actuado peligrosamente.",
        "Que ha tenido una conducta negligente al circular con un vehículo en malestado."
      ]
    },
    {
      numb: 22,
      question: "Según la Ley Nº 24.449, ¿Qué indica un cordón pintado de color rojo?",
      answer: "Que está prohibido estacionar o detenerse al costado de la acera.",
      options: [
        "Que está prohibido estacionar, pudiendo efectuarse la detención paraascenso y descenso de pasajeros.",
        "Que está prohibido estacionar o detenerse al costado de la acera.",
        "Que ese un espacio reservadoal estacionamiento exclusivo de vehículosdestinados a servicio de emergencia."
      ]
    },
    {
      numb: 23,
      question: "Según la Ley Nº 24.449, ¿qué indica un cordón pintado de color amarillo?",
      answer: "Indica que sólo está prohibido estacionar, pudiendo efectuarse detenciones para ascenso y descenso de carga y pasajeros.",
      options: [
        "Indica que sólo está prohibido estacionar, pudiendo efectuarse detenciones para ascenso y descenso de carga y pasajeros.",
        "Indica que es un lugar reservado para el estacionamiento exclusivo devehículos destinados al transporte de pasajeros.",
        "Indica que está prohibido estacionar o detenerse al costado de la acera."
      ]
    },
    {
      numb: 24,
      question: "¿Cuándo se considera que un vehículo está detenido?",
      answer: "Se considera detención a la permanencia de un vehículo junto a la acera por un tiempo estrictamente necesario para casos de control de tránsito realizado por autoridad competente, ascenso o descenso de pasajeros o para carga y descarga.",
      options: [
        "Se considera detención a la permanencia en un sector de la vía pública de un vehículo por circunstancias de la circulación o por causas de fuerza mayor.",
        "Se considera detención a la permanencia de un vehículo junto a la acera por un tiempo estrictamente necesario para casos de control de tránsito realizado por autoridad competente, ascenso o descenso de pasajeros o para carga y descarga.",
        "Lo indicado en A y B."
      ]
    },
    {
      numb: 25,
      question: "De acuerdo a lo que establece la Ley Nacional (24.449) y su reglamentación, con respecto al vehículo ¿Qué documentación debe llevar?",
      answer: "Licencia de conducir, comprobante del seguro, cédula verde, y cuando correspondiera (taxi, remis, etc.) comprobante de verificación técnica del vehículo y habilitación.",
      options: [
        "Recibo de pago de patente y comprobante de pago del seguro.",
        "Recibo de pago de patente y cédula verde.",
        "Licencia de conducir, comprobante del seguro, cédula verde, y cuando correspondiera (taxi, remis, etc.) comprobante de verificación técnica del vehículo y habilitación."
      ]
    },
    {
      numb: 26,
      question: "El alcohol produce en el conductor:",
      answer: "Un estado de euforia y de falsa seguridad en sí mismo.",
      options: [
        "Un aumento del campo visual.",
        "Un estado de euforia y de falsa seguridad en sí mismo.",
        "Una reducción del tiempo de reacción."
      ]
    },
    {
      numb: 27,
      question: "Se considera a la niebla un factor de riesgo porque:",
      answer: "Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.",
      options: [
        "Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.",
        "Aumenta la percepción de objetos pero se modifica la percepción de la distancia.",
        "Ambas respuestas, la a y la b, son correctas."
      ]
    },
    {
      numb: 28,
      question: "Para indicar las velocidades máximas a desarrollar en zonas donde es habitual la formación de bancos de niebla, se utilizan señales horizontales en forma de letra V invertida ¿Cómo se saben o reconocen esas velocidades máximas?",
      answer: "Lo indicado en a y b.",
      options: [
        "Cuando un conductor alcanza a ver sólo una señal V invertida, la velocidad máxima no deberá superar los 40 km/h.",
        "Si alcanza a ver dos señales V invertidas, la velocidad máxima no deberá superar los 60 km/h.",
        "Lo indicado en a y b."
      ]
    },
    {
      numb: 29,
      question: "Si al aproximarse a una bocacalle sin semáforo, Ud. advierte que un peatón pretende efectuar el cruce desde su izquierda hacia su derecha, ¿Qué deberá hacer?",
      answer: "Cederle el paso, pues el peatón tiene prioridad.",
      options: [
        "Cederle el paso, pues el peatón tiene prioridad.",
        "Avanzar a velocidad precautoria, pues sólo tiene prioridad aquel que vienepor la derecha.",
        "La prioridad de paso es del vehículo ya que su marcha es más difícil decontrolar."
      ]
    },
    {
      numb: 30,
      question: "Todo usuario de la vía pública debe, como premisa básica:",
      answer: "Asumir la obligación de no generar peligro innecesario.",
      options: [
        "Acreditar experiencia de manejo en vehículos, que por su categoría delicencia le corresponda, no menor a un año",
        "Asumir la obligación de no generar peligro innecesario.",
        "Concurrir a cursos de actualización en temática vial, con una frecuencia nomayor a seis meses."
      ]
    },
    {
      numb: 31,
      question: "En materia de responsabilidad Civil, ¿Qué es lo que se considera como factor determinante para dar inicio a una demanda?",
      answer: "La existencia de un daño real que afecte a algún particular, provocado como consecuencia del accidente.",
      options: [
        "La existencia de un daño real que afecte a algún particular, provocado como consecuencia del accidente.",
        "La edad de la persona que provoca el daño.",
        "La intención de la conducta dañosa."
      ]
    },
    {
      numb: 32,
      question: "En materia de responsabilidad Penal, ¿Puede ésta transferirse de una persona (por ejemplo, el conductor del vehículo que provoca el accidente) a otra (por ejemplo, el dueño del vehículo)?",
      answer: "No, porque la responsabilidad penal es intransferible.",
      options: [
        "Sí, y de éste último también puede transferirse a la Compañía de Seguros.",
        "El Juez resolverá en función de la gravedad del accidente y sus consecuencias.",
        "No, porque la responsabilidad penal es intransferible."
      ]
    },
    {
      numb: 33,
      question: "En cualquier circunstancia o situación posible, durante la circulación, ¿a qué le prestaría atención Ud. a fin de aumentar su seguridad y la de otros?",
      answer: "Las condiciones en que se encuentra el automóvil, las condiciones relativas a infraestructura vial, las condiciones climáticas y el estado del conductor.",
      options: [
        "Las condiciones en que se encuentra el automóvil, las condiciones relativas a infraestructura vial, las condiciones climáticas y el estado del conductor.",
        "El estado del pavimento, del auto y el clima",
        "Las condiciones en que se encuentra el conductor, caudal de tránsito y tipo de cubiertas."
      ]
    },
    {
      numb: 34,
      question: "En caso de niebla si el conductor reduce la velocidad de circulación de su vehículo, ¿Disminuiría la posibilidad de causar un accidente de tránsito?",
      answer: "Siempre, ya que la velocidad es un factor esencial por sí mismo en la producción de accidentes de tránsito.",
      options: [
        "Solo en la medida en que el conductor no conserve su derecha.",
        "Siempre, ya que la velocidad es un factor esencial por sí mismo en la producción de accidentes de tránsito.",
        "Siempre y cuando la densidad del banco de niebla sea excesivamente intensa."
      ]
    },
    {
      numb: 35,
      question: "Ante la presencia de bancos de niebla y a fin de reducir riesgos, ¿Qué es lo que se recomienda?",
      answer: "Conducir con ambas manos en el volante, reducir la velocidad ,aumentar la distancia entre vehículos y utilizar las luces del vehículo correspondientes.",
      options: [
        "Conducir con ambas manos en el volante, reducir la velocidad ,aumentar la distancia entre vehículos y utilizar las luces del vehículo correspondientes.",
        "Detenerse en la banquina hasta que levante el banco de niebla.",
        "Utilizar las luces rompe niebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor."
      ]
    },
    {
      numb: 36,
      question: "Durante la circulación, el uso de telefonía celular está prohibida para el conductor porque en tanto factor de riesgo:",
      answer: "Ambas respuestas (a y b) son correctas.",
      options: [
        "Disminuye su capacidad atencional y limita el sentido de la audición ,aumentando el tiempo de reacción.",
        "Debido a que el conductor debe mantener ambas manos comprometidas en la acción de conducir, el equipo celular reduciría la capacidad para maniobrar.",
        "Ambas respuestas (a y b) son correctas."
      ]
    },
    {
      numb: 37,
      question: "Durante la circulación, la prohibición del uso de telefonía celular afecta también al acompañante:",
      answer: "La prohibición del uso de telefonía celular afecta sólo al conductor del vehículo.",
      options: [
        "En condiciones normales, no; pero sí cuando la circulación se realiza en condiciones de máximo peligro.",
        "La prohibición del uso de telefonía celular afecta sólo al conductor del vehículo.",
        "Ambas respuestas (a y b) son correctas."
      ]
    },
    {
      numb: 38,
      question: "Ante un eventual control de tránsito en la vía pública, de constatar la Autoridad de Control algún tipo de falta por parte del conductor, el pago de la multa (sanción) podrá efectuarse:",
      answer: "Ante el Tribunal de Faltas que lo determina como sanción a aplicar.",
      options: [
        "En ese mismo momento y ante la autoridad de control si ésta lo requiere.",
        "Ante el Tribunal de Faltas que lo determina como sanción a aplicar.",
        "Ambas respuestas (a y b) son correctas."
      ]
    },
    {
      numb: 39,
      question: "Para realizar una maniobra de ingreso a.../egreso de... un garage o estacionamiento, el conductor debe cruzar la acera; si al hacerlo se encuentra con un transeúnte (peatón), ¿Qué conducta debe adoptar el conductor?",
      answer: "Priorizar la marcha del peatón, indefectiblemente.",
      options: [
        "Priorizar la marcha del peatón, indefectiblemente.",
        "Realizar una guiñada para advertir su preferencia de avance.",
        "Completar la maniobra como sea posible, para evitar su mayor exposición por encontrarse maniobrando en la vía de circulación."
      ]
    },
    {
      numb: 40,
      question: "¿Qué vehículo puede realizar el remolque de otro vehículo averiado en la vía pública?",
      answer: "Sólo los vehículos destinados a ese fin.",
      options: [
        "Cualquier vehículo que posea potencia suficiente para remolcar a otrovehículo y un elemento para asirlo firmemente sin riesgo alguno",
        "Sólo los vehículos destinados a ese fin.",
        "Cualquier vehículo que posea al menos algún tipo de elemento para asirlofirmemente sin riesgo."
      ]
    },
    {
      numb: 41,
      question: "La ubicación y posición de las placas de identificación del vehículo (chapas patente) pueden sufrir algún tipo de modificación o cambio:",
      answer: "De ninguna manera, deben estar colocadas en posición y forma normal en los lugares reglamentarios.",
      options: [
        "Sólo eventualmente pueden amplificarse para mejorar su visibilidad.",
        "De ninguna manera, deben estar colocadas en posición y forma normal en los lugares reglamentarios.",
        "Sólo está prohibido modificar la placa de identificación delantera, no así laposterior."
      ]
    },
    {
      numb: 42,
      question: "La negativa a realizar una prueba de alcoholemia ¿Constituye una falta?",
      answer: "Siempre.",
      options: [
        "Sólo si se ha incurrido en una infracción o participado en un accidente.",
        "No.",
        "Siempre."
      ]
    },
    {
      numb: 43,
      question: "Si el conductor de un vehículo toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo ¿Qué están indicando?",
      answer: "Que transportan a una persona grave a un hospital.",
      options: [
        "Que el vehículo tiene un desperfecto.",
        "Que transportan a una persona grave a un hospital.",
        "Que va a detenerse de forma brusca."
      ]
    },
    {
      numb: 44,
      question: "Se considera que la barrera está baja cuando:",
      answer: "La barrera no ha descendido, pero se ha accionado la señal lumínico-sonara.",
      options: [
        "La barrera está en posición horizontal.",
        "La barrera está descendiendo.",
        "La barrera no ha descendido, pero se ha accionado la señal lumínico-sonara."
      ]
    },
    {
      numb: 45,
      question: "¿Cuál es la velocidad máxima permitida en un cruce a nivel ferroviario sin barreras ni semáforos?",
      answer: "20 km/h.",
      options: [
        "10 km/h.",
        "20 km/h.",
        "30 km/h."
      ]
    },
    {
      numb: 46,
      question: "Cuál es la velocidad máxima permitida en avenidas, salvo señalización en lo contrario?",
      answer: "60 km/h.",
      options: [
        "40 km/h.",
        "60 km/h.",
        "80 km/h."
      ]
    },
    {
      numb: 47,
      question: "Le está permitido penetrar en un paso a nivel cuando las barreras están en movimiento?",
      answer: "No.",
      options: [
        "Sólo si me cercioro que puedo pasar con seguridad.",
        "Sí, cuando están levantándose.",
        "No."
      ]
    },
    {
      numb: 48,
      question: "Si la calzada está mojada y hay charcos ¿Pueden perder eficacia los frenos?",
      answer: "Sí, porque al mojarse no funcionan correctamente.",
      options: [
        "No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
        "No, no resultan afectados.",
        "Sí, porque al mojarse no funcionan correctamente."
      ]
    },
    {
      numb: 49,
      question: "En los túneles bien iluminados ¿Es necesario encender las luces?",
      answer: "Sí, las de posición y las bajas.",
      options: [
        "No.",
        "Sí, las de posición y las bajas.",
        "Sólo si una señal lo indica."
      ]
    },
    {
      numb: 50,
      question: "A que distancia mínima en tiempo debe circular en relación al vehículo que lo antecede?",
      answer: "A una separación en tiempo de dos segundos (2).",
      options: [
        "A una separación en tiempo de dos segundos (2).",
        "A una separación en tiempo de tres segundos (3).",
        "A una separación en tiempo de cinco segundos (5)."
      ]
    },
    {
      numb: 51,
      question: "Si la luz verde del semáforo nos da paso en un cruce de calles y por la transversal aún avanza algún vehículo, ¿qué debemos hacer?",
      answer: "No iniciar el cruce, hasta que los demás vehículos hayan completado el suyo.",
      options: [
        "No iniciar el cruce, hasta que los demás vehículos hayan completado el suyo.",
        "Avanzar, la prioridad es nuestra porque tenemos luz verde.",
        "Esperar hasta que se reinicie el verde."
      ]
    },
    {
      numb: 52,
      question: "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
      answer: "Las bebidas alcohólicas.",
      options: [
        "Cualquier medicamento.",
        "Las bebidas alcohólicas.",
        "Los refrescos azucarados."
      ]
    },
    {
      numb: 53,
      question: "¿Es recomendable comer abundantemente antes de conducir?",
      answer: "No, porque puede producir sueño.",
      options: [
        "No, porque puede producir sueño.",
        "No, es mejor conducir con mucha hambre.",
        "Sí, porque contribuye a la relajación."
      ]
    },
    {
      numb: 54,
      question: "El consumo de bebidas alcohólicas, incluso en cantidades pequeñas, entre otros, ¿Qué efectos produce?",
      answer: "Aumenta el tiempo de reacción.",
      options: [
        "Disminuye el tiempo de reacción.",
        "Mejora la precisión en el manejo del vehículo.",
        "Aumenta el tiempo de reacción."
      ]
    },
    {
      numb: 55,
      question: "Al pretender abandonar una autopista o semi autopista, ¿Cuándo se debe reducir la velocidad?",
      answer: "Cuando se haya entrado en el carril de desaceleración.",
      options: [
        "Cuando se haya entrado en el carril de desaceleración.",
        "A la entrada de la nueva vía de circulación.",
        "Poco antes de abandonar la misma."
      ]
    },
    {
      numb: 56,
      question: "El vehículo que circule por el carril obligatorio para transito lento, ¿Puede abandonarlo para adelantar a otro mas lento?",
      answer: "Si, siempre que se respete la velocidades establecidas en las señales.",
      options: [
        "Si, siempre que se respete la velocidades establecidas en las señales.",
        "Es indistinto.",
        "No, nunca."
      ]
    },
    {
      numb: 57,
      question: "Al efectuar un giro en una bocacalle estando encendida la luz verde del semáforo, entre el conductor y el peatón ¿Quién tiene prioridad de paso?",
      answer: "El peatón.",
      options: [
        "El peatón.",
        "El conductor.",
        "Es indistinto."
      ]
    },
    {
      numb: 58,
      question: "¿Qué debe hacer el conductor que transita por una calle de doble sentido de circulación y encuentra ante él su mano obstruida en el momento que se aproxima otro vehículo por la mano contraria?",
      answer: "Debe ceder el paso al otro vehículo.",
      options: [
        "Debe ceder el paso al otro vehículo.",
        "Tiene derecho a pasar primero.",
        "No existe preferencia."
      ]
    },
    {
      numb: 59,
      question: "¿Qué señales verticales (carteles) nos indican que no tenemos prioridad de paso en un cruce o bocacalle sin semáforo?",
      answer: "Señal de Pare o Ceda el Paso.",
      options: [
        "Señal de Prohibido Retomar.",
        "Señal de Pare o Ceda el Paso.",
        "Señal de Contramano o Dirección Obligatoria."
      ]
    },
    {
      numb: 60,
      question: "Cuando vemos las luces rojas de un vehículo ¿Qué significado tienen en cuanto al sentido de dirección de marcha del mismo?",
      answer: "Que está ubicado para circular en la misma dirección que nosotros.",
      options: [
        "Que viene hacia nosotros.",
        "Que está descompuesto.",
        "Que está ubicado para circular en la misma dirección que nosotros."
      ]
    },    
    {
      numb: 61,
      question: "¿Qué vehículo tiene prioridad para adelantarse, cuando varios circulan encolumnados?",
      answer: "El que circula primero detrás del vehículo que se desea adelantar.",
      options: [
        "El que lo intente primero.",
        "El último de la fila.",
        "El que circula primero detrás del vehículo que se desea adelantar."
      ]
    },
    {
      numb: 62,
      question: "¿Qué debe hacer cuando el automóvil que está adelante suyo, está esperando para doblar a la izquierda?",
      answer: "Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos.",
      options: [
        "Realizar el sobrepaso con cuidado por la izquierda.",
        "Tocar bocina para indicarle que siga.",
        "Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos."
      ]
    },
    {
      numb: 63,
      question: "En caso de niebla si el conductor reduce la velocidad de circulación de su vehículo, ¿Disminuiría la posibilidad de causar un accidente de tránsito?",
      answer: "Siempre, ya que la velocidad es un factor esencial por sí mismo en la producción de accidentes de tránsito.",
      options: [
        "Solo en la medida en que el conductor no conserve su derecha.",
        "Siempre, ya que la velocidad es un factor esencial por sí mismo en la producción de accidentes de tránsito.",
        "Siempre y cuando la densidad del banco de niebla sea excesivamente intensa."
      ]
    },
    {
      numb: 64,
      question: "En zona rural, cuando un peatón transita por la banquina ¿Por qué lado debe caminar?",
      answer: "Caminar en sentido contrario al tránsito que viene hacia él.",
      options: [
        "Caminar en sentido contrario al tránsito que viene hacia él.",
        "Transitar lo más próximo a la ruta.",
        "Caminar en el mismo sentido que el tránsito."
      ]
    },
    {
      numb: 65,
      question: "EN CASO DE REMOCIÓN DE VEHÍCULO HACIA EL CORRALÓN MUNICIPAL POR UNA INFRACCIÓN ¿QUIÉN DEBE HACERSE CARGO DEL PAGO DE LA GRÚA PARA SU LIBERACIÓN?",
      answer: "El infractor.",
      options: [
        "El infractor.",
        "La municipalidad.",
        "El seguro."
      ]
    },
    {
      numb: 66,
      question: "PARA CIRCULAR EN LA VÍA PÚBLICA ¿ES OBLIGATORIO PATENTAR Y UTILIZAR LA CHAPA PATENTE EN TODOS LOS VEHÍCULOS?",
      answer: "Si, con la chapa patente colocada.",
      options: [
        "No.",
        "Si, una vez ingresada la solicitud en el registro del automotor correspondiente, aunque no se le haya entregado la patente.",
        "Si, con la chapa patente colocada."
      ]
    },
    {
      numb: 67,
      question: "¿ESTÁ PERMITIDO LLEVAR NIÑOS EN BRAZOS O RODILLAS DEL CONDUCTOR O ACOMPAÑANTE?",
      answer: "No.",
      options: [
        "Si.",
        "No.",
        "Solo en la parte trasera del vehículo."
      ]
    },
    {
      numb: 68,
      question: "¿ESTÁ PERMITIDO ESTACIONAR EL VEHÍCULO SOBRE LA ACERA (VEREDA) PARA BAJAR A ABRIR O CERRAR EL ACCESO AUN GARAJE?",
      answer: "No.",
      options: [
        "Solo por poco tiempo.",
        "Solo si la acera es ancha.",
        "No."
      ]
    },
    {
      numb: 69,
      question: "INGERIR ALIMENTOS ANTES DE CONDUCIR PUEDE AFECTAR NEGATIVAMENTE A LA CONDUCCIÓN. POR TANTO, ANTES DE INICIAR UN VIAJE Y PARA EVITAR LA APARICIÓN DE SUEÑO DEBE:",
      answer: "Ingerir alimentos livianos.",
      options: [
        "Ingerir alimentos livianos.",
        "Ingerir alimentos de alto contenido en grasas, que dan mayor vitalidad.",
        "Abstenerse de ingerir alimentos para viajar en ayunas."
      ]
    },
    {
      numb: 70,
      question: "¿QUIÉN ES EL RESPONSABLE CIVIL POR UN ACCIDENTE DE TRÁNSITO PRODUCIDO POR UN MENOR DE EDAD POSEEDOR DEUNA LICENCIA DE CONDUCTOR?",
      answer: "El que firmó la autorización para obtener la licencia.",
      options: [
        "El que lo acompaña.",
        "El que firmó la autorización para obtener la licencia.",
        "El que le autorizó el uso del vehículo."
      ]
    },
    {
      numb: 71,
      question: "SI UD. SALE DE UN ESTACIONAMIENTO PARALELO AL CORDÓN, PREVIAMENTE DEBE:",
      answer: "Salir con precaución cuando no haya tránsito pasante y colocar la luz de giro.",
      options: [
        "Salir con precaución cuando no haya tránsito pasante y colocar la luz de giro.",
        "Salir lo más rápido posible porque tiene prioridad.",
        "Tocar bocina e incorporarse al tránsito pasante."
      ]
    },
    {
      numb: 72,
      question: "¿A QUÉ SE LE LLAMA DISTANCIA DE FRENADO?",
      answer: "A la distancia de seguridad que se debe tener con el vehículo que tiene delante.",
      options: [
        "A la cantidad de metros que lleva frenar un auto a cero.",
        "Al tiempo que lleva frenar un auto a cero.",
        "A la distancia de seguridad que se debe tener con el vehículo que tiene delante."
      ]
    },
    {
      numb: 73,
      question: "¿QUÉ ES UN CARRIL DE ACELERACIÓN?",
      answer: "Es el carril de incorporación a una autopista.",
      options: [
        "Es el carril derecho de una autopista.",
        "Es el carril de incorporación a una autopista.",
        "Es el carril izquierdo de una autopista."
      ]
    },
    {
      numb: 74,
      question: "¿QUÉ SIGNIFICA EL TÉRMINO HIDROPLANEO (ACUAPLANING)?",
      answer: "Que las cubiertas comienzan a desplazarse únicamente sobre una película de agua.",
      options: [
        "Es el plazo de vida útil del vehículo.",
        "Que las cubiertas comienzan a desplazarse únicamente sobre una película de aceite.",
        "Que las cubiertas comienzan a desplazarse únicamente sobre una película de agua."
      ]
    },
    {
      numb: 75,
      question: "CON CARÁCTER GENERAL ¿QUÉ VEHÍCULO TIENE PRIORIDAD DE PASO EN UNA PENDIENTE?",
      answer: "Los vehículos que ascienden por sobre los que descienden.",
      options: [
        "Los vehículos que descienden por sobre los que ascienden. ",
        "Los vehículos que ascienden por sobre los que descienden.",
        "Depende lo que indique la señal correspondiente."
      ]
    },
    {
      numb: 76,
      question: "SI UN AUTOMÓVIL POSEE 4 CINTURONES DE SEGURIDAD ¿CUANTAS PERSONAS PUEDEN VIAJAR EN ESE AUTOMÓVIL?",
      answer: "Solo 4 personas.",
      options: [
        "Solo 4 personas.",
        "Según el número de apoya-cabezas.",
        "Todas las que tengan un asiento."
      ]
    },
    {
      numb: 77,
      question: "¿SE LE PUEDE RETENER EL REGISTRO A UN CONDUCTOR CUYA ALCOHOLEMIA LE DA POSITIVA?",
      answer: "Si.",
      options: [
        "Si.",
        "No.",
        "En ningún caso se puede retener el registro de conducir."
      ]
    },
    {
      numb: 78,
      question: "¿ESTÁ PERMITIDO EN LOS VEHÍCULOS AGREGAR EN LOS PARAGOLPES ELEMENTOS (DEFENSAS, ETC.) DE CUALQUIER NATURALEZA, QUE PUEDAN CONSIDERARSE PELIGROSOS PARA PERSONAS U OTROS VEHÍCULOS?",
      answer: "No está permitido modificar paragolpes originales de fábrica agregándoles elementos que puedan considerarse peligrosos o agresivos.",
      options: [
        "No está permitido modificar paragolpes originales de fábrica agregándoles elementos que puedan considerarse peligrosos o agresivos.",
        "Pueden agregarse defensas en vehículos pequeños.",
        "Depende de la zona donde se circule."
      ]
    },
    {
      numb: 79,
      question: "¿ADELANTARSE EN UNA CURVA ESTÁ PERMITIDO?",
      answer: "No, está prohibido.",
      options: [
        "Solo si la curva no es muy cerrada.",
        "No, está prohibido.",
        "Solo si no viene un vehículo en sentido contrario."
      ]
    },
    {
      numb: 80,
      question: "SI AL APROXIMARSE A UNA BOCACALLE SIN SEMÁFORO, USTED ADVIERTE QUE UN PEATÓN PRETENDE EFECTUAR EL CRUCE DESDE SU IZQUIERDA HACIA SU DERECHA, ¿QUÉ DEBERIA HACER?",
      answer: "Cederle el paso, pues el peatón tiene prioridad.",
      options: [
        "La prioridad de paso es del vehículo ya que su marcha es más difícil de controlar.",
        "Avanzar a velocidad precautoria, pues sólo tiene prioridad aquel que viene por la derecha.",
        "Cederle el paso, pues el peatón tiene prioridad."
      ]
    },
    {
      numb: 81,
      question: "¿QUIÉN TIENE PRIORIDAD DE PASO EN UNA ROTONDA?",
      answer: "El que circula por la rotonda.",
      options: [
        "El que circula por la rotonda.",
        "Depende del porte del vehiculo.",
        "El que circula desde la derecha."
      ]
    },    
    {
      numb: 82,
      question: "USTED HA ADELANTADO A OTRO VEHÍCULO EN UNA INTERSECCIÓN. ¿ES CORRECTO SU COMPORTAMIENTO?",
      answer: "No, porque en las intersecciones siempre está prohibido adelantar.",
      options: [
        "No, porque en las intersecciones siempre está prohibido adelantar.",
        "No, porque sólo está permitido adelantar en las intersecciones con rotonda.",
        "Sí, porque en este caso tengo prioridad de paso en la intersección."
      ]
    },
    {
      numb: 83,
      question: "¿QUÉ UTILIDAD TIENEN LOS CINTURONES DE SEGURIDAD?",
      answer: "Evitan y/o disminuyen los daños físicos a las personas, en caso de accidentes.",
      options: [
        "Son útiles sólo para altas velocidades.",
        "Sirven para proteger a los menores.",
        "Evitan y/o disminuyen los daños físicos a las personas, en caso de accidentes."
      ]
    },
    {
      numb: 84,
      question: "LA NEGATIVA A REALIZAR UNA PRUEBA DE ALCOHOLEMIA ¿CONSTITUYE UNA FALTA?",
      answer: "Siempre.",
      options: [
        "Siempre.",
        "No.",
        "Sólo si se ha incurrido en una infracción o participado en un accidente."
      ]
    },
    {
      numb: 85,
      question: "USTED HA SUFRIDO UN DESPERFECTO EN SU VEHÍCULO Y LO HA DEJADO INMOVILIZADO EN LA BANQUINA. ¿DEBE SEÑALIZARLO?",
      answer: "Sí, con las balizas encendidas, los triángulos de señalización de peligro y con las luces de posición.",
      options: [
        "Sí, con los triángulos de señalización de peligro.",
        "No, porque el vehículo no está en la calzada.",
        "Sí, con las balizas encendidas, los triángulos de señalización de peligro y con las luces de posición."
      ]
    },
    {
      numb: 86,
      question: "AL ATRAVESAR TÚNELES O PUENTES EN UNA RUTA ¿ESTÁ PERMITIDO ADELANTARSE A OTRO VEHÍCULO?",
      answer: "No.",
      options: [
        "Si.",
        "No.",
        "Segun los dias y la hora."
      ]
    },
    {
      numb: 87,
      question: "¿CUAL DE ESTOS FACTORES PROVOCA MAS ACCIDENTES DE TRANSITO?",
      answer: "Consumo de alcohol.",
      options: [
        "Consumo de alcohol.",
        "Calzada resbaladiza.",
        "Giro a la izquierda."
      ]
    },
    {
      numb: 88,
      question: "EL USO DEL CINTURÓN DE SEGURIDAD ¿ES OBLIGATORIO PARA TODOS LOS OCUPANTES DEL VEHÍCULO?",
      answer: "Si.",
      options: [
        "No.",
        "Si.",
        "Solo para los que viajan en el asiento de atrás."
      ]
    },
    {
      numb: 89,
      question: "EL CINTURÓN DE SEGURIDAD ¿SOLO ES OBLIGATORIO SU USO EN RUTAS Y AUTOPISTAS?",
      answer: "Falso.",
      options: [
        "Verdadero.",
        "Falso.",
        "Solo el conductor."
      ]
    },
    {
      numb: 90,
      question: "¿UN CONDUCTOR PUEDE CIRCULAR CON AURICULARES PUESTOS?",
      answer: "No.",
      options: [
        "Si.",
        "No.",
        "Depende el camino."
      ]
    },
    {
      numb: 91,
      question: "¿SE LE PUEDE RETENER EL REGISTRO A UN CONDUCTOR PORQUE ESTA VENCIDO?",
      answer: "Si.",
      options: [
        "Si.",
        "No.",
        "No se le puede retener el registro de conducir a nadie."
      ]
    },
    {
      numb: 92,
      question: "¿HASTA QUÉ EDAD DEBEN LOS MENORES VIAJAR EN LOS DISPOSITIVOS DE RETENCIÓN INFANTIL EN EL ASIENTOTRASERO?",
      answer: "10 Años.",
      options: [
        "3 Años.",
        "5 Años.",
        "10 Años."
      ]
    },
    {
      numb: 93,
      question: "¿CUAL DE ESTOS FACTORES PROVOCA LESIONES MAS GRAVES AL CONDUCTOR EN ACCIDENTES DE TRANSITO?",
      answer: "Ausencia del uso de cinturón de seguridad.",
      options: [
        "No poner los giros para señalizar.",
        "Ausencia del uso de cinturón de seguridad.",
        "No tener luces bajas encendidas."
      ]
    },
    {
      numb: 94,
      question: "¿CUÁL DE ESTOS FACTORES PROVOCA MÁS ACCIDENTES DE TRÁNSITO?",
      answer: "Exceso de velocidad.",
      options: [
        "Exceso de velocidad.",
        "Consumo excesivo de alimentos antes de un viaje.",
        "Cruce de ferrocarril."
      ]
    },
    {
      numb: 95,
      question: "¿ES OBLIGATORIO EL USO DE LAS LUCES ENCENDIDAS LAS 24 HS EN RUTAS Y AUTOPISTAS?",
      answer: "Si.",
      options: [
        "Si.",
        "No.",
        "Solo en rutas nacionales."
      ]
    },
    {
      numb: 96,
      question: "¿QUÉ MEDIDAS DE PRECAUCIÓN SE DEBEN TOMAR AL CONDUCIR EN CASO DE LLUVIA EN RUTA?",
      answer: "Disminuir la velocidad y aumentar la distancia entre vehículos.",
      options: [
        "Colocar luces altas o de largo alcance para aumentar la visibilidad.",
        "Detener el vehículo sobre la banquina para resguardo.",
        "Disminuir la velocidad y aumentar la distancia entre vehículos."
      ]
    },
    {
      numb: 97,
      question: "PARA EFECTUAR LAS MANIOBRAS DE ADELANTAMIENTO POR EL CARRIL IZQUIERDO EN UNA AUTOPISTA, ¿CUÁL ES LA VELOCIDAD MÁXIMA QUE PUEDE ALCANZAR?",
      answer: "130 km/h.",
      options: [
        "90 km/h.",
        "130 km/h.",
        "150 km/h."
      ]
    },
    {
      numb: 98,
      question: "¿DEBE TENER LUZ LA PATENTE TRASERA?",
      answer: "Sí, es obligatorio.",
      options: [
        "Sí, es obligatorio.",
        "No es obligatorio.",
        "Sólo en vehículos afectados a servicios públicos."
      ]
    },
    {
      numb: 99,
      question: "¿PUEDE UN CONDUCTOR LLEVAR A MENORES DE 10 AÑOS EN LOS ASIENTOS DELANTEROS?",
      answer: "No.",
      options: [
        "En principio no, pero podría hacerlo en una pick up.",
        "No.",
        "Sí, cuando lo haga utilizando un dispositivo homologado."
      ]
    },
    {
      numb: 100,
      question: "EN UN AUTOMÓVIL, ¿DÓNDE DEBE UBICARSE EL MATAFUEGOS?",
      answer: "En el interior del vehículo, firmemente amarrado.",
      options: [
        "En el interior del vehículo, firmemente amarrado.",
        "En el baúl firmemente amarrado.",
        "Suelto debajo del asiento."
      ]
    },
    {
      numb: 101,
      question: "SI PARA ADELANTAR DEBE INVADIR UN CARRIL EXCLUSIVO PARA ÓMNIBUS Y TAXIS; ¿LE ESTÁ PERMITIDO REALIZAR LA MANIOBRA?",
      answer: "No, porque está prohibido utilizar dicho carril.",
      options: [
        "Sí, cuando la línea longitudinal del lado exterior de este carril sea continúa.",
        "No, porque está prohibido utilizar dicho carril.",
        "Sí, este tipo de maniobras siempre están permitidas."
      ]
    },
    {
      numb: 102,
      question: "SI USTED SE ENCUENTRA CIRCULANDO EN UNA RUTA Y OBSERVA VARIOS VEHÍCULOS ENCOLUMNADOS, LA PRIORIDAD DE PASO PARA EL ADELANTAMIENTO LA TIENE:",
      answer: "El que circula inmediatamente detrás del primero.",
      options: [
        "El que circula inmediatamente detrás del primero.",
        "Ninguno tiene prioridad.",
        "El que circula último en la columna."
      ]
    },    
    {
      numb: 103,
      question: "SI CONDUZCO UN VEHÍCULO QUE NO REÚNE LAS CONDICIONES DE SEGURIDAD:",
      answer: "La autoridad de control está facultada para retener mi vehículo y remitirlo al depósito o corralón.",
      options: [
        "La autoridad de control puede labrarme un acta, pero no puede retener mi vehículo.",
        "La autoridad de control debe llevar mi vehículo a un taller de reparación.",
        "La autoridad de control está facultada para retener mi vehículo y remitirlo al depósito o corralón."
      ]
    },
    {
      numb: 104,
      question: "¿CON QUÉ LUCES ENCENDIDAS SE DEBE CIRCULAR DE NOCHE EN LA CIUDAD?",
      answer: "Con luz de posición, luz baja y luz de chapa patente.",
      options: [
        "Con luz de posición, luz baja y luz de chapa patente.",
        "Con luz de alcance medio o faros rompe nieblas.",
        "Con luz alta, bajando a luz de alcance medio en caso de aproximarse un vehículo de frente."
      ]
    },
    {
      numb: 105,
      question: "ANTE UN CONTROL DE TRÁNSITO, ¿PUEDO NEGARME A DETENER MI VEHÍCULO Y A SOMETERME A UN TEST DE ALCOHOLEMIA?",
      answer: "No, porque es deber de todo conductor sujetarse a las pruebas o exámenes expresamente autorizados, destinados a determinar su aptitud para conducir y su estado de intoxicación alcohólica.",
      options: [
        "No, porque es deber de todo conductor sujetarse a las pruebas o exámenes expresamente autorizados, destinados a determinar su aptitud para conducir y su estado de intoxicación alcohólica.",
        "Sólo puedo negarme si tengo licencia de conducir.",
        "Sí, puedo evadir el control y negarme a realizar el test de alcoholemia porque es un derecho consagrado en la Constitución Nacional."
      ]
    },
    {
      numb: 106,
      question: "UNA DENUNCIA POLICIAL DE EXTRAVÍO DE LA LICENCIA DE CONDUCIR, ¿LO HABILITA A CONDUCIR?",
      answer: "No.",
      options: [
        "Si.",
        "No.",
        "Depende cuánto tiempo transcurrió del extravío."
      ]
    },
    {
      numb: 107,
      question: "EN CASO DE QUE UN INSPECTOR DE TRÁNSITO INDIQUE CIRCULAR TRASPASANDO EL SEMÁFORO EN ROJO:",
      answer: "Debe respetar la señal de tránsito como corresponde.",
      options: [
        "Debe respetar la señal de tránsito como corresponde.",
        "Rige la norma legal en el caso particular.",
        "Debe respetar la indicación de la autoridad de comprobación."
      ]
    },
    {
      numb: 108,
      question: "EN CASO DE QUE ME DETENGAN EN UN OPERATIVO:",
      answer: "Al sólo requerimiento de la autoridad competente debo presentar la licencia de conducir y demás documentación exigible.",
      options: [
        "Tengo derecho a no presentar la documentación para circular.",
        "Sólo debo presentar la documentación en caso de que la autoridad corresponda a mi localidad, provincia o nación en el que resido",
        "Al sólo requerimiento de la autoridad competente debo presentar la licencia de conducir y demás documentación exigible."
      ]
    },
    {
      numb: 109,
      question: "SEGÚN LAS DISPOSICIONES DE LA LEY NACIONAL Nº 24.449 RELATIVAS A ADELANTAMIENTO DE VEHÍCULOS, PARA INDICARA LOS VEHÍCULOS POSTERIORES LA INCONVENIENCIA DE ADELANTARSE, SE PONDRÁ:",
      answer: "La luz de giro izquierda, ante la cual los mismos se abstendrán del sobrepaso.",
      options: [
        "La baliza, ante la cual los mismos se abstendrán del sobrepaso.",
        "La luz de giro izquierda, ante la cual los mismos se abstendrán del sobrepaso.",
        "La luz de giro derecha, ante la cual los mismos se abstendrán del sobrepaso."
      ]
    },
    {
      numb: 110,
      question: "DESPUÉS DE REALIZAR UN ADELANTAMIENTO ¿TIENE USTED LA OBLIGACIÓN DE SEÑALIZAR LA MANIOBRA DE VOLVER AL CARRIL DERECHO?",
      answer: "Sí, porque altero de nuevo mi posición en la calzada.",
      options: [
        "Sí, porque altero de nuevo mi posición en la calzada.",
        "No, porque cumplo sencillamente con una obligación.",
        "No, es indiferente."
      ]
    },
    {
      numb: 111,
      question: "LAS PLACAS DE IDENTIFICACIÓN DE DOMINIO (CHAPAS PATENTE) ¿ESTÁ PERMITIDO UBICARLAS EN LA LUNETA TRASERADEL VEHÍCULO U OTRO LUGAR QUE NOSOTROS DESEAMOS?",
      answer: "No, las placas deben ubicarse en los lugares indicados para ello, sin excepción.",
      options: [
        "No, las placas deben ubicarse en los lugares indicados para ello, sin excepción.",
        "Sí, pero solo la placa trasera.",
        "Si, siempre que sean bien visibles."
      ]
    },
    {
      numb: 112,
      question: "¿QUE VEHÍCULO TIENE PRIORIDAD DE PASO EN UNA INTERSECCIÓN DE CALLE DE IGUAL JERARQUÍA?",
      answer: "El que circula desde la derecha.",
      options: [
        "El que llega primero a la intersección.",
        "El vehículo de porte mayor.",
        "El que circula desde la derecha."
      ]
    },
    {
      numb: 113,
      question: "ANTE UN EVENTUAL CONTROL DE TRÁNSITO EN VÍA PÚBLICA, DE CONSTATAR LA AUTORIDAD DE CONTROL ALGÚN TIPO DE FALTA POR PARTE DEL CONDUCTOR, EL PAGO DE LA MULTA (SANCIÓN) PODRÁ EFECTUARSE:",
      answer: "Ante el Tribunal de Faltas que lo determina como sanción a aplicar.",
      options: [
        "Ante el Tribunal de Faltas que lo determina como sanción a aplicar.",
        "En ese mismo momento y ante la autoridad de control si ésta lo requiere.",
        "Ambas respuestas anteriores son correctas."
      ]
    },
    {
      numb: 114,
      question: "¿ESTÁ PERMITIDO DETENER UN VEHÍCULO SOBRE UNA SENDA PEATONAL?",
      answer: "No.",
      options: [
        "Si.",
        "No.",
        "Según los casos."
      ]
    },
    {
      numb: 115,
      question: "EN UNA AUTOPISTA, ¿ESTÁ PERMITIDO REMOLCAR CON SU VEHÍCULO A OTRO QUE SE ENCUENTRA DESCOMPUESTO?",
      answer: "No, está prohibido.",
      options: [
        "Sí, pero sólo hasta el lugar más próximo donde pueda quedar inmovilizado.",
        "No, está prohibido.",
        "Sí, pero sólo si soy titular de un permiso que autoriza a conducir vehículos con remolque."
      ]
    },
    {
      numb: 116,
      question: "Ante un cartel de PARE ¿Cuál es la conducta a seguir?",
      answer: "Detener el vehículo en forma total y seguir solo cuando no circule ningún vehículo por la otra vía, ni esté cruzando un peatón.",
      options: [
        "Disminuir la marcha para observar el tránsito.",
        "Detener el vehículo en forma total y seguir solo cuando no circule ningún vehículo por la otra vía, ni esté cruzando un peatón.",
        "Continuar la marcha porque tiene prioridad de paso."
      ]
    },
    {
      numb: 117,
      question: "¿DÓNDE ESTÁ PROHIBIDO ADELANTARSE?",
      answer: "En puentes, túneles, pasos a nivel, bocacalles y curvas.",
      options: [
        "En puentes, túneles, pasos a nivel, bocacalles y curvas.",
        "En autopistas y semiautopistas.",
        "En los tramos de una ruta en donde la señalización horizontal sea una línea discontinua."
      ]
    },
    {
      numb: 118,
      question: "EN UN CONTROL VEHICULAR ¿EN QUE CIRCUNSTANCIA PUEDE SER RETENIDA LA LICENCIA DE CONDUCIR?",
      answer: "Por una alcoholemia positiva.",
      options: [
        "Por una alcoholemia positiva.",
        "Por no tener seguro.",
        "Por no tener VTV el vehículo."
      ]
    },
    {
      numb: 119,
      question: "EN UN CONTROL VEHICULAR ¿EN QUE CIRCUNSTANCIA PUEDE SER RETENIDA LA LICENCIA DE CONDUCIR?",
      answer: "Por estar vencida.",
      options: [
        "Por no tener el cinturón puesto.",
        "Por no tener las luces reglamentarias encendidas.",
        "Por estar vencida."
      ]
    },
    {
      numb: 120,
      question: "EN UN CONTROL VEHICULAR ¿EN QUE CIRCUNSTANCIA PUEDE SER RETENIDA LA LICENCIA DE CONDUCIR?",
      answer: "Por estar adulterada o ser apócrifa.",
      options: [
        "Por no tener seguro al día.",
        "Por estar adulterada o ser apócrifa.",
        "Usar telefonía celular."
      ]
    },
    {
      numb: 121,
      question: "CON UNA LICENCIA CLASE B.1 PODRÁ CONDUCIR:",
      answer: "Automóviles, pick-up y camiones cuyo peso total no superen los 3.500 kg.",
      options: [
        "Automóviles, pick-up y camiones cuyo peso total no superen los 3.500 kg.",
        "Automóviles, pick-up y ciclomotores de 50cc.",
        "Automóviles y pick-up cuyo peso total sea 5000 kg."
      ]
    },
    {
      numb: 122,
      question: "SI CONDUCE UN AUTOMÓVIL QUE TENGA AIR-BAG EN LA PARTE DELANTERA, ¿ES OBLIGATORIO ABROCHARSE ELCINTURÓN DE SEGURIDAD? SELECCIONE UNA:",
      answer: "Sí, la obligatoriedad es indistinta del air-bag.",
      options: [
        "Sólo para el acompañante del asiento delantero, el conductor además de ir tomado del volante cuenta con la protección adicional del air-bag.",
        "No, porque el vehículo dispone de un dispositivo de seguridad pasiva análoga.",
        "Sí, la obligatoriedad es indistinta del air-bag."
      ]
    },
    {
      numb: 123,
      question: "EN UNA CAMIONETA ¿PUEDEN TRANSPORTARSE PERSONAS EN EL SECTOR DE CARGA?",
      answer: "No.",
      options: [
        "No.",
        "Si.",
        "Depende de las condiciones de seguridad de los ocupantes."
      ]
    },    
    {
      numb: 124,
      question: "¿CON QUÉ LUCES ENCENDIDAS CRUZA DE NOCHE UN PASO A NIVEL SIN BARRERAS?",
      answer: "Con luz de posición para poder observar mejor las luces de un tren que pudiera estar aproximándose y ser vistos por otro auto.",
      options: [
        "Con luz de posición para poder observar mejor las luces de un tren que pudiera estar aproximándose y ser vistos por otro auto.",
        "Con las luces apagadas para poder observar mejor las luces de un tren que pudiera estar aproximándose.",
        "Con luz de posición, haciendo destellos intermitentes de luz alta para ser notado por un tren que pudiera estar aproximándose u otros vehículos."
      ]
    },
    {
      numb: 125,
      question: "EL GAS EMITIDO POR EL ESCAPE (MONOXIDO DE CARBONO) ES:",
      answer: "Venenoso, incoloro y no tiene olor.",
      options: [
        "Venenoso, incoloro y no tiene olor.",
        "Inofensivo para la salud.",
        "Ninguna de las dos."
      ]
    },
    {
      numb: 126,
      question: "SI USTED ACABA DE SALIR DE UNA CALLE INUNDADA, ¿QUÉ ES LO PRIMERO QUE DEBERÍA HACER?",
      answer: "Revisar el funcionamiento de sus frenos.",
      options: [
        "Activar el limpia parabrisas.",
        "Detenerse y revisar sus neumáticos.",
        "Revisar el funcionamiento de sus frenos."
      ]
    },
    {
      numb: 127,
      question: "¿CUÁL ES LA CAUSA MÁS COMÚN PARA QUE SE DÉ EL EFECTO ACUAPLANING?",
      answer: "Exceso de velocidad en relación al estado de la calzada.",
      options: [
        "Exceso de velocidad en relación al estado de la calzada.",
        "Fallas en el sistema de dirección.",
        "Frenos en mal estado."
      ]
    },
    {
      numb: 128,
      question: "SELECCIONE LA INFRACCIÓN QUE CONSIDERA MAS GRAVE:",
      answer: "Alcoholemia positiva.",
      options: [
        "No tener seguro vigente.",
        "Alcoholemia positiva.",
        "No tener vtv."
      ]
    },
    {
      numb: 129,
      question: "SI USTED DEBE ESTACIONAR EN UNA CALLE CON BAJADA EN PENDIENTE PRONUNCIADA, ¿QUÉ RECAUDO DEBE TOMAR?",
      answer: "Dejar el volante girado hacia la acera y el freno de mano puesto.",
      options: [
        "Dejar el volante girado hacia la acera y el freno de mano puesto.",
        "Estacionar con dos ruedas sobre la acera.",
        "Estacionar detrás de otro auto."
      ]
    },
    {
      numb: 130,
      question: "SOBRE EL CONCEPTO DE EDUCACIÓN VIAL: ¿A QUE SE HACE REFERENCIA?",
      answer: "Ambas.",
      options: [
        "A la adquisición de valores para poder lograr una mejor convivencia.",
        "Ambas.",
        "Al aprendizaje de las normas de la ley de transito."
      ]
    },
    {
      numb: 131,
      question: "SU DOCTOR LE HA RECETADO UN TRATAMIENTO: ¿POR QUÉ USTED DEBE CONSULTARLE SI PUEDE CONDUCIR O NO?",
      answer: "Porque algunas medicinas pueden hacer que sus reacciones sean mas lentas.",
      options: [
        "No tiene importancia.",
        "Porque en caso de accidente no lo cubre su seguro.",
        "Porque algunas medicinas pueden hacer que sus reacciones sean mas lentas."
      ]
    },
    {
      numb: 132,
      question: "ESTACIONAR EN DOBLE FILA ESTA PERMITIDO ÚNICAMENTE:",
      answer: "No esta permitido el estacionarse en doble fila.",
      options: [
        "En días de lluvia, frente a establecimientos escolares.",
        "Si pongo las balizas, está permitido.",
        "No esta permitido el estacionarse en doble fila."
      ]
    },
    {
      numb: 133,
      question: "ANTE LA APROXIMACIÓN DE UN VEHÍCULO DE EMERGENCIA CON SUS SIRENAS ENCENDIDAS ¿HACIA QUE SECTOR ES RECOMENDABLE APARTARSE?",
      answer: "Sobre la derecha.",
      options: [
        "Sobre la derecha.",
        "Siempre a la izquierda.",
        "Aumentar la velocidad y continuar en el carril."
      ]
    },
  ];