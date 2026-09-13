/**
 * Base de Datos Oficial de Exámenes y Carreras | UDABOL Carpeta Pedagógica
 * 6 Carreras Oficiales x 5 Materias por Carrera = 30 Materias
 * 20 Preguntas Académicas por Materia = 600 Preguntas
 */

const UDABOL_EXAM_DATA = {
  "carreras": [
    {
      "id": "medicina",
      "nombre": "Medicina",
      "facultad": "Facultad de Ciencias de la Salud",
      "icono": "medical_services",
      "descripcion": "Formación integral con alta competencia clínica, ética médica y compromiso con la salud comunitaria.",
      "duracion": "5 años + Internado Rotatorio",
      "subjects": [
        {
          "id": "med-aps",
          "codigo": "MED-311",
          "siglaCompleta": "MED-APS-2026: Atención Primaria en Salud – NM – A",
          "nombre": "Atención Primaria en Salud (APS)",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10119462: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál es el nivel de atención médica en el que se resuelve entre el 75 y 85% de las necesidades de salud de la población?",
              "options": {
                "a": "Nivel secundario de atención",
                "b": "Nivel terciario de atención",
                "c": "Nivel primario de atención (APS)",
                "d": "Medicina de urgencias y emergencias"
              },
              "correct": "c"
            },
            {
              "id": 2,
              "text": "En la Atención Primaria de Salud, ¿cuál de los siguientes principios fue declarado en la Conferencia de Alma-Ata (1978)?",
              "options": {
                "a": "La salud es un privilegio exclusivo de países desarrollados",
                "b": "La salud para todos en el año 2000 mediante la APS",
                "c": "La medicina especializada debe preceder a la atención básica",
                "d": "El acceso a la salud depende exclusivamente del ingreso económico"
              },
              "correct": "b"
            },
            {
              "id": 3,
              "text": "Un paciente de 62 años presenta tos productiva de más de 3 semanas, pérdida de peso y sudoración nocturna. ¿Cuál es la primera sospecha diagnóstica en APS?",
              "options": {
                "a": "Neumonía bacteriana adquirida en la comunidad",
                "b": "Asma bronquial severa",
                "c": "Tuberculosis pulmonar",
                "d": "Cáncer de pulmón en estadio IV"
              },
              "correct": "c"
            },
            {
              "id": 4,
              "text": "¿Cuál es la vacuna que se administra al recién nacido en las primeras 24 horas de vida, según el esquema de vacunación en Bolivia?",
              "options": {
                "a": "Triple viral (SRP)",
                "b": "BCG y vacuna contra la hepatitis B",
                "c": "Pentavalente y antipolio oral",
                "d": "Antineumocócica y antirrotavirus"
              },
              "correct": "b"
            },
            {
              "id": 5,
              "text": "Una madre trae a su niño de 3 años con fiebre de 38.8°C, tos y rinorrea de 4 días de evolución, sin dificultad respiratoria. ¿Cuál es el manejo más apropiado en APS?",
              "options": {
                "a": "Internación y antibioticoterapia intravenosa inmediata",
                "b": "Solicitar tomografía de tórax urgente",
                "c": "Tratamiento sintomático, hidratación y control en 48 horas",
                "d": "Administración de corticoides inhalados de forma urgente"
              },
              "correct": "c"
            },
            {
              "id": 6,
              "text": "¿Cuál de los siguientes parámetros se utiliza para clasificar la desnutrición según la OMS en niños menores de 5 años?",
              "options": {
                "a": "Índice de masa corporal (IMC) mayor a 30",
                "b": "Peso para la talla (P/T) con puntaje Z menor a -2",
                "c": "Circunferencia abdominal mayor al percentil 90",
                "d": "Hemoglobina glicosilada (HbA1c) mayor al 6.5%"
              },
              "correct": "b"
            },
            {
              "id": 7,
              "text": "En el control prenatal, ¿cuántas consultas mínimas recomienda la OMS para un embarazo de bajo riesgo?",
              "options": {
                "a": "2 consultas (primer y tercer trimestre)",
                "b": "4 consultas distribuidas a lo largo del embarazo",
                "c": "8 o más contactos con el sistema de salud",
                "d": "12 consultas mensuales desde el primer mes"
              },
              "correct": "c"
            },
            {
              "id": 8,
              "text": "¿Cuál es la definición de 'cobertura de vacunación' en el contexto de la Atención Primaria de Salud?",
              "options": {
                "a": "El porcentaje de vacunas vencidas eliminadas del stock",
                "b": "El número de dosis de vacunas almacenadas en el centro de salud",
                "c": "El porcentaje de personas de la población objetivo que recibieron las vacunas programadas",
                "d": "La temperatura de conservación adecuada de las vacunas en la cadena de frío"
              },
              "correct": "c"
            },
            {
              "id": 9,
              "text": "Un paciente con diagnóstico de hipertensión arterial esencial (estadio 1) acude a consulta en el primer nivel. ¿Cuál es el tratamiento inicial recomendado?",
              "options": {
                "a": "Digoxina más furosemida en dosis alta",
                "b": "Cambios en el estilo de vida durante 3 a 6 meses y seguimiento",
                "c": "Derivación inmediata a cardiología para inicio de tratamiento",
                "d": "Anticoagulación con warfarina y control semanal"
              },
              "correct": "b"
            },
            {
              "id": 10,
              "text": "¿Qué instrumento de tamizaje se utiliza en APS para detectar depresión en adultos de forma breve y validada?",
              "options": {
                "a": "Escala de Apgar familiar",
                "b": "Test de Audit-C",
                "c": "Cuestionario PHQ-9 (Patient Health Questionnaire)",
                "d": "Escala de Braden para úlceras por presión"
              },
              "correct": "c"
            },
            {
              "id": 11,
              "text": "En el modelo de atención familiar de APS, ¿cuál es el objetivo principal del 'diagnóstico de salud familiar'?",
              "options": {
                "a": "Identificar enfermedades raras en miembros de la familia",
                "b": "Determinar los problemas de salud, recursos y riesgos del grupo familiar para planificar intervenciones",
                "c": "Realizar cirugías ambulatorias en el domicilio del paciente",
                "d": "Sustituir la historia clínica individual por la historia colectiva"
              },
              "correct": "b"
            },
            {
              "id": 12,
              "text": "¿Cuál de las siguientes acciones corresponde a la prevención primaria en salud?",
              "options": {
                "a": "Diagnóstico precoz de diabetes mediante tamizaje en adultos mayores",
                "b": "Rehabilitación de pacientes después de un accidente cerebrovascular",
                "c": "Vacunación, educación sanitaria y promoción de hábitos saludables",
                "d": "Tratamiento oportuno de la tuberculosis para evitar contagios"
              },
              "correct": "c"
            },
            {
              "id": 13,
              "text": "Una paciente de 28 años embarazada a las 20 semanas presenta presión arterial de 150/100 mmHg en dos tomas con 6 horas de diferencia, sin proteinuria. ¿Cuál es el diagnóstico más probable?",
              "options": {
                "a": "Hipertensión crónica preexistente",
                "b": "Preeclampsia con criterios de severidad",
                "c": "Hipertensión gestacional",
                "d": "Eclampsia inminente"
              },
              "correct": "c"
            },
            {
              "id": 14,
              "text": "¿Cuál es la diarrea que representa mayor riesgo de mortalidad en niños menores de 5 años según la OMS?",
              "options": {
                "a": "Diarrea crónica con moco y sangre",
                "b": "Diarrea aguda con deshidratación grave",
                "c": "Diarrea persistente con flatulencia",
                "d": "Diarrea osmótica por intolerancia a la lactosa"
              },
              "correct": "b"
            },
            {
              "id": 15,
              "text": "En el Programa de Control del Niño Sano, ¿qué evalúa la escala de Denver II?",
              "options": {
                "a": "El estado nutricional mediante tablas de peso y talla",
                "b": "El desarrollo psicomotor en áreas personal-social, motora fina, lenguaje y motora gruesa",
                "c": "El riesgo cardiovascular en niños mayores de 10 años",
                "d": "La madurez pulmonar fetal antes del nacimiento"
              },
              "correct": "b"
            },
            {
              "id": 16,
              "text": "Un hombre de 50 años con IMC de 31 kg/m², sin síntomas, consulta para chequeo. La glucemia en ayunas es de 118 mg/dL. ¿Cuál es la clasificación diagnóstica?",
              "options": {
                "a": "Diabetes mellitus tipo 2 establecida",
                "b": "Hipoglucemia de ayuno",
                "c": "Glucemia en ayunas alterada (prediabetes)",
                "d": "Síndrome metabólico con hiperglucemia severa"
              },
              "correct": "c"
            },
            {
              "id": 17,
              "text": "¿Cuál es el método anticonceptivo de barrera más eficaz para la prevención simultánea de embarazo e infecciones de transmisión sexual (ITS)?",
              "options": {
                "a": "Diafragma cervical con espermicida",
                "b": "Condón masculino de látex usado correctamente",
                "c": "Dispositivo intrauterino de cobre (DIU-T)",
                "d": "Método de lactancia materna exclusiva (MELA)"
              },
              "correct": "b"
            },
            {
              "id": 18,
              "text": "¿Cuál es la primera causa de morbimortalidad evitable en el mundo según la OMS, que el equipo de APS debe abordar con consejería?",
              "options": {
                "a": "Consumo de alcohol en menores de edad",
                "b": "Tabaquismo y consumo de tabaco en todas sus formas",
                "c": "Sedentarismo y actividad física insuficiente",
                "d": "Consumo excesivo de azúcares refinados"
              },
              "correct": "b"
            },
            {
              "id": 19,
              "text": "En el seguimiento de un paciente con diabetes mellitus tipo 2 en APS, ¿con qué frecuencia se recomienda solicitar la hemoglobina glicosilada (HbA1c)?",
              "options": {
                "a": "Una vez al año, en el mes de enero",
                "b": "Cada 3 a 6 meses según el grado de control glucémico",
                "c": "Solo cuando el paciente refiere síntomas hiperglucémicos",
                "d": "Mensualmente junto con la glicemia en ayunas"
              },
              "correct": "b"
            },
            {
              "id": 20,
              "text": "¿Cuál es el criterio de la OMS para clasificar la anemia en mujeres adultas no embarazadas?",
              "options": {
                "a": "Hemoglobina menor a 13 g/dL",
                "b": "Hemoglobina menor a 12 g/dL",
                "c": "Hematocrito menor al 45%",
                "d": "Ferritina sérica menor a 50 ng/mL"
              },
              "correct": "b"
            }
          ]
        },
        {
          "id": "med-anat",
          "codigo": "MED-101",
          "siglaCompleta": "MED-101-10311: Anatomía Humana I – NM – A",
          "nombre": "Anatomía Humana I",
          "semestre": "Semestre I",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10119463: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál de las siguientes estructuras anatómicas atraviesa el foramen magno del hueso occipital?",
              "options": {
                "a": "Médula espinal y arterias vertebrales",
                "b": "Nervio facial y arteria auditiva interna",
                "c": "Arteria carótida interna",
                "d": "Nervio óptico y arteria oftálmica"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuáles son las ramas directas que nacen del arco de la aorta?",
              "options": {
                "a": "Tronco braquiocefálico, arteria carótida común izquierda y arteria subclavia izquierda",
                "b": "Arterias coronarias derecha e izquierda",
                "c": "Tronco celíaco y arteria mesentérica superior",
                "d": "Arterias carótidas externas e internas derecha e izquierda"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué nervio craneal inerva motoramente al músculo esternocleidomastoideo y al trapecio?",
              "options": {
                "a": "Nervio accesorio o espinal (XI par craneal)",
                "b": "Nervio hipogloso (XII par craneal)",
                "c": "Nervio vago (X par craneal)",
                "d": "Nervio glosofaríngeo (IX par craneal)"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué estructura divide la cavidad torácica de la cavidad abdominal?",
              "options": {
                "a": "El músculo diafragma",
                "b": "El mediastino posterior",
                "c": "El peritoneo parietal",
                "d": "El epiplón mayor"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "En el mediastino medio se localiza principalmente:",
              "options": {
                "a": "El corazón y el saco pericárdico",
                "b": "El esófago torácico y el conducto torácico",
                "c": "El timo o sus vestigios adiposos",
                "d": "La vena ácigos mayor"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuántos lóbulos anatómicos presentan normalmente el pulmón derecho y el pulmón izquierdo?",
              "options": {
                "a": "3 lóbulos en el derecho y 2 lóbulos en el izquierdo",
                "b": "2 lóbulos en el derecho y 3 lóbulos en el izquierdo",
                "c": "3 lóbulos en ambos pulmones",
                "d": "2 lóbulos en ambos pulmones"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué vasos forman la vena porta hepática detrás del cuello del páncreas?",
              "options": {
                "a": "Vena mesentérica superior y vena esplénica",
                "b": "Vena cava inferior y vena renal izquierda",
                "c": "Venas suprahepáticas derecha e izquierda",
                "d": "Vena mesentérica inferior y vena ilíaca común"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué músculo es el principal flexor del antebrazo sobre el brazo en supinación?",
              "options": {
                "a": "Músculo bíceps braquial",
                "b": "Músculo tríceps braquial",
                "c": "Músculo ancóneo",
                "d": "Músculo deltoides"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué arteria se palpa típicamente en el canal del pulso en la cara anterior de la muñeca?",
              "options": {
                "a": "Arteria radial",
                "b": "Arteria cubital",
                "c": "Arteria interósea anterior",
                "d": "Arteria braquial profunda"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "La válvula mitral o bicúspide comunica:",
              "options": {
                "a": "La aurícula izquierda con el ventrículo izquierdo",
                "b": "La aurícula derecha con el ventrículo derecho",
                "c": "El ventrículo derecho con la arteria pulmonar",
                "d": "El ventrículo izquierdo con la arteria aorta"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Cuál es el principal nervio sensitivo y motor de la cara derivado del primer arco faríngeo?",
              "options": {
                "a": "Nervio trigémino (V par craneal)",
                "b": "Nervio facial (VII par craneal)",
                "c": "Nervio oculomotor (III par craneal)",
                "d": "Nervio abducens (VI par craneal)"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué elementos forman el manguito de los rotadores en el hombro?",
              "options": {
                "a": "Supraespinoso, infraespinoso, redondo menor y subescapular",
                "b": "Deltoides, redondo mayor, pectoral mayor y dorsal ancho",
                "c": "Bíceps, tríceps, coracobraquial y braquial anterior",
                "d": "Trapecio, romboides mayor, serrato anterior y elevador de la escápula"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "El polígono arterial de Willis en la base del cerebro se localiza en:",
              "options": {
                "a": "El espacio subaracnoideo en la fosa interpeduncular",
                "b": "El espacio epidural espinal",
                "c": "El interior del cuarto ventrículo",
                "d": "El seno venoso longitudinal superior"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Cuál es la porción más larga y móvil del intestino grueso?",
              "options": {
                "a": "Colon transverso",
                "b": "Colon ascendente",
                "c": "Ciego",
                "d": "Conducto anal"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En el triángulo femoral (de Scarpa), ¿cuál es la disposición de los elementos vasculonerviosos de lateral a medial?",
              "options": {
                "a": "Nervio femoral, Arteria femoral, Vena femoral (NAV)",
                "b": "Vena femoral, Arteria femoral, Nervio femoral (VAN)",
                "c": "Arteria femoral, Nervio femoral, Vena femoral",
                "d": "Vena femoral, Nervio femoral, Arteria femoral"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿En qué región de la corteza cerebral se encuentra el área motora primaria (área 4 de Brodmann)?",
              "options": {
                "a": "Giro precentral del lóbulo frontal",
                "b": "Giro postcentral del lóbulo parietal",
                "c": "Corteza calcarina del lóbulo occipital",
                "d": "Giro temporal superior"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El ligamento cruzado anterior (LCA) de la rodilla se inserta distalmente en:",
              "options": {
                "a": "Área intercondílea anterior de la tibia",
                "b": "Área intercondílea posterior de la tibia",
                "c": "Cabeza del peroné",
                "d": "Tuberosidad anterior de la tibia"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué estructura produce la mayor parte del líquido cefalorraquídeo (LCR)?",
              "options": {
                "a": "Los plexos coroideos de los ventrículos encefálicos",
                "b": "Las granulaciones aracnoideas de Pacchioni",
                "c": "El acueducto cerebral de Silvio",
                "d": "La piamadre espinal"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué órgano retroperitoneal se relaciona estrechamente con el marco duodenal en su porción cefálica?",
              "options": {
                "a": "El páncreas",
                "b": "El bazo",
                "c": "La vesícula biliar",
                "d": "El estómago"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Qué músculo es el principal extensor de la articulación de la rodilla?",
              "options": {
                "a": "Músculo cuádriceps femoral",
                "b": "Músculo sartorio",
                "c": "Músculo semitendinoso",
                "d": "Músculo gastrocnemio"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "med-fisio",
          "codigo": "MED-201",
          "siglaCompleta": "MED-201-10344: Fisiología Médica – NM – A",
          "nombre": "Fisiología Médica",
          "semestre": "Semestre III",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10119464: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál es el principal catión del líquido extracelular y el principal catión del líquido intracelular respectivamente?",
              "options": {
                "a": "Sodio (Na+) extracelular y Potasio (K+) intracelular",
                "b": "Potasio (K+) extracelular y Sodio (Na+) intracelular",
                "c": "Calcio (Ca2+) extracelular y Magnesio (Mg2+) intracelular",
                "d": "Cloro (Cl-) extracelular y Fósforo intracelular"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Qué ion es el principal responsable de la fase de despolarización rápida (fase 0) en el potencial de acción del miocito ventricular?",
              "options": {
                "a": "Entrada masiva de Sodio (Na+) a través de canales rápidos dependientes de voltaje",
                "b": "Salida rápida de Potasio (K+)",
                "c": "Entrada sostenida de Calcio (Ca2+)",
                "d": "Transporte activo de Cloro hacia el exterior"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "La ley de Frank-Starling del corazón establece que:",
              "options": {
                "a": "A mayor volumen telediastólico (mayor estiramiento de las fibras miocárdicas), mayor es la fuerza de contracción ventricular",
                "b": "La frecuencia cardiaca se duplica con cada grado centígrado de fiebre",
                "c": "La resistencia vascular periférica disminuye al aumentar el gasto cardiaco",
                "d": "El flujo sanguíneo coronario solo ocurre durante la sístole ventricular"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Cuál es el valor fisiológico normal promedio de la Tasa de Filtración Glomerular (TFG) en un adulto sano?",
              "options": {
                "a": "125 mL/min (aproximadamente 180 L/día)",
                "b": "25 mL/min",
                "c": "500 mL/min",
                "d": "50 mL/min"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuál es el principal estímulo fisiológico para la secreción de eritropoyetina (EPO) por las células peritubulares renales?",
              "options": {
                "a": "Hipoxia tisular renal (disminución de la presión parcial de O2)",
                "b": "Hipercalcemia severa",
                "c": "Aumento del pH sanguíneo (alcalosis metabólica)",
                "d": "Exceso de volumen plasmático circulante"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "En la cascada de coagulación, ¿qué factor activa directamente la vía común convirtiendo la protrombina en trombina?",
              "options": {
                "a": "Complejo protrombinasa (Factor Xa activado junto al Factor Va y Ca2+)",
                "b": "Factor VIII antihemofílico",
                "c": "Factor XII de Hageman",
                "d": "Fibrinógeno"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "La sustancia surfactante pulmonar producida por los neumocitos tipo II tiene como función fisiológica principal:",
              "options": {
                "a": "Disminuir la tensión superficial alveolar y evitar el colapso al final de la espiración",
                "b": "Aumentar la resistencia de las vías aéreas superiores",
                "c": "Transportar dióxido de carbono en forma de bicarbonato",
                "d": "Activar los macrófagos alveolares contra bacilos aerobios"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Cuál es la hormona adenohipofisaria encargada de estimular la síntesis y secreción de hormonas tiroideas (T3 y T4)?",
              "options": {
                "a": "TSH (Tirotropina)",
                "b": "ACTH (Adrenocorticotropina)",
                "c": "Prolactina",
                "d": "FSH (Hormona foliculoestimulante)"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué transportador de glucosa dependiente de insulina se expresa en el tejido adiposo y músculo esquelético?",
              "options": {
                "a": "GLUT-4",
                "b": "GLUT-1",
                "c": "GLUT-2",
                "d": "SGLT-1"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es el marcapasos fisiológico natural del corazón humano?",
              "options": {
                "a": "Nodo sinusal (sinoauricular)",
                "b": "Nodo auriculoventricular (AV)",
                "c": "Haz de His",
                "d": "Fibras de Purkinje"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En el sistema respiratorio, la mayor parte del CO2 se transporta en la sangre en forma de:",
              "options": {
                "a": "Iones bicarbonato (HCO3-) disueltos en el plasma",
                "b": "Gas carbónico libre no disuelto",
                "c": "Carbaminohemoglobina exclusivamente",
                "d": "Ácido láctico ionizado"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "El reflejo barorreceptor en el seno carotídeo y cayado aórtico responde a un incremento súbito de la presión arterial:",
              "options": {
                "a": "Aumentando la actividad parasimpática (vagal) y disminuyendo la simpática, reduciendo la frecuencia y contractilidad",
                "b": "Estimulando la secreción masiva de adrenalina por las glándulas suprarrenales",
                "c": "Produciendo vasoconstricción arteriolar generalizada",
                "d": "Inhibiendo la filtración glomerular renal"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué segmento de la nefrona es impermeable al agua pero reabsorbe activamente iones Na+, K+ y 2Cl-?",
              "options": {
                "a": "Rama ascendente gruesa del asa de Henle",
                "b": "Túbulo contorneado proximal",
                "c": "Rama descendente delgada del asa de Henle",
                "d": "Conducto colector cortical"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La hormona antidiurética (ADH / vasopresina) promueve la reabsorción de agua libre en los conductos colectores mediante:",
              "options": {
                "a": "La inserción de canales de acuaporina-2 en la membrana apical",
                "b": "El bloqueo de la bomba Na+/K+ ATPasa basolateral",
                "c": "La inhibición de la anhidrasa carbónica",
                "d": "La destrucción osmótica de podocitos glomerulares"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué células del estómago secretan ácido clorhídrico (HCl) y factor intrínseco de Castle?",
              "options": {
                "a": "Células parietales (oxínticas)",
                "b": "Células principales (cimógenas)",
                "c": "Células G productoras de gastrina",
                "d": "Células mucosas del cuello"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué efecto tiene la hormona paratiroidea (PTH) sobre el metabolismo del calcio y fósforo?",
              "options": {
                "a": "Aumenta la calcemia (reabsorción ósea y renal) y disminuye el fosfato plasmático (fosfaturia)",
                "b": "Disminuye la calcemia e incrementa el depósito óseo",
                "c": "Inhibe la activación de la vitamina D a calcitriol",
                "d": "Bloquea la absorción intestinal de cationes divalentes"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El volumen de aire que se inspira o espira durante una respiración tranquila normal se denomina:",
              "options": {
                "a": "Volumen corriente o tidal (aproximadamente 500 mL)",
                "b": "Volumen de reserva inspiratoria",
                "c": "Capacidad vital forzada",
                "d": "Volumen residual no ventilable"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué ion desencadena directamente la liberación de neurotransmisores en la hendidura sináptica al ingresar al terminal axónico?",
              "options": {
                "a": "Calcio (Ca2+)",
                "b": "Magnesio (Mg2+)",
                "c": "Hierro ferroso (Fe2+)",
                "d": "Bicarbonato (HCO3-)"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Cuál es la fracción de eyección (FE) del ventrículo izquierdo considerada normal en un adulto en reposo?",
              "options": {
                "a": "55% a 70%",
                "b": "10% a 25%",
                "c": "95% a 100%",
                "d": "30% a 40%"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El sistema renina-angiotensina-aldosterona (SRAA) se activa primordialmente en respuesta a:",
              "options": {
                "a": "Disminución de la presión de perfusión renal o baja concentración de NaCl en la mácula densa",
                "b": "Sobrecarga de volumen y elevación del péptido natriurético auricular",
                "c": "Alcalosis respiratoria inducida por hiperventilación",
                "d": "Ingesta masiva de agua pura sin electrolitos"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "med-farma",
          "codigo": "MED-302",
          "siglaCompleta": "MED-302-10389: Farmacología General y Especial – NM – A",
          "nombre": "Farmacología General y Especial",
          "semestre": "Semestre V",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10119465: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Qué parámetro farmacocinético define la fracción de un fármaco administrado que alcanza la circulación sistémica de forma inalterada?",
              "options": {
                "a": "Biodisponibilidad (F)",
                "b": "Volumen aparente de distribución",
                "c": "Vida media de eliminación (t1/2)",
                "d": "Aclaramiento o depuración renal"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es el mecanismo de acción de los antibióticos betalactámicos (como ampicilina y ceftriaxona)?",
              "options": {
                "a": "Inhibición de la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina (PBP)",
                "b": "Inhibición de la subunidad ribosomal 30S bacteriana",
                "c": "Bloqueo de la enzima ADN girasa (topoisomerasa II)",
                "d": "Disrupción de la membrana fúngica uniéndose al ergosterol"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuál es el antídoto específico para revertir la toxicidad aguda por sobredosis de paracetamol (acetaminofén)?",
              "options": {
                "a": "N-acetilcisteína",
                "b": "Naloxona",
                "c": "Flumazenil",
                "d": "Sulfato de protamina"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "Los fármacos antiinflamatorios no esteroideos (AINEs) clásicos ejercen sus efectos analgésicos y antipiréticos mediante:",
              "options": {
                "a": "Inhibición no selectiva de las enzimas ciclooxigenasas 1 y 2 (COX-1 y COX-2), reduciendo la síntesis de prostaglandinas",
                "b": "Estimulación de los receptores opioides mu en el tálamo",
                "c": "Bloqueo de los receptores histaminérgicos H1 periféricos",
                "d": "Inhibición competitiva de la síntesis de leucotrienos vía 5-lipoxigenasa"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué efecto secundario característico y persistente se asocia al uso de inhibidores de la ECA (como enalapril)?",
              "options": {
                "a": "Tos seca irritativa por acumulación de bradicinina",
                "b": "Hiperglucemia reactiva sintomática",
                "c": "Hipopotasemia severa con alcalosis",
                "d": "Hiperplasia gingival inflamatoria"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuál es el mecanismo de acción de los diuréticos de asa (como la furosemida)?",
              "options": {
                "a": "Inhibición del cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle",
                "b": "Bloqueo del cotransportador Na+/Cl- en el túbulo contorneado distal",
                "c": "Antagonismo competitivo del receptor de aldosterona en el túbulo colector",
                "d": "Inhibición de la anhidrasa carbónica en el glomérulo"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué grupo farmacológico representa la primera línea de tratamiento oral en la diabetes mellitus tipo 2?",
              "options": {
                "a": "Biguanidas (Metformina)",
                "b": "Sulfonilureas (Glibenclamida)",
                "c": "Inhibidores de alfa-glucosidasa",
                "d": "Tiazolidinedionas"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Cuál es el antídoto utilizado para revertir inmediatamente la depresión respiratoria producida por opioides como la morfina?",
              "options": {
                "a": "Naloxona",
                "b": "Flumazenil",
                "c": "Atropina",
                "d": "Fitomenadiona (Vitamina K)"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué familia de antibióticos se caracteriza por presentar riesgo de ototoxicidad y nefrotoxicidad?",
              "options": {
                "a": "Aminoglucósidos (Gentamicina, Amikacina)",
                "b": "Macrólidos (Azitromicina, Claritromicina)",
                "c": "Quinolonas (Ciprofloxacino)",
                "d": "Cefalosporinas de tercera generación"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es el mecanismo de acción de las estatinas (como atorvastatina y simvastatina)?",
              "options": {
                "a": "Inhibición competitiva de la enzima HMG-CoA reductasa en la síntesis de colesterol hepático",
                "b": "Bloqueo de la absorción de grasas por secuestro de sales biliares",
                "c": "Estimulación de la lipoproteína lipasa periférica",
                "d": "Inhibición de la lipólisis en el adipocito"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "Los fármacos antagonistas de los receptores beta-1 adrenérgicos cardioselectivos (como el atenolol o metoprolol) producen:",
              "options": {
                "a": "Disminución de la frecuencia cardíaca (cronotropismo negativo) y de la fuerza contráctil (inotropismo negativo)",
                "b": "Broncodilatación intensa en pacientes asmáticos",
                "c": "Vasodilatación arteriolar directa masiva",
                "d": "Incremento de la secreción de renina renal"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué medicamento broncodilatador es un agonista selectivo de los receptores beta-2 adrenérgicos de acción corta (SABA)?",
              "options": {
                "a": "Salbutamol",
                "b": "Salmeterol",
                "c": "Bromuro de ipratropio",
                "d": "Budesonida"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Cuál es el mecanismo de acción de los inhibidores de la bomba de protones (IBP como el omeprazol)?",
              "options": {
                "a": "Bloqueo irreversible de la enzima H+/K+ ATPasa en las células parietales gástricas",
                "b": "Antagonismo competitivo de los receptores H2 de histamina",
                "c": "Neutralización química directa del ácido clorhídrico luminal",
                "d": "Estimulación de la secreción de moco por las células principales"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "El efecto anticoagulante de la heparina no fraccionada se monitoriza mediante:",
              "options": {
                "a": "Tiempo de Tromboplastina Parcial Activada (TTPa)",
                "b": "Tiempo de Protrombina / INR",
                "c": "Tiempo de sangría de Ivy",
                "d": "Recuento automatizado de plaquetas"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué fármaco anticonvulsivante de primera línea está indicado en el tratamiento inicial del estatus epiléptico?",
              "options": {
                "a": "Benzodiazepinas intravenosas (Diazepam o Lorazepam)",
                "b": "Carbamazepina oral",
                "c": "Ácido valproico en microgránulos",
                "d": "Gabapentina"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Cuál es la principal vía de metabolismo de la mayoría de los fármacos en el hígado?",
              "options": {
                "a": "Sistema enzimático del Citocromo P450 (reacciones de fase I) y conjugación (fase II)",
                "b": "Filtración glomerular pasiva directa sin transformación",
                "c": "Degradación por flora bacteriana colónica",
                "d": "Hidrólisis por amilasa salival"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Cuál de los siguientes antimaláricos es también ampliamente utilizado como antirreumático modificador de la enfermedad (FAME)?",
              "options": {
                "a": "Hidroxicloroquina",
                "b": "Artemisinina",
                "c": "Primaquina",
                "d": "Mefloquina"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el tratamiento de la hipertensión arterial, ¿a qué clase farmacológica pertenece el losartán?",
              "options": {
                "a": "Antagonista de los receptores de angiotensina II (ARA-II)",
                "b": "Inhibidor de la enzima convertidora de angiotensina (IECA)",
                "c": "Bloqueador de los canales de calcio dihidropiridínico",
                "d": "Agonista alfa-2 central"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué efecto adverso característico puede producir la vancomicina si se infunde con excesiva rapidez?",
              "options": {
                "a": "Síndrome del hombre rojo (por liberación masiva de histamina)",
                "b": "Crisis tirotóxica aguda",
                "c": "Anemia hemolítica autoinmune fulminante",
                "d": "Fibrosis pulmonar apical"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Qué vitamina se debe administrar conjuntamente con la isoniacida en el tratamiento antituberculoso para prevenir neuropatía periférica?",
              "options": {
                "a": "Vitamina B6 (Piridoxina)",
                "b": "Vitamina B12 (Cianocobalamina)",
                "c": "Vitamina C (Ácido ascórbico)",
                "d": "Vitamina D (Colecalciferol)"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "med-semio",
          "codigo": "MED-303",
          "siglaCompleta": "MED-303-10412: Semiología Médica y Propedéutica – NM – A",
          "nombre": "Semiología Médica y Propedéutica",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10119466: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En la auscultación cardiaca, ¿dónde se localiza anatómicamente el foco mitral?",
              "options": {
                "a": "Quinto espacio intercostal izquierdo en la línea medioclavicular (ápex cardíaco)",
                "b": "Segundo espacio intercostal derecho en la línea paraesternal",
                "c": "Segundo espacio intercostal izquierdo en la línea paraesternal",
                "d": "Cuarto espacio intercostal izquierdo en el borde esternal"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la causa anatómica del primer ruido cardíaco (R1)?",
              "options": {
                "a": "Cierre de las válvulas auriculoventriculares (mitral y tricúspide)",
                "b": "Cierre de las válvulas semilunares (aórtica y pulmonar)",
                "c": "Llenado ventricular rápido pasivo",
                "d": "Contracción auricular vigorosa telediastólica"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "El signo de Murphy positivo en la exploración física abdominal es altamente sugestivo de:",
              "options": {
                "a": "Colecistitis aguda",
                "b": "Apendicitis aguda retrocecal",
                "c": "Pancreatitis aguda necrohemorrágica",
                "d": "Obstrucción intestinal mecánica"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿En qué consiste el signo de Blumberg (signo del rebote) positivo?",
              "options": {
                "a": "Dolor agudo a la descompresión brusca de la pared abdominal, indicativo de irritación peritoneal",
                "b": "Matidez desplazable en flancos en pacientes ascíticos",
                "c": "Acentuación del dolor en fosa ilíaca derecha al presionar la fosa ilíaca izquierda",
                "d": "Aparición de equimosis periumbilical"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "A la auscultación pulmonar, los estertores crepitantes teleinspiratorios finos ('en velcro') son característicos de:",
              "options": {
                "a": "Neumonía bacteriana, edema agudo de pulmón o fibrosis pulmonar",
                "b": "Asma bronquial en fase intercrítica",
                "c": "Derrame pleural masivo no complicado",
                "d": "Neumotórax a tensión hipertensivo"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué tríada clínica clásica caracteriza al síndrome meníngeo en el adulto?",
              "options": {
                "a": "Cefalea intensa, rigidez de nuca y fiebre",
                "b": "Ictericia, dolor en hipocondrio derecho y acolia",
                "c": "Hipertensión arterial, bradicardia y respiración irregular (tríada de Cushing)",
                "d": "Hipotensión, ruidos cardíacos apagados e ingurgitación yugular (tríada de Beck)"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué evalúa la maniobra de Giordano en el examen físico del aparato urinario?",
              "options": {
                "a": "Dolor a la percusión con el puño en la fosa lumbar, positivo en pielonefritis o litiasis ureteral obstructiva",
                "b": "Presencia de globo vesical por retención urinaria",
                "c": "Permeabilidad del meato uretral externo",
                "d": "Tono del esfínter anal externo"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "En la escala de Coma de Glasgow, ¿cuáles son los tres parámetros evaluados y su puntaje total mínimo y máximo?",
              "options": {
                "a": "Respuesta ocular (4), respuesta verbal (5) y respuesta motora (6); puntaje de 3 a 15",
                "b": "Reflejo pupilar (5), reflejo corneal (5) y reflejo plantar (5); puntaje de 0 a 15",
                "c": "Tono muscular (3), lenguaje (4) y orientación temporoespacial (3); puntaje de 1 a 10",
                "d": "Presión intracraneal, escala visual analógica y saturometría de pulso"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Cómo se define semiológicamente la disnea paroxística nocturna?",
              "options": {
                "a": "Sensación brusca de asfixia que despierta al paciente 1 a 2 horas después de conciliar el sueño y mejora al sentarse, clásica de insuficiencia cardiaca izquierda",
                "b": "Dificultad respiratoria que aparece exclusivamente en decúbito lateral derecho",
                "c": "Aceleración transitoria del ritmo respiratorio durante el ejercicio físico moderado",
                "d": "Sensación de falta de aire al ingerir alimentos sólidos fríos"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "En la percusión torácica, ¿qué sonido se obtiene normalmente sobre un parénquima pulmonar sano aireado?",
              "options": {
                "a": "Claridad pulmonar o sonoridad pulmonar normal",
                "b": "Matidez absoluta similar a la del tejido hepático",
                "c": "Timpanismo agudo metálico",
                "d": "Submatidez periférica fija"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Qué signo clínico consiste en la flexión involuntaria de las caderas y rodillas cuando se flexiona pasivamente el cuello del paciente?",
              "options": {
                "a": "Signo de Brudzinski",
                "b": "Signo de Kernig",
                "c": "Signo de Babinski",
                "d": "Signo de Romberg"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿A qué nivel de bilirrubina sérica total suele hacerse clínicamente evidente la ictericia en las escleras?",
              "options": {
                "a": "Mayor a 2.0 a 2.5 mg/dL",
                "b": "Mayor a 0.2 mg/dL",
                "c": "Mayor a 10.0 mg/dL exclusivamente",
                "d": "A partir de 0.8 mg/dL"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué hallazgo semiológico en las uñas (acropaquia o dedos en palillo de tambor) sugiere hipoxemia crónica o neoplasia pulmonar?",
              "options": {
                "a": "Aumento de la convexidad del lecho ungueal con pérdida del ángulo de Lovibond",
                "b": "Aparición de líneas transversales de Mees",
                "c": "Uñas en cuchara (coiloniquia)",
                "d": "Presencia de estrías longitudinales pigmentadas únicas"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "El pulso paradójico de Kussmaul se define semiológicamente como:",
              "options": {
                "a": "Disminución de más de 10 mmHg de la presión arterial sistólica durante la inspiración tranquila",
                "b": "Aceleración de la frecuencia del pulso radial durante la espiración forzada",
                "c": "Alternancia entre ondas de pulso de amplitud normal y ondas débiles con ritmo regular",
                "d": "Ausencia de latidos en la arteria pedia derecha"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En la exploración neurológica, ¿qué respuesta es positiva para el signo de Babinski?",
              "options": {
                "a": "Dorsiflexión del dedo gordo del pie y apertura en abanico de los demás dedos al estimular la planta, indicativo de lesión de la vía piramidal",
                "b": "Flexión plantar inmediata y enérgica de todos los dedos del pie",
                "c": "Ausencia completa de sensibilidad térmica táctil",
                "d": "Contracción involuntaria refleja del músculo masetero"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué maniobra semiológica ayuda a diferenciar un soplo sistólico de eyección aórtica de uno de miocardiopatía hipertrófica?",
              "options": {
                "a": "Maniobra de Valsalva (aumenta el soplo en miocardiopatía hipertrófica y disminuye en estenosis aórtica)",
                "b": "Maniobra de Rivero-Carvallo",
                "c": "Maniobra de Trendelenburg",
                "d": "Maniobra de Chvostek"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El soplo diastólico aspirativo suave y decreciente en el foco aórtico accesorio (foco de Erb) es característico de:",
              "options": {
                "a": "Insuficiencia aórtica",
                "b": "Estenosis mitral reumática",
                "c": "Persistencia del conducto arterioso",
                "d": "Comunicación interauricular ostium secundum"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué orienta el dolor torácico de origen pleurítico?",
              "options": {
                "a": "Dolor punzante ('en puntada de costado') que se intensifica claramente con la inspiración profunda y la tos",
                "b": "Dolor opresivo retroesternal que irradia a mandíbula y brazo izquierdo sin relación con la ventilación",
                "c": "Sensación de ardor urente retroxifoideo desencadenado tras comidas grasas en decúbito",
                "d": "Dolor pulsátil continuo de más de tres semanas de evolución"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "En el examen de la tiroides, ¿en qué consiste la maniobra de Quervain?",
              "options": {
                "a": "Palpación bimanual de la glándula tiroides situándose el examinador por detrás del paciente sentado",
                "b": "Auscultación de soplos carotídeos con campana estetoscópica",
                "c": "Percusión del esternón para descartar bocio intratorácico",
                "d": "Compresión digital unilateral de la arteria carótida primitiva"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El edema bilateral en miembros inferiores con signo de fóvea (godet) blando, indoloro y vespertino es más típico de:",
              "options": {
                "a": "Insuficiencia cardíaca congestiva o hipertensión venosa crónica",
                "b": "Linfedema primario congénito",
                "c": "Trombosis venosa profunda unilateral aguda",
                "d": "Lipomatosis dolorosa subcutánea de Dercum"
              },
              "correct": "a"
            }
          ]
        }
      ]
    },
    {
      "id": "odontologia",
      "nombre": "Odontología",
      "facultad": "Facultad de Ciencias de la Salud",
      "icono": "clean_hands",
      "descripcion": "Diagnóstico, prevención, rehabilitación y estética del sistema estomatognático.",
      "duracion": "5 años (10 semestres)",
      "subjects": [
        {
          "id": "odo-anat",
          "codigo": "ODO-102",
          "siglaCompleta": "ODO-102-11022: Anatomía Humana y Dentaria – NM – A",
          "nombre": "Anatomía Humana y Dentaria",
          "semestre": "Semestre I",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10229101: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Según el sistema de nomenclatura dental de la FDI (Federación Dental Internacional), ¿qué pieza dentaria representa el número 26?",
              "options": {
                "a": "Primer molar superior izquierdo permanente",
                "b": "Primer molar superior derecho permanente",
                "c": "Segundo premolar superior izquierdo",
                "d": "Canino superior izquierdo temporal"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la cúspide accesoria no funcional que se localiza con frecuencia en la cara palatina de la cúspide mesiopalatina del primer molar superior?",
              "options": {
                "a": "Tubérculo de Carabelli",
                "b": "Tubérculo de Bolk",
                "c": "Cúspide de Pont",
                "d": "Cíngulo lingual accesorio"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué conducto salival principal drena la saliva de la glándula parótida a nivel del segundo molar superior?",
              "options": {
                "a": "Conducto de Stenon (Stensen)",
                "b": "Conducto de Wharton",
                "c": "Conducto de Rivinus",
                "d": "Conducto de Santorini"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Cuál es el diente con la raíz más larga y potente de toda la arcada dentaria humana?",
              "options": {
                "a": "Canino superior permanente",
                "b": "Incisivo central superior",
                "c": "Primer molar inferior",
                "d": "Segundo premolar inferior"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "En oclusión céntrica ideal según la clasificación de Angle, la Clase I molar se define cuando:",
              "options": {
                "a": "La cúspide mesiovestibular del primer molar superior ocluye en el surco mesiovestibular del primer molar inferior",
                "b": "La cúspide distovestibular del primer molar superior ocluye por delante del canino inferior",
                "c": "Los incisivos superiores ocluyen en borde a borde con los inferiores",
                "d": "El primer molar inferior se encuentra en posición distal respecto al superior"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuántas raíces y cuántos conductos radiculares presenta típicamente el primer molar inferior permanente?",
              "options": {
                "a": "Dos raíces (mesial y distal) y generalmente tres conductos (mesiovestibular, mesiolingual y distal)",
                "b": "Una raíz cónica con un único conducto amplio",
                "c": "Tres raíces divergentes con cuatro conductos",
                "d": "Cuatro raíces independientes fusionadas"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué tejido dentario calcificado no posee capacidad de regeneración celular por carecer de células en su matriz madura?",
              "options": {
                "a": "Esmalte dental (por involución de los ameloblastos tras la erupción)",
                "b": "Dentina secundaria",
                "c": "Cemento radicular celular",
                "d": "Hueso alveolar cortical"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué músculo de la masticación es el principal responsable de la propulsión y apertura mandibular al contraerse bilateralmente?",
              "options": {
                "a": "Músculo pterigoideo lateral o externo",
                "b": "Músculo masetero",
                "c": "Músculo temporal",
                "d": "Músculo pterigoideo medial o interno"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La articulación temporomandibular (ATM) se clasifica anatómicamente como una articulación:",
              "options": {
                "a": "Sinovial bicondílea y gínglimo-artrodial (rotación y traslación)",
                "b": "Sincondrosis cartilaginosa fija",
                "c": "Enartrosis esferoidea pura",
                "d": "Sindesmosis fibrosa sutural"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es la pieza dentaria que presenta con mayor frecuencia la llamada 'fosa lingual' delimitada por rebordes marginales marcados (diente en pala)?",
              "options": {
                "a": "Incisivo central superior permanente",
                "b": "Incisivo central inferior",
                "c": "Primer premolar superior",
                "d": "Segundo molar inferior"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "La relación de resalte incisivo horizontal entre el borde incisal superior y la cara vestibular inferior se denomina:",
              "options": {
                "a": "Overjet (resalte)",
                "b": "Overbite (sobremordida vertical)",
                "c": "Mordida cruzada posterior",
                "d": "Mordida abierta anterior"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué diente permanente presenta característicamente dos raíces (una vestibular y una palatina) en el 60-70% de los casos?",
              "options": {
                "a": "Primer premolar superior",
                "b": "Segundo premolar superior",
                "c": "Primer premolar inferior",
                "d": "Segundo premolar inferior"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué estructura fibrocartilaginosa divide la cavidad articular de la ATM en dos compartimentos independientes (supradiscal e infradiscal)?",
              "options": {
                "a": "El disco o menisco articular",
                "b": "El ligamento estilomandibular",
                "c": "El cóndilo temporal",
                "d": "La cápsula fibrosa posterior"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En la dentición temporal (primaria), ¿cuántas piezas dentarias existen en total en un niño con dentición completa?",
              "options": {
                "a": "20 piezas dentarias (10 superiores y 10 inferiores)",
                "b": "32 piezas",
                "c": "24 piezas",
                "d": "28 piezas"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué porcentaje aproximado de materia inorgánica (hidroxiapatita cálcica) conforma el esmalte dental maduro?",
              "options": {
                "a": "96% a 97% en peso",
                "b": "70%",
                "c": "45%",
                "d": "20%"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "El límite amelocementario (LAC) o línea cervical marca la unión anatómica entre:",
              "options": {
                "a": "El esmalte coronal y el cemento radicular",
                "b": "La dentina circumpulpar y la pulpa",
                "c": "El hueso alveolar y el ligamento periodontal",
                "d": "La encía marginal y la mucosa alveolar"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿A qué edad promedio hace erupción en boca el primer molar permanente ('molar de los 6 años')?",
              "options": {
                "a": "Entre los 6 y 7 años de edad, erupcionando por detrás de los molares temporales sin exfoliar ningún diente",
                "b": "A los 3 años de edad",
                "c": "Entre los 11 y 12 años",
                "d": "A los 18 años junto con el tercer molar"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Cuál es la función del ligamento esfenomandibular?",
              "options": {
                "a": "Actuar como ligamento accesorio pasivo que limita los movimientos mandibulares extremos hacia adelante y abajo",
                "b": "Elevar activamente la mandíbula con fuerza masticatoria de 100 kg",
                "c": "Secretar líquido sinovial articular",
                "d": "Transmitir los impulsos gustativos al núcleo del tracto solitario"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "En la cara oclusal del primer molar inferior permanente, ¿cuántas cúspides anatómicas se observan?",
              "options": {
                "a": "Cinco cúspides (tres vestibulares y dos linguales)",
                "b": "Cuatro cúspides simétricas",
                "c": "Tres cúspides piramidales",
                "d": "Dos cúspides aplanadas"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El foramen mandibular o espina de Spix da paso a:",
              "options": {
                "a": "El paquete vasculonervioso alveolar inferior (dentario inferior)",
                "b": "El nervio lingual exclusivamente",
                "c": "La arteria facial transversa",
                "d": "El nervio bucal superficial"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "odo-oper",
          "codigo": "ODO-204",
          "siglaCompleta": "ODO-204-11054: Operatoria Dental y Biomateriales – NM – A",
          "nombre": "Operatoria Dental y Biomateriales",
          "semestre": "Semestre III",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10229102: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Según la clasificación de cavidades de Black, ¿a qué clase corresponden las lesiones cariosas en fosas y fisuras oclusales de molares y premolares?",
              "options": {
                "a": "Clase I de Black",
                "b": "Clase II de Black",
                "c": "Clase III de Black",
                "d": "Clase IV de Black"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Qué clase de Black comprende las cavidades en caras proximales (mesial o distal) de incisivos y caninos que comprometen el ángulo incisal?",
              "options": {
                "a": "Clase IV de Black",
                "b": "Clase III de Black",
                "c": "Clase V de Black",
                "d": "Clase II de Black"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuál es la concentración estándar de ácido fosfórico empleada en la técnica de grabado ácido total en operatoria dental?",
              "options": {
                "a": "35% a 37%",
                "b": "10%",
                "c": "65%",
                "d": "85%"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Cuál es el tiempo promedio recomendado para el grabado ácido del esmalte dental antes de la adhesión?",
              "options": {
                "a": "15 a 30 segundos (lavando por el mismo tiempo y secando sin desecar la dentina)",
                "b": "3 a 5 minutos",
                "c": "2 segundos solamente",
                "d": "10 minutos continuos"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "En los sistemas adhesivos dentales, la 'Capa Híbrida' descrita por Nakabayashi se forma por:",
              "options": {
                "a": "La infiltración y polimerización de monómeros resinosos hidrófilos dentro de la red de fibras colágenas expuestas tras desmineralizar la dentina",
                "b": "La formación de sarro subgingival calcificado",
                "c": "La fusión por calor de partículas de porcelana feldespática",
                "d": "La precipitación de fluoruro de calcio insoluble sobre la mucosa"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué longitud de onda de luz azul emiten las lámparas LED de fotopolimerización para activar la canforoquinona?",
              "options": {
                "a": "Entre 450 y 480 nanómetros (pico en ~468 nm)",
                "b": "Entre 200 y 280 nm (luz ultravioleta profunda)",
                "c": "Entre 750 y 900 nm (luz infrarroja)",
                "d": "Entre 600 y 650 nm (luz roja)"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Cuál es el principal inconveniente inherente a la polimerización de las resinas compuestas?",
              "options": {
                "a": "Contracción de polimerización volumétrica (1.5% - 3%) que puede generar estrés en la interfase adhesiva y microfiltración",
                "b": "Expansión higroscópica masiva que fractura las paredes adamantinas",
                "c": "Coloración verde fosforescente inmediata bajo luz solar",
                "d": "Desaparición total de la dureza superficial a las 24 horas"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué factor geométrico de cavidad (Factor C de Feilzer) predispone a un mayor estrés de contracción adhesiva?",
              "options": {
                "a": "Un Factor C elevado (muchas paredes adheridas respecto a superficies libres, como una cavidad Clase I oclusal profunda)",
                "b": "Un Factor C igual a 0.2 en una superficie vestibular plana",
                "c": "La ausencia total de paredes cavitarias",
                "d": "El pulido con discos abrasivos de carburo"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué material bioactivo se utiliza como protector pulpar directo en exposiciones pulpares accidentales pequeñas?",
              "options": {
                "a": "MTA (Agregado de Trióxido Mineral) o hidróxido de calcio puro",
                "b": "Ácido ortofosfórico al 50%",
                "c": "Barniz de copal con alcohol",
                "d": "Cemento de fosfato de zinc sin fraguar"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué propiedad biomecánica destaca en los Ionómeros de Vidrio convencionales?",
              "options": {
                "a": "Liberación prolongada de fluoruro y adhesión química al esmalte y dentina por quelación con el calcio",
                "b": "Resistencia a la fractura superior al titanio grado 4",
                "c": "Contracción de polimerización del 15%",
                "d": "Imposibilidad absoluta de fraguar en presencia de humedad"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "La técnica incremental de colocación de resina compuesta (capas no mayores a 2 mm oblicuas) tiene como finalidad:",
              "options": {
                "a": "Garantizar una fotopolimerización completa y reducir el factor C y el estrés de contracción en las paredes cavitarias",
                "b": "Acelerar el tiempo de atención clínica a la mitad",
                "c": "Impedir que el paciente cierre la boca durante la consulta",
                "d": "Aumentar la temperatura intrapulpar a más de 50°C"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Cuál es la función del silano en las restauraciones indirectas de cerámica vítrea (disilicato de litio o feldespato)?",
              "options": {
                "a": "Actuar como agente de acoplamiento químico entre la matriz inorgánica de sílice grabada con ácido fluorhídrico y el cemento resinoso orgánico",
                "b": "Desinfectar la superficie de bacterias anaerobias",
                "c": "Teñir la restauración para igualar el color de las encías",
                "d": "Disolver los restos de placa bacteriana residual"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿A qué se denomina 'Barro Dentinario' (Smear Layer) generado durante la preparación cavitaria con fresas rotatorias?",
              "options": {
                "a": "Capa residual de restos de colágeno desnaturalizado, hidroxiapatita, bacterias y fluidos que oblitera los túbulos dentinarios",
                "b": "Una pasta medicamentosa que se coloca intencionalmente para calmar el dolor",
                "c": "El cemento radicular expuesto en recesiones gingivales",
                "d": "Una película protectora indestructible de origen salival"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En el aislamiento absoluto del campo operatorio con dique de goma, ¿cuál es su principal ventaja?",
              "options": {
                "a": "Control estricto de la humedad y saliva, asepsia y protección de la vía aérea del paciente frente a deglución accidental de instrumental",
                "b": "Acelerar la tasa de crecimiento de las raíces dentarias",
                "c": "Disminuir la presión arterial sistólica del paciente",
                "d": "Evitar la necesidad de administrar anestesia local"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué clase de resinas compuestas combina alta resistencia al desgaste con excelente capacidad de pulido y brillo duradero?",
              "options": {
                "a": "Resinas nanohíbridas y de nanorrelleno (nanopartículas de sílice y zirconia)",
                "b": "Macropartículas convencionales de los años 1970",
                "c": "Resinas fluidas sin ningún tipo de carga mineral",
                "d": "Acrílicos autopolimerizables para cubetas individuales"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "El ácido fluorhídrico al 5-10% se utiliza en operatoria dental específicamente para grabar:",
              "options": {
                "a": "Cerámicas de base vítrea (feldespáticas y disilicato de litio) para crear microporosidades mecánicas",
                "b": "Esmalte dental vivo antes de sellar fosas",
                "c": "Dentina profunda cercana al cuerno pulpar",
                "d": "Coronas metálicas de cromo-cobalto"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "En la técnica de restauración Clase II, ¿qué elemento es indispensable para restaurar correctamente el punto de contacto interproximal?",
              "options": {
                "a": "Sistema de matriz seccional con anillo separador de tensión y cuña de madera o plástica",
                "b": "Tira de celuloide para anteriores sin soporte",
                "c": "Espátula de cera caliente número 7",
                "d": "Hilo dental empapado en peróxido de hidrógeno"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Cuál es la causa principal de sensibilidad postoperatoria tras la colocación de una restauración de resina compuesta en dentina profunda?",
              "options": {
                "a": "Desecación excesiva de la dentina, polimerización inadecuada o fallo adhesivo con movimiento de fluidos tubulares (teoría hidrodinámica de Brännström)",
                "b": "Ingesta excesiva de líquidos tibios por el paciente",
                "c": "Exceso de flúor en el agua de red pública",
                "d": "Uso de guantes de látex por el odontólogo"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "El biselado del margen cavo superficial en esmalte en preparaciones anteriores para resina compuesta tiene como objetivo:",
              "options": {
                "a": "Aumentar la superficie de grabado cortando los prismas transversalmente y lograr una transición estética imperceptible",
                "b": "Exponer mayor cantidad de dentina al medio bucal",
                "c": "Facilitar la retención mediante pernos metálicos roscados",
                "d": "Impedir la acción de la luz de fotocurado"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Qué instrumento se utiliza para chequear los contactos prematuros e interferencias oclusales tras terminar una restauración?",
              "options": {
                "a": "Papel de articular fino (8 a 40 micras) colocado en pinza Miller",
                "b": "Sonda periodontal milimetrada de la OMS",
                "c": "Cucharilla de dentina afilada",
                "d": "Espejo intraoral plano número 5"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "odo-perio",
          "codigo": "ODO-301",
          "siglaCompleta": "ODO-301-11088: Periodoncia I – NM – A",
          "nombre": "Periodoncia I",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10229103: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuáles son los cuatro componentes anatómicos que integran el periodonto?",
              "options": {
                "a": "Encía, ligamento periodontal, cemento radicular y hueso alveolar",
                "b": "Esmalte, dentina, pulpa y ápice radicular",
                "c": "ATM, músculo masetero, mucosa yugal y carrillo",
                "d": "Glándula parótida, conducto de Stenon, lengua y frenillo labial"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la profundidad de sondaje considerada normal en un surco gingival histológicamente sano en el adulto?",
              "options": {
                "a": "De 1 a 3 mm sin sangrado al sondaje suave",
                "b": "De 6 a 9 mm",
                "c": "Exactamente 0 mm (ausencia de surco)",
                "d": "De 4 a 6 mm con supuración serosa"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuál es la diferencia fundamental en el diagnóstico clínico entre Gingivitis y Periodontitis?",
              "options": {
                "a": "La gingivitis es una inflamación confinada a la encía sin pérdida de inserción clínica ni reabsorción ósea; la periodontitis implica pérdida de inserción y soporte óseo",
                "b": "La gingivitis solo afecta a niños menores de 5 años",
                "c": "La periodontitis es un proceso alérgico no infeccioso",
                "d": "La gingivitis siempre requiere cirugía resectiva de colgajo"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué bacteria anaerobia estricta gramnegativa del complejo rojo de Socransky se asocia estrechamente con formas severas de periodontitis?",
              "options": {
                "a": "Porphyromonas gingivalis",
                "b": "Streptococcus mutans",
                "c": "Lactobacillus acidophilus",
                "d": "Staphylococcus epidermidis"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué instrumento manual con parte activa de corte se utiliza para el raspado y alisado radicular de caras distales de molares?",
              "options": {
                "a": "Cureta Gracey 13/14",
                "b": "Cureta Gracey 1/2",
                "c": "Cureta Gracey 7/8",
                "d": "Cureta Gracey 11/12"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La cureta Gracey 11/12 está diseñada específicamente para acceder a:",
              "options": {
                "a": "Caras mesiales de piezas posteriores (premolares y molares)",
                "b": "Caras distales de molares exclusivamente",
                "c": "Dientes anteriores en caras libres",
                "d": "Superficie oclusal de molares temporales"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Cómo se define el 'Nivel de Inserción Clínica' (NIC / CAL) en periodoncia?",
              "options": {
                "a": "La distancia medida desde el límite amelocementario (LAC) hasta el fondo de la bolsa o surco periodontal",
                "b": "La distancia desde el margen gingival hasta el ápice radiográfico",
                "c": "El grosor de la encía insertada en milímetros",
                "d": "El número de dientes presentes en boca multiplicado por dos"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "El signo clínico primario más temprano y fidedigno de inflamación gingival activa es:",
              "options": {
                "a": "Sangrado al sondaje (BOP - Bleeding on Probing)",
                "b": "Movilidad dental grado III",
                "c": "Pérdida del punto de contacto proximal",
                "d": "Extrusión dentaria espontánea"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué caracteriza al 'Espacio Biológico' (Anchura Biológica / Inserción de Tejido Supracrestal) que mide en promedio unos 2.04 mm?",
              "options": {
                "a": "La dimensión compuesta por el epitelio de unión (~0.97 mm) y la inserción conectiva supracrestal (~1.07 mm)",
                "b": "El espacio libre entre los dientes anteriores al sonreír",
                "c": "La longitud del conducto radicular principal",
                "d": "El grosor de la cortical vestibular mandibular"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es el principal factor de riesgo modificable no bacteriano que acelera y agrava la destrucción periodontal?",
              "options": {
                "a": "El consumo de tabaco (tabaquismo)",
                "b": "El cepillado dental con cerdas suaves",
                "c": "El uso diario de seda dental",
                "d": "El consumo moderado de frutas cítricas"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En la clasificación de movilidad dentaria de Miller, la Movilidad Grado 2 se define como:",
              "options": {
                "a": "Movimiento horizontal de la corona mayor a 1 mm pero menor a 2 mm, sin desplazamiento vertical",
                "b": "Movilidad fisiológica menor a 0.2 mm",
                "c": "Movilidad severa en sentido horizontal y vertical (intrusión)",
                "d": "Anquilosis completa con sonido metálico a la percusión"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué grupo de bacterias propuso Sigmund Socransky como 'Complejo Rojo', patógenos clave en periodontitis?",
              "options": {
                "a": "Porphyromonas gingivalis, Treponema denticola y Tannerella forsythia",
                "b": "Streptococcus sanguinis, Actinomyces viscosus y Rothia",
                "c": "Lactobacillus casei y Bifidobacterium",
                "d": "Enterococcus faecalis y Candida albicans"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "Una bolsa periodontal supraósea se diferencia de una infraósea en que:",
              "options": {
                "a": "El fondo de la bolsa supraósea se sitúa coronal a la cresta ósea alveolar; en la infraósea está apical al nivel de la cresta ósea",
                "b": "La supraósea solo se produce en el maxilar superior",
                "c": "La infraósea no presenta placa bacteriana subgingival",
                "d": "La supraósea cura espontáneamente sin tratamiento profesional"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Cuál es la concentración y posología habitual de clorhexidina utilizada como coadyuvante antimicrobiano en enjuagues periodontales?",
              "options": {
                "a": "Digluconato de clorhexidina al 0.12% en enjuagues de 15 mL durante 30-60 segundos dos veces al día",
                "b": "Clorhexidina al 5% sin diluir cada hora",
                "c": "Clorhexidina en polvo disuelta en leche materna",
                "d": "Clorhexidina al 0.001% semanalmente"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "La lesión periodontal que compromete la bifurcación o trifurcación radicular de piezas multirradiculares se clasifica mediante el índice de:",
              "options": {
                "a": "Hamp, Nyman y Lindhe (Grado I, II y III de furcación)",
                "b": "Índice de masa corporal de Quetelet",
                "c": "Escala de Glasgow",
                "d": "Clasificación de Kennedy para desdentados parciales"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Cuál es el objetivo primordial de la fase no quirúrgica o terapia etiológica en el tratamiento periodontal?",
              "options": {
                "a": "Eliminar la biopelícula bacteriana y los depósitos de cálculo supra y subgingival, e instruir en control de placa",
                "b": "Extraer todas las piezas con bolsa mayor a 3 mm",
                "c": "Realizar gingivectomías a bisel externo en toda la arcada",
                "d": "Instalar prótesis totales mucosoportadas"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El aspecto macroscópico clásico de la encía adherida sana se describe clínicamente como:",
              "options": {
                "a": "Color rosa pálido o coral, consistencia firme y superficie punteada ('en cáscara de naranja')",
                "b": "Color rojo vinoso brillante, edematosa y sangrante espontáneamente",
                "c": "Blanquecina con placas pseudomembranosas desprendibles",
                "d": "Negruzca violácea y completamente lisa"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué fibra del ligamento periodontal resiste principalmente las fuerzas oclusales intrusivas verticales?",
              "options": {
                "a": "Fibras oblicuas o descendentes (las más numerosas del ligamento)",
                "b": "Fibras de la cresta alveolar",
                "c": "Fibras transeptales interdentarias",
                "d": "Fibras horizontales apicales"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La presencia de necrosis y ulceración de las papilas interdentales ('papilas decapitadas o crateriformes') cubiertas de pseudomembrana grisácea y fetidez intensa es diagnóstica de:",
              "options": {
                "a": "Gingivitis Ulceronecrotizante (GUN)",
                "b": "Periodontitis crónica apical",
                "c": "Gingivitis inducida por respirador bucal",
                "d": "Hiperplasia gingival por fenitoína"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿A las cuántas semanas tras el raspado y alisado radicular se debe realizar la reevaluación periodontal para registrar nuevos sondajes?",
              "options": {
                "a": "Entre 4 y 6 semanas después del tratamiento",
                "b": "A las 24 horas del procedimiento",
                "c": "Exactamente a los 5 años",
                "d": "El mismo día por la tarde"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "odo-endo",
          "codigo": "ODO-303",
          "siglaCompleta": "ODO-303-11112: Endodoncia I – NM – A",
          "nombre": "Endodoncia I",
          "semestre": "Semestre V",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10229104: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Qué prueba de sensibilidad pulpar es la más confiable y ampliamente utilizada en la clínica endodóntica?",
              "options": {
                "a": "Prueba térmica al frío con diclorodifluorometano o tetrafluoroetano (Endo-Ice)",
                "b": "Percusión vertical con el mango del espejo",
                "c": "Transiluminación con luz halógena",
                "d": "Palpación vestibular del fondo de surco"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "Un dolor provocado por estímulos térmicos fríos que persiste durante más de 30 segundos tras retirar el estímulo y que a menudo es espontáneo o nocturno caracteriza a:",
              "options": {
                "a": "Pulpitis irreversible sintomática",
                "b": "Pulpitis reversible incipiente",
                "c": "Diente con pulpa clínicamente normal",
                "d": "Necrosis pulpar completa asintomática"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuál es la concentración de hipoclorito de sodio (NaOCl) más comúnmente utilizada como irrigante principal en endodoncia?",
              "options": {
                "a": "Del 2.5% al 5.25%",
                "b": "0.1%",
                "c": "50%",
                "d": "0.01%"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué propiedad primordial posee el hipoclorito de sodio que no tiene la clorhexidina ni el suero fisiológico?",
              "options": {
                "a": "Capacidad de disolver tejido orgánico y restos de pulpa necrótica",
                "b": "Capacidad de quelar y disolver hidroxiapatita inorgánica",
                "c": "Acción anestésica local intrapulpar",
                "d": "Capacidad de regenerar dentina terciaria"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué solución quelante se emplea al 17% durante 1 minuto para remover el componente inorgánico del barrillo dentinario en el conducto radicular?",
              "options": {
                "a": "EDTA (Ácido etilendiaminotetraacético al 17%)",
                "b": "Ácido clorhídrico puro",
                "c": "Peróxido de hidrógeno al 3%",
                "d": "Fluoruro de sodio acidulado"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La 'Longitud de Trabajo' en endodoncia se establece tradicionalmente a nivel de:",
              "options": {
                "a": "La constricción apical (límite CDC - cemento-dentina-conducto), aproximadamente a 0.5 - 1.0 mm del foramen apical radiográfico",
                "b": "2 mm más allá del ápice óseo radiográfico",
                "c": "La mitad de la raíz anatómica",
                "d": "El cuello cervical del diente"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "Los localizadores apicales electrónicos modernos de frecuencia múltiple determinan la constricción apical midiendo:",
              "options": {
                "a": "La impedancia y resistencia eléctrica de dos frecuencias alternas en los tejidos periapicales",
                "b": "El calor emitido por la irrigación",
                "c": "El flujo magnético del hierro celular",
                "d": "La presión hidrostática del conducto"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Cuál es la aleación metálica predominante utilizada en los sistemas mecanizados de instrumentación rotatoria y reciprocante en endodoncia?",
              "options": {
                "a": "Níquel-Titanio (NiTi) con memoria de forma y superelasticidad",
                "b": "Acero inoxidable al carbono 316",
                "c": "Oro amarillo de 24 kilates",
                "d": "Cobre electrolítico puro"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué microorganismo anaerobio facultativo grampositivo se aísla con mayor frecuencia en infecciones endodónticas persistentes y fracasos de retratamiento?",
              "options": {
                "a": "Enterococcus faecalis",
                "b": "Streptococcus mutans",
                "c": "Treponema pallidum",
                "d": "Mycobacterium tuberculosis"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "La medicación intraconducto de elección entre sesiones en dientes infectados con periodontitis apical es:",
              "options": {
                "a": "Pasta de Hidróxido de Calcio puro [Ca(OH)2]",
                "b": "Paramonoclorofenol alcanforado puro en gasa",
                "c": "Formocresol de Buckley al 100%",
                "d": "Amoxicilina en polvo seco"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "La técnica de obturación endodóntica tradicional más extendida que utiliza conos de gutapercha y cemento sellador se denomina:",
              "options": {
                "a": "Condensación lateral en frío",
                "b": "Inyección termoplástica continua sin sellador",
                "c": "Obturación exclusiva con amalgama de plata",
                "d": "Técnica de puntas de plata de Rickert"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Cuál es el cono principal de gutapercha que se selecciona para la obturación?",
              "options": {
                "a": "Aquel cuyo calibre y conicidad coinciden con el instrumento de mayor calibre utilizado en la longitud de trabajo (lima maestra apical - FMA)",
                "b": "El cono más fino disponible en el mercado (número 06)",
                "c": "Cualquier cono seleccionado al azar",
                "d": "Un cono 5 números mayor que la preparación radicular"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En el diagnóstico periapical, una pieza dentaria no reactiva al frío y calor, con dolor exquisito a la percusión vertical y sin radiolucidez periapical evidente se diagnostica como:",
              "options": {
                "a": "Periodontitis apical sintomática con necrosis pulpar",
                "b": "Pulpa normal con periodonto sano",
                "c": "Quiste radicular crónico volumétrico",
                "d": "Absceso apical crónico fistulizado"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La presencia de un tracto sinuoso o fístula activa en la encía asociado a un diente desvitalizado asintomático define clínicamente un:",
              "options": {
                "a": "Absceso apical crónico",
                "b": "Absceso apical agudo con celulitis",
                "c": "Granuloma eosinófilo maligno",
                "d": "Periodontitis apical asintomática sin drenaje"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En el primer molar superior, ¿en qué raíz se busca con microscopio operatorio el conducto MV2 (mesiovestibular 2) presente en más del 70-80% de los casos?",
              "options": {
                "a": "En la raíz mesiovestibular",
                "b": "En la raíz palatina",
                "c": "En la raíz distovestibular",
                "d": "En el ápice radicular accesorio lingual"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué complicación grave puede ocurrir si se irriga con hipoclorito de sodio extruyéndolo con excesiva presión más allá del foramen apical?",
              "options": {
                "a": "Accidente por hipoclorito (dolor urente atroz inmediato, edema masivo rápido, necrosis tisular y hematoma periorbital/facial)",
                "b": "Calcificación inmediata de la arteria carótida",
                "c": "Pérdida de la audición ipsilateral transitoria",
                "d": "Rotura de la apófisis coronoides mandibular"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "Las limas manuales tipo K de la primera serie estandarizada ISO (calibres 15 a 40) tienen una conicidad constante de:",
              "options": {
                "a": "0.02 (2% de aumento de diámetro por cada milímetro de longitud)",
                "b": "0.06 (6%)",
                "c": "0.10 (10%)",
                "d": "0.00 (cilíndricas sin conicidad)"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué color del mango estandarizado ISO corresponde a una lima de calibre 25, 55 u 80?",
              "options": {
                "a": "Color Rojo",
                "b": "Color Blanco (15, 45)",
                "c": "Color Amarillo (20, 50)",
                "d": "Color Azul (30, 60)"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué propiedad biológica destacable posee el cemento sellador biocerámico a base de silicato tricálcico (ej. Bio-C Sealer)?",
              "options": {
                "a": "Excelente biocompatibilidad, hidrofilia, nula contracción y capacidad de inducir formación de hidroxiapatita",
                "b": "Solubilidad total en agua destilada a los 10 minutos",
                "c": "Coloración azulada fluorescente bajo luz solar",
                "d": "Toxicidad celular irreversible para el osteoblasto"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "La preparación del acceso cameral coronario en un incisivo central superior debe iniciarse en:",
              "options": {
                "a": "La cara palatina, exactamente en el centro geométrico por encima del cíngulo con fresa perpendicular y luego paralela al eje largo",
                "b": "La cara vestibular estética vestibular",
                "c": "El ángulo incisal mesial fracturado",
                "d": "El surco gingival lingual"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "odo-ciru",
          "codigo": "ODO-402",
          "siglaCompleta": "ODO-402-11145: Cirugía Bucal y Anestesiología – NM – A",
          "nombre": "Cirugía Bucal y Anestesiología",
          "semestre": "Semestre VII",
          "sede": "Sede Oruro",
          "grupo": "A",
          "examen": "1P-1-2026-10229105: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Qué nervio se bloquea en la técnica anestésica troncular mandibular clásica (técnica directa o indirecta)?",
              "options": {
                "a": "Nervio alveolar inferior (dentario inferior) y nervio lingual",
                "b": "Nervio infraorbitario y nervio nasal externo",
                "c": "Nervio palatino anterior mayor exclusivamente",
                "d": "Nervio hipogloso en el piso de boca"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la concentración de lidocaína y epinefrina en el cartucho de anestésico local más frecuentemente utilizado en odontología?",
              "options": {
                "a": "Lidocaína al 2% con epinefrina 1:100.000",
                "b": "Lidocaína al 10% sin vasoconstrictor",
                "c": "Lidocaína al 0.5% con epinefrina 1:1.000",
                "d": "Mepivacaína al 5% pura"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué dosis máxima de lidocaína con vasoconstrictor se recomienda no sobrepasar en un adulto sano (en mg/kg)?",
              "options": {
                "a": "7.0 mg/kg de peso (máximo absoluto aproximado de 500 mg, unos 13 cartuchos)",
                "b": "1.0 mg/kg de peso",
                "c": "25.0 mg/kg de peso",
                "d": "50.0 mg/kg de peso"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En la clasificación de Pell y Gregory para terceros molares inferiores retenidos, la 'Clase II' en relación con la rama mandibular indica:",
              "options": {
                "a": "El espacio entre la superficie distal del segundo molar y la rama ascendente es menor que el diámetro mesiodistal de la corona del tercer molar",
                "b": "Hay espacio suficiente para que la corona erupcione libremente",
                "c": "El tercer molar se encuentra completamente dentro de la rama ascendente ósea",
                "d": "El tercer molar está ectópico en la fosa nasal"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué instrumento quirúrgico se utiliza para despegar y elevar el colgajo mucoperióstico del hueso tras realizar la incisión?",
              "options": {
                "a": "Periostótomo o legra de Molt o Prichard",
                "b": "Fórceps pico de loro mandibular",
                "c": "Cureta alveolar de Lucas sin filo",
                "d": "Pinza gubia de doble articulación"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuál es la complicación postoperatoria dolorosa más frecuente tras la exodoncia de un tercer molar inferior?",
              "options": {
                "a": "Alveolitis seca (osteítis alveolar fibrinolítica)",
                "b": "Fractura espontánea de la clavícula",
                "c": "Anquilosis de la articulación del codo",
                "d": "Parálisis del nervio glosofaríngeo"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "El tratamiento de urgencia de la alveolitis seca consiste primordialmente en:",
              "options": {
                "a": "Irrigación suave del alvéolo con suero fisiológico tibio, eliminación de detritos sin curetaje agresivo y colocación de apósito sedante (ej. Alvogyl)",
                "b": "Curetaje óseo violento hasta generar sangrado masivo sin anestesia",
                "c": "Prescripción de quimioterapia citostática intravenosa",
                "d": "Colocación de amalgama de plata dentro del alvéolo"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué fórceps dental está indicado para la extracción de molares superiores con raíces divergentes?",
              "options": {
                "a": "Fórceps número 18R (derecho) y 18L (izquierdo) con pico vestibular trifurcado y pico palatino liso",
                "b": "Fórceps recto anterior número 150",
                "c": "Fórceps pico de loro universal mandibular",
                "d": "Fórceps número 151 curvo inferior"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La maniobra de Valsalva en el sillón dental se solicita tras la exodoncia de un molar superior para:",
              "options": {
                "a": "Comprobar la existencia de una comunicación bucosinusal (burbujeo de aire o sangre en el alvéolo)",
                "b": "Verificar la presión arterial en el brazo izquierdo",
                "c": "Acelerar la formación del tapón de plaquetas",
                "d": "Comprobar la audición en ambos oídos"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué estructura anatómica noble de riesgo se localiza en íntima vecindad con los ápices de los terceros molares inferiores?",
              "options": {
                "a": "El conducto del nervio alveolar inferior y el nervio lingual en la cortical interna",
                "b": "El conducto carotídeo interno",
                "c": "El bulbo raquídeo del tronco encefálico",
                "d": "La arteria meníngea media"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Cuál es el principal síntoma de la lesión iatrogénica del nervio lingual durante una cirugía de tercer molar?",
              "options": {
                "a": "Parestesia, anestesia y pérdida del gusto en los dos tercios anteriores de la hemilengua ipsilateral",
                "b": "Incapacidad para cerrar el párpado del ojo derecho",
                "c": "Dolor severo en el lóbulo de la oreja",
                "d": "Dificultad permanente para tragar líquidos calientes"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué tipo de sutura quirúrgica es de origen sintético, no reabsorbible y de baja reactividad tisular, ideal para mucosa bucal?",
              "options": {
                "a": "Seda negra trenzada o Nylon monofilamento 3-0 / 4-0",
                "b": "Catgut simple no tratado",
                "c": "Alambre de acero quirúrgico calibre 10",
                "d": "Grapas metálicas para piel abdominal"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "La técnica de incisión festoneada con descargas liberatrices divergentes hacia el fondo de surco vestibular se conoce como:",
              "options": {
                "a": "Colgajo trapezoidal de Neumann o colgajo de Widman modificado",
                "b": "Incisión circular pura de Partsch",
                "c": "Incisión semilunar de Wassmund exclusivamente",
                "d": "Incisión de McBurney abdominal"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Qué medicamento antibiótico de primera elección se prescribe habitualmente profiláctica o terapéuticamente en infecciones odontogénicas en pacientes no alérgicos?",
              "options": {
                "a": "Amoxicilina 500-875 mg sola o asociada a Ácido Clavulánico",
                "b": "Vancomicina en infusión rápida",
                "c": "Gentamicina intramuscular",
                "d": "Tetraciclina tópica en colirio"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En pacientes alérgicos a penicilinas con infección odontogénica severa, la alternativa oral clásica es:",
              "options": {
                "a": "Clindamicina 300 mg o Azitromicina 500 mg",
                "b": "Ampicilina sódica",
                "c": "Cefalexina en dosis altas",
                "d": "Amoxicilina con sulbactam"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "La angina de Ludwig se define como:",
              "options": {
                "a": "Una celulitis infecciosa rápidamente progresiva y potencialmente mortal que compromete bilateralmente los espacios submandibular, sublingual y submentoniano",
                "b": "Un infarto agudo de miocardio silencioso en ancianos",
                "c": "Una luxación recidivante de la mandíbula al bostezar",
                "d": "Un tumor benigno de las glándulas salivales menores"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué instrumento se utiliza para la regularización de espículas óseas afiladas en el reborde alveolar tras extracciones múltiples?",
              "options": {
                "a": "Lima de hueso y pinza gubia",
                "b": "Tijera curva de Castroviejo",
                "c": "Bisturí Bard-Parker con hoja número 15",
                "d": "Elevador recto ancho acanalado"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "La técnica quirúrgica de apicectomía consiste en:",
              "options": {
                "a": "La resección quirúrgica del tercio apical de la raíz dentaria (unos 3 mm) y obturación retrógrada con material biocompatible (ej. MTA)",
                "b": "La extracción completa del diente con reimplante invertido",
                "c": "El corte de la corona clínica a nivel cervical",
                "d": "La remoción de la mucosa yugal adyacente"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué precaución básica debe tomarse antes de inyectar la solución anestésica para evitar inyección intravascular accidental?",
              "options": {
                "a": "Aspiración previa obligatoria en dos planos rotando la jeringa carpule",
                "b": "Calentar el cartucho en agua hirviendo a 100°C",
                "c": "Inyectar el contenido completo en menos de 2 segundos",
                "d": "Doblar la aguja a 90 grados respecto al eje"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El tiempo de retiro de puntos de sutura convencional no reabsorbible en la mucosa oral suele ser de:",
              "options": {
                "a": "7 a 10 días tras la intervención quirúrgica",
                "b": "24 horas postoperatorias",
                "c": "30 a 45 días después",
                "d": "No se retiran nunca"
              },
              "correct": "a"
            }
          ]
        }
      ]
    },
    {
      "id": "fisioterapia",
      "nombre": "Fisioterapia y Kinesiología",
      "facultad": "Facultad de Ciencias de la Salud",
      "icono": "accessibility_new",
      "descripcion": "Rehabilitación funcional, cinesiterapia y prevención de disfunciones del movimiento corporal.",
      "duracion": "4 años (8 semestres)",
      "subjects": [
        {
          "id": "fis-bio",
          "codigo": "FIS-103",
          "siglaCompleta": "FIS-103-12011: Biomecánica y Cinesiología – NM – A",
          "nombre": "Biomecánica y Cinesiología",
          "semestre": "Semestre II",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10338101: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En biomecánica, ¿qué tipo de palanca musculoesquelética representa la articulación del tobillo al elevarse sobre las puntas de los pies (tríceps sural)?",
              "options": {
                "a": "Palanca de segundo género (inter-resistente: fulcro - resistencia - potencia)",
                "b": "Palanca de primer género (inter-apoyo)",
                "c": "Palanca de tercer género (inter-potente)",
                "d": "Palanca de cuarto género parabólica"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es el tipo de palanca más abundante en el sistema musculoesquelético humano (ejemplo: flexión del codo por el bíceps braquial)?",
              "options": {
                "a": "Palanca de tercer género (inter-potente, que favorece la velocidad y amplitud de movimiento frente a la fuerza)",
                "b": "Palanca de primer género de equilibrio",
                "c": "Palanca de segundo género",
                "d": "Polea compuesta invertida"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿En qué plano anatómico y alrededor de qué eje se realizan los movimientos de flexión y extensión?",
              "options": {
                "a": "Plano sagital alrededor de un eje frontal o transversal (coronal)",
                "b": "Plano frontal alrededor de un eje sagital",
                "c": "Plano transversal alrededor de un eje longitudinal",
                "d": "Plano oblicuo alrededor de un eje diagonal"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "Durante el ciclo normal de la marcha humana, ¿qué porcentaje aproximado corresponde a la fase de apoyo y a la fase de balanceo (oscilación) respectivamente?",
              "options": {
                "a": "Aproximadamente 60% fase de apoyo y 40% fase de balanceo",
                "b": "50% apoyo y 50% balanceo exactamente",
                "c": "80% balanceo y 20% apoyo",
                "d": "90% apoyo y 10% balanceo"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué caracteriza a un ejercicio de 'Cadena Cinética Cerrada' (CCC)?",
              "options": {
                "a": "El segmento distal de la extremidad está fijo o en contacto con una superficie resistente inamovible (ejemplo: sentadilla o flexiones)",
                "b": "El segmento distal se mueve libremente en el espacio sin soporte (ejemplo: extensión de rodilla en máquina)",
                "c": "Solo se realiza en el agua con boyas inflables",
                "d": "No requiere activación neuromuscular voluntaria"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Dónde se localiza normalmente el Centro de Gravedad (CG) del cuerpo humano adulto en bipedestación anatómica erguida?",
              "options": {
                "a": "Inmediatamente por delante de la segunda vértebra sacra (S2), aproximadamente al 55-57% de la altura total",
                "b": "A nivel de la séptima vértebra cervical (C7)",
                "c": "En la articulación de ambas rodillas",
                "d": "En el centro del esternón torácico"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "La contracción muscular en la cual el músculo genera tensión mientras sus fibras se alargan (controlando una carga o frenando la gravedad) se denomina:",
              "options": {
                "a": "Contracción isotónica excéntrica",
                "b": "Contracción isotónica concéntrica",
                "c": "Contracción isométrica pura",
                "d": "Contracción isocinética pasiva"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué ley física de Newton es la base del principio de propulsión y choque de talón en la marcha (tercera ley)?",
              "options": {
                "a": "Ley de Acción y Reacción (Fuerza de reacción del suelo - GRF)",
                "b": "Ley de la inercia pura",
                "c": "Ley de gravitación universal",
                "d": "Ley de conservación de la carga eléctrica"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En cinemática articular, la artrocinemática describe los movimientos accesorios no fisiológicos involuntarios entre superficies articulares correspondientes a:",
              "options": {
                "a": "Rodamiento, deslizamiento y giro (spin)",
                "b": "Flexión, extensión e hiperextensión macroscópica",
                "c": "Abducción y aducción activa",
                "d": "Pronación y supinación de la mano"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "La regla cóncavo-convexa de Kaltenborn establece que cuando una superficie articular convexa móvil se desplaza sobre una cóncava fija:",
              "options": {
                "a": "El deslizamiento articular ocurre en dirección opuesta al movimiento osteocinemático del hueso",
                "b": "El deslizamiento y el rodamiento ocurren exactamente en la misma dirección",
                "c": "No existe ningún componente de deslizamiento",
                "d": "La articulación se luxa de forma fisiológica"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Qué músculo es el principal estabilizador dinámico anterior de la rodilla y extensor de la articulación?",
              "options": {
                "a": "Cuádriceps femoral (especialmente el vasto medial oblicuo en los últimos grados)",
                "b": "Bíceps femoral cabeza corta",
                "c": "Músculo poplíteo",
                "d": "Gastrocnemio lateral"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué estructura biomecánica amortigua y distribuye las cargas axiales compresivas en la columna vertebral entre dos cuerpos vertebrales?",
              "options": {
                "a": "El disco intervertebral (núcleo pulposo hidrófilo y anillo fibroso)",
                "b": "El ligamento amarillo elástico",
                "c": "Las apófisis espinosas posteriores",
                "d": "El ligamento interespinoso"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "El fenómeno de histéresis y fluencia lenta (creep) en los tejidos colágenos viscoelásticos (ligamentos y tendones) significa que:",
              "options": {
                "a": "Bajo una carga mecánica constante y prolongada, el tejido experimenta una deformación progresiva en función del tiempo",
                "b": "El tendón se endurece como hueso cortical en 30 segundos",
                "c": "El tejido pierde toda su resistencia a la tracción de forma permanente",
                "d": "La temperatura del tendón desciende a 0°C"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En el complejo articular del hombro, el ritmo escápulo-humeral fisiológico durante la abducción completa del brazo es de aproximadamente:",
              "options": {
                "a": "2:1 (por cada 2° de movimiento glenohumeral, hay 1° de rotación escapulotorácica)",
                "b": "1:5",
                "c": "1:1 estricto en todos los ángulos",
                "d": "5:1 exclusivo de la articulación acromioclavicular"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué función biomecánica cumple la rótula (patela) en el aparato extensor de la rodilla?",
              "options": {
                "a": "Aumentar el brazo de palanca del tendón cuadricipital al alejarlo del eje de rotación de la rodilla, incrementando la ventaja mecánica",
                "b": "Disminuir la fuerza de extensión para proteger los meniscos",
                "c": "Servir de inserción distal a los músculos isquiotibiales",
                "d": "Bloquear la rotación de la cadera"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué subfase del ciclo de la marcha se inicia con el contacto inicial del talón en el suelo y termina con el apoyo plantar completo?",
              "options": {
                "a": "Respuesta a la carga (loading response)",
                "b": "Apoyo medio (mid stance)",
                "c": "Despegue de talón (terminal stance)",
                "d": "Balanceo medio (mid swing)"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "La posición articular de 'Bloqueo' o 'Empaquetamiento Máximo' (Close-Packed Position) se caracteriza por:",
              "options": {
                "a": "Máxima congruencia articular, cápsula y ligamentos tensos al máximo y mínimo volumen intraarticular",
                "b": "Superficies articulares completamente separadas y cápsula laxa",
                "c": "Peligro inminente de necrosis avascular",
                "d": "La posición de reposo con cero grados de flexión"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "Durante la respiración diafragmática, el movimiento de las costillas inferiores (7 a 10) que incrementa el diámetro transversal del tórax se compara con:",
              "options": {
                "a": "Movimiento en 'asa de cubo' (bucket-handle)",
                "b": "Movimiento en 'brazo de bomba' (pump-handle)",
                "c": "Movimiento de tijera sagital",
                "d": "Movimiento de pistón vertical puro"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué músculo actúa como el principal abductor de la articulación coxofemoral evitando la caída de la pelvis contralateral en la marcha (signo de Trendelenburg)?",
              "options": {
                "a": "Músculo glúteo medio (gluteus medius)",
                "b": "Músculo psoas ilíaco",
                "c": "Músculo glúteo mayor",
                "d": "Músculo aductor mayor"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El torque o momento de una fuerza (M) en una palanca biomecánica se calcula mediante la fórmula:",
              "options": {
                "a": "Fuerza multiplicada por la distancia perpendicular al eje de rotación (M = F × d)",
                "b": "Masa dividida entre la aceleración",
                "c": "Velocidad al cuadrado por el peso",
                "d": "Presión arterial por volumen sistólico"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "fis-kine",
          "codigo": "FIS-202",
          "siglaCompleta": "FIS-202-12034: Kinesioterapia y Rehabilitación Física – NM – A",
          "nombre": "Kinesioterapia y Rehabilitación Física",
          "semestre": "Semestre III",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10338102: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En la evaluación de la fuerza muscular según la Escala de Daniels (0 a 5), ¿qué puntuación corresponde al Grado 3?",
              "options": {
                "a": "El músculo realiza el rango de movimiento completo contra la gravedad, pero sin ninguna resistencia manual añadida",
                "b": "Ausencia total de contracción detectable",
                "c": "Movimiento completo anulando la gravedad",
                "d": "Fuerza normal con máxima resistencia"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la puntuación en la Escala de Daniels cuando se palpa una contracción mínima pero no se produce ningún movimiento articular?",
              "options": {
                "a": "Grado 1 (Vestigios de contracción)",
                "b": "Grado 0 (Nula)",
                "c": "Grado 2 (Deficiente)",
                "d": "Grado 4 (Buena)"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿En qué consiste la cinesiterapia pasiva?",
              "options": {
                "a": "Conjunto de movimientos aplicados a las articulaciones del paciente por una fuerza externa (terapeuta o máquina) sin contracción muscular voluntaria activa del paciente",
                "b": "Ejercicios de levantamiento de pesas de 20 kg por el paciente",
                "c": "Carrera continua en cinta rodante a máxima velocidad",
                "d": "Electroestimulación neuromuscular con electrodos de aguja"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "El método de Facilitación Neuromuscular Propioceptiva (FNP / Kabat) utiliza fundamentalmente patrones de movimiento:",
              "options": {
                "a": "Diagonales y espirales tridimensionales (combinando flexión/extensión, abducción/aducción y rotación)",
                "b": "Planos estrictamente lineales unidireccionales",
                "c": "Movimientos circulares concéntricos puros",
                "d": "Inmovilización con férula rígida termoplástica"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuál de las siguientes es una técnica específica de estiramiento utilizada en FNP?",
              "options": {
                "a": "Contracción-Relajación (Hold-Relax / Contract-Relax)",
                "b": "Percusión enérgica con puñete de tapotement",
                "c": "Masaje transverso profundo de Cyriax sobre el vientre muscular",
                "d": "Crioterapia con inmersión en hielo a 0°C"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La técnica de estiramiento pasivo sostenido o estático debe mantenerse idealmente durante:",
              "options": {
                "a": "15 a 30 segundos (evitando el rebote balístico para no activar el reflejo miotático inverso bruscamente)",
                "b": "1 a 2 segundos",
                "c": "15 minutos ininterrumpidos",
                "d": "Menos de medio segundo"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué órgano propioceptivo sensorial muscular detecta la longitud y la velocidad de cambio de longitud del músculo, mediando el reflejo miotático?",
              "options": {
                "a": "El Huso Neuromuscular",
                "b": "El Órgano Tendinoso de Golgi",
                "c": "Los corpúsculos de Pacini articulares",
                "d": "Las terminaciones libres de Ruffini"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "El Órgano Tendinoso de Golgi (OTG) se localiza en la unión musculotendinosa y responde principalmente a:",
              "options": {
                "a": "Aumentos de tensión muscular excesiva, desencadenando la relajación refleja protectora del músculo agonista (reflejo miotático inverso)",
                "b": "Vibración acústica de baja frecuencia",
                "c": "Descenso de la temperatura dérmica local",
                "d": "Variaciones en la presión atmosférica"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Cuál es la indicación primordial para prescribir ejercicios isométricos en fases tempranas de rehabilitación articular?",
              "options": {
                "a": "Mantener o mejorar el trofismo y tono muscular sin generar movimiento articular en presencia de dolor agudo, inflamación o inmovilización",
                "b": "Aumentar la flexibilidad del ligamento lateral interno",
                "c": "Agotar las reservas de glucógeno en 10 segundos",
                "d": "Provocar hipertrofia masiva en niños pequeños"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "En goniometría articular, el instrumento clínico estándar para cuantificar los arcos de movilidad articular (ROM) en grados es:",
              "options": {
                "a": "Goniometro universal de dos ramas (brazo fijo, brazo móvil y fulcro central)",
                "b": "Dinamómetro hidráulico de Jamar para prensión manual",
                "c": "Cinta métrica metálica retráctil de construcción",
                "d": "Plicómetro de grasa subcutánea de Harpenden"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "El método de ejercicios de Frenkel está diseñado específicamente para el reentrenamiento motor en pacientes con:",
              "options": {
                "a": "Ataxia y falta de coordinación motora mediante retroalimentación visual concentrada",
                "b": "Fracturas diafisarias de fémur no consolidadas",
                "c": "Quemaduras dérmicas de tercer grado",
                "d": "Hipertensión endocraneana maligna"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué ejercicios de pendulación pasiva por gravedad y decoaptación se prescriben para el alivio del dolor y distensión capsular en el hombro doloroso?",
              "options": {
                "a": "Ejercicios pendulares de Codman",
                "b": "Ejercicios de Williams para columna lumbar",
                "c": "Ejercicios de Buerger-Allen vasculares",
                "d": "Ejercicios pliométricos de rebote"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "Los ejercicios posturales de flexión de Williams se enfocan en:",
              "options": {
                "a": "Disminuir la hiperlordosis lumbar y abrir los agujeros de conjunción mediante flexión de tronco y rodillas al pecho",
                "b": "Promover la hiperextensión lumbar forzada hacia atrás",
                "c": "Rotar el cuello en posición prona",
                "d": "Estirar exclusivamente los músculos escalenos"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "El método McKenzie para el dolor espinal mecánico utiliza como principio terapéutico primario:",
              "options": {
                "a": "La 'Centralización del dolor' periférico mediante movimientos repetidos o posturas mantenidas (frecuentemente en extensión)",
                "b": "La inmovilización con yeso pelvipédico durante 6 meses",
                "c": "La tracción cervical violenta con pesas de 50 kg",
                "d": "El reposo absoluto en cama por 30 días"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "Los ejercicios vasculares de Buerger-Allen se indican como terapia coadyuvante en:",
              "options": {
                "a": "Trastornos circulatorios arteriales periféricos en extremidades inferiores (fases de elevación, descenso y reposo)",
                "b": "Hernias discales lumbares agudas con ciática",
                "c": "Parálisis del nervio facial periférico de Bell",
                "d": "Subluxación recidivante de la rótula"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En el entrenamiento de fuerza muscular, el concepto de '1RM' (Una Repetición Máxima) representa:",
              "options": {
                "a": "La cantidad máxima de peso o carga que un sujeto puede levantar una sola vez con técnica correcta en todo el rango articular",
                "b": "La velocidad a la que se camina 1 kilómetro",
                "c": "El número de pulsaciones cardíacas por minuto",
                "d": "El porcentaje de grasa corporal medido por bioimpedancia"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "En kinesioterapia respiratoria, la maniobra de 'Drenaje Autógeno' consiste en:",
              "options": {
                "a": "Técnica de respiración voluntaria a diferentes volúmenes pulmonares para despegar, acumular y evacuar secreciones bronquiales de forma autónoma",
                "b": "Punción pleural con aguja de toracocentesis",
                "c": "Aspiración mecánica con sonda nasofaríngea",
                "d": "Intubación orotraqueal con balón insuflado"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué caracteriza al concepto de 'Estabilidad del Core' (Core Stability) en la readaptación neuromuscular?",
              "options": {
                "a": "El control neuromuscular coordinado de la musculatura profunda lumbo-pélvica (transverso del abdomen, multífidos, suelo pélvico y diafragma)",
                "b": "Hacer 500 abdominales clásicos 'crunch' diarios sin respirar",
                "c": "El endurecimiento rígido de las vértebras dorsales con faja de acero",
                "d": "La hipertrofia exclusiva del bíceps braquial"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "El vendaje neuromuscular (Kinesiotaping) aplicado con tensión del 15 al 25% con base en el origen y anclaje en la inserción busca principalmente:",
              "options": {
                "a": "Facilitación o estimulación del tono muscular, mejora del flujo linfático intersticial y disminución del dolor por modulación sensorial",
                "b": "Inmovilizar la articulación impidiendo todo movimiento de 0 a 180 grados",
                "c": "Administrar antibióticos transdérmicos de liberación prolongada",
                "d": "Reemplazar la cirugía de reemplazo articular de cadera"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Cuál es la contraindicación absoluta para la aplicación de cinesiterapia pasiva forzada articular?",
              "options": {
                "a": "Fractura aguda no consolidada, infección articular activa (artritis séptica) o hematoma muscular en fase expansiva",
                "b": "Contractura muscular leve tras el deporte",
                "c": "Rigidez articular post-inmovilización con consolidación ósea comprobada",
                "d": "Debilidad muscular grado 4 de Daniels"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "fis-agen",
          "codigo": "FIS-205",
          "siglaCompleta": "FIS-205-12065: Agentes Físicos y Electroterapia – NM – A",
          "nombre": "Agentes Físicos y Electroterapia",
          "semestre": "Semestre IV",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10338103: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál es el principal mecanismo neurofisiológico de analgesia que explica la corriente TENS convencional (alta frecuencia 80-120 Hz, baja intensidad)?",
              "options": {
                "a": "Teoría de la compuerta del dolor de Melzack y Wall (estimulación de fibras mielinizadas gruesas A-beta que bloquean la transmisión a nivel de las láminas del asta posterior medular)",
                "b": "Liberación masiva de endorfinas sistémicas por la hipófisis",
                "c": "Destrucción térmica irreversible de los nociceptores dérmicos",
                "d": "Parálisis motora flácida temporal de los nervios motores"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "A diferencia del TENS convencional, el TENS de tipo acupuntura o 'burst' (baja frecuencia 1-4 Hz, alta intensidad) produce analgesia mediante:",
              "options": {
                "a": "Liberación de opioides endógenos (endorfinas y encefalinas) a nivel central",
                "b": "Cierre presináptico de la compuerta espinal exclusivamente",
                "c": "Inhibición de la conducción por calentamiento de la piel",
                "d": "Agotamiento de la acetilcolina en la unión neuromuscular"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "En el ultrasonido terapéutico, ¿qué frecuencia se utiliza para tratar tejidos profundos (hasta 4-5 cm) como músculos y cápsulas articulares?",
              "options": {
                "a": "1 Megahercio (1 MHz)",
                "b": "3 Megahercios (3 MHz)",
                "c": "10 Kilohercios (10 kHz)",
                "d": "50 Hertz (50 Hz)"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Cuál es la frecuencia del ultrasonido terapéutico indicada para patologías de tejidos diana superficiales (1 a 2 cm de profundidad como tendones superficiales)?",
              "options": {
                "a": "3 Megahercios (3 MHz)",
                "b": "1 Megahercio (1 MHz)",
                "c": "0.1 MHz",
                "d": "20 MHz"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Por qué es obligatorio mantener el cabezal del ultrasonido terapéutico en continuo movimiento circular o en ochos sobre la piel?",
              "options": {
                "a": "Para evitar la formación de ondas estacionarias y la concentración de energía en el periostio que provocaría quemaduras óseas intensas dolorosas",
                "b": "Porque si se detiene se apaga automáticamente el transformador de corriente",
                "c": "Para evitar que el gel conductor se evapore en 2 segundos",
                "d": "Para sincronizar la vibración con la respiración del paciente"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La crioterapia (aplicación terapéutica de frío) produce en los primeros 10-15 minutos en el lecho microvascular dérmico:",
              "options": {
                "a": "Vasoconstricción refleja, disminución del flujo sanguíneo local, disminución del metabolismo celular y reducción del edema",
                "b": "Vasodilatación masiva inmediata con extravasación de eritrocitos",
                "c": "Aumento del metabolismo tisular y producción de lactato",
                "d": "Necrosis caseosa espontánea"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Cuál es la secuencia clásica de sensaciones que experimenta un paciente sometido a una aplicación de crioterapia?",
              "options": {
                "a": "Frío inicial, quemazón / ardor, dolor punzante y finalmente entumecimiento / analgesia (CBAN)",
                "b": "Calor agradable, cosquilleo y sudoración profusa",
                "c": "Calambre muscular severo seguido de euforia",
                "d": "Picazón insoportable sin pérdida de sensibilidad"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Cuál de las siguientes es una contraindicación formal para el uso de crioterapia?",
              "options": {
                "a": "Fenómeno de Raynaud, crioglobulinemia o hipersensibilidad al frío",
                "b": "Esguince agudo de tobillo en las primeras 24 horas",
                "c": "Tendinitis aguda inflamatoria",
                "d": "Espasmo muscular post-entrenamiento"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La termoterapia profunda mediante onda corta continua o microondas está formalmente contraindicada en pacientes con:",
              "options": {
                "a": "Marcapasos cardíaco, implantes metálicos en la zona o pérdida de sensibilidad térmica",
                "b": "Contractura muscular crónica de trapecios",
                "c": "Artrosis de rodilla en fase no inflamatoria",
                "d": "Lumbalgia mecánica crónica sin déficit neurológico"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué tipo de corriente eléctrica se utiliza en la 'Iontoforesis' para introducir medicamentos ionizados a través de la piel?",
              "options": {
                "a": "Corriente galvánica continua ininterrumpida polarizada",
                "b": "Corriente alterna senoidal de 5000 Hz",
                "c": "Corriente pulsada bifásica asimétrica",
                "d": "Microcorriente de alta tensión exponencial"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "Las corrientes rusas (corrientes de Kotz) consisten en:",
              "options": {
                "a": "Corriente de media frecuencia de 2500 Hz modulada en trenes de 50 Hz, utilizada para potenciación e hipertrofia muscular",
                "b": "Pulsos de corriente continua de 1 milisegundo para cauterizar verrugas",
                "c": "Luz infrarroja no térmica de longitud de onda única",
                "d": "Ultrasonido pulsátil de baja intensidad ósea"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Cuál es el fenómeno biofísico por el cual el ultrasonido se genera en el transductor piezoeléctrico?",
              "options": {
                "a": "Efecto piezoeléctrico inverso (deformación mecánica oscilatoria de un cristal de cuarzo o cerámica al recibir una corriente alterna de alta frecuencia)",
                "b": "Fusión nuclear controlada por campo magnético",
                "c": "Inducción electromagnética de Faraday en una bobina de cobre",
                "d": "Efecto fotoeléctrico de Einstein en placas de plata"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "El láser terapéutico de baja potencia (LLLT / fotobiomodulación) promueve la reparación tisular y cicatrización al actuar sobre:",
              "options": {
                "a": "Los citocromos mitocondriales (citocromo c oxidasa), estimulando la producción de ATP y síntesis de colágeno",
                "b": "La vaporización y quemadura superficial de queratinocitos",
                "c": "La coagulación de los capilares venosos principales",
                "d": "La desnaturalización térmica de las proteínas plasmáticas"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Qué forma de termoterapia superficial utiliza baños de inmersión en cera tibia mezclada con aceite mineral a 50-54°C, ideal para manos artrósicas?",
              "options": {
                "a": "Parafinoterapia",
                "b": "Compresas hidrocoloidales calientes secas",
                "c": "Radiación infrarroja luminosa",
                "d": "Sauna finlandés de vapor seco"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En hidroterapia, el principio físico de Arquímedes establece que todo cuerpo sumergido experimenta un empuje vertical hacia arriba que facilita:",
              "options": {
                "a": "La flotabilidad y descarga del peso corporal sobre las articulaciones de carga",
                "b": "El aumento de la presión sanguínea sistémica intracraneal",
                "c": "La descalcificación ósea inmediata",
                "d": "El enfriamiento del miocardio ventricular"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "Las corrientes interferenciales (tetrapolares) se producen por:",
              "options": {
                "a": "La interferencia en el interior de los tejidos de dos circuitos de corriente alterna de media frecuencia con ligera diferencia de frecuencia entre sí (ej. 4000 Hz y 4100 Hz)",
                "b": "La descarga eléctrica brusca de un condensador de 220 voltios",
                "c": "La unión de un electrodo de aguja y uno de placa dérmica",
                "d": "Un haz de luz monocromática difusa"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "La magnetoterapia de baja frecuencia (campo magnético pulsátil de 1 a 100 Hz y hasta 100 Gauss) destaca clínicamente por:",
              "options": {
                "a": "Estimular la consolidación ósea en retardos de consolidación y pseudoartrosis, así como efecto antiinflamatorio y trófico",
                "b": "Eliminar tatuajes dérmicos por fototermólisis",
                "c": "Producir quemaduras profundas de segundo grado",
                "d": "Sustituir la hemodiálisis en pacientes nefrópatas"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Cuál es la distancia recomendada habitual para la colocación de una lámpara de radiación infrarroja no luminosa respecto a la piel del paciente?",
              "options": {
                "a": "De 45 a 60 cm, de forma perpendicular y controlando la sensación térmica del paciente",
                "b": "A 5 cm de contacto directo con la piel",
                "c": "A más de 3 metros de distancia",
                "d": "No tiene importancia la distancia de aplicación"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué precaución básica debe respetarse rigurosamente al aplicar electroterapia?",
              "options": {
                "a": "Nunca colocar electrodos transtorácicos que atraviesen el corazón, ni sobre el seno carotídeo o en el útero grávido",
                "b": "Aplicar siempre los electrodos sobre piel con heridas abiertas sangrantes",
                "c": "Conectar el equipo a una toma de corriente sin toma a tierra",
                "d": "Subir la intensidad al máximo antes de encender el aparato"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El biofeedback electromiográfico (EMG) en fisioterapia se utiliza como agente terapéutico instrumental para:",
              "options": {
                "a": "Proporcionar al paciente información visual o auditiva en tiempo real sobre su actividad muscular voluntaria para facilitar el control motor o la relajación",
                "b": "Provocar contracciones tetánicas involuntarias dolorosas",
                "c": "Medir la temperatura del agua de la piscina terapéutica",
                "d": "Determinar la densidad mineral ósea del fémur"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "fis-trauma",
          "codigo": "FIS-301",
          "siglaCompleta": "FIS-301-12090: Fisioterapia Traumatológica y Ortopédica – NM – A",
          "nombre": "Fisioterapia Traumatológica y Ortopédica",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10338104: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Qué prueba clínica ortopédica es la más sensible y específica para diagnosticar la rotura aguda del ligamento cruzado anterior (LCA) de la rodilla?",
              "options": {
                "a": "Prueba de Lachman (traslación tibial anterior a 20-30° de flexión)",
                "b": "Prueba del cajón anterior a 90° de flexión",
                "c": "Prueba de McMurray con rotación externa",
                "d": "Maniobra de Apley de compresión meniscal"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "La prueba de McMurray y la prueba de Apley son maniobras clínicas dirigidas a evaluar la integridad de:",
              "options": {
                "a": "Los meniscos medial y lateral de la rodilla",
                "b": "El ligamento colateral medial",
                "c": "El tendón rotuliano",
                "d": "La bursa prerrotuliana"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué ligamento del tobillo se lesiona con mayor frecuencia en los traumatismos por inversión y flexión plantar (esguince de tobillo común)?",
              "options": {
                "a": "Ligamento talofibular anterior (peroneoastragalino anterior - LPAA)",
                "b": "Ligamento deltoideo medial profundo",
                "c": "Ligamento calcaneofibular posterior",
                "d": "Ligamento sindesmal tibiofibular anterior"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En el protocolo inicial de tratamiento para lesiones musculoesqueléticas agudas de partes blandas (esguinces y desgarros), el acrónimo actual 'PEACE' promueve:",
              "options": {
                "a": "Protección, Elevación, Evitar antiinflamatorios, Compresión y Educación",
                "b": "Punción con aguja, Ejercicio extremo, Alcohol, Calor y Extensión",
                "c": "Paracetamol masivo, Electrochoque, Andar, Correr y Enfriar",
                "d": "Inmovilización con yeso rígido por 3 meses"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué prueba es positiva para el diagnóstico de rotura completa del tendón de Aquiles?",
              "options": {
                "a": "Prueba de Thompson (ausencia de flexión plantar al comprimir la masa muscular de la pantorrilla con el paciente en decúbito prono)",
                "b": "Signo de Tinel retromaleolar",
                "c": "Prueba de Finkelstein",
                "d": "Prueba de Thomas para el psoas"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La prueba de Finkelstein (flexión del pulgar en la palma empuñada y desviación cubital forzada) es patognomónica de:",
              "options": {
                "a": "Tenosinovitis estenosante de De Quervain (abductor largo y extensor corto del pulgar)",
                "b": "Síndrome del túnel carpiano por compresión del mediano",
                "c": "Dedo en resorte o en gatillo",
                "d": "Epicondilitis lateral del codo"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En la epicondilitis lateral (codo de tenista), ¿qué grupo muscular se encuentra primariamente comprometido en su entesis proximal?",
              "options": {
                "a": "Músculo extensor radial corto del carpo (segundo radial externo) y extensores comunes de los dedos",
                "b": "Músculos flexores superficiales de los dedos y pronador redondo",
                "c": "Músculo tríceps braquial en el olécranon",
                "d": "Músculo ancóneo medial"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué maniobra clínica provoca dolor en la epicondilitis lateral al solicitar al paciente una extensión activa resistida?",
              "options": {
                "a": "Prueba de Cozen (extensión resistida de la muñeca con el codo extendido y pronado)",
                "b": "Prueba de Phalen inversa",
                "c": "Prueba de Yergason para el bíceps",
                "d": "Signo de Speed en el hombro"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La fractura de Colles es una fractura del extremo distal del radio caracterizada por el desplazamiento del fragmento distal en sentido:",
              "options": {
                "a": "Dorsal y radial, dando la clásica deformidad en 'dorso de tenedor'",
                "b": "Palmar o volar (fractura de Smith o en pala de jardinero)",
                "c": "Rotacional puro sin desplazamiento angular",
                "d": "Hacia el espacio interóseo pronador"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué maniobra evalúa el conflicto subacromial en el síndrome del manguito rotador mediante elevación pasiva del brazo en rotación interna?",
              "options": {
                "a": "Prueba de Neer",
                "b": "Prueba de Ober para la cintilla iliotibial",
                "c": "Prueba de Patrick (FABER) para la cadera",
                "d": "Prueba de Adams para escoliosis"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "La prueba de Hawkins-Kennedy para pinzamiento subacromial se realiza:",
              "options": {
                "a": "Flexionando el hombro a 90° con el codo flexionado a 90° e imprimiendo una rotación interna forzada del brazo",
                "b": "Extundiendo el codo contra resistencia en supinación",
                "c": "Presionando la apófisis coracoides con el puño cerrado",
                "d": "Traccionando el brazo hacia el suelo con una mancuerna"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué prueba clínica específica evalúa la debilidad o rotura del músculo supraespinoso en abducción a 90° en el plano escapular?",
              "options": {
                "a": "Prueba de Jobe (Empty Can Test - lata vacía con pulgares hacia abajo)",
                "b": "Prueba de Gerber (Lift-off test) para el subescapular",
                "c": "Prueba de Patte para rotadores externos",
                "d": "Prueba de Adson para el desfiladero torácico"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En el postoperatorio de una artroplastia total de cadera (prótesis con abordaje posterolateral), ¿qué movimientos combinados deben evitarse estrictamente durante los primeros 2 a 3 meses para prevenir la luxación protésica?",
              "options": {
                "a": "Flexión de cadera mayor a 90°, aducción cruzando la línea media y rotación interna",
                "b": "Extensión pura y abducción pasiva asistida",
                "c": "Bipedestación estática con andador",
                "d": "Flexión plantar del pie ipsilateral"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La capsulitis adhesiva del hombro ('hombro congelado') se caracteriza en su fase clínica más marcada por:",
              "options": {
                "a": "Restricción severa y global tanto de los arcos de movilidad activa como pasiva articular, especialmente en rotación externa y abducción",
                "b": "Hipermovilidad e inestabilidad multidireccional espontánea",
                "c": "Parálisis completa de los músculos del antebrazo",
                "d": "Luxación recurrente de la clavícula"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué maniobra clínica detecta la dismetría o acortamiento del músculo psoas ilíaco al situar al paciente en decúbito supino con una rodilla al pecho y observar si la otra pierna se despega de la camilla?",
              "options": {
                "a": "Prueba de Thomas",
                "b": "Prueba de Trendelenburg",
                "c": "Prueba de Gaenslen",
                "d": "Prueba de Noble"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En la evaluación ortopédica de una posible escoliosis, el Test de Adams consiste en:",
              "options": {
                "a": "Pedir al paciente que se incline hacia adelante flexionando el tronco con las rodillas extendidas, observando la aparición de una giba dorsal o lumbar por rotación vertebral",
                "b": "Medir la longitud de ambos brazos con una plomada",
                "c": "Evaluar los reflejos rotuliano y aquileo en sedestación",
                "d": "Examinar la fuerza del músculo cuádriceps en decúbito prono"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué maniobra evalúa la contractura de la cintilla o banda iliotibial (músculo tensor de la fascia lata)?",
              "options": {
                "a": "Prueba de Ober (en decúbito lateral con cadera abducida y extendida, observando si cae en aducción al soltarla)",
                "b": "Prueba de Ely para el recto femoral",
                "c": "Prueba de Piriforme en decúbito prono",
                "d": "Prueba de Craige para anteversión femoral"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el síndrome de compresión femororrotuliana (condromalacia rotuliana), el dolor típicamente empeora al:",
              "options": {
                "a": "Bajar escaleras, permanecer sentado con las rodillas flexionadas por tiempo prolongado ('signo del cine') o realizar sentadillas profundas",
                "b": "Mantener la rodilla en extensión completa en la cama",
                "c": "Caminar descalzo sobre arena blanda",
                "d": "Dormir de lado con una almohada entre las piernas"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La prueba de Lasègue (elevación de la pierna recta entre 30° y 70°) se considera positiva cuando reproduce:",
              "options": {
                "a": "Dolor radicular lancinante que irradia por debajo de la rodilla a lo largo del trayecto del nervio ciático (sugestivo de hernia discal L4-L5 o L5-S1)",
                "b": "Dolor sordo y localizado exclusivamente en la ingle",
                "c": "Tensión fisiológica moderada en la corva por isquiotibiales cortos",
                "d": "Adormecimiento de los dedos de la mano contralateral"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Cuál es el objetivo primordial del entrenamiento propioceptivo sobre superficies inestables (plato de Freeman, Bosu) en la rehabilitación del esguince de tobillo?",
              "options": {
                "a": "Restablecer los reflejos de estabilización neuromuscular refleja y evitar esguinces recidivantes por inestabilidad funcional crónica",
                "b": "Generar hipertrofia masiva del tendón de Aquiles",
                "c": "Aumentar la laxitud ligamentosa del ligamento peroneoastragalino",
                "d": "Disminuir la sudoración plantar durante la marcha"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "fis-neuro",
          "codigo": "FIS-304",
          "siglaCompleta": "FIS-304-12120: Fisioterapia Neurológica y Respiratoria – NM – A",
          "nombre": "Fisioterapia Neurológica y Respiratoria",
          "semestre": "Semestre VI",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10338105: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál es la herramienta clínica más utilizada internacionalmente para cuantificar el grado de espasticidad muscular refleja en pacientes neurológicos?",
              "options": {
                "a": "Escala Modificada de Ashworth (de 0 a 4 puntos)",
                "b": "Escala de Glasgow",
                "c": "Escala Visual Analógica (EVA)",
                "d": "Índice de Barthel de actividades de la vida diaria"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "En la Escala Modificada de Ashworth, ¿qué puntuación se otorga cuando hay un 'aumento leve del tono muscular manifestado por un tirón inicial o resistencia mínima al final del arco de movimiento'?",
              "options": {
                "a": "Grado 1",
                "b": "Grado 0 (tono normal)",
                "c": "Grado 3",
                "d": "Grado 4 (parte afectada rígida en flexión o extensión)"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué concepto neurofisiológico sustenta el Método Bobath (Concepto de Terapia del Neurodesarrollo - NDT)?",
              "options": {
                "a": "La inhibición de reflejos y patrones posturales anormales mediante puntos clave de control y la facilitación del movimiento normal aprovechando la plasticidad cerebral",
                "b": "El fortalecimiento isométrico máximo de los músculos espásticos",
                "c": "El uso exclusivo de pesas y poleas para forzar el movimiento",
                "d": "La inmovilización prolongada del hemicuerpo sano para forzar la compensación"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿En qué consiste el patrón de espasticidad típico del miembro superior en el paciente adulto con hemiplejía por accidente cerebrovascular (ACV)?",
              "options": {
                "a": "Patrón flexor: aducción y rotación interna del hombro, flexión de codo, pronación del antebrazo, flexión de muñeca y dedos empuñados",
                "b": "Patrón extensor: abducción de hombro, extensión de codo y supinación de muñeca",
                "c": "Flacidez hipotónica permanente sin tono detectable",
                "d": "Temblor de reposo de alta frecuencia en la mano sana"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuál es el patrón sinérgico espástico predominante en el miembro inferior del paciente hemipléjico tras un ictus?",
              "options": {
                "a": "Patrón extensor: extensión de cadera, extensión de rodilla, flexión plantar (equinovaro) y aducción de cadera",
                "b": "Patrón flexor: flexión marcada de cadera y flexión dorsal exagerada del pie",
                "c": "Rotación externa forzada de cadera con valgo de rodilla",
                "d": "Pie talo puro con hipotonía de gemelos"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La técnica de Terapia de Movimiento Inducido por Restricción (CIMT de Taub) consiste en:",
              "options": {
                "a": "Restringir el uso del miembro superior sano (con un guante o cabestrillo) durante el 90% de las horas de vigilia, forzando la práctica intensiva y repetitiva con el brazo parético",
                "b": "Inmovilizar el brazo enfermo para no fatigarlo durante 6 meses",
                "c": "Administrar choques eléctricos de alto voltaje en ambos brazos simultáneamente",
                "d": "Sumergir ambos miembros en parafina líquida caliente"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En el tratamiento fisioterapéutico de la Enfermedad de Parkinson, ¿qué estrategia es altamente eficaz para superar los bloqueos de la marcha ('freezing')?",
              "options": {
                "a": "Uso de pistas o estímulos externos rítmicos (auditivos con metrónomo, visuales con líneas en el suelo o propioceptivos)",
                "b": "Pedir al paciente que corra rápidamente hacia atrás",
                "c": "Vendar los ojos del paciente para mejorar su propiocepción",
                "d": "Administrar inyecciones intramusculares de toxina botulínica en los cuatro miembros"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué escala funcional multidimensional se utiliza para evaluar el equilibrio estático y dinámico y predecir el riesgo de caídas en ancianos y pacientes neurológicos?",
              "options": {
                "a": "Escala de Equilibrio de Berg (0 a 56 puntos)",
                "b": "Escala Visual Analógica (EVA)",
                "c": "Escala de Coma de Glasgow",
                "d": "Escala de Norton para úlceras por presión"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En la parálisis facial periférica de Bell, ¿cuál de los siguientes ejercicios o técnicas kinesiológicas está indicado en fase de reinervación?",
              "options": {
                "a": "Reeducación neuromuscular frente al espejo con movimientos lentos simétricos de mínima amplitud para evitar sincinesias involuntarias",
                "b": "Estimulación galvánica masiva a máxima potencia en toda la hemicara",
                "c": "Gesticular exageradamente masticando chicle durante 8 horas",
                "d": "Inmovilización de la mandíbula con alambres quirúrgicos"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué signo neurológico clínico consiste en una pérdida brusca del equilibrio al cerrar los ojos en bipedestación con pies juntos, evidenciando alteración propioceptiva o vestibular?",
              "options": {
                "a": "Signo de Romberg positivo",
                "b": "Signo de Babinski",
                "c": "Signo de Kernig",
                "d": "Signo de Hoffman"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En fisioterapia respiratoria, la técnica de 'Espiración Lenta Total con Glotis Abierta en Infralateral' (ELTGOL) se utiliza para:",
              "options": {
                "a": "La desobstrucción y aclaramiento mucociliar de las secreciones bronquiales en las vías aéreas medias y distales del pulmón dependiente situado abajo",
                "b": "El entrenamiento de los músculos extensores de los dedos",
                "c": "La hiperventilación alveolar previa a una resonancia magnética",
                "d": "Aumentar la frecuencia cardíaca durante la prueba de esfuerzo"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Cuál es el dispositivo de fisioterapia respiratoria volumétrico que fomenta inspiraciones lentas y profundas mantenidas mediante retroalimentación visual para expandir alvéolos colapsados?",
              "options": {
                "a": "Espirómetro incentivado volumétrico (ej. Coach 2)",
                "b": "Manómetro aneroide de presión arterial",
                "c": "Nebulizador ultrasónico portátil",
                "d": "Goniometro de ramas plásticas articuladas"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "La maniobra de 'Tos Asistida' (compresión manual abdominal y torácica coordinada durante la espiración forzada) es fundamental en pacientes con:",
              "options": {
                "a": "Lesión medular cervical o enfermedades neuromusculares con parálisis de los músculos espiratorios abdominales",
                "b": "Fractura de costillas múltiples bilaterales con tórax inestable",
                "c": "Neumotórax hipertensivo agudo no drenado",
                "d": "Apendicitis aguda supurada"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿En qué consiste el 'Drenaje Postural' clásico en pacientes con bronquiectasias o hipersecreción bronquial?",
              "options": {
                "a": "Colocar al paciente en diversas posiciones que utilicen la fuerza de gravedad para favorecer el drenaje de secreciones desde segmentos bronquiales periféricos hacia los bronquios principales",
                "b": "Punción quirúrgica pleural en el quinto espacio intercostal",
                "c": "Colocación de catéter venoso central subclavio",
                "d": "Realizar masaje profundo en las pantorrillas con aceite mineral"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "El dispositivo de oscilación intrapulmonar o válvula PEP oscilante (como el Flutter o Acapella) ayuda a la expulsión del moco mediante:",
              "options": {
                "a": "La creación de presión espiratoria positiva combinada con vibraciones aéreas de 10-15 Hz que desprenden y fluidifican las secreciones bronquiales",
                "b": "La aspiración continua al vacío con motor eléctrico",
                "c": "La emisión de ultrasonidos de 3 MHz en la tráquea",
                "d": "El enfriamiento del aire inspirado a -5°C"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué músculo es el principal motor inspiratorio responsable del 70-80% del volumen corriente en una respiración en reposo?",
              "options": {
                "a": "El Diafragma (inervado por los nervios frénicos C3, C4 y C5)",
                "b": "Músculo esternocleidomastoideo",
                "c": "Músculo recto anterior del abdomen",
                "d": "Músculos intercostales internos"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "En el paciente tetrapléjico con lesión medular a nivel C6, ¿qué función motora clave del miembro superior se conserva, permitiendo el mecanismo de 'tenodesis' para prensión funcional?",
              "options": {
                "a": "Extensión activa de la muñeca (músculos extensor radial largo y corto del carpo), que produce flexión pasiva de los dedos al extender la muñeca",
                "b": "Extensión activa del codo por el tríceps (inervado por C7)",
                "c": "Oposición activa del pulgar con pinza fina madura",
                "d": "Abducción del meñique inervada por T1"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Cuál es la principal complicación neuromuscular que se busca prevenir mediante movilizaciones pasivas precoces y cambios posturales en pacientes en UCI?",
              "options": {
                "a": "Debilidad adquirida en UCI (polineuropatía y miopatía del paciente crítico), rigidez articular y úlceras por presión",
                "b": "Hipertrofia muscular involuntaria de las piernas",
                "c": "Calcificación prematura de los cartílagos nasales",
                "d": "Aumento excesivo de la talla corporal del paciente"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La 'Técnica de Aceleración del Flujo Espiratorio' (AFE) en fisioterapia pediátrica respiratoria consiste en:",
              "options": {
                "a": "Un movimiento toracoabdominal pasivo aplicado por el fisioterapeuta al inicio de la espiración espontánea del lactante para movilizar secreciones distales",
                "b": "Hacer soplar velas a un recién nacido prematuro",
                "c": "Aplicar golpes de percusión manual con el puño cerrado sobre el esternón",
                "d": "Sumergir al bebé en agua fría para provocar llanto"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En la evaluación neurológica, ¿qué reflejo patológico en el miembro superior se considera el equivalente al signo de Babinski?",
              "options": {
                "a": "Signo o reflejo de Hoffmann (flexión refleja de la falange distal del pulgar e índice al raspar la uña del dedo medio)",
                "b": "Reflejo bicipital normorreactivo",
                "c": "Reflejo estilorradial",
                "d": "Reflejo tricipital con arco L2-L4"
              },
              "correct": "a"
            }
          ]
        }
      ]
    },
    {
      "id": "sistemas",
      "nombre": "Ingeniería de Sistemas",
      "facultad": "Facultad de Ciencia y Tecnología",
      "icono": "terminal",
      "descripcion": "Desarrollo de software avanzado, arquitecturas cloud, ciberseguridad y gestión de sistemas de información.",
      "duracion": "5 años (10 semestres)",
      "subjects": [
        {
          "id": "sis-soft",
          "codigo": "SIS-401",
          "siglaCompleta": "SIS-401-14201: Ingeniería de Software – NM – A",
          "nombre": "Ingeniería de Software",
          "semestre": "Semestre VI",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10447101: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál es el objetivo primordial del patrón de diseño 'Singleton' en la ingeniería de software orientada a objetos?",
              "options": {
                "a": "Permitir que múltiples instancias compartan el mismo espacio de memoria en hilos distintos",
                "b": "Garantizar que una clase tenga una única instancia en toda la aplicación y proveer un punto de acceso global a ella",
                "c": "Separar la construcción de un objeto complejo de su representación final",
                "d": "Convertir la interfaz de una clase en otra interfaz que el cliente espera"
              },
              "correct": "b"
            },
            {
              "id": 2,
              "text": "En el marco de trabajo ágil Scrum, ¿cuál es la responsabilidad primordial del Product Owner?",
              "options": {
                "a": "Asignar las tareas técnicas diarias a cada desarrollador del equipo",
                "b": "Eliminar impedimentos organizacionales y facilitar las ceremonias del Sprint",
                "c": "Definir y priorizar los elementos del Product Backlog para maximizar el valor del producto",
                "d": "Estimar las horas de desarrollo y definir la arquitectura de infraestructura"
              },
              "correct": "c"
            },
            {
              "id": 3,
              "text": "De acuerdo con los principios SOLID, ¿a qué se refiere el principio de Inversión de Dependencias (DIP)?",
              "options": {
                "a": "Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones",
                "b": "Una clase debe tener una y sólo una razón para cambiar",
                "c": "Las clases derivadas deben ser completamente sustituibles por sus clases base sin alterar el funcionamiento",
                "d": "Los clientes no deben verse obligados a depender de interfaces que no utilizan"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué caracteriza fundamentalmente al ciclo de vida en Cascada (Waterfall) frente a los enfoques ágiles iterativos?",
              "options": {
                "a": "Entregas continuas de prototipos funcionales cada dos semanas",
                "b": "Secuencia lineal y estricta de fases donde cada etapa debe concluir y aprobarse antes de pasar a la siguiente",
                "c": "Ausencia deliberada de documentación y especificación formal de requisitos",
                "d": "Participación del usuario final únicamente durante la etapa de despliegue en producción"
              },
              "correct": "b"
            },
            {
              "id": 5,
              "text": "En las pruebas de software, ¿cuál es la diferencia principal entre 'Caja Negra' (Black-Box) y 'Caja Blanca' (White-Box)?",
              "options": {
                "a": "La caja negra solo evalúa el rendimiento de red y la caja blanca la interfaz visual",
                "b": "La caja negra prueba la funcionalidad según especificaciones sin conocer el código interno; la caja blanca analiza la estructura interna del código",
                "c": "La caja negra la realizan exclusivamente desarrolladores y la caja blanca usuarios finales",
                "d": "La caja blanca se efectúa de forma manual y la caja negra obligatoriamente mediante herramientas automatizadas"
              },
              "correct": "b"
            },
            {
              "id": 6,
              "text": "¿Cuál es la premisa clave de la metodología de Desarrollo Guiado por Pruebas (Test-Driven Development - TDD)?",
              "options": {
                "a": "Escribir toda la documentación de pruebas antes de instalar el entorno de desarrollo",
                "b": "Ciclo Rojo-Verde-Refactor: escribir una prueba que falle, implementar el código mínimo para superarla y luego refactorizar",
                "c": "Desarrollar el sistema completo y posteriormente contratar un equipo externo de testing",
                "d": "Reemplazar los entornos de pruebas locales por monitorización directa de telemetría en producción"
              },
              "correct": "b"
            },
            {
              "id": 7,
              "text": "En el patrón arquitectónico MVC (Modelo-Vista-Controlador), ¿cuál es el rol específico del Controlador?",
              "options": {
                "a": "Gestionar el diseño visual y las hojas de estilo de la interfaz de usuario",
                "b": "Almacenar y persistir directamente las tablas relacionales en el motor de base de datos",
                "c": "Recibir las peticiones del usuario, invocar la lógica de negocio del Modelo y seleccionar la Vista a renderizar",
                "d": "Compilar el código fuente a lenguaje máquina antes de su ejecución"
              },
              "correct": "c"
            },
            {
              "id": 8,
              "text": "¿Cuál de las siguientes afirmaciones describe mejor el concepto de 'Deuda Técnica' (Technical Debt)?",
              "options": {
                "a": "El costo económico que la empresa adeuda al proveedor de servicios en la nube",
                "b": "El costo futuro generado por optar por una solución rápida y deficiente hoy en vez de un mejor enfoque que tomaría más tiempo",
                "c": "El déficit de computadoras e infraestructura de hardware en el laboratorio de desarrollo",
                "d": "El porcentaje de tiempo dedicado a la capacitación de nuevos ingenieros en el equipo"
              },
              "correct": "b"
            },
            {
              "id": 9,
              "text": "En la gestión de versiones con Git, ¿cuál es el propósito fundamental de una rama (branch) 'feature'?",
              "options": {
                "a": "Desplegar automáticamente cambios críticos en el servidor de producción principal",
                "b": "Desarrollar una funcionalidad aislada sin alterar la rama principal estable hasta que sea validada",
                "c": "Eliminar el historial completo de commits anteriores para optimizar el tamaño del repositorio",
                "d": "Respaldar la base de datos de los servidores de staging en la nube"
              },
              "correct": "b"
            },
            {
              "id": 10,
              "text": "¿A qué se le llama 'Ingeniería de Requerimientos' según los fundamentos de la ingeniería de software?",
              "options": {
                "a": "A la codificación y compilación de módulos de software siguiendo patrones de diseño limpios",
                "b": "Al proceso de descubrir, analizar, documentar y verificar los servicios proporcionados por el sistema y sus restricciones operativas",
                "c": "Al despliegue continuo de software en servidores de producción y monitoreo de telemetría",
                "d": "A la estimación exclusiva del presupuesto económico y contratos legales del proyecto"
              },
              "correct": "b"
            },
            {
              "id": 11,
              "text": "En los niveles de requerimientos, ¿cuál es la diferencia principal entre los 'Requerimientos del Usuario' y los 'Requerimientos del Sistema'?",
              "options": {
                "a": "Los del usuario son declaraciones en lenguaje natural y diagramas comprensibles sin conocimiento técnico detallado; los del sistema establecen con detalle las funciones, servicios y restricciones operativas que definen exactamente lo que se va a implementar",
                "b": "Los del usuario son especificaciones matemáticas complejas y los del sistema son bocetos informales sin detalle técnico",
                "c": "Los del sistema los redacta el cliente final y los del usuario los definen los administradores de bases de datos",
                "d": "Los del usuario definen la arquitectura de servidores físicos y los del sistema el plan de marketing del producto"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "En la clasificación de requerimientos del sistema, ¿qué define a los 'Requerimientos de Dominio'?",
              "options": {
                "a": "Son requerimientos que describen únicamente la capacidad de almacenamiento y velocidad del procesador del servidor",
                "b": "Se derivan del dominio de la aplicación y reflejan particularidades, estándares y restricciones de ese campo (por ejemplo, estándar Z39.50 o derechos de autor en sistemas bibliotecarios como LIBSYS)",
                "c": "Son aquellos que definen exclusivamente la compra y renovación de nombres de dominio de internet (.com, .bo)",
                "d": "Son requerimientos que describen únicamente las propiedades emergentes del software como la confiabilidad global"
              },
              "correct": "b"
            },
            {
              "id": 13,
              "text": "Respecto a los Requerimientos No Funcionales (propiedades emergentes), ¿cuál es la recomendación clave para su correcta especificación?",
              "options": {
                "a": "Siempre que sea posible, deben redactarse de manera cuantitativa utilizando métricas para que se puedan probar y verificar de un modo objetivo",
                "b": "Deben redactarse exclusivamente con términos abstractos como 'el sistema debe tener una interfaz agradable y veloz'",
                "c": "No deben documentarse formalmente para evitar comprometer al equipo de desarrollo ante auditorías",
                "d": "Deben sustituir y anular por completo a los requerimientos funcionales del sistema"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "Al redactar los 'Requerimientos del Usuario', ¿cuáles de las siguientes recomendaciones deben seguirse?",
              "options": {
                "a": "Incluir diagramas de clases UML de bajo nivel y fragmentos de código fuente en cada requerimiento",
                "b": "Emplear la mayor cantidad de jerga informática especializada para garantizar precisión para los programadores",
                "c": "Omitir la diferenciación entre requerimientos obligatorios y deseables para no confundir al cliente",
                "d": "Describir el comportamiento externo evitando características de diseño, inventar un formato estándar, usar lenguaje consistente, resaltar partes clave y evitar jerga informática"
              },
              "correct": "d"
            },
            {
              "id": 15,
              "text": "Según el estándar IEEE/ANSI 830-1998 para el Documento de Requerimientos de Software (ERS), ¿cuál es la sección más sustancial donde se documentan los requerimientos funcionales, no funcionales y de interfaz?",
              "options": {
                "a": "Sección 1: Introducción (propósito, alcance, definiciones y referencias)",
                "b": "Sección 2: Descripción general (perspectiva del producto, funciones, características del usuario y restricciones)",
                "c": "Sección 3: Requerimientos específicos (interfaces externas, funcionalidad, rendimiento, lógica de BD, restricciones de diseño y calidad)",
                "d": "Sección 4 y 5: Apéndices e Índice exclusivamente"
              },
              "correct": "c"
            },
            {
              "id": 16,
              "text": "¿Cuál de las siguientes representa una de las dificultades habituales para obtener y comprender los requerimientos de los stakeholders?",
              "options": {
                "a": "Los stakeholders tienen un dominio técnico idéntico al de los ingenieros de software y conocen exactamente el código",
                "b": "Los stakeholders a menudo no conocen con certeza lo que desean, usan sus propios términos naturales, presentan requerimientos dispares o conflictivos y están sujetos a factores políticos y entornos dinámicos",
                "c": "Los requerimientos de negocio se mantienen 100% estáticos y nunca cambian durante el desarrollo del proyecto",
                "d": "No existe necesidad de comunicación entre usuarios y desarrolladores durante el ciclo de vida"
              },
              "correct": "b"
            },
            {
              "id": 17,
              "text": "¿Cuáles son las cuatro actividades fundamentales del proceso de Ingeniería de Requerimientos?",
              "options": {
                "a": "Diseño de base de datos, Codificación en backend, Pruebas unitarias y Despliegue en la nube",
                "b": "Auditoría contable, Liquidación de impuestos, Facturación de servicios y Firma de contratos de licencia",
                "c": "Descubrimiento de requerimientos, Clasificación y organización, Ordenación por prioridades y negociación, y Documentación de requerimientos",
                "d": "Instalación de cables de red, Montaje de racks de servidores, Configuración de routers y Enrutamiento BGP"
              },
              "correct": "c"
            },
            {
              "id": 18,
              "text": "Entre las herramientas para el descubrimiento de requerimientos, ¿qué técnica de observación directa permite entender los requerimientos sociales y organizacionales analizando cómo las personas trabajan realmente en su entorno cotidiano?",
              "options": {
                "a": "Pruebas de estrés y benchmarking de servidores",
                "b": "Análisis estático de vulnerabilidades de seguridad",
                "c": "Ingeniería inversa de código máquina binario",
                "d": "Etnografía"
              },
              "correct": "d"
            },
            {
              "id": 19,
              "text": "En el modelado con diagramas de Casos de Uso durante la obtención de requerimientos, ¿cuál es el significado de las relaciones <<incluir>> y <<extender>>?",
              "options": {
                "a": "La relación <<incluir>> indica un comportamiento obligatorio que siempre se ejecuta como parte del caso de uso base, mientras que <<extender>> añade un comportamiento opcional o condicional bajo ciertas circunstancias",
                "b": "La relación <<extender>> borra la funcionalidad del caso de uso anterior y <<incluir>> renombra al actor del sistema",
                "c": "Ambas relaciones son idénticas y pueden intercambiarse sin alterar la semántica del diagrama",
                "d": "La relación <<incluir>> solo conecta actores humanos entre sí y <<extender>> conecta bases de datos externas"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En la etapa de Validación de Requerimientos, ¿qué objetivo persiguen las revisiones y tipos de verificaciones (completitud, consistencia, realismo, validez y verificabilidad)?",
              "options": {
                "a": "Aumentar artificialmente el número de páginas del documento antes de la entrega final",
                "b": "Demostrar que los requerimientos realmente definen el sistema que el cliente desea, evitando costosos reprocesos de desarrollo posteriores al descubrir errores a tiempo",
                "c": "Sustituir las pruebas de software para que no sea necesario probar el sistema una vez construido",
                "d": "Garantizar que el sistema funcione únicamente en un sistema operativo obsoleto"
              },
              "correct": "b"
            }
          ]
        },
        {
          "id": "sis-analisis",
          "codigo": "ISI-311",
          "siglaCompleta": "ISI-311-13721: Análisis y diseño de sistemas II – NM – A",
          "nombre": "Análisis y diseño de sistemas II",
          "semestre": "Semestre V",
          "sede": "Sede Oruro",
          "grupo": "A",
          "examen": "1P-1-2026-10117327: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En el modelado con UML, ¿cuál es el propósito de un Diagrama de Casos de Uso?",
              "options": {
                "a": "Mostrar la estructura física de los servidores y nodos de despliegue",
                "b": "Modelar el comportamiento del sistema desde el punto de vista de los usuarios o actores externos y sus interacciones",
                "c": "Representar las sentencias SQL necesarias para crear el esquema relacional",
                "d": "Definir los tipos de datos primitivos admitidos por el compilador"
              },
              "correct": "b"
            },
            {
              "id": 2,
              "text": "¿Cuál es la diferencia entre un requerimiento funcional y un requerimiento no funcional?",
              "options": {
                "a": "Los funcionales son obligatorios y los no funcionales son siempre opcionales",
                "b": "Los funcionales describen lo que el sistema debe hacer (servicios y comportamientos); los no funcionales definen restricciones y atributos de calidad (rendimiento, seguridad, disponibilidad)",
                "c": "Los requerimientos no funcionales se refieren a bugs que ya no funcionan en el sistema",
                "d": "Los funcionales los escribe el programador y los no funcionales el auditor contable"
              },
              "correct": "b"
            },
            {
              "id": 3,
              "text": "En un diagrama de clases UML, ¿qué indica una relación de 'Composición' (rombo negro relleno)?",
              "options": {
                "a": "Una relación débil donde el objeto parte puede existir independientemente del objeto contenedor",
                "b": "Una relación fuerte de pertenencia donde el tiempo de vida de los objetos componentes está estrictamente ligado al del objeto contenedor",
                "c": "Una herencia múltiple entre interfaces de programación de aplicaciones",
                "d": "Una llamada asíncrona a un servicio web externo"
              },
              "correct": "b"
            },
            {
              "id": 4,
              "text": "En el Diagrama de Secuencia UML, ¿qué elemento representa el eje vertical continuo asociado a cada participante?",
              "options": {
                "a": "El ancho de banda consumido por la petición de red",
                "b": "La línea de vida (lifeline) que representa el paso del tiempo durante la interacción",
                "c": "La memoria RAM utilizada por el objeto en el servidor",
                "d": "El orden alfabético de los métodos invocados"
              },
              "correct": "b"
            },
            {
              "id": 5,
              "text": "En el estándar BPMN (Business Process Model and Notation), ¿qué representa un evento de inicio circular de línea fina?",
              "options": {
                "a": "El punto donde comienza un proceso de negocio específico",
                "b": "Una compuerta de decisión exclusiva basada en condiciones XOR",
                "c": "El fin definitivo con error crítico del flujo de trabajo",
                "d": "Un almacén de datos persistente en la nube"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué representa una compuerta paralela (AND / símbolo '+') en un flujo de procesos BPMN?",
              "options": {
                "a": "La bifurcación en múltiples caminos que se ejecutan simultáneamente sin depender de condiciones evaluadas",
                "b": "La selección estricta de una sola ruta de acuerdo a una condición booleana",
                "c": "El cierre de la sesión del usuario por inactividad",
                "d": "La ejecución de un ciclo infinito que nunca termina"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En el levantamiento de requisitos, ¿en qué consiste la técnica de 'Historias de Usuario'?",
              "options": {
                "a": "Narraciones breves en lenguaje natural con la estructura: Como [rol], quiero [acción], para [beneficio]",
                "b": "La biografía académica y profesional de los desarrolladores del software",
                "c": "El registro cronológico de los fallos del sistema durante la última década",
                "d": "Un contrato legal firmado ante notario público de fe institucional"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué expresa el criterio 'SMART' aplicado a la definición de requerimientos de software?",
              "options": {
                "a": "Específico, Medible, Alcanzable, Relevante y Temporalmente definido",
                "b": "Simple, Modular, Asíncrono, Relacional y Tolerante a fallos",
                "c": "Seguro, Mantenible, Abierto, Reutilizable y Tipado",
                "d": "Síncrono, Multiplataforma, Ágil, Robusto y Transaccional"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En UML, ¿cuál es el significado de la relación '<<include>>' entre dos casos de uso?",
              "options": {
                "a": "El caso de uso base siempre incorpora obligatoriamente el comportamiento del caso de uso incluido",
                "b": "El caso de uso solo se ejecuta si se produce un error inesperado",
                "c": "Ambos casos de uso se ejecutan en diferentes ordenadores de la red",
                "d": "El caso de uso incluido es obsoleto y será eliminado en la próxima versión"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es la diferencia entre la relación '<<include>>' y '<<extend>>' en casos de uso UML?",
              "options": {
                "a": "'include' es opcional y condicional, mientras que 'extend' es de ejecución obligatoria",
                "b": "'include' es mandatorio e incondicional en el flujo base; 'extend' añade comportamiento bajo condiciones específicas o puntos de extensión",
                "c": "'extend' solo se aplica a bases de datos NoSQL y 'include' a bases relacionales",
                "d": "Ambas relaciones son exactamente idénticas en la especificación UML"
              },
              "correct": "b"
            },
            {
              "id": 11,
              "text": "¿Qué evalúa un 'Estudio de Factibilidad Técnica' en la fase de análisis de sistemas?",
              "options": {
                "a": "La viabilidad económica respecto a retorno de inversión (ROI)",
                "b": "Si la organización dispone de la tecnología, infraestructura y competencias necesarias para construir la solución propuesta",
                "c": "El impacto legal y cumplimiento de normativas fiscales del país",
                "d": "El agrado estético de los directivos con respecto al logo corporativo"
              },
              "correct": "b"
            },
            {
              "id": 12,
              "text": "En el diseño de interfaces de usuario, ¿cuál es la diferencia entre un Wireframe y un Prototipo de Alta Fidelidad?",
              "options": {
                "a": "El wireframe incluye código de producción funcional y el prototipo no",
                "b": "El wireframe es un esquema estructural esquemático de baja fidelidad; el prototipo de alta fidelidad incluye diseño visual, colores, tipografía e interactividad",
                "c": "El wireframe solo se hace en papel y los prototipos no pueden probarse con usuarios",
                "d": "El prototipo de alta fidelidad solo funciona en teléfonos celulares"
              },
              "correct": "b"
            },
            {
              "id": 13,
              "text": "En el Diagrama de Estados UML, ¿qué simboliza un círculo negro rodeado por una circunferencia exterior?",
              "options": {
                "a": "El estado inicial de un objeto",
                "b": "El estado final de la máquina de estados",
                "c": "Un punto de decisión probabilística",
                "d": "Una excepción de desbordamiento de memoria"
              },
              "correct": "b"
            },
            {
              "id": 14,
              "text": "¿Qué representa el Diagrama de Actividades en UML?",
              "options": {
                "a": "El flujo de control y de datos de una actividad a otra, similar a un diagrama de flujo avanzado con soporte de concurrencia",
                "b": "La lista de salarios y vacaciones del personal del departamento de TI",
                "c": "La distribución física de los discos duros y cables de fibra óptica",
                "d": "El esquema formal de claves primarias y foráneas de SQL"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En el análisis orientado a objetos, ¿qué es la 'Cohesión' en un módulo de software?",
              "options": {
                "a": "El grado en que los elementos internos de un módulo están estrechamente relacionados y focalizados en una tarea común",
                "b": "El grado de interdependencia entre módulos diferentes del sistema",
                "c": "La cantidad de gigabytes que ocupa la base de datos",
                "d": "El número de programadores trabajando en el mismo código"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En ingeniería de software y análisis de sistemas, ¿qué objetivo de diseño se busca respecto al acoplamiento y la cohesión?",
              "options": {
                "a": "Alto acoplamiento y baja cohesión",
                "b": "Bajo acoplamiento y alta cohesión",
                "c": "Cero acoplamiento y cero cohesión",
                "d": "Máximo acoplamiento y máxima redundancia funcional"
              },
              "correct": "b"
            },
            {
              "id": 17,
              "text": "¿Qué es la 'Matriz de Trazabilidad de Requisitos' (RTM)?",
              "options": {
                "a": "Una herramienta que vincula cada requisito desde su origen hasta los casos de prueba, diseño y código que lo implementan",
                "b": "Una tabla de cálculo de nóminas y sueldos de analistas de sistemas",
                "c": "Un diagrama que muestra la temperatura térmica del procesador de cómputo",
                "d": "Una matriz matemática para resolver sistemas de ecuaciones lineales complejas"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el modelado con Diagramas de Paquetes UML, ¿cuál es su uso principal?",
              "options": {
                "a": "Organizar elementos del modelo en grupos semánticos lógicos de mayor nivel (subsistemas o capas)",
                "b": "Diseñar los empaques y cajas de cartón para la venta comercial del software físico",
                "c": "Definir los campos de cabecera de las tramas Ethernet",
                "d": "Enumerar los nombres de usuario y contraseñas cifradas"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué elemento modela la interacción entre los carriles (swimlanes) en un diagrama de procesos de negocio BPMN?",
              "options": {
                "a": "El intercambio de mensajes e información entre diferentes participantes, áreas organizacionales o roles",
                "b": "El cambio automático de versión del sistema operativo subyacente",
                "c": "La copia de seguridad nocturna en cintas magnéticas",
                "d": "La actualización periódica de la licencia comercial del motor de base de datos"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En la elicitación de requisitos, ¿cuál es la ventaja de la técnica 'JAD' (Joint Application Design)?",
              "options": {
                "a": "Reunir a usuarios, analistas y tomadores de decisiones en talleres estructurados e intensivos para consensuar requerimientos rápidamente",
                "b": "Eliminar la necesidad de consultar a los usuarios directos del sistema",
                "c": "Externalizar el desarrollo a contratistas anónimos sin reuniones",
                "d": "Generar automáticamente todo el código fuente mediante algoritmos genéticos"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "sis-bd",
          "codigo": "SIS-203",
          "siglaCompleta": "SIS-203-13840: Sistemas de Base de Datos – NM – A",
          "nombre": "Sistemas de Base de Datos",
          "semestre": "Semestre IV",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10447103: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En el modelo relacional de bases de datos, ¿qué garantiza la regla de Integridad Referencial?",
              "options": {
                "a": "Que ningún registro de una tabla contenga valores numéricos negativos",
                "b": "Que los valores de una clave foránea (FK) deben coincidir con un valor existente de clave primaria (PK) en la tabla referenciada o ser nulos",
                "c": "Que las contraseñas se almacenen con algoritmo de hash SHA-256",
                "d": "Que las consultas SELECT respondan en menos de 10 milisegundos"
              },
              "correct": "b"
            },
            {
              "id": 2,
              "text": "¿Qué condiciones debe cumplir una relación para encontrarse en Primera Forma Normal (1FN)?",
              "options": {
                "a": "Todos los atributos deben ser atómicos (sin valores multivaluados ni atributos compuestos) y existir una clave primaria definida",
                "b": "No debe contener dependencias transitivas entre claves secundarias",
                "c": "Todos los campos de texto deben estar indexados con árboles B+",
                "d": "Debe estar replicada sincrónicamente en al menos tres servidores físicos"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué requisito adicional exige la Segunda Forma Normal (2FN) respecto a una tabla que ya está en 1FN?",
              "options": {
                "a": "Que ningún atributo no clave dependa funcionalmente de forma parcial de una clave primaria compuesta",
                "b": "Que no existan claves foráneas con valores nulos",
                "c": "Que todos los índices se reconstruyan diariamente de forma automática",
                "d": "Que la tabla no supere el millón de registros activos"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En una base de datos relacional, ¿qué significa la propiedad de 'Atomicidad' en el acrónimo ACID?",
              "options": {
                "a": "Todas las operaciones de una transacción se ejecutan exitosamente o ninguna de ellas tiene efecto (todo o nada)",
                "b": "Los datos se conservan permanentemente incluso si ocurre un corte de energía",
                "c": "Cada consulta se procesa en el nivel subatómico del procesador cuántico",
                "d": "El sistema es inmune a ataques de denegación distribuida de servicio"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuál es la diferencia fundamental entre las sentencias SQL 'DELETE' y 'TRUNCATE'?",
              "options": {
                "a": "DELETE borra columnas y TRUNCATE borra tablas enteras del catálogo",
                "b": "DELETE borra filas una a una registrando cada eliminación en el log y admite cláusula WHERE; TRUNCATE desasigna páginas de datos completas de forma rápida y no admite WHERE",
                "c": "TRUNCATE se puede revertir con ROLLBACK pero DELETE nunca se puede deshacer",
                "d": "DELETE es exclusivo de MySQL y TRUNCATE solo existe en Oracle"
              },
              "correct": "b"
            },
            {
              "id": 6,
              "text": "En lenguaje SQL, ¿cuál es la función de la cláusula 'HAVING'?",
              "options": {
                "a": "Filtrar registros antes de que se realice la operación de agrupación GROUP BY",
                "b": "Filtrar grupos de filas resultantes basándose en condiciones que involucran funciones de agregación (COUNT, SUM, AVG)",
                "c": "Crear automáticamente copias de seguridad incrementales en disco",
                "d": "Definir índices únicos en columnas de texto variable VARCHAR"
              },
              "correct": "b"
            },
            {
              "id": 7,
              "text": "¿Qué tipo de operación realiza un 'LEFT JOIN' entre la tabla A (izquierda) y la tabla B (derecha)?",
              "options": {
                "a": "Retorna únicamente los registros que coinciden exactamente en ambas tablas",
                "b": "Retorna todos los registros de la tabla A, y los registros coincidentes de la tabla B (rellenando con NULL si no hay coincidencia)",
                "c": "Retorna únicamente los registros de la tabla B que no tienen pareja en A",
                "d": "Multiplica de forma cartesiana todas las filas de ambas tablas"
              },
              "correct": "b"
            },
            {
              "id": 8,
              "text": "¿Por qué la estructura de árbol B-Tree / B+Tree es la más utilizada en los índices de motores de bases de datos?",
              "options": {
                "a": "Porque mantiene los datos ordenados y permite búsquedas, accesos secuenciales, inserciones y eliminaciones en tiempo logarítmico O(log n) minimizando lecturas de disco",
                "b": "Porque reduce el tamaño de las cadenas de texto a la mitad mediante compresión Huffman",
                "c": "Porque evita la necesidad de definir claves primarias en el esquema",
                "d": "Porque convierte automáticamente consultas no estructuradas en código binario"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En el diseño de bases de datos, ¿a qué se refiere una dependencia transitiva (relevante para la 3FN)?",
              "options": {
                "a": "Cuando un atributo no clave depende funcionalmente de otro atributo no clave que a su vez depende de la clave primaria (X -> Y y Y -> Z)",
                "b": "Cuando una consulta tarda más de un segundo en responder a través de la red WAN",
                "c": "Cuando se transfieren datos de un servidor local a un data center remoto",
                "d": "Cuando dos usuarios intentan actualizar el mismo registro simultáneamente"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué representa el concepto de 'Aislamiento' (Isolation) en una transacción ACID?",
              "options": {
                "a": "Que las operaciones de transacciones simultáneas se ejecuten sin interferir entre sí como si fueran secuenciales",
                "b": "Que la base de datos no tenga conexión con Internet bajo ninguna circunstancia",
                "c": "Que los administradores de sistemas no puedan leer los correos del personal",
                "d": "Que las tablas relacionales no puedan enlazarse mediante claves foráneas"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En SQL, ¿qué comando de control de transacciones confirma permanentemente los cambios efectuados?",
              "options": {
                "a": "ROLLBACK",
                "b": "COMMIT",
                "c": "SAVEPOINT",
                "d": "CHECKPOINT"
              },
              "correct": "b"
            },
            {
              "id": 12,
              "text": "¿Qué es un 'Deadlock' (interbloqueo) en el motor de una base de datos?",
              "options": {
                "a": "Una situación donde dos o más transacciones quedan bloqueadas mutuamente esperando recursos que la otra tiene bloqueados",
                "b": "El daño irreversible de los sectores físicos del disco de almacenamiento",
                "c": "La expiración forzada de la contraseña del usuario root",
                "d": "La sobrecarga del ventilador térmico de la placa madre del servidor"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En bases de datos NoSQL, ¿cuál es la característica primordial de una base de datos documental (como MongoDB)?",
              "options": {
                "a": "Almacena los datos en documentos semiestructurados (formato JSON o BSON) con esquemas flexibles y dinámicos",
                "b": "Exige obligatoriamente esquemas relacionales rígidos con normalización en 5FN",
                "c": "No admite índices secundarios en campos anidados",
                "d": "Solo funciona en memoria RAM sin capacidad de almacenamiento en disco"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Qué postula el 'Teorema CAP' formulado por Eric Brewer para sistemas distribuidos de datos?",
              "options": {
                "a": "Un sistema distribuido solo puede garantizar simultáneamente dos de las tres propiedades: Consistencia, Disponibilidad y Tolerancia a Particiones",
                "b": "Toda base de datos distribuida debe procesar al menos 100,000 transacciones por segundo",
                "c": "Los servidores deben situarse a menos de 500 kilómetros para evitar latencia de red",
                "d": "La compresión de datos reduce el costo de almacenamiento en un porcentaje fijo"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En SQL, ¿cuál es el propósito de una 'Vista' (VIEW)?",
              "options": {
                "a": "Una tabla virtual basada en el conjunto de resultados de una consulta SQL que no almacena datos físicos (salvo vistas materializadas)",
                "b": "Un monitor de pantalla para que los supervisores vean a los empleados",
                "c": "Un disparador que se ejecuta antes de cualquier INSERT",
                "d": "Un archivo de texto plano descargado al navegador web"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Cuál es la función de un 'Trigger' (disparador) en un gestor de base de datos relacional?",
              "options": {
                "a": "Un procedimiento que se ejecuta automáticamente en respuesta a eventos específicos (INSERT, UPDATE, DELETE) en una tabla",
                "b": "Un comando que apaga el servidor cuando la memoria llega al 90%",
                "c": "Una directiva para compilar librerías en lenguaje C++",
                "d": "Un tipo de cable para conectar almacenamiento SAN a la red"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "En el ajuste de rendimiento (tuning) de consultas SQL, ¿qué utilidad tiene el comando 'EXPLAIN' / 'EXPLAIN ANALYZE'?",
              "options": {
                "a": "Muestra el plan de ejecución que el optimizador del motor utiliza (escaneos secuenciales, uso de índices, ordenación)",
                "b": "Traduce automáticamente los nombres de columnas de inglés a español",
                "c": "Envía un correo electrónico con el reporte financiero del mes",
                "d": "Calcula el impuesto sobre ventas de los registros facturados"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Cuál de las siguientes operaciones SQL es parte del Lenguaje de Definición de Datos (DDL)?",
              "options": {
                "a": "CREATE TABLE",
                "b": "SELECT",
                "c": "INSERT INTO",
                "d": "UPDATE"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué problema resuelve la técnica de 'Particionamiento de Tablas' (Table Partitioning)?",
              "options": {
                "a": "Dividir tablas extremadamente grandes en fragmentos más pequeños y manejables (por rango, lista o hash) para acelerar consultas y mantenimiento",
                "b": "Dividir el sueldo de los desarrolladores en cuotas mensuales",
                "c": "Separar el monitor de la CPU mediante un cable HDMI",
                "d": "Evitar que los usuarios utilicen contraseñas cortas"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En seguridad de bases de datos, ¿cuál es la mejor defensa frente a ataques de Inyección SQL (SQL Injection)?",
              "options": {
                "a": "Utilizar consultas parametrizadas (Prepared Statements) y procedimientos almacenados en lugar de concatenar cadenas",
                "b": "Cambiar el puerto por defecto de la base de datos a un número aleatorio",
                "c": "Aumentar la memoria RAM del servidor de base de datos a 64 GB",
                "d": "Eliminar todas las claves foráneas de las tablas relacionales"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "sis-prog",
          "codigo": "SIS-102",
          "siglaCompleta": "SIS-102-13610: Programación y Estructuras de Datos – NM – A",
          "nombre": "Programación y Estructuras de Datos",
          "semestre": "Semestre II",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10447104: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Cuál de los siguientes es un pilar fundamental de la Programación Orientada a Objetos (POO)?",
              "options": {
                "a": "Polimorfismo, Encapsulamiento, Herencia y Abstracción",
                "b": "Normalización, Compilación, Paginación y Enlace estático",
                "c": "Subnetting, Enrutamiento, Conmutación y DNS",
                "d": "Recursión pura, Ausencia de variables y Tipado dinámico"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "En estructuras de datos, ¿qué principio de acceso rige el funcionamiento de una Pila (Stack)?",
              "options": {
                "a": "FIFO (First In, First Out)",
                "b": "LIFO (Last In, First Out)",
                "c": "Acceso aleatorio directo por índice numérico",
                "d": "Prioridad probabilística de procesamiento"
              },
              "correct": "b"
            },
            {
              "id": 3,
              "text": "¿Cuál es la complejidad temporal promedio para buscar un elemento en una Tabla Hash con buen factor de carga?",
              "options": {
                "a": "O(1) - Tiempo constante",
                "b": "O(n) - Tiempo lineal",
                "c": "O(n log n) - Tiempo log-lineal",
                "d": "O(n²) - Tiempo cuadrático"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En un Árbol Binario de Búsqueda (BST) balanceado, ¿cuál es la complejidad temporal para insertar o buscar un nodo?",
              "options": {
                "a": "O(log n)",
                "b": "O(n!)",
                "c": "O(n²)",
                "d": "O(2ⁿ)"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué caracteriza a una Lista Doblemente Enlazada frente a una Lista Simplemente Enlazada?",
              "options": {
                "a": "Cada nodo contiene referencias tanto al siguiente nodo como al nodo anterior",
                "b": "Solo admite datos de tipo flotante de doble precisión (double)",
                "c": "Requiere la mitad de memoria en comparación con una lista simple",
                "d": "No puede modificarse una vez creada en memoria"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué ocurre cuando se produce un error de 'Stack Overflow' en la ejecución de un programa?",
              "options": {
                "a": "La pila de llamadas a funciones agota su espacio asignado en memoria, frecuentemente debido a una recursión infinita",
                "b": "El disco duro del ordenador se queda sin espacio de almacenamiento",
                "c": "La tarjeta gráfica sobrepasa la temperatura máxima de funcionamiento",
                "d": "Se produce una falla en la conexión de red con el enrutador Wi-Fi"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En algoritmos de ordenamiento, ¿cuál es la complejidad temporal en el peor caso del algoritmo Quicksort si no se usa pivote aleatorio?",
              "options": {
                "a": "O(n²)",
                "b": "O(log n)",
                "c": "O(1)",
                "d": "O(n³)"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Cuál es la característica principal del algoritmo de ordenamiento Merge Sort?",
              "options": {
                "a": "Utiliza la técnica de 'Divide y Vencerás' y garantiza una complejidad O(n log n) en el mejor, peor y promedio caso",
                "b": "Ordena los elementos sin utilizar memoria adicional auxiliar (in-place estricto)",
                "c": "Solo funciona cuando todos los números del arreglo son pares",
                "d": "Es un algoritmo no determinista basado en números primos"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En POO, ¿qué significa el concepto de 'Polimorfismo'?",
              "options": {
                "a": "La capacidad de diferentes clases derivadas de responder al mismo mensaje o método de manera específica",
                "b": "La capacidad de una variable de cambiar su tipo de datos primitivo en tiempo de ejecución",
                "c": "La creación de múltiples copias de un archivo binario en el disco duro",
                "d": "La protección de atributos de clase mediante claves asimétricas"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué es la 'Recursión' en ciencias de la computación?",
              "options": {
                "a": "Una técnica de programación donde una función se invoca a sí misma para resolver subproblemas de menor tamaño hasta alcanzar un caso base",
                "b": "Un bucle 'for' que itera exactamente 100 veces",
                "c": "La copia de seguridad periódica de una base de datos relacional",
                "d": "La sobreescritura de archivos temporales en el sistema operativo"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En estructuras de datos, ¿qué estructura sigue el principio FIFO (First In, First Out)?",
              "options": {
                "a": "Cola (Queue)",
                "b": "Pila (Stack)",
                "c": "Árbol AVL",
                "d": "Grafo no dirigido"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué es un 'Grafo Dirigido' (Dígrafo)?",
              "options": {
                "a": "Un conjunto de vértices conectados por aristas que tienen una dirección u orientación específica",
                "b": "Un gráfico estadístico de barras generado con Microsoft Excel",
                "c": "Una lista de enteros ordenados de mayor a menor",
                "d": "Una estructura jerárquica con un único nodo raíz sin ciclos posibles"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En la gestión de memoria en lenguajes como C o C++, ¿qué problema describe una 'Fuga de Memoria' (Memory Leak)?",
              "options": {
                "a": "Memoria reservada dinámicamente en el Heap que no se libera cuando ya no se necesita, reduciendo la memoria disponible",
                "b": "Un cortocircuito físico en los pines de la memoria RAM del ordenador",
                "c": "El robo de contraseñas mediante interceptación en la red Wi-Fi",
                "d": "La sobreescritura accidental del sector de arranque MBR del disco"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Cuál es la función del 'Garbage Collector' (Recolector de Basura) en lenguajes como Java o C#?",
              "options": {
                "a": "Detectar y liberar automáticamente la memoria ocupada por objetos a los que ya no se puede acceder desde el programa",
                "b": "Vaciar la papelera de reciclaje del sistema operativo del usuario",
                "c": "Eliminar comentarios y espacios en blanco del código fuente antes de compilar",
                "d": "Limpiar físicamente el polvo del ventilador del procesador"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Cuál es la diferencia entre una 'Clase Abstracta' y una 'Interfaz' en la mayoría de lenguajes orientados a objetos modernos?",
              "options": {
                "a": "Una clase abstracta puede contener estado (variables de instancia) e implementaciones de métodos; una interfaz tradicionalmente solo declara contratos de métodos",
                "b": "Las interfaces se pueden instanciar directamente con el operador 'new' y las clases abstractas no",
                "c": "Las clases abstractas solo admiten números y las interfaces solo cadenas de texto",
                "d": "No existe ninguna diferencia; son términos sinónimos en todos los compiladores"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En el análisis de algoritmos, ¿qué representa la notación Big-O (O grande)?",
              "options": {
                "a": "Una cota superior asintótica del tiempo de ejecución o espacio de memoria consumido en función del tamaño de entrada 'n'",
                "b": "El precio económico de la licencia de un paquete de software",
                "c": "La cantidad de gigabytes de memoria instalados en el servidor",
                "d": "La velocidad del reloj del procesador en gigahercios"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué algoritmo encuentra la ruta más corta en un grafo ponderado con pesos no negativos?",
              "options": {
                "a": "Algoritmo de Dijkstra",
                "b": "Algoritmo de Burbuja (Bubble Sort)",
                "c": "Algoritmo RSA de factorización",
                "d": "Algoritmo K-Means de agrupación"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En un recorrido de árbol binario 'En Orden' (In-Order) de un BST, ¿en qué orden se visitan los nodos?",
              "options": {
                "a": "Subárbol izquierdo, raíz, subárbol derecho (resultando en los elementos ordenados ascendentemente)",
                "b": "Raíz, subárbol izquierdo, subárbol derecho",
                "c": "Subárbol derecho, raíz, subárbol izquierdo",
                "d": "Subárbol izquierdo, subárbol derecho, raíz"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué es una condición de carrera (Race Condition) en programación concurrente multihilo?",
              "options": {
                "a": "Una anomalía donde el resultado del programa depende del orden impredecible de ejecución de dos o más hilos que acceden a recursos compartidos",
                "b": "Una competencia de velocidad entre dos tarjetas de video para renderizar gráficos 3D",
                "c": "El intento de compilar dos proyectos independientes en la misma máquina",
                "d": "La medición del tiempo de respuesta de un servidor de DNS público"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Qué mecanismo se utiliza para sincronizar hilos y evitar que dos procesos entren simultáneamente a una 'Sección Crítica'?",
              "options": {
                "a": "Mutex (Exclusión Mutua) o Semáforos",
                "b": "Sentencia GOTO incondicional",
                "c": "Aceleración por hardware de gráficos",
                "d": "Sobrecarga de operadores matemáticos"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "sis-redes",
          "codigo": "SIS-304",
          "siglaCompleta": "SIS-304-13955: Redes de Computadoras y Ciberseguridad – NM – A",
          "nombre": "Redes de Computadoras y Ciberseguridad",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10447105: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿En qué capa del Modelo OSI opera el protocolo IP (Internet Protocol) y los enrutadores (routers)?",
              "options": {
                "a": "Capa 1: Física",
                "b": "Capa 2: Enlace de Datos",
                "c": "Capa 3: Red",
                "d": "Capa 4: Transporte"
              },
              "correct": "c"
            },
            {
              "id": 2,
              "text": "¿Cuál es la diferencia fundamental entre el protocolo TCP y el protocolo UDP en la capa de transporte?",
              "options": {
                "a": "TCP es orientado a la conexión, confiable con confirmación y control de flujo; UDP es no orientado a conexión, sin confirmación pero más rápido y ligero",
                "b": "UDP cifra todos los datos y TCP los transmite en texto plano",
                "c": "TCP solo transmite texto plano y UDP solo transmite archivos binarios",
                "d": "UDP requiere un apretón de manos de tres vías (3-way handshake) y TCP no"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuál es la longitud en bits de una dirección IPv4 y de una dirección IPv6 respectivamente?",
              "options": {
                "a": "32 bits para IPv4 y 128 bits para IPv6",
                "b": "64 bits para IPv4 y 256 bits para IPv6",
                "c": "16 bits para IPv4 y 64 bits para IPv6",
                "d": "128 bits para IPv4 y 512 bits para IPv6"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué función cumple el protocolo DNS (Domain Name System)?",
              "options": {
                "a": "Traducir nombres de dominio legibles para humanos (ej: udabol.edu.bo) en direcciones IP numéricas",
                "b": "Asignar dinámicamente configuraciones de red e IP a los clientes locales",
                "c": "Bloquear ataques de inyección SQL en la capa de aplicación",
                "d": "Monitorear la temperatura del cableado de fibra óptica submarina"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué protocolo se encarga de asignar de forma automática y dinámica direcciones IP, máscaras y puertas de enlace a los dispositivos en una red?",
              "options": {
                "a": "DHCP (Dynamic Host Configuration Protocol)",
                "b": "ARP (Address Resolution Protocol)",
                "c": "SNMP (Simple Network Management Protocol)",
                "d": "ICMP (Internet Control Message Protocol)"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "Dada la red IPv4 192.168.1.0/24, ¿cuántas direcciones IP utilizables para hosts están disponibles en dicha subred?",
              "options": {
                "a": "254 direcciones (excluyendo red 192.168.1.0 y broadcast 192.168.1.255)",
                "b": "256 direcciones completas",
                "c": "128 direcciones",
                "d": "512 direcciones"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué protocolo de la capa de enlace de datos resuelve una dirección IP lógica a una dirección MAC física en una red local?",
              "options": {
                "a": "ARP (Address Resolution Protocol)",
                "b": "BGP (Border Gateway Protocol)",
                "c": "RIP (Routing Information Protocol)",
                "d": "FTP (File Transfer Protocol)"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "En ciberseguridad, ¿cuál es la diferencia principal entre la criptografía simétrica y la criptografía asimétrica?",
              "options": {
                "a": "La simétrica utiliza la misma clave para cifrar y descifrar; la asimétrica utiliza un par de claves (una clave pública y una clave privada)",
                "b": "La asimétrica solo funciona en redes locales cableadas",
                "c": "La simétrica es completamente vulnerable y ya no se utiliza en ningún estándar moderno",
                "d": "La asimétrica no requiere operaciones matemáticas para funcionar"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿En qué consiste un ataque de Denegación de Servicio Distribuido (DDoS)?",
              "options": {
                "a": "Sobrecargar un servidor, servicio o red con un tráfico masivo proveniente de múltiples fuentes coordinadas (botnet) para dejarlo inaccesible",
                "b": "Robar las credenciales bancarias mediante correos falsos que suplantan identidad",
                "c": "Alterar los datos de una base de datos mediante inyección de sentencias SQL",
                "d": "Acceder físicamente al rack de telecomunicaciones y desconectar los cables de red"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Cuál es la función del protocolo TLS/SSL en las conexiones HTTPS?",
              "options": {
                "a": "Cifrar la comunicación entre el navegador del cliente y el servidor web, garantizando confidencialidad, autenticidad e integridad",
                "b": "Comprimir las imágenes PNG y JPEG para acelerar la velocidad de carga",
                "c": "Permitir la descarga gratuita de software comercial con derechos de autor",
                "d": "Monitorear la cantidad de clics que realiza el usuario en la página web"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Qué puerto estándar utiliza por defecto el protocolo HTTPS para comunicaciones seguras?",
              "options": {
                "a": "Puerto 443",
                "b": "Puerto 80",
                "c": "Puerto 21",
                "d": "Puerto 22"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "En el contexto de seguridad informática, ¿a qué se refiere el término 'Ataque Man-in-the-Middle' (MitM)?",
              "options": {
                "a": "Un atacante se interpone secretamente entre dos partes que se comunican, interceptando o alterando el tráfico sin que lo noten",
                "b": "Un atacante ingresa al edificio disfrazado de técnico de mantenimiento",
                "c": "Un virus informático que borra todos los archivos que empiezan por la letra M",
                "d": "Una falla mecánica en la tarjeta de red de la estación de trabajo"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué es una VLAN (Virtual Local Area Network)?",
              "options": {
                "a": "Una red de área local lógica que segmenta y agrupa dispositivos independientemente de su ubicación física en el switch",
                "b": "Una conexión inalámbrica satelital entre diferentes países",
                "c": "Un tipo de cable de red blindado de categoría 7",
                "d": "Una antena repetidora de señal celular 5G"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En ciberseguridad, ¿qué define el principio de 'Mínimo Privilegio' (Principle of Least Privilege)?",
              "options": {
                "a": "Otorgar a usuarios y procesos únicamente los permisos y accesos estrictamente necesarios para cumplir su función específica",
                "b": "Asignar contraseñas cortas de 4 caracteres a los nuevos empleados",
                "c": "Permitir acceso de superusuario root a todos los integrantes del equipo",
                "d": "Bloquear el acceso a Internet a todos los directivos de la empresa"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué técnica de ingeniería social consiste en enviar correos electrónicos fraudulentos para engañar a usuarios y robar credenciales o instalar malware?",
              "options": {
                "a": "Phishing",
                "b": "Buffer Overflow",
                "c": "Cross-Site Scripting (XSS)",
                "d": "Defacing"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En redes IP, ¿cuál de los siguientes rangos corresponde a una dirección IP privada definida en la RFC 1918?",
              "options": {
                "a": "192.168.0.0 a 192.168.255.255",
                "b": "8.8.8.0 a 8.8.8.255",
                "c": "1.1.1.0 a 1.1.1.255",
                "d": "142.250.0.0 a 142.250.255.255"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Cuál es la función principal de un Firewall (cortafuegos) de red de inspección de estado (Stateful)?",
              "options": {
                "a": "Monitorear y controlar el tráfico entrante y saliente evaluando reglas de seguridad y el estado de las conexiones activas",
                "b": "Apagar los incendios físicos en el data center con gas FM-200",
                "c": "Aumentar la memoria de almacenamiento de los discos duros locales",
                "d": "Corregir errores ortográficos en los correos electrónicos del personal"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué es una VPN (Virtual Private Network)?",
              "options": {
                "a": "Una tecnología que crea una conexión de red cifrada y segura sobre una red pública como Internet (túnel seguro)",
                "b": "Un dispositivo físico que almacena contraseñas impresas",
                "c": "Un software que acelera la velocidad de rotación de los ventiladores del servidor",
                "d": "Un tipo de monitor de pantalla de ultra alta definición"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué vulnerabilidad web ocurre cuando una aplicación web no escapa datos de entrada de usuarios y los refleja en el navegador de otros usuarios?",
              "options": {
                "a": "XSS (Cross-Site Scripting)",
                "b": "SQL Injection",
                "c": "ARP Spoofing",
                "d": "DNS Poisoning"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En seguridad de la información, ¿cuáles son los tres pilares de la 'Tríada CID'?",
              "options": {
                "a": "Confidencialidad, Integridad y Disponibilidad",
                "b": "Control, Identidad y Despliegue",
                "c": "Conectividad, Interconexión y Datos",
                "d": "Cómputo, Infraestructura y Dominio"
              },
              "correct": "a"
            }
          ]
        }
      ]
    },
    {
      "id": "derecho",
      "nombre": "Derecho",
      "facultad": "Facultad de Ciencias Sociales y Humanísticas",
      "icono": "gavel",
      "descripcion": "Estudio del ordenamiento jurídico, litigación oral, justicia constitucional y defensa de los derechos.",
      "duracion": "5 años (10 semestres)",
      "subjects": [
        {
          "id": "der-teoria",
          "codigo": "DER-101",
          "siglaCompleta": "DER-101-15011: Teoría General del Derecho – NM – A",
          "nombre": "Teoría General del Derecho",
          "semestre": "Semestre I",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10556101: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En la teoría pura del derecho de Hans Kelsen, la jerarquía normativa se representa mediante una pirámide donde en la cúspide se encuentra:",
              "options": {
                "a": "La Constitución Política del Estado (y la norma hipotética fundamental)",
                "b": "Los decretos supremos reglamentarios",
                "c": "Las resoluciones ministeriales ordinarias",
                "d": "Las sentencias de primera instancia de jueces de instrucción"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la característica distintiva que diferencia a la Norma Jurídica de las normas morales y los usos sociales?",
              "options": {
                "a": "La coercibilidad (posibilidad de exigir su cumplimiento mediante la fuerza legítima del Estado)",
                "b": "La autonomía interna de la conciencia",
                "c": "La ausencia total de sanciones",
                "d": "Su aplicación facultativa a criterio del individuo"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuáles son las fuentes formales directas y tradicionales del ordenamiento jurídico positivo?",
              "options": {
                "a": "La ley, la costumbre jurídica, la jurisprudencia y la doctrina",
                "b": "Los artículos periodísticos y columnas de opinión",
                "c": "Los acuerdos sindicales verbales no homologados",
                "d": "Las encuestas de opinión pública ciudadana"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "El principio de 'Irretroactividad de la Ley' establece como regla general que:",
              "options": {
                "a": "Las leyes rigen para lo venidero y no tienen efecto retroactivo, salvo en materia penal cuando beneficie al imputado o en materia social y laboral expresa",
                "b": "Toda ley nueva anula los contratos firmados en los últimos cincuenta años",
                "c": "Los jueces pueden aplicar leyes derogadas a su libre albedrío",
                "d": "Las leyes solo se aplican a los ciudadanos nacidos después de su promulgación"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "En la estructura lógica de la norma jurídica de Kelsen, el enunciado se formula como:",
              "options": {
                "a": "Un juicio hipotético del 'deber ser': Dado un supuesto de hecho (A), debe ser la consecuencia jurídica (B)",
                "b": "Una ley natural de causa y efecto físico inexorable",
                "c": "Un mandato religioso de fe irrevocable",
                "d": "Una sugerencia moral sin destinatario específico"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué diferencia existe entre un 'Hecho Jurídico' y un 'Acto Jurídico'?",
              "options": {
                "a": "El hecho jurídico produce efectos legales con o sin voluntad humana (ej. nacimiento, muerte); el acto jurídico requiere una manifestación consciente y voluntaria dirigida a producir efectos jurídicos (ej. un contrato)",
                "b": "El acto jurídico solo lo realizan los abogados matriculados",
                "c": "El hecho jurídico siempre constituye un delito penal",
                "d": "No existe diferencia; son sinónimos absolutos en el Código Civil"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿A qué rama del derecho corresponde el conjunto de normas que regulan la organización del Estado, sus poderes públicos y las relaciones de estos con los particulares actuando con potestad pública (imperium)?",
              "options": {
                "a": "Derecho Público",
                "b": "Derecho Privado",
                "c": "Derecho Canónico puro",
                "d": "Derecho Comercial societario"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "El principio 'Iura Novit Curia' en la teoría procesal general significa que:",
              "options": {
                "a": "El juez conoce el derecho aplicable, por lo que las partes deben probar los hechos y el juez aplica la norma jurídica pertinente aunque no haya sido invocada",
                "b": "Las partes deben enseñar las leyes al tribunal antes del juicio",
                "c": "Los juicios deben ser orales y públicos en todas las materias",
                "d": "Los honorarios de los abogados son fijados por el Estado"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Cómo se define la 'Laguna del Derecho' (anomia o vacío normativo)?",
              "options": {
                "a": "La ausencia de una disposición legal expresa en el ordenamiento positivo que regule un caso concreto litigioso sometido a decisión judicial",
                "b": "El olvido involuntario de un abogado de presentar una prueba",
                "c": "La pérdida física del expediente judicial original",
                "d": "La derogación de la Constitución completa por golpe de estado"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "Cuando existe una laguna normativa, los métodos de integración jurídica a los que recurre el juzgador son:",
              "options": {
                "a": "La analogía jurídica, los principios generales del derecho y la equidad",
                "b": "El sorteo o lanzamiento de moneda al aire",
                "c": "La consulta telefónica al Ministerio de Justicia",
                "d": "La declaración de incompetencia negándose a fallar (denegación de justicia)"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En la interpretación jurídica, la interpretación 'Sistemática' consiste en:",
              "options": {
                "a": "Interpretar la norma no de forma aislada, sino en armonía y concordancia con el conjunto de principios y preceptos de todo el ordenamiento jurídico",
                "b": "Atenerse estrictamente al significado gramatical literal de las palabras en el diccionario",
                "c": "Buscar la intención psicológica original del legislador histórico en los debates parlamentarios",
                "d": "Preguntar directamente al redactor de la ley su opinión actual"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "La 'Antinomia Jurídica' se produce cuando:",
              "options": {
                "a": "Dos o más normas del mismo ordenamiento jurídico imputan consecuencias incompatibles al mismo supuesto fáctico de hecho",
                "b": "Una ley es aprobada por unanimidad de los legisladores",
                "c": "El acusado se declara confeso de todos los cargos en la audiencia preliminar",
                "d": "Se traduce una ley del latín al español de forma errónea"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Cuáles son los tres criterios clásicos para resolver una antinomia jurídica entre normas incompatibles?",
              "options": {
                "a": "Criterio jerárquico (ley superior deroga ley inferior), cronológico (ley posterior deroga ley anterior) y de especialidad (ley especial prima sobre general)",
                "b": "Criterio de mayor longitud de texto, mayor número de artículos y firma presidencial",
                "c": "Criterio alfabético, numérico y de color de carátula",
                "d": "Criterio de la votación popular semanal"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "El concepto de 'Seguridad Jurídica' en el Estado de Derecho garantiza que:",
              "options": {
                "a": "Los ciudadanos conozcan de antemano las normas aplicables y las consecuencias legales de sus actos, con certeza y estabilidad sin arbitrariedad",
                "b": "Haya policías armados en cada esquina de la ciudad",
                "c": "Las cárceles tengan celdas de máxima seguridad electrónica",
                "d": "Nadie pueda interponer recursos de apelación en ningún juicio"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué es la 'Capacidad Jurídica' (o de goce) de las personas?",
              "options": {
                "a": "La aptitud legal intrínseca e inherente a toda persona humana para ser titular de derechos y obligaciones desde el nacimiento",
                "b": "La facultad de ejercer por sí mismo los derechos civiles sin necesidad de tutor ni representante",
                "c": "El límite de edad mínima para votar en elecciones presidenciales",
                "d": "La solvencia económica certificada por una entidad bancaria"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "La corriente del 'Iusnaturalismo' (Derecho Natural) sostiene fundamentalmente que:",
              "options": {
                "a": "Existen principios de justicia y derechos universales e inmutables inherentes a la naturaleza humana, superiores al derecho positivo dictado por los hombres",
                "b": "El único derecho existente es el que está formalmente escrito y promulgado por el Estado",
                "c": "El derecho debe basarse en la ley de la selva y la supervivencia del más fuerte",
                "d": "Los animales tienen los mismos derechos civiles patrimoniales que las personas jurídicas"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El 'Positivismo Jurídico' (Iuspositivismo) afirma que:",
              "options": {
                "a": "El derecho es únicamente el derecho positivo vigente emanado de los órganos competentes del Estado, independientemente de su valoración moral",
                "b": "Toda ley injusta carece por completo de validez jurídica formal",
                "c": "Los tratados de derechos humanos son normas de cumplimiento voluntario",
                "d": "Los jueces pueden desobedecer cualquier ley si no les parece ética"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué significa la expresión latina 'Pacta Sunt Servanda' en la teoría general de los contratos y tratados?",
              "options": {
                "a": "Los pactos deben ser cumplidos (los contratos tienen fuerza de ley entre las partes contratantes)",
                "b": "Los pactos caducan automáticamente a los 30 días de firmados",
                "c": "El deudor queda liberado si el acreedor cambia de domicilio",
                "d": "Los tratados solo obligan a los gobernantes que los suscribieron"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La 'Jurisprudencia' en sentido estricto está constituida por:",
              "options": {
                "a": "El conjunto reiterado y vinculante de fallos y resoluciones uniformes emitidos por los máximos tribunales de justicia al interpretar y aplicar las leyes",
                "b": "Los libros de texto publicados por profesores universitarios",
                "c": "Las actas de debate de los comités de vecinos de la ciudad",
                "d": "Las noticias jurídicas difundidas por la prensa nacional"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿En qué consiste la 'Derogación Tácita' de una ley?",
              "options": {
                "a": "Cuando una nueva ley no declara expresamente la nulidad de la anterior, pero contiene preceptos contrarios o regula la misma materia de forma íntegra e incompatible",
                "b": "Cuando el Tribunal Constitucional declara la inconstitucionalidad en sentencia expresa",
                "c": "Cuando la ley no se publica en la Gaceta Oficial del Estado",
                "d": "Cuando la población desconoce la existencia de la norma"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "der-const",
          "codigo": "DER-103",
          "siglaCompleta": "DER-103-15033: Derecho Constitucional Boliviano – NM – A",
          "nombre": "Derecho Constitucional Boliviano",
          "semestre": "Semestre II",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10556102: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Según el Artículo 1 de la Constitución Política del Estado de 2009, ¿cómo se define el modelo de Estado de Bolivia?",
              "options": {
                "a": "Estado Unitario Social de Derecho Plurinacional Comunitario, libre, independiente, soberano, democrático, intercultural, descentralizado y con autonomías",
                "b": "República Federal representativa con estados federales independientes",
                "c": "Monarquía parlamentaria constitucional centralizada",
                "d": "Confederación de naciones sin gobierno central unificado"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es el órgano judicial especializado encargado en Bolivia de ejercer el control concentrado de constitucionalidad y velar por la supremacía de la CPE?",
              "options": {
                "a": "El Tribunal Constitucional Plurinacional (TCP)",
                "b": "El Tribunal Supremo de Justicia (TSJ)",
                "c": "El Consejo de la Magistratura",
                "d": "La Contraloría General del Estado"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "La 'Acción de Libertad' consagrada en el Artículo 125 de la CPE boliviana tiene por finalidad tutelar primordialmente los derechos a:",
              "options": {
                "a": "La vida, la integridad física y la libertad personal y de locomoción indebidamente perseguida, restringida o amenazada",
                "b": "El derecho al trabajo remunerado en horas extraordinarias",
                "c": "El derecho de propiedad sobre bienes inmuebles y títulos de propiedad",
                "d": "El acceso a la información pública archivada"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué acción de defensa constitucional procede contra los actos u omisiones ilegales o indebidos de servidores públicos o particulares que restrinjan, supriman o amenacen derechos reconocidos por la CPE que no estén tutelados por otra acción específica?",
              "options": {
                "a": "Acción de Amparo Constitucional (Art. 128 y 129 de la CPE)",
                "b": "Acción Popular exclusivamente",
                "c": "Acción de Cumplimiento",
                "d": "Acción de Protección de Privacidad"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "El principio de 'Subsidiariedad' en la Acción de Amparo Constitucional exige que:",
              "options": {
                "a": "El accionante debe haber agotado previamente todos los recursos ordinarios (administrativos o judiciales) previstos por ley antes de acudir a la jurisdicción constitucional",
                "b": "El Estado debe pagar una subvención económica al accionante",
                "c": "La demanda deba ser presentada exclusivamente por el Defensor del Pueblo",
                "d": "Se debe presentar en el plazo perentorio de 10 años desde el hecho"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuál es el plazo perentorio de inmediatez para interponer una Acción de Amparo Constitucional según el Art. 129.II de la CPE?",
              "options": {
                "a": "Seis meses computables a partir de la comisión de la vulneración alegada o de notificada la última resolución administrativa o judicial",
                "b": "Treinta días hábiles",
                "c": "Un año calendario",
                "d": "Tres años perentorios"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "La 'Acción Popular' prevista en el Artículo 135 de la CPE boliviana procede contra actos u omisiones que vulneren:",
              "options": {
                "a": "Derechos e intereses colectivos y difusos (como el medio ambiente sano, patrimonio cultural, espacio público y salubridad)",
                "b": "El cobro de alquileres adeudados entre particulares",
                "c": "El despido injustificado de un trabajador fabril",
                "d": "La pensión alimenticia de menores de edad"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué tutela la 'Acción de Cumplimiento' (Art. 134 de la CPE)?",
              "options": {
                "a": "El cumplimiento forzoso de disposiciones de leyes o de actos administrativos emanados de servidores públicos renuentes a acatar mandatos expresos",
                "b": "El cumplimiento de un contrato de compraventa civil no escriturado",
                "c": "La liberación de personas detenidas en celdas policiales",
                "d": "La rectificación de datos personales en el registro civil"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "El 'Bloque de Constitucionalidad' en Bolivia (Art. 410.II de la CPE) está integrado por:",
              "options": {
                "a": "El texto de la Constitución Política del Estado y los Tratados y Convenios Internacionales en materia de Derechos Humanos y las normas de Derecho Comunitario ratificados",
                "b": "Las ordenanzas municipales de las capitales de departamento",
                "c": "Los estatutos internos de los partidos políticos",
                "d": "Las circulares de los bancos privados"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué postula el principio pro homine o pro persona en la interpretación de los derechos fundamentales?",
              "options": {
                "a": "Se debe acudir siempre a la norma más protectora y favorable a la persona humana y a la interpretación más amplia de derechos y más restrictiva de limitaciones",
                "b": "Que solo los varones mayores de edad pueden ejercer cargos públicos",
                "c": "Que las leyes penales deben interpretarse de forma agravada",
                "d": "Que los derechos humanos solo rigen en tiempos de paz"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Cuáles son los cuatro Órganos del Poder Público del Estado Plurinacional de Bolivia según la CPE?",
              "options": {
                "a": "Órgano Legislativo, Órgano Ejecutivo, Órgano Judicial y Órgano Electoral Plurinacional",
                "b": "Senado, Diputados, Alcaldías y Gobernaciones",
                "c": "Policía Nacional, Fuerzas Armadas, Iglesia y Aduana",
                "d": "Poder Judicial, Corte Suprema, Juzgados de Paz y Notarías"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "La Asamblea Legislativa Plurinacional está compuesta por dos cámaras, que son:",
              "options": {
                "a": "Cámara de Senadores (36 senadores: 4 por cada departamento) y Cámara de Diputados (130 diputados)",
                "b": "Cámara de Representantes y Cámara de Lores",
                "c": "Cámara Única de 200 delegados populares",
                "d": "Cámara de Ministros y Cámara de Alcaldes"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué tipo de autonomías reconoce expresamente la Constitución boliviana en su estructura territorial (Art. 269 y sig.)?",
              "options": {
                "a": "Departamental, Regional, Municipal e Indígena Originaria Campesina",
                "b": "Provincial y Cantonal exclusivamente",
                "c": "Autonomía eclesiástica y militar",
                "d": "Autonomía gremial corporativa"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La Jurisdicción Indígena Originaria Campesina (JIOC) goza de:",
              "options": {
                "a": "Igual jerarquía constitucional que la jurisdicción ordinaria, ejerciendo justicia conforme a sus normas y procedimientos propios con respeto a la vida y derechos constitucionales",
                "b": "Subordinación jerárquica a los jueces de instrucción penal ordinarios",
                "c": "Competencia exclusiva para juzgar delitos de narcotráfico internacional",
                "d": "Competencia únicamente consultiva no vinculante"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Quién ejerce la función de control fiscal y administración de los recursos del Estado boliviano?",
              "options": {
                "a": "La Contraloría General del Estado",
                "b": "La Defensoría del Pueblo",
                "c": "El Ministerio Público",
                "d": "El Banco Central de Bolivia exclusivamente"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "El Defensor del Pueblo tiene como mandato constitucional primordial:",
              "options": {
                "a": "La defensa, promoción y divulgación de los derechos humanos individuales y colectivos frente a actos y omisiones de la administración pública",
                "b": "La acusación penal pública contra delincuentes en juicios orales",
                "c": "El juzgamiento y condena con privación de libertad",
                "d": "La elaboración del presupuesto general del Estado"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué porcentaje o condiciones exige la CPE para la Reforma Total de la Constitución o aquella que afecte a sus bases fundamentales (Art. 411.I)?",
              "options": {
                "a": "Convocatoria a Asamblea Constituyente plenipotenciaria por iniciativa popular o por 2/3 de la ALP, y referéndum constitucional aprobatorio",
                "b": "Un simple decreto supremo del Presidente en Consejo de Ministros",
                "c": "La firma de una resolución ministerial del Ministro de la Presidencia",
                "d": "El voto de la mayoría absoluta de un solo departamento"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el marco de la democracia intercultural reconocida en Bolivia, las tres formas de democracia son:",
              "options": {
                "a": "Directa y participativa, Representativa, y Comunitaria (según normas y procedimientos propios)",
                "b": "Monárquica, Aristocrática y Republicana",
                "c": "Digital, Presencial y Telefónica",
                "d": "Militar, Corporativa y Sindical"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué principio constitucional establece la gratuidad, publicidad, celeridad y probidad en la administración de justicia boliviana (Art. 178)?",
              "options": {
                "a": "Principios fundamentales de la función judicial ordinaria y constitucional",
                "b": "Principios mercantiles de libre competencia de mercado",
                "c": "Doctrina de la inmunidad soberana de los gobernantes",
                "d": "Reglas de arbitraje comercial internacional privado"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En el control de convencionalidad, las autoridades judiciales internas de Bolivia están obligadas a:",
              "options": {
                "a": "Aplicar la Convención Americana sobre Derechos Humanos (Pacto de San José) y la jurisprudencia de la Corte Interamericana de DD.HH. (Corte IDH)",
                "b": "Ignorar los tratados internacionales si contradicen una ley de tránsito municipal",
                "c": "Consultar a embajadas extranjeras antes de dictar sentencia",
                "d": "Solicitar autorización al Ministerio de Relaciones Exteriores para cada fallo"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "der-civil",
          "codigo": "DER-201",
          "siglaCompleta": "DER-201-15055: Derecho Civil (Personas y Obligaciones) – NM – A",
          "nombre": "Derecho Civil (Personas y Obligaciones)",
          "semestre": "Semestre III",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10556103: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Según el Código Civil boliviano, ¿a qué edad se adquiere la mayoría de edad y con ella la plena capacidad de obrar?",
              "options": {
                "a": "A los 18 años cumplidos",
                "b": "A los 21 años",
                "c": "A los 16 años",
                "d": "A los 25 años"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuáles son los cuatro requisitos esenciales para la validez de todo contrato según el Artículo 452 del Código Civil boliviano?",
              "options": {
                "a": "Consentimiento de las partes, objeto, causa y forma (siempre que sea legalmente exigible)",
                "b": "Firma ante notario, dos testigos y pago de impuestos fiscales",
                "c": "Escritura pública en todos los casos sin excepción",
                "d": "Garantía prendaria y aval bancario previo"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Cuáles son los vicios del consentimiento que hacen anulable un contrato según la doctrina civil?",
              "options": {
                "a": "Error, dolo y violencia",
                "b": "Quiebra, insolvencia y cesación de pagos",
                "c": "Ausencia de testigos e ilegibilidad de la letra",
                "d": "Falta de pago de sellos de ley"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "La diferencia fundamental entre la Nulidad absoluta y la Anulabilidad de un contrato radica en que:",
              "options": {
                "a": "La nulidad protege el orden público e interés general y es imprescriptible e insubsanable; la anulabilidad protege el interés particular y es convalidable y prescriptible (5 años)",
                "b": "La nulidad solo se pide verbalmente sin abogado",
                "c": "La anulabilidad solo se aplica a compras menores a 100 bolivianos",
                "d": "Ambas figuras son exactamente idénticas en sus efectos procesales"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuáles son los elementos estructurales de toda Relación Obligatoria en el derecho civil patrimonial?",
              "options": {
                "a": "Sujetos (acreedor y deudor), Objeto (prestación de dar, hacer o no hacer) y Vínculo jurídico (causa eficiente)",
                "b": "El juez, el actuario y el demandado",
                "c": "El dinero en efectivo y el pagaré bancario",
                "d": "La hipoteca y la fianza personal"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "La 'Mora del Deudor' (Mora Debitoris) se constituye formalmente mediante:",
              "options": {
                "a": "La intimación o requerimiento formal judicial o notarial, salvo mora automática por vencimiento de plazo pactado de fecha cierta (mora ex re)",
                "b": "Una llamada telefónica no grabada",
                "c": "La simple sospecha de insolvencia del deudor",
                "d": "La publicación de una queja en redes sociales"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué modo extintivo de las obligaciones consiste en la sustitución de una obligación preexistente por una nueva que se extingue, cambiando el objeto o el deudor/acreedor?",
              "options": {
                "a": "Novación (Art. 352 del Código Civil)",
                "b": "Compensación",
                "c": "Confusión de derechos",
                "d": "Remisión de deuda"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "La 'Compensación' como modo de extinción de obligaciones opera cuando:",
              "options": {
                "a": "Dos personas son recíprocamente deudoras y acreedoras la una de la otra por deudas líquidas, exigibles y fungibles en dinero",
                "b": "El deudor paga el doble de lo adeudado voluntariamente",
                "c": "El acreedor fallece sin herederos forzosos",
                "d": "El banco condona la deuda por insolvencia"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué es la 'Responsabilidad Civil Extracontractual' (o aquiliana) según el Artículo 984 del Código Civil?",
              "options": {
                "a": "La obligación de indemnizar el daño ilícito material o moral causado a otro por hecho doloso o culposo imputable, sin que exista un contrato previo entre las partes",
                "b": "La fianza prestada por un banco en un contrato de mutuo",
                "c": "El pago del salario adeudado por el empleador al empleado",
                "d": "La sanción de reclusión penal dictada por un juez penal"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "La acción judicial que permite a los acreedores demandar la ineficacia de los actos fraudulentos de disposición patrimonial realizados por el deudor para perjudicarlos se denomina:",
              "options": {
                "a": "Acción Pauliana o Revocatoria",
                "b": "Acción Oblicua o Subrogatoria",
                "c": "Acción Reivindicatoria de dominio",
                "d": "Acción de Deslinde"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Qué es la 'Acción Subrogatoria' (u oblicua)?",
              "options": {
                "a": "El derecho del acreedor de ejercer los derechos y acciones patrimoniales que el deudor negligente descuida u omite ejercer contra terceros",
                "b": "La subasta judicial inmediata de la vivienda familiar",
                "c": "La rescisión unilateral por disconformidad con el precio",
                "d": "El cobro coactivo de tributos aduaneros"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "El derecho real de 'Usucapión' (Prescripción Adquisitiva Extraordinaria) de bienes inmuebles en Bolivia opera tras la posesión pacífica, pública, continua e ininterrumpida por:",
              "options": {
                "a": "Diez (10) años, sin necesidad de justo título ni buena fe",
                "b": "Dos (2) años con contrato verbal",
                "c": "Treinta (30) años necesariamente",
                "d": "Seis (6) meses con recibo de luz"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "La posesión civil de un bien requiere la concurrencia de dos elementos clásicos:",
              "options": {
                "a": "Corpus (tenencia material física del bien) y Animus (intención de conducirse como propietario de la cosa)",
                "b": "Escritura pública y matrícula de Derechos Reales",
                "c": "Contrato de arrendamiento y recibo de alquiler",
                "d": "Certificado de nacimiento y carnet de identidad"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En el régimen de copropiedad civil, ¿qué acción puede interponer cualquier copropietario en cualquier momento para poner fin a la indivisión comunitaria?",
              "options": {
                "a": "Acción de División y Partición de herencia o cosa común",
                "b": "Acción Negatoria de servidumbre",
                "c": "Interdicto de recobrar la posesión",
                "d": "Demanda de resolución de contrato por incumplimiento"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Cuál es la diferencia sustancial entre una Obligación Mancomunada simple y una Obligación Solidaria?",
              "options": {
                "a": "En la mancomunada simple cada deudor solo debe pagar su cuota parte de la deuda; en la solidaria cualquier deudor puede ser obligado por el acreedor al pago total de la obligación",
                "b": "En la solidaria no existe documento escrito firmado",
                "c": "En la mancomunada solo responde el fiador hipotecario",
                "d": "Las deudas solidarias no generan intereses bajo ninguna circunstancia"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "El 'Daño Emergente' y el 'Lucro Cesante' en la cuantificación de daños y perjuicios representan:",
              "options": {
                "a": "Daño emergente: la pérdida patrimonial efectivamente sufrida; Lucro cesante: la ganancia o beneficio legítimo que se dejó de percibir a causa del incumplimiento",
                "b": "Daño emergente: el dolor emocional; Lucro cesante: los impuestos fiscales",
                "c": "Daño emergente: las costas procesales del abogado; Lucro cesante: los honorarios del perito",
                "d": "Ambos términos significan exactamente el pago de intereses moratorios"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué es la 'Cláusula Penal' (o pena convencional) estipulada en un contrato civil?",
              "options": {
                "a": "Una tasación anticipada de daños y perjuicios pactada por las partes para el caso de incumplimiento o retraso de la prestación principal",
                "b": "Una amenaza de encarcelamiento penal para el deudor insolvente",
                "c": "La prohibición absoluta de rescindir el contrato bajo apercibimiento",
                "d": "Una orden de embargo dictada preventivamente por el juez"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el contrato de Compraventa, el saneamiento por evicción garantiza al comprador que:",
              "options": {
                "a": "El vendedor responderá si un tercero despoja judicialmente al comprador del bien adquirido invocando un mejor derecho anterior a la venta",
                "b": "El bien no bajará de precio en el mercado durante los próximos cinco años",
                "c": "El comprador podrá devolver el bien sin motivo a los 30 días",
                "d": "La casa no sufrirá filtraciones de agua de lluvia"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Qué vicios ocultos (o redhibitorios) dan lugar a la acción estimatoria (quanti minoris) o redhibitoria en la compraventa?",
              "options": {
                "a": "Defectos graves anteriores a la venta que hacen la cosa impropia para su uso o disminuyen de tal modo su valor que el comprador no la habría adquirido de haberlos conocido",
                "b": "Discrepancias estéticas leves visibles a simple vista",
                "c": "El disgusto personal de los familiares del comprador",
                "d": "El retraso de 2 horas en la entrega de las llaves"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "La prescripción liberatoria de las acciones ordinarias patrimoniales personales prescribe como regla general a los:",
              "options": {
                "a": "Cinco (5) años (Art. 1507 del Código Civil boliviano)",
                "b": "Diez (10) días hábiles",
                "c": "Veinte (20) años improrrogables",
                "d": "Un (1) año en todos los contratos"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "der-penal",
          "codigo": "DER-301",
          "siglaCompleta": "DER-301-15088: Derecho Penal y Procedimiento Penal – NM – A",
          "nombre": "Derecho Penal y Procedimiento Penal",
          "semestre": "Semestre V",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10556104: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En la dogmática penal clásica y finalista, ¿cuál es la definición analítica y secuencial del Delito?",
              "options": {
                "a": "Una conducta humana, típicamente antijurídica y culpable (atribuible a un sujeto punible)",
                "b": "Cualquier acto que cause disgusto a la autoridad policial",
                "c": "Un pecado moral sancionado por la sociedad civil",
                "d": "El incumplimiento de una obligación de pago dineraria civil"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "El principio universal 'Nullum crimen, nulla poena sine lege previa' (Principio de Legalidad) consagra que:",
              "options": {
                "a": "Nadie puede ser condenado por un acto u omisión que en el momento de cometerse no esté calificado como delito de manera expresa, previa y estricta en la ley penal vigente",
                "b": "El juez puede inventar delitos basándose en la costumbre del pueblo",
                "c": "Las leyes penales pueden crearse retroactivamente para castigar conductas pasadas",
                "d": "La policía puede aplicar castigos corporales a discreción"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué elemento subjetivo del tipo penal concurre cuando el autor conoce los elementos del hecho típico y quiere su realización voluntaria?",
              "options": {
                "a": "Dolo directo de primer grado",
                "b": "Culpa consciente o con representación",
                "c": "Preterintención no consumada",
                "d": "Caso fortuito o fuerza mayor"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "La 'Culpa' en el derecho penal se configura cuando el resultado lesivo no fue querido por el autor, pero se produjo a consecuencia de:",
              "options": {
                "a": "La infracción del deber objetivo de cuidado manifestada por negligencia, imprudencia o impericia",
                "b": "Un plan preconcebido y premeditado con alevosía",
                "c": "Un mandato de orden militar de un superior",
                "d": "La posesión de sustancias controladas en pequeñas dosis"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cuáles son los requisitos legales concurrentes para que proceda la causa de justificación de 'Legítima Defensa' (Art. 11 del Código Penal boliviano)?",
              "options": {
                "a": "Agresión ilegítima actual o inminente, necesidad racional del medio empleado para impedirla o repelerla, y falta de provocación suficiente por parte de quien se defiende",
                "b": "Venganza personal ejecutada 24 horas después de la ofensa",
                "c": "Disparar a una persona que huye con una fruta robada",
                "d": "Consentimiento de la víctima otorgado bajo tortura"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "El 'Estado de Necesidad' como causa de justificación eximente de pena se presenta cuando:",
              "options": {
                "a": "Se lesiona un bien jurídico menor para salvar otro bien jurídico de mayor o igual jerarquía ante un peligro inminente no causado por el sujeto y no evitable por otro medio",
                "b": "El autor no tiene dinero para pagar el alquiler de su casa",
                "c": "El conductor viaja a 180 km/h porque llega tarde a su trabajo",
                "d": "El acusado cometió el delito bajo los efectos del consumo voluntario de alcohol"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué es la 'Tentativa' punible en el iter criminis (camino del delito)?",
              "options": {
                "a": "Cuando el autor comienza la ejecución del delito mediante actos idóneos inequívocos, pero el resultado no se consuma por causas ajenas a su voluntad",
                "b": "Pensar en cometer un delito sentado en la sala de su casa",
                "c": "Comprar un boleto de avión para viajar de vacaciones",
                "d": "Desistir voluntaria y espontáneamente impidiendo el resultado lesivo"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "La diferencia entre 'Autor Material' y 'Cómplice' en la teoría del concurso de personas en el delito radica en que:",
              "options": {
                "a": "El autor tiene el dominio del hecho típico (directo o coautor); el cómplice presta una cooperación o ayuda secundaria no indispensable para la ejecución del delito",
                "b": "El cómplice siempre recibe mayor pena que el autor principal",
                "c": "El autor material nunca va a prisión en delitos patrimoniales",
                "d": "El cómplice es obligatoriamente pariente consanguíneo del imputado"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En el Código de Procedimiento Penal boliviano (Ley 1970), ¿cuál es la etapa procesal preliminar y preparatoria dirigida por el Fiscal de Materia?",
              "options": {
                "a": "Etapa Preparatoria (investigación preliminar y actos conclusivos para fundar la acusación o sobreseimiento)",
                "b": "Juicio Oral y Público de sentencias contradictorias",
                "c": "Recurso de Casación ante el Tribunal Supremo",
                "d": "Fase de ejecución de penas en régimen penitenciario"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué principio procesal penal establece que 'toda persona imputada se presume inocente mientras no se declare su culpabilidad en sentencia judicial ejecutoriada'?",
              "options": {
                "a": "Principio de Presunción de Inocencia (Art. 6 del CPP y Art. 116 de la CPE)",
                "b": "Principio de culpabilidad presunta",
                "c": "Principio de oportunidad reglada",
                "d": "Inquisitio generalis"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Cuáles son los dos riesgos procesales taxativos que justifican la imposición excepcional de la 'Detención Preventiva'?",
              "options": {
                "a": "Peligro de fuga y Peligro de obstaculización de la averiguación de la verdad",
                "b": "Ser desempleado y no tener vehículo particular",
                "c": "Haber nacido en otro departamento del país",
                "d": "Negarse a responder las preguntas del periodista en televisión"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Cuál es la sanción privativa de libertad máxima establecida en el Código Penal boliviano y la CPE?",
              "options": {
                "a": "Treinta (30) años de presidio sin derecho a indulto (para delitos como feminicidio, parricidio y traición a la patria)",
                "b": "Cadena perpetua revisable a los 25 años",
                "c": "Pena de muerte por fusilamiento militar",
                "d": "Cincuenta (50) años de reclusión en régimen cerrado"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "El delito de 'Feminicidio' incorporado por la Ley 348 sanciona:",
              "options": {
                "a": "La muerte de una mujer por el hecho de serlo (en situación de violencia intrafamiliar, odio, subordinación o discriminación) con 30 años de presidio sin indulto",
                "b": "Cualquier robo o estafa cometido contra una mujer",
                "c": "El impago de asistencia familiar a la esposa divorciada",
                "d": "La discusión verbal sin lesiones físicas entre cónyuges"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En el juicio oral, ¿qué principio procesal exige que el tribunal tome contacto directo y personal con los medios de prueba, los testigos, peritos y las partes?",
              "options": {
                "a": "Principio de Inmediación",
                "b": "Principio de Escrituración formal",
                "c": "Principio de Reserva absoluta de las actuaciones",
                "d": "Principio de Doble Instancia"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué es la 'Prueba Ilícita' en el procedimiento penal y qué efecto tiene la doctrina del fruto del árbol envenenado?",
              "options": {
                "a": "La prueba obtenida con vulneración de derechos o garantías fundamentales es nula de pleno derecho e inutilizable, al igual que las pruebas derivadas directamente de ella",
                "b": "Cualquier prueba presentada fuera del horario judicial de ventanilla",
                "c": "Una prueba admitida automáticamente sin objeción de la fiscalía",
                "d": "Un dictamen pericial emitido por perito extranjero"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿En qué consiste la salida alternativa de 'Procedimiento Abreviado' en el proceso penal boliviano?",
              "options": {
                "a": "El imputado reconoce voluntariamente su participación en el hecho y renuncia al juicio oral contradictorio a cambio de una pena consensuada entre fiscal, defensa y víctima",
                "b": "La absolución total del acusado sin pagar daños ni costas",
                "c": "Un juicio oral que dura solamente 15 minutos sin testigos",
                "d": "El traslado del juicio a un juzgado de conciliación civil"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué es el principio 'Non Bis In Idem' en el derecho penal material y procesal?",
              "options": {
                "a": "Nadie puede ser juzgado ni sancionado penalmente dos veces por el mismo hecho histórico ilícito que haya sido objeto de sentencia ejecutoriada",
                "b": "El fiscal debe presentar dos pruebas por cada acusación formulada",
                "c": "Las sentencias penales deben redactarse en dos ejemplares originales",
                "d": "El abogado defensor no puede cobrar honorarios dos veces"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "El delito de 'Prevaricato' tipificado en el Código Penal boliviano es cometido por:",
              "options": {
                "a": "Los jueces o magistrados que dictan resoluciones contrarias a la ley expresa invocando hechos falsos o leyes derogadas",
                "b": "Los testigos que mienten descaradamente en la audiencia de juicio",
                "c": "Los ciudadanos que no asisten a votar en las elecciones",
                "d": "Los policías que detienen a una persona en flagrancia delictiva"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La figura de la 'Flagrancia' delictiva se configura cuando:",
              "options": {
                "a": "El autor es sorprendido en el momento exacto de cometer el hecho delictivo o inmediatamente después con armas o instrumentos que demuestran su autoría",
                "b": "El delincuente confiesa un delito cometido hace 20 años",
                "c": "El fiscal recibe una denuncia anónima por correo postal",
                "d": "Se dicta mandamiento de aprehensión por rebeldía procesal"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Qué recurso extraordinario procede contra autos de vista dictados por las salas penales departamentales que sean contrarios a la doctrina sentada por otros tribunales?",
              "options": {
                "a": "Recurso de Casación ante la Sala Penal del Tribunal Supremo de Justicia",
                "b": "Recurso de Reposición con alternativa de apelación",
                "c": "Recurso jerárquico administrativo",
                "d": "Recurso de queja por negativa de fotocopias"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "der-lab",
          "codigo": "DER-305",
          "siglaCompleta": "DER-305-15120: Derecho Laboral y Seguridad Social – NM – A",
          "nombre": "Derecho Laboral y Seguridad Social",
          "semestre": "Semestre VI",
          "sede": "Sede Oruro",
          "grupo": "A",
          "examen": "1P-1-2026-10556105: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "El principio protector del Derecho Laboral boliviano que establece que en caso de duda sobre el alcance o sentido de una norma debe aplicarse la más favorable al trabajador se conoce como:",
              "options": {
                "a": "Principio 'In Dubio Pro Operario'",
                "b": "Pacta Sunt Servanda civil",
                "c": "Principio de primacía de la rentabilidad empresarial",
                "d": "Principio de libre contratación de Smith"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "Según la Ley General del Trabajo (LGT) de Bolivia, la jornada laboral máxima legal para varones adultos en trabajos diurnos ordinarios es de:",
              "options": {
                "a": "8 horas diarias y 48 horas semanales",
                "b": "10 horas diarias y 60 horas semanales",
                "c": "6 horas diarias y 36 horas semanales",
                "d": "12 horas continuas con descanso semanal rotatorio"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "Para las mujeres trabajadoras, la jornada laboral diurna establecida por el Artículo 46 de la LGT boliviana es de un máximo de:",
              "options": {
                "a": "40 horas semanales y 8 horas diarias",
                "b": "48 horas semanales igual al varón",
                "c": "30 horas semanales exclusivamente",
                "d": "55 horas semanales acumuladas"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "El principio de 'Irrenunciabilidad de los Derechos Laborales' (Art. 48.III de la CPE y Art. 4 de la LGT) determina que:",
              "options": {
                "a": "Los derechos y beneficios laborales reconocidos a favor de los trabajadores son irrenunciables, siendo nula cualquier convención o renuncia pactada en contrario",
                "b": "El trabajador puede renunciar a sus vacaciones a cambio de un regalo del jefe",
                "c": "El salario puede ser pagado con mercaderías de la fábrica a libre acuerdo",
                "d": "Los sindicatos pueden autorizar rebajas de sueldo por debajo del salario mínimo"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "El principio de 'Primacía de la Realidad' en las relaciones de trabajo postula que:",
              "options": {
                "a": "En caso de discrepancia entre lo que ocurre en los hechos prácticos y lo que consta en los documentos escritos o contratos, prevalece la realidad de los hechos",
                "b": "Lo que está escrito en el contrato privado prevalece sobre cualquier evidencia",
                "c": "El empleador decide unilateralmente qué hechos son reales",
                "d": "Los contratos verbales carecen por completo de valor legal"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Cuáles son los tres elementos concurrentes que caracterizan la existencia de una 'Relación Laboral' subordinada (dependiente)?",
              "options": {
                "a": "Prestación personal del servicio, dependencia o subordinación jurídica y continua, y percepción de una remuneración o salario",
                "b": "Facturación por servicios profesionales, horario libre y oficina propia",
                "c": "Inversión de capital propio, asunción de riesgos comerciales y subcontratación",
                "d": "Título universitario, colegiatura profesional y carnet gremial"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En el régimen laboral boliviano, el período de prueba máximo permitido legalmente en un contrato de trabajo por tiempo indefinido es de:",
              "options": {
                "a": "Tres (3) meses continuos",
                "b": "Un (1) año",
                "c": "Seis (6) meses con prórroga automática",
                "d": "Quince (15) días calendario"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué beneficio social indemnizatorio equivale a un sueldo por cada año continuo de trabajo en caso de despido intempestivo o retiro voluntario tras superar el tiempo mínimo legal?",
              "options": {
                "a": "Indemnización por tiempo de servicios",
                "b": "Subsidio de lactancia pre y postnatal",
                "c": "Prima anual de utilidades",
                "d": "Bono de transporte público"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "El 'Desahucio' laboral en Bolivia equivale a:",
              "options": {
                "a": "El pago de tres (3) meses de sueldo en caso de despido intempestivo e injustificado del trabajador sin preaviso legal",
                "b": "El desalojo judicial de la vivienda por impago de alquiler",
                "c": "Una sanción disciplinaria de descuento del 10% del haber mensual",
                "d": "El pago de un sueldo anual complementario de fin de año"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿A cuánto equivale el recargo legal por concepto de 'Horas Extraordinarias' trabajadas en días hábiles comunes según la legislación boliviana?",
              "options": {
                "a": "Con el 100% de recargo sobre el valor de la hora normal ordinaria (el doble)",
                "b": "Con un recargo del 10%",
                "c": "Sin recargo alguno (pago simple)",
                "d": "Con el 300% de recargo obligatorio"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "Las horas trabajadas en días domingo o feriados oficiales declarados por el Estado deben remunerarse con un recargo de:",
              "options": {
                "a": "Triple remuneración (el salario correspondiente al feriado más el 100% adicional por la labor)",
                "b": "Pago ordinario sin bonificación",
                "c": "Un día de descanso compensatorio exclusivamente",
                "d": "Un vale de consumo en supermercado"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "El 'Aguinaldo de Navidad' en Bolivia se calcula sobre la base de:",
              "options": {
                "a": "Un mes de sueldo completo calculado sobre el promedio del salario percibido en el último trimestre trabajado antes de fin de año",
                "b": "La mitad de un salario mínimo nacional",
                "c": "El 10% de las ganancias brutas de la fábrica",
                "d": "Un monto fijo de 100 dólares estadounidenses"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En el régimen de descanso vacacional anual pagado en Bolivia, a un trabajador con antigüedad de 1 a 5 años le corresponden anualmente:",
              "options": {
                "a": "15 días hábiles de vacación remunerada",
                "b": "20 días hábiles",
                "c": "30 días hábiles",
                "d": "5 días hábiles solamente"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "A un trabajador con una antigüedad de 10 o más años de servicios continuos le corresponden legalmente de vacación anual:",
              "options": {
                "a": "30 días hábiles de descanso remunerado",
                "b": "15 días hábiles",
                "c": "20 días hábiles",
                "d": "45 días hábiles"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "El 'Bono de Antigüedad' obligatorio según el D.S. 21060 se calcula tomando como base:",
              "options": {
                "a": "Tres salarios mínimos nacionales vigentes por el porcentaje de la escala según los años de servicio",
                "b": "El sueldo total bruto ganado",
                "c": "Un salario mínimo nacional único sin escala",
                "d": "El precio promedio del estaño en la Bolsa de Metales de Londres"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué causal legal taxativa de despido justificado sin derecho a indemnización ni desahucio contempla el Artículo 16 de la LGT?",
              "options": {
                "a": "Perjuicio material intencional en máquinas o productos, revelación de secretos industriales, inasistencia injustificada de más de 6 días continuos, o robo y hurto comprobado",
                "b": "Enfermarse de gripe por dos días con certificado médico",
                "c": "Afiliarse al sindicato de trabajadores de la empresa",
                "d": "Tener más de 60 años de edad"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿En qué consiste el 'Fuero Sindical' reconocido constitucionalmente a los dirigentes de los trabajadores?",
              "options": {
                "a": "La garantía de no ser despedidos, transferidos de puesto ni desmejorados en sus condiciones laborales sin previo proceso de desafuero judicial ante juez del trabajo",
                "b": "La inmunidad frente a delitos de narcotráfico y homicidio",
                "c": "El cobro del triple de salario que los demás operarios",
                "d": "El poder de cerrar la fábrica sin autorización de nadie"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "En el régimen de seguridad social a corto plazo (cajas de salud), ¿a cuánto asciende el aporte patronal mensual obligatorio para la cobertura médica del trabajador y sus beneficiarios?",
              "options": {
                "a": "10% del total ganado del trabajador a cargo exclusivo del empleador",
                "b": "12.71% deducido del sueldo del trabajador",
                "c": "1% voluntario",
                "d": "50% compartido por mitades"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La inamovilidad laboral de las mujeres en periodo de gestación y de los progenitores trabajadores rige desde:",
              "options": {
                "a": "La concepción hasta que el hijo o hija cumpla un (1) año de edad, no pudiendo ser despedidos de sus fuentes de empleo",
                "b": "El día del parto hasta los tres meses posteriores",
                "c": "Desde los 5 años del menor de edad",
                "d": "Solo durante la semana de descanso maternal"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El descanso por maternidad (prenatal y postnatal) remunerado legalmente en Bolivia comprende un periodo de:",
              "options": {
                "a": "90 días continuos (45 días antes del parto y 45 días después del parto)",
                "b": "30 días continuos",
                "c": "6 meses pagados al 50%",
                "d": "15 días posteriores al nacimiento"
              },
              "correct": "a"
            }
          ]
        }
      ]
    },
    {
      "id": "psicologia",
      "nombre": "Psicología",
      "facultad": "Facultad de Ciencias Sociales y Humanísticas",
      "icono": "psychology",
      "descripcion": "Evaluación, diagnóstico, psicoterapia e intervención psicosocial en ámbitos clínico, educativo y organizacional.",
      "duracion": "5 años (10 semestres)",
      "subjects": [
        {
          "id": "psi-intro",
          "codigo": "PSI-101",
          "siglaCompleta": "PSI-101-16010: Introducción a la Psicología y Procesos Cognitivos – NM – A",
          "nombre": "Introducción a la Psicología y Procesos Cognitivos",
          "semestre": "Semestre I",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10665101: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Quién es considerado históricamente el padre de la psicología científica experimental tras fundar el primer laboratorio de psicología en Leipzig (1879)?",
              "options": {
                "a": "Wilhelm Wundt",
                "b": "Sigmund Freud",
                "c": "John B. Watson",
                "d": "Jean Piaget"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "En los experimentos de condicionamiento clásico de Iván Pávlov con perros, ¿qué representaba el sonido de la campana antes del condicionamiento y tras el entrenamiento respectivamente?",
              "options": {
                "a": "Estímulo Neutro (EN) antes, y Estímulo Condicionado (EC) después",
                "b": "Estímulo Incondicionado (EI) siempre",
                "c": "Respuesta Incondicionada refleja",
                "d": "Refuerzo secundario negativo"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué escuela psicológica enfatizó el estudio de la experiencia consciente organizada mediante el lema 'El todo es más que la suma de sus partes'?",
              "options": {
                "a": "Psicología de la Gestalt (Wertheimer, Köhler, Koffka)",
                "b": "Conductismo radical de Skinner",
                "c": "Estructuralismo anatómico",
                "d": "Psicoanálisis pulsional"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En el condicionamiento operante de B.F. Skinner, ¿cómo se define el 'Refuerzo Negativo'?",
              "options": {
                "a": "El incremento de la probabilidad de una conducta tras la retirada o eliminación de un estímulo aversivo o desagradable",
                "b": "La aplicación de un castigo físico doloroso para extinguir una conducta",
                "c": "La indiferencia total ante una rabieta infantil",
                "d": "La privación de alimentos durante 48 horas"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "En el modelo multialmacén de memoria de Atkinson y Shiffrin, ¿cuál es la capacidad aproximada de la memoria de trabajo a corto plazo según George Miller?",
              "options": {
                "a": "7 ± 2 elementos de información (chunks o bloques)",
                "b": "100 elementos simultáneos",
                "c": "Exactamente 1 elemento",
                "d": "Capacidad ilimitada e imperecedera"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué tipo de memoria declarativa a largo plazo almacena recuerdos de eventos autobiográficos y vivencias personales contextualizadas en tiempo y espacio?",
              "options": {
                "a": "Memoria Episódica",
                "b": "Memoria Semántica de significados generales",
                "c": "Memoria Procedimental de hábitos motores",
                "d": "Memoria Priming perceptual"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "En la teoría del desarrollo cognitivo de Jean Piaget, ¿qué etapa comprende aproximadamente desde los 2 hasta los 7 años, caracterizada por el pensamiento simbólico y egocentrismo?",
              "options": {
                "a": "Etapa Preoperacional",
                "b": "Etapa Sensoriomotriz",
                "c": "Etapa de Operaciones Concretas",
                "d": "Etapa de Operaciones Formales abstractas"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿A qué edad adquiere el niño el concepto de 'Conservación de la materia' (volumen y masa de líquidos en recipientes de diferente forma) según Piaget?",
              "options": {
                "a": "En la etapa de las Operaciones Concretas (aproximadamente entre los 7 y 11 años)",
                "b": "En la etapa sensoriomotora a los 6 meses",
                "c": "A los 18 años con la mayoría de edad",
                "d": "En el periodo neonatal inmediato"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La 'Atención Selectiva' se define en psicología cognitiva como la capacidad de:",
              "options": {
                "a": "Focalizar la conciencia y los recursos cognitivos en un estímulo relevante específico mientras se ignoran los distractores irrelevantes (efecto cóctel)",
                "b": "Prestar atención a todos los ruidos del planeta simultáneamente",
                "c": "Dormir profundamente sin despertar ante ruidos intensos",
                "d": "Olvidar los traumas infantiles de forma deliberada"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué teoría de la emoción postula que la experiencia consciente emocional es el resultado directo de la percepción subjetiva de los cambios fisiológicos corporales periféricos (lloro, luego estoy triste)?",
              "options": {
                "a": "Teoría de James-Lange",
                "b": "Teoría de Cannon-Bard talámica",
                "c": "Teoría bifactorial de Schachter-Singer",
                "d": "Teoría del feedback facial de Ekman"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En el psicoanálisis de Sigmund Freud, ¿cuál de las tres instancias psíquicas opera bajo el 'Principio del Placer' buscando gratificación inmediata de los impulsos instintivos?",
              "options": {
                "a": "El Ello (Id)",
                "b": "El Yo (Ego)",
                "c": "El Superyó (Superego)",
                "d": "El Ideal del Yo consciente"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "El mecanismo de defensa freudiano mediante el cual impulsos o deseos inconscientes inaceptables son canalizados hacia actividades socialmente productivas y valoradas (como el arte o la ciencia) se denomina:",
              "options": {
                "a": "Sublimación",
                "b": "Represión",
                "c": "Proyección paranoide",
                "d": "Regresión psicosexual"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué psicólogo humanista postuló la célebre 'Pirámide de Necesidades Humanas' coronada por la Necesidad de Autorrealización?",
              "options": {
                "a": "Abraham Maslow",
                "b": "Carl Rogers",
                "c": "Viktor Frankl",
                "d": "Erich Fromm"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "En los experimentos de muñeco Bobo de Albert Bandura, se demostró la importancia fundamental en el aprendizaje humano de:",
              "options": {
                "a": "El Aprendizaje Vicario u Observacional (modelado de conductas por imitación sin necesidad de refuerzo directo)",
                "b": "La administración de descargas eléctricas para moldear conducta",
                "c": "La privación sensorial estricta",
                "d": "La hipnosis regresiva clínica"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué fenómeno perceptual gestáltico describe la tendencia a percibir figuras incompletas como unidades coherentes y cerradas?",
              "options": {
                "a": "Ley de Cierre o Clausura",
                "b": "Ley de Proximidad",
                "c": "Ley de Semejanza",
                "d": "Ley de Continuidad lineal"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "En el modelo de inteligencias múltiples de Howard Gardner, la capacidad de discernir y responder adecuadamente a los estados de ánimo, motivaciones y deseos de los demás se denomina:",
              "options": {
                "a": "Inteligencia Interpersonal",
                "b": "Inteligencia Intrapersonal",
                "c": "Inteligencia Lógico-Matemática",
                "d": "Inteligencia Cinestésico-Corporal"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "La disonancia cognitiva, investigada por Leon Festinger, se experimenta cuando:",
              "options": {
                "a": "Una persona mantiene simultáneamente dos creencias o cogniciones contradictorias, o actúa en contra de sus propios valores, generando malestar psicológico",
                "b": "Se escucha música clásica a volumen excesivo",
                "c": "Se padece de amnesia retrógrada total",
                "d": "Dos personas hablan a la vez en una reunión social"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué ley psicofísica formulada por Weber y Fechner relaciona la intensidad de un estímulo físico con la magnitud de la sensación percibida?",
              "options": {
                "a": "La sensación crece proporcionalmente al logaritmo de la intensidad del estímulo físico (Ley de Weber-Fechner)",
                "b": "A mayor calor, menor frecuencia de parpadeo",
                "c": "La percepción visual depende exclusivamente del color verde",
                "d": "Todos los estímulos sensoriales tienen el mismo umbral absoluto de cero"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "¿Cómo definió Lev Vygotsky la 'Zona de Desarrollo Próximo' (ZDP)?",
              "options": {
                "a": "La distancia entre el nivel real de desarrollo determinado por la capacidad de resolver un problema independientemente y el nivel de desarrollo potencial con guía de un adulto o par competente",
                "b": "El espacio físico del aula de clase escolar",
                "c": "El lóbulo temporal del hemisferio izquierdo",
                "d": "La fase de pubertad biológica temprana"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El sesgo de confirmación en el razonamiento y toma de decisiones consiste en:",
              "options": {
                "a": "La tendencia a buscar, interpretar y recordar información de manera que confirme las creencias o hipótesis previas, descartando la evidencia contraria",
                "b": "Confirmar siempre las reservas de pasajes de avión por duplicado",
                "c": "Creer que todo lo publicado en libros es falso",
                "d": "La habilidad para memorizar números telefónicos aleatorios"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "psi-patol",
          "codigo": "PSI-204",
          "siglaCompleta": "PSI-204-16045: Psicopatología y Diagnóstico Clínico – NM – A",
          "nombre": "Psicopatología y Diagnóstico Clínico",
          "semestre": "Semestre IV",
          "sede": "Sede Cochabamba",
          "grupo": "A",
          "examen": "1P-1-2026-10665102: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Según los criterios diagnósticos del DSM-5, para diagnosticar un Episodio Depresivo Mayor se requiere la presencia durante al menos 2 semanas de un mínimo de 5 síntomas, donde al menos uno debe ser obligatoriamente:",
              "options": {
                "a": "Estado de ánimo deprimido la mayor parte del día o anhedonia (pérdida de interés o placer)",
                "b": "Alucinaciones auditivas de comando",
                "c": "Ataques de pánico nocturnos con sudoración",
                "d": "Conductas repetitivas de lavado de manos compulsivo"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la diferencia diagnóstica fundamental entre el Trastorno Bipolar Tipo I y el Trastorno Bipolar Tipo II según el DSM-5?",
              "options": {
                "a": "El Bipolar I requiere al menos un episodio maníaco completo (que puede o no cursar con psicosis u hospitalización); el Bipolar II requiere al menos un episodio hipomaníaco y un episodio depresivo mayor, sin ningún episodio maníaco",
                "b": "El Bipolar I solo se presenta en adultos mayores de 60 años",
                "c": "El Bipolar II se cura completamente con terapia de hierbas",
                "d": "El Bipolar I nunca presenta fases depresivas"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué caracteriza a una 'Alucinación' en el examen de las funciones cognitivas y perceptivas frente a una 'Ilusión'?",
              "options": {
                "a": "La alucinación es una percepción sensorial sin la presencia de un estímulo u objeto externo real; la ilusión es una interpretación errónea o deformada de un estímulo externo real existente",
                "b": "La ilusión solo ocurre durante el sueño MOR",
                "c": "La alucinación siempre es agradable y gratificante",
                "d": "No existe distinción semiológica entre ambos términos"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "En la esquizofrenia, ¿cuáles de los siguientes síntomas se consideran típicamente 'Síntomas Positivos'?",
              "options": {
                "a": "Delirios, alucinaciones (frecuentemente auditivas), pensamiento y habla desorganizados y conducta motora desorganizada o catatónica",
                "b": "Aplanamiento afectivo, abulia, alogia y anhedonia social",
                "c": "Elevación del coeficiente intelectual y sociabilidad extrema",
                "d": "Temblores parkinsonianos inducidos por medicación"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Cómo se clasifica un pensamiento falso, fijo e inamovible, que no cede a la argumentación lógica razonable y que no se explica por la cultura ni religión del paciente?",
              "options": {
                "a": "Idea Delirante (Delirio)",
                "b": "Idea Obsesiva intrusiva egodistónica",
                "c": "Pensamiento mágico infantil",
                "d": "Preocupación hipocondríaca leve"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "En el Trastorno Obsesivo-Compulsivo (TOC), ¿cuál es la relación funcional entre las 'Obsesiones' y las 'Compulsiones'?",
              "options": {
                "a": "Las obsesiones son pensamientos o imágenes intrusivas no deseadas que causan ansiedad marcada; las compulsiones son actos repetitivos o mentales realizados para reducir dicha ansiedad según reglas rígidas",
                "b": "Las compulsiones siempre provocan el delirio de persecución",
                "c": "Las obsesiones solo ocurren los fines de semana",
                "d": "Son dos trastornos psiquiátricos independientes que nunca coexisten"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué criterio temporal de duración de los síntomas exige el DSM-5 para diagnosticar un Trastorno de Estrés Postraumático (TEPT) tras la exposición a un evento traumático?",
              "options": {
                "a": "Más de 1 mes continuo de persistencia de síntomas intrusivos, evitación y alteraciones del estado de ánimo (si dura menos de un mes se denomina Trastorno de Estrés Agudo)",
                "b": "Exactamente 24 horas",
                "c": "Diez años posteriores al hecho",
                "d": "Menos de una semana"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "El Trastorno de Ansiedad Generalizada (TAG) se caracteriza en el plano psicopatológico por:",
              "options": {
                "a": "Ansiedad y preocupación excesiva y persistente (expectación aprensiva) sobre una amplia gama de acontecimientos de la vida diaria durante al menos 6 meses, difícil de controlar",
                "b": "Miedo terrorífico circunscrito exclusivamente a los perros grandes",
                "c": "Ataques de pánico espontáneos de 5 minutos seguidos de euforia",
                "d": "Falsos recuerdos de haber sido raptado por seres mitológicos"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "En la anorexia nerviosa, el síntoma psicopatológico nuclear sobre la percepción de la propia anatomía corporal se denomina:",
              "options": {
                "a": "Dismorfofobia o alteración severa de la imagen corporal (percepción distorsionada del peso y silueta corporal)",
                "b": "Acinetopsia visual selectiva",
                "c": "Somatoparafrenia del hemicuerpo izquierdo",
                "d": "Prosopagnosia facial selectiva"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿A qué grupo o 'Cluster' de los trastornos de la personalidad del DSM-5 pertenecen el Trastorno Límite (Borderline), el Antisocial, el Histriónico y el Narcisista?",
              "options": {
                "a": "Cluster B (Dramáticos, emocionales, erráticos o impulsivos)",
                "b": "Cluster A (Raros, excéntricos o desconfiados)",
                "c": "Cluster C (Ansiosos o temerosos)",
                "d": "Cluster D orgánico cerebeloso"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "El Trastorno de Personalidad Esquizoide (Cluster A) se manifiesta típicamente por:",
              "options": {
                "a": "Patrón dominante de desapego en las relaciones sociales, preferencia casi exclusiva por actividades solitarias y escasa expresión emocional",
                "b": "Extroversión histriónica y seducción desmedida",
                "c": "Comportamientos delictivos y agresión física sistemática",
                "d": "Terror fóbico a los espacios abiertos"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "En el examen del estado mental (psicometría clínica), la 'Ecolalia' consiste en:",
              "options": {
                "a": "La repetición involuntaria, espasmódica o automática de las últimas palabras o frases pronunciadas por otra persona",
                "b": "La incapacidad completa de emitir sonidos por laringitis",
                "c": "La invención de palabras nuevas incomprensibles (neologismos)",
                "d": "La lectura de izquierda a derecha invertida"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué caracteriza a un 'Ataque de Pánico' (Crisis de Angustia)?",
              "options": {
                "a": "Aparición repentina de miedo o malestar intenso que alcanza su máxima expresión en minutos, acompañado de palpitaciones, sudoración, temblor, disnea y miedo a morir o perder el control",
                "b": "Un sueño erótico vivido durante la siesta",
                "c": "Cefalea tensional continua de 3 meses de duración",
                "d": "Pérdida de la memoria de la infancia"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La 'Fuga de Ideas' es una alteración psicopatológica del curso del pensamiento frecuente en la manía que consiste en:",
              "options": {
                "a": "Aceleración extrema del pensamiento (taquipsiquia) donde el discurso salta continuamente de un tema a otro por asociaciones superficiales o rimas",
                "b": "Paralización total del flujo de pensamientos durante horas (bloqueo)",
                "c": "La creencia de que extraterrestres extraen pensamientos del cerebro",
                "d": "El olvido de las tablas de multiplicar"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "En la evaluación del riesgo suicida, ¿cuál de los siguientes factores se asocia con mayor gravedad e inminencia del acto?",
              "options": {
                "a": "Presencia de un plan suicida estructurado, letalidad del método disponible, desesperanza marcada e intentos previos de autolisis",
                "b": "Vivir con una familia numerosa y solidaria",
                "c": "Estar en tratamiento psicológico activo de mantenimiento",
                "d": "Tener proyectos laborales a largo plazo"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "La 'Agorafobia' se define clínicamente como el miedo o ansiedad intensa ante:",
              "options": {
                "a": "Situaciones de las cuales sería difícil escapar o pedir ayuda en caso de sufrir síntomas de pánico (transporte público, espacios abiertos, recintos cerrados o multitudes)",
                "b": "Objetos afilados como cuchillos y agujas",
                "c": "Microorganismos y bacterias en los alimentos",
                "d": "Sonidos agudos de sirenas de ambulancia"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "¿Qué trastorno neurocognitivo mayor se caracteriza por pérdida progresiva e insidiosa de la memoria episódica reciente, afasia, apraxia y agnosia en el adulto mayor?",
              "options": {
                "a": "Enfermedad de Alzheimer",
                "b": "Demencia por cuerpos de Lewy con alucinaciones precoces",
                "c": "Corea de Huntington",
                "d": "Parálisis supranuclear progresiva"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "El Trastorno de Síntomas Somáticos (antes somatomorfo) se caracteriza clínicamente por:",
              "options": {
                "a": "Uno o más síntomas físicos somáticos angustiantes acompañados de pensamientos, sentimientos o conductas excesivas y desproporcionadas en relación con la gravedad de los mismos",
                "b": "Fingimiento voluntario y consciente de una enfermedad para cobrar un seguro laboral",
                "c": "Infección viral comprobada por examen serológico",
                "d": "Alergia cutánea inducida por polen en primavera"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La diferencia entre 'Simulación' y 'Trastorno Facticio' (Síndrome de Münchhausen) radica en que:",
              "options": {
                "a": "En la simulación el sujeto produce síntomas falsos motivado por incentivos externos tangibles (dinero, evadir prisión); en el facticio la motivación es asumir el rol de enfermo sin beneficio material",
                "b": "El trastorno facticio nunca implica engaño",
                "c": "La simulación siempre responde a un gen autosómico recesivo",
                "d": "Son idénticos y se tratan con antibióticos"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "El 'Delirium' (Síndrome Confusional Agudo) se diferencia de la Demencia primordialmente por:",
              "options": {
                "a": "Su inicio brusco y agudo (horas o días), curso fluctuante a lo largo de la jornada y alteración primordial de la atención y el nivel de conciencia, frecuentemente reversible",
                "b": "Su inicio lento e inadvertido a lo largo de 10 años",
                "c": "La ausencia total de causas orgánicas o médicas",
                "d": "El mantenimiento perfecto de la atención sostenida"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "psi-neuro",
          "codigo": "PSI-301",
          "siglaCompleta": "PSI-301-16080: Neuropsicología y Psicofisiología – NM – A",
          "nombre": "Neuropsicología y Psicofisiología",
          "semestre": "Semestre V",
          "sede": "Sede La Paz",
          "grupo": "A",
          "examen": "1P-1-2026-10665103: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "¿Qué función cognitiva superior se localiza prioritariamente en la corteza prefrontal dorsolateral?",
              "options": {
                "a": "Funciones ejecutivas: planificación, memoria de trabajo, flexibilidad cognitiva, razonamiento abstracto y resolución de problemas",
                "b": "Percepción de los colores en el espectro visible",
                "c": "Regulación del equilibrio vestibular estático",
                "d": "Auscultación de ruidos respiratorios"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "La lesión del área de Broca (áreas 44 y 45 de Brodmann en el hemisferio izquierdo) produce típicamente:",
              "options": {
                "a": "Afasia motora no fluente: habla no fluida, trabajosa y telegráfica, pero con preservación relativa de la comprensión auditiva",
                "b": "Afasia sensorial fluente con jergafasia y grave alteración de la comprensión",
                "c": "Pérdida total del sentido del gusto en la lengua",
                "d": "Ceguera completa para los objetos en movimiento"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "¿Qué tipo de afasia se produce tras la lesión del área de Wernicke (área 22 de Brodmann en el lóbulo temporal superior izquierdo)?",
              "options": {
                "a": "Afasia sensorial fluente: producción verbal abundante pero carente de sentido, con parafasias fonémicas/semánticas y grave deterioro de la comprensión del lenguaje",
                "b": "Mutismo absoluto con comprensión intacta",
                "c": "Parálisis de las cuerdas vocales laríngeas",
                "d": "Imposibilidad de deglutir alimentos sólidos"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "¿Qué estructura diencefálica del sistema límbico es fundamental para la consolidación de nuevos recuerdos declarativos de corto a largo plazo (caso emblemático H.M.)?",
              "options": {
                "a": "El Hipocampo y el giro parahipocámpico",
                "b": "El cuerpo calloso",
                "c": "El lóbulo de la ínsula",
                "d": "La sustancia negra compacta"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "La 'Amígdala' cerebral desempeña un rol biológico crucial en:",
              "options": {
                "a": "El procesamiento, aprendizaje y respuesta del condicionamiento del miedo, detección de amenazas y modulación emocional",
                "b": "La secreción de bilis hacia el duodeno",
                "c": "La filtración de toxinas en la barrera hematoencefálica",
                "d": "El cálculo aritmético de divisiones complejas"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "¿Qué neurotransmisor dopaminérgico de la vía mesolímbica está estrechamente vinculado al sistema de recompensa cerebral, motivación y adicciones?",
              "options": {
                "a": "Dopamina",
                "b": "Ácido gamma-aminobutírico (GABA)",
                "c": "Glicina medular",
                "d": "Histamina cerebral"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "El principal neurotransmisor excitatorio del sistema nervioso central en mamíferos es:",
              "options": {
                "a": "Glutamato",
                "b": "GABA",
                "c": "Serotonina",
                "d": "Melatonina"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "El principal neurotransmisor inhibitorio en el cerebro humano adulto que hiperpolariza la membrana neuronal es:",
              "options": {
                "a": "GABA (Ácido gamma-aminobutírico)",
                "b": "Adrenalina",
                "c": "Glutamato",
                "d": "Acetilcolina nicotínica"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "La 'Prosopagnosia' es una agnosia visual específica que consiste en:",
              "options": {
                "a": "La incapacidad de reconocer rostros familiares previamente conocidos e incluso el propio rostro en el espejo (lesión en el giro fusiforme bilateral)",
                "b": "La pérdida de visión de la mitad derecha del campo visual",
                "c": "La fobia a mirar a los ojos a las personas",
                "d": "La incapacidad de leer palabras escritas a mano"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "El síndrome de 'Negligencia Hemiespacial' (heminegligencia) ocurre con mayor frecuencia y severidad tras lesiones de:",
              "options": {
                "a": "La corteza parietal posterior derecha (el paciente ignora o desatiende el lado izquierdo de su cuerpo y del espacio visual)",
                "b": "El cerebelo anterior izquierdo",
                "c": "El bulbo raquídeo dorsal",
                "d": "El nervio olfatorio ipsilateral"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Qué famoso caso histórico de neuropsicología evidenció por primera vez el papel de la corteza orbitofrontal y ventromedial en la personalidad y juicio moral tras un accidente con una barra de hierro?",
              "options": {
                "a": "El caso de Phineas Gage (1848)",
                "b": "El paciente Tan (Leborgne) de Broca",
                "c": "El caso del pequeño Albert de Watson",
                "d": "El paciente H.M. de Scoville"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "La 'Apraxia Ideomotora' se define clínicamente como:",
              "options": {
                "a": "La incapacidad de ejecutar gestos y movimientos motores propositivos coordinados a la orden o por imitación, en ausencia de paresia o parálisis muscular",
                "b": "La pérdida de sensibilidad al pinchazo en la mano",
                "c": "La inflamación articular de los dedos pulgares",
                "d": "La torpeza provocada por el consumo de sedantes"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "¿Qué función tiene el Fascículo Arqueado en el modelo clásico de lenguaje de Wernicke-Geschwind?",
              "options": {
                "a": "Conectar bidireccionalmente el área temporal de Wernicke con el área frontal de Broca; su lesión genera afasia de conducción (alteración de la repetición)",
                "b": "Conectar ambos hemisferios a través del tálamo",
                "c": "Inervar los músculos de la lengua vía trigémino",
                "d": "Transmitir las señales auditivas desde la cóclea"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "La 'Plasticidad Cerebral' (neuroplasticidad) describe la capacidad del sistema nervioso para:",
              "options": {
                "a": "Modificar su estructura funcional y conexiones sinápticas en respuesta a la experiencia, aprendizaje o tras una lesión neurológica",
                "b": "Endurecerse como plástico sintético para resistir golpes",
                "c": "Dividirse en dos cerebros independientes a los 40 años",
                "d": "Evitar la muerte neuronal sin consumir oxígeno"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "¿Qué estructura del tronco encefálico contiene las neuronas que sintetizan la mayor parte de la Noradrenalina cerebral?",
              "options": {
                "a": "Locus Coeruleus (núcleo azul)",
                "b": "Núcleos del Rafe serotoninérgicos",
                "c": "Sustancia gris periacueductal",
                "d": "Oliva bulbar inferior"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "Los Núcleos del Rafe situados en el tallo cerebral son la principal fuente de síntesis del neurotransmisor:",
              "options": {
                "a": "Serotonina (5-HT)",
                "b": "Acetilcolina",
                "c": "Ácido glutámico",
                "d": "Endorfina beta"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "El Test de Clasificación de Tarjetas de Wisconsin (WCST) es un instrumento neuropsicológico ampliamente utilizado para evaluar:",
              "options": {
                "a": "Flexibilidad cognitiva, perseveración, formación de conceptos abstractos y función ejecutiva frontal",
                "b": "La agudeza visual estereoscópica",
                "c": "La velocidad de conducción del nervio ciático",
                "d": "La memoria fotográfica de caras de animales"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué prueba neuropsicológica clásica mide la inhibición de respuestas automáticas y atención selectiva mediante la interferencia de palabras coloreadas?",
              "options": {
                "a": "Efecto Stroop (Test de Colores y Palabras de Stroop)",
                "b": "Test de la Figura Compleja de Rey-Osterrieth",
                "c": "Mini-Mental State Examination (MMSE)",
                "d": "Test de Retención Visual de Benton"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "La pérdida de memoria para los acontecimientos ocurridos con posterioridad a una lesión cerebral (incapacidad para formar nuevos recuerdos) se denomina:",
              "options": {
                "a": "Amnesia Anterógrada",
                "b": "Amnesia Retrógrada",
                "c": "Amnesia Lacunar post-traumática leve",
                "d": "Hipermnesia afectiva"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "En el lóbulo parietal se ubica la corteza somatosensorial primaria (giro postcentral), la cual representa la sensibilidad táctil corporal mediante el mapa somatotópico conocido como:",
              "options": {
                "a": "Homúnculo sensorial de Penfield",
                "b": "Polígono de Willis",
                "c": "Círculo de Papez",
                "d": "Árbol de la vida de Purkinje"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "psi-clinica",
          "codigo": "PSI-304",
          "siglaCompleta": "PSI-304-16115: Psicología Clínica y Psicoterapia – NM – A",
          "nombre": "Psicología Clínica y Psicoterapia",
          "semestre": "Semestre VI",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10665104: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "En la Terapia Cognitivo-Conductual (TCC) de Aaron Beck, la 'Tríada Cognitiva' de la depresión consiste en una visión negativa sistemática sobre:",
              "options": {
                "a": "Uno mismo, el mundo (experiencias) y el futuro",
                "b": "Los padres, la escuela y el trabajo",
                "c": "El dinero, la política y la religión",
                "d": "El cuerpo físico, la dieta y el clima"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Qué técnica cognitiva central de la TCC consiste en identificar, debatir y contrastar con evidencia empírica las distorsiones cognitivas y pensamientos automáticos irracionales del paciente?",
              "options": {
                "a": "Reestructuración Cognitiva (mediante el diálogo socrático)",
                "b": "Desensibilización sistemática pura en vivo",
                "c": "Asociación libre bajo diván freudiano",
                "d": "Inundación emocional forzada"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "En la Terapia de Aceptación y Compromiso (ACT) de Steven Hayes, ¿cuál es el objetivo terapéutico fundamental?",
              "options": {
                "a": "Aumentar la flexibilidad psicológica mediante la aceptación de pensamientos y emociones difíciles y el compromiso con acciones basadas en valores personales",
                "b": "Eliminar de raíz y para siempre todo pensamiento triste",
                "c": "Convencer al paciente de que sus problemas no existen",
                "d": "Descubrir fijaciones psicosexuales de la etapa anal"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "La 'Alianza Terapéutica' descrita por Edward Bordin está compuesta por tres elementos interactivos esenciales:",
              "options": {
                "a": "El vínculo afectivo de confianza y respeto mutuo, el acuerdo sobre los objetivos de la terapia y el acuerdo sobre las tareas a realizar",
                "b": "El precio de la consulta, la duración de 50 minutos y la puntualidad",
                "c": "El diván, la libreta de apuntes y el reloj de arena",
                "d": "La firma de un pagaré civil antes de iniciar"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué técnica conductual desarrollada por Joseph Wolpe combina el entrenamiento en relajación progresiva con la exposición gradual imaginaria o en vivo a estímulos ansiógenos?",
              "options": {
                "a": "Desensibilización Sistemática (basada en el principio de inhibición recíproca)",
                "b": "Intención paradójica de Frankl",
                "c": "Terapia electroconvulsiva ambulatoria",
                "d": "Biofeedback de temperatura distal"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "En la Terapia Centrada en la Persona de Carl Rogers, ¿cuáles son las tres actitudes o condiciones necesarias y suficientes que debe brindar el terapeuta?",
              "options": {
                "a": "Empatía genuina, Aceptación positiva incondicional y Congruencia (autenticidad)",
                "b": "Neutralidad distante, interpretación analítica y silencio",
                "c": "Directividad estricta, corrección moral y advertencia de castigos",
                "d": "Simpatía superficial, regalos motivacionales y consejos prácticos"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué técnica terapéutica conductual se utiliza de forma protocolizada para el tratamiento de las fobias y el TOC consistente en permanecer ante el estímulo temido impidiendo la respuesta de escape o ritual?",
              "options": {
                "a": "Exposición con Prevención de Respuesta (EPR)",
                "b": "Contracondicionamiento aversivo con choques eléctricos",
                "c": "Hipnoterapia ericksoniana no dirigida",
                "d": "Relajación autógena de Schultz exclusivamente"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "En la Terapia Dialéctica Conductual (DBT) de Marsha Linehan, diseñada primordialmente para el Trastorno Límite de la Personalidad, ¿qué módulos de habilidades se entrenan?",
              "options": {
                "a": "Mindfulness (atención plena), Tolerancia al malestar, Regulación emocional y Efectividad interpersonal",
                "b": "Interpretación de los sueños y transferencia negativa",
                "c": "Memorización de textos filosóficos clásicos",
                "d": "Acondicionamiento físico de alto rendimiento"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "¿Qué principio ético y deontológico fundamental en la práctica de la psicología clínica obliga a resguardar la privacidad de la información compartida por el consultante?",
              "options": {
                "a": "El Secreto Profesional o Confidencialidad (salvo riesgo inminente para la vida del paciente o de terceros o requerimiento legal fundado)",
                "b": "El principio de beneficencia económica de la clínica",
                "c": "La obligación de divulgar los casos en periódicos locales",
                "d": "La publicación de nombres en redes sociales con fines educativos"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "En los Primeros Auxilios Psicológicos (PAP) durante una intervención en crisis aguda (tras un desastre o catástrofe), el primer paso es:",
              "options": {
                "a": "Establecer contacto y cercanía respetuosa, garantizar la seguridad física inmediata y proporcionar alivio de necesidades básicas",
                "b": "Obligar a la persona a relatar detalladamente el trauma repetidas veces (debrieﬁng forzado)",
                "c": "Prescribir ansiolíticos inyectables de inmediato",
                "d": "Dejar a la persona completamente sola en un cuarto oscuro"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "¿Cuál es la distorsión cognitiva en la que una persona asume que sabe exactamente lo que los demás están pensando negativamente sobre ella sin evidencia objetiva?",
              "options": {
                "a": "Lectura de Mente (Lectura del pensamiento)",
                "b": "Catastrofismo",
                "c": "Razonamiento emocional",
                "d": "Pensamiento de todo o nada (polarizado)"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "La técnica de 'Activación Conductual' en el tratamiento de la depresión mayor tiene como eje central:",
              "options": {
                "a": "Programar de forma gradual actividades cotidianas placenteras y de logro que reconecten al paciente con fuentes de refuerzo positivo del entorno",
                "b": "Mantener reposo absoluto en cama hasta que la tristeza desaparezca espontáneamente",
                "c": "Prohibir salir de la habitación por un mes",
                "d": "Cambiar la residencia a otro país inmediatamente"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "En psicoterapia psicodinámica, ¿qué es la 'Transferencia'?",
              "options": {
                "a": "El proceso mediante el cual el paciente proyecta o revive sobre la figura del terapeuta sentimientos, deseos o conflictos infantiles originados en figuras parentales tempranas",
                "b": "El depósito bancario del importe de la sesión",
                "c": "El cambio de terapeuta por mudanza de ciudad",
                "d": "La entrega de fotocopias del expediente al paciente"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Qué técnica de relajación se basa en la contracción muscular voluntaria breve y consciente seguida de una relajación profunda sistemática de diversos grupos musculares?",
              "options": {
                "a": "Relajación Progresiva de Edmund Jacobson",
                "b": "Entrenamiento autógeno de Johannes Schultz",
                "c": "Meditación trascendental en posición de loto",
                "d": "Técnica de parada de pensamiento de Bain"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "El modelo transteórico del cambio de Prochaska y DiClemente describe las siguientes etapas secuenciales de motivación al cambio:",
              "options": {
                "a": "Precontemplación, Contemplación, Preparación, Acción, Mantenimiento y Recaída",
                "b": "Negación, Ira, Negociación, Depresión y Aceptación (fases del duelo)",
                "c": "Infancia, Niñez, Adolescencia, Adultez y Vejez",
                "d": "Inicio, Nudo, Desenlace y Conclusión"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿Qué es la 'Entrevista Motivacional' de Miller y Rollnick?",
              "options": {
                "a": "Un estilo de conversación colaborativo y centrado en la persona para fortalecer la propia motivación intrínseca y el compromiso con el cambio explorando la ambivalencia",
                "b": "Una entrevista de trabajo para evaluar candidatos a un empleo",
                "c": "Un interrogatorio policial con detector de mentiras",
                "d": "Un sermón moralizador sobre las consecuencias de las drogas"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "La técnica de 'Economía de Fichas' (Token Economy) utilizada en psicología infantil y centros institucionales se fundamenta en:",
              "options": {
                "a": "El condicionamiento operante mediante el uso de reforzadores secundarios generalizados (fichas, puntos) canjeables por privilegios o reforzadores primarios",
                "b": "La compra de acciones en la bolsa de valores por los niños",
                "c": "El castigo físico moderado por mala conducta escolar",
                "d": "La privación de agua potable tras una rabieta"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué evalúa la Escala de Depresión de Beck (BDI-II)?",
              "options": {
                "a": "La presencia y severidad de los síntomas depresivos en adolescentes y adultos a través de 21 ítems autoadministrados",
                "b": "El nivel de inteligencia general verbal y manipulativa",
                "c": "La destreza manual de los cirujanos en el quirófano",
                "d": "La personalidad paranoide mediante manchas de tinta"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "En el enfoque sistémico familiar (ej. Escuela de Milán o Minuchin), el síntoma de un miembro de la familia ('paciente identificado') se entiende como:",
              "options": {
                "a": "La manifestación o expresión disfuncional de la dinámica, homeostasis y pautas comunicacionales de todo el sistema familiar",
                "b": "Un defecto genético individual sin relación con el entorno",
                "c": "Mala voluntad deliberada del hijo adolescente",
                "d": "Una posesión mística de orígenes ancestrales"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Cuál es la función del 'Consentimiento Informado' en psicología clínica?",
              "options": {
                "a": "Garantizar que el paciente comprenda la naturaleza del proceso terapéutico, sus objetivos, métodos, límites de confidencialidad y riesgos antes de aceptar voluntariamente el tratamiento",
                "b": "Eximir al psicólogo de toda responsabilidad legal en caso de mala praxis",
                "c": "Obligar al paciente a pagar 20 sesiones por adelantado sin reembolso",
                "d": "Autorizar al terapeuta a filmar las sesiones para publicarlas en YouTube"
              },
              "correct": "a"
            }
          ]
        },
        {
          "id": "psi-org",
          "codigo": "PSI-402",
          "siglaCompleta": "PSI-402-16150: Psicología Organizacional y del Trabajo – NM – A",
          "nombre": "Psicología Organizacional y del Trabajo",
          "semestre": "Semestre VII",
          "sede": "Sede Santa Cruz",
          "grupo": "A",
          "examen": "1P-1-2026-10665105: Examen Primer Parcial 1-2026",
          "duracion": "40 minutos",
          "preguntasCount": 20,
          "preguntas": [
            {
              "id": 1,
              "text": "Los históricos 'Estudios de Hawthorne' dirigidos por Elton Mayo demostraron que la productividad de los trabajadores se incrementaba primordialmente por:",
              "options": {
                "a": "Factores psicosociales: la atención que se les prestaba como personas, las relaciones interpersonales y el sentido de pertenencia a un grupo",
                "b": "La intensidad lumínica física exacta de las bombillas de la fábrica",
                "c": "La reducción del salario en un 20%",
                "d": "La prohibición de hablar durante toda la jornada"
              },
              "correct": "a"
            },
            {
              "id": 2,
              "text": "¿Cuál es la diferencia fundamental entre 'Clima Organizacional' y 'Cultura Organizacional'?",
              "options": {
                "a": "El clima es la percepción temporal subjetiva de los empleados sobre su ambiente laboral; la cultura comprende los valores profundos, normas, creencias y rituales compartidos y arraigados en la empresa",
                "b": "El clima se refiere a la temperatura del aire acondicionado en la oficina",
                "c": "La cultura solo existe en ministerios del Estado y no en empresas privadas",
                "d": "Ambos términos son sinónimos absolutos en administración"
              },
              "correct": "a"
            },
            {
              "id": 3,
              "text": "En la Teoría Bifactorial de Frederick Herzberg, ¿cuáles son los Factores Higiénicos (o de insatisfacción) frente a los Factores Motivacionales?",
              "options": {
                "a": "Higiénicos: salario, condiciones físicas de trabajo, seguridad laboral y políticas de la empresa (su ausencia desmotiva, pero su presencia no motiva a largo plazo); Motivacionales: reconocimiento, logro, responsabilidad y desarrollo personal",
                "b": "Higiénicos: lavado de manos con alcohol en gel y uso de guantes",
                "c": "Motivacionales: descuentos por llegar 5 minutos tarde",
                "d": "Higiénicos: comidas gratuitas en el casino de oficiales"
              },
              "correct": "a"
            },
            {
              "id": 4,
              "text": "El Síndrome de Desgaste Profesional (Burnout), evaluado mediante el Maslach Burnout Inventory (MBI), se caracteriza por la tríada tridimensional de:",
              "options": {
                "a": "Agotamiento emocional, Despersonalización (cinismo o frialdad hacia los clientes/usuarios) y Baja realización personal en el trabajo",
                "b": "Fiebre alta, tos seca y cefalea tensional",
                "c": "Insomnio de conciliación, aumento del apetito y euforia",
                "d": "Alergia dérmica al teclado de la computadora"
              },
              "correct": "a"
            },
            {
              "id": 5,
              "text": "¿Qué es la 'Entrevista de Selección por Competencias' basada en el método STAR?",
              "options": {
                "a": "Técnica estructurada que indaga conductas pasadas del postulante mediante 4 componentes: Situación, Tarea, Acción y Resultado",
                "b": "Un test de astrología y compatibilidad de signos zodiacales",
                "c": "Una entrevista donde el entrevistador habla durante el 95% del tiempo",
                "d": "Una prueba de mecanografía de 3 minutos"
              },
              "correct": "a"
            },
            {
              "id": 6,
              "text": "En evaluación del desempeño, la 'Evaluación de 360 Grados' recopila retroalimentación sobre un colaborador proveniente de:",
              "options": {
                "a": "Sus superiores jerárquicos, sus pares o compañeros de equipo, sus subordinados directos y sus clientes internos o externos, además de la autoevaluación",
                "b": "Una cámara de seguridad instalada sobre su escritorio",
                "c": "Exclusivamente la opinión del gerente general de la empresa",
                "d": "Un examen escrito de matemáticas de 100 preguntas"
              },
              "correct": "a"
            },
            {
              "id": 7,
              "text": "¿Qué caracteriza al 'Liderazgo Transformacional' frente al 'Liderazgo Transaccional' según Bernard Bass?",
              "options": {
                "a": "El líder transformacional inspira, motiva intelectualmente y promueve una visión compartida de cambio superando intereses individuales; el transaccional se basa en el intercambio contractual de recompensas y castigos",
                "b": "El líder transformacional despide al 50% de la plantilla cada mes",
                "c": "El líder transaccional no tiene autoridad legal en la empresa",
                "d": "El líder transformacional trabaja exclusivamente desde su domicilio"
              },
              "correct": "a"
            },
            {
              "id": 8,
              "text": "¿Qué es el 'Mobbing' (Acoso Psicológico en el Trabajo) según Heinz Leymann?",
              "options": {
                "a": "Comportamiento hostil, sistemático y reiterado en el tiempo dirigido por una o varias personas hacia un compañero de trabajo para intimidarlo, aislarlo y forzar su renuncia",
                "b": "Una fiesta sorpresa organizada por el departamento de recursos humanos",
                "c": "El aumento de la jornada laboral aprobado por ley",
                "d": "El cambio de computadora de escritorio por una portátil"
              },
              "correct": "a"
            },
            {
              "id": 9,
              "text": "El modelo de características del puesto de Hackman y Oldham postula que para que un trabajo sea intrínsecamente motivador debe poseer:",
              "options": {
                "a": "Variedad de habilidades, identidad de la tarea, significado de la tarea, autonomía y retroalimentación del puesto",
                "b": "Uniforme formal de corbata obligatoria todos los días",
                "c": "Prohibición de acceso a teléfonos celulares durante la jornada",
                "d": "Una oficina con ventana panorámica y sofá de cuero"
              },
              "correct": "a"
            },
            {
              "id": 10,
              "text": "¿Qué es el 'Assessment Center' (Centro de Evaluación) en selección de personal?",
              "options": {
                "a": "Metodología estandarizada de evaluación conductual múltiple que utiliza simulaciones grupales (juegos de rol, estudio de casos, bandejas de entrada) observadas por evaluadores entrenados",
                "b": "Una clínica médica donde se realizan análisis de sangre y orina",
                "c": "Una oficina gubernamental donde se registran los contratos de trabajo",
                "d": "Un software que envía correos electrónicos automatizados"
              },
              "correct": "a"
            },
            {
              "id": 11,
              "text": "En la teoría de la Equidad de J. Stacy Adams, los empleados experimentan inequidad y desmotivación cuando perciben que:",
              "options": {
                "a": "La relación entre sus aportes (esfuerzo, tiempo) y sus resultados (salario, reconocimiento) es inferior a la relación de sus compañeros de referencia (referente de comparación)",
                "b": "La empresa gana más dinero que el año pasado",
                "c": "El presidente del país anuncia aumento del salario mínimo",
                "d": "El horario de almuerzo se extiende 15 minutos más"
              },
              "correct": "a"
            },
            {
              "id": 12,
              "text": "¿Qué instrumento psicométrico de personalidad basado en los Cinco Grandes Factores (Big Five) es muy utilizado en psicología laboral?",
              "options": {
                "a": "NEO-PI-R (Neuroticismo, Extraversión, Apertura a la experiencia, Amabilidad y Responsabilidad)",
                "b": "Test de Rorschach de manchas de tinta",
                "c": "Test de la Figura Humana de Machover",
                "d": "Escala de Hamilton para la depresión"
              },
              "correct": "a"
            },
            {
              "id": 13,
              "text": "El 'Engagement Laboral' (compromiso en el trabajo) según Schaufeli se define como un estado mental positivo y satisfactorio caracterizado por:",
              "options": {
                "a": "Vigor (altos niveles de energía y resiliencia), Dedicación (entusiasmo e inspiración) y Absorción (concentración plena en la tarea)",
                "b": "Conformismo pasivo esperando la hora de salida",
                "c": "Adicción patológica al trabajo con descuido total de la familia",
                "d": "Miedo reverencial a los directores de la compañía"
              },
              "correct": "a"
            },
            {
              "id": 14,
              "text": "¿Qué sesgo de evaluación ocurre cuando la impresión global positiva o atractiva sobre un candidato influye indebidamente en la calificación favorable de todos sus demás atributos específicos?",
              "options": {
                "a": "Efecto Halo",
                "b": "Sesgo de severidad extrema",
                "c": "Efecto de contraste temporal",
                "d": "Sesgo de tendencia central"
              },
              "correct": "a"
            },
            {
              "id": 15,
              "text": "La 'Rotación de Personal' (Turnover) excesiva en una organización suele ser un indicador primario de:",
              "options": {
                "a": "Insatisfacción laboral, clima organizacional tóxico, fallas en la selección o remuneraciones poco competitivas en el mercado",
                "b": "Una excelente estrategia de productividad y lealtad institucional",
                "c": "Falta de espacio físico para estacionar vehículos",
                "d": "Exceso de vacaciones acumuladas por los colaboradores"
              },
              "correct": "a"
            },
            {
              "id": 16,
              "text": "¿En qué consiste el 'Plan de Inducción' u 'Onboarding' para un nuevo empleado?",
              "options": {
                "a": "Programa formal de socialización e integración guiada que facilita al recién incorporado conocer la cultura, normativas, instalaciones y funciones de su puesto para acelerar su adaptación",
                "b": "Un examen sorpresa sin preparación previa el primer día",
                "c": "La firma de una renuncia voluntaria en blanco",
                "d": "La entrega de uniformes usados sin lavar"
              },
              "correct": "a"
            },
            {
              "id": 17,
              "text": "La 'Matriz DAFO / FODA' aplicada al diagnóstico estratégico del talento humano analiza:",
              "options": {
                "a": "Fortalezas y Debilidades internas, y Oportunidades y Amenazas del entorno externo",
                "b": "Dólares, Activos, Finanzas y Operaciones de crédito bancario",
                "c": "Días de ausencia, Faltas justificadas, Ociosidad y Despidos",
                "d": "Documentación contable del departamento de auditoría"
              },
              "correct": "a"
            },
            {
              "id": 18,
              "text": "¿Qué teoría motivacional postulada por Victor Vroom afirma que la motivación depende de la expectativa de que el esfuerzo conducirá al rendimiento (Expectativa), de que el rendimiento llevará a una recompensa (Instrumentalidad) y del valor atribuido a dicha recompensa (Valencia)?",
              "options": {
                "a": "Teoría de las Expectativas de Vroom",
                "b": "Teoría X y Teoría Y de McGregor",
                "c": "Teoría de la Contingencia de Fiedler",
                "d": "Teoría de la fijación de metas de Locke"
              },
              "correct": "a"
            },
            {
              "id": 19,
              "text": "En el modelo de liderazgo situacional de Hersey y Blanchard, el estilo de liderazgo debe adaptarse en función de:",
              "options": {
                "a": "El nivel de madurez o desarrollo de los seguidores (competencia y compromiso) respecto a la tarea específica",
                "b": "La estatura y peso de los trabajadores",
                "c": "El tipo de software instalado en los servidores",
                "d": "El día de la semana en el que se ejecuta la reunión"
              },
              "correct": "a"
            },
            {
              "id": 20,
              "text": "¿Cuál es el objetivo principal del 'Análisis y Descripción de Puestos' (ADP)?",
              "options": {
                "a": "Determinar con precisión las tareas, responsabilidades, condiciones de trabajo y requerimientos mínimos de competencias (conocimientos, habilidades, experiencia) que exige cada puesto en la estructura organizacional",
                "b": "Asignar un color de pintura específico para cada escritorio de la empresa",
                "c": "Calcular los impuestos inmobiliarios que adeuda el edificio corporativo",
                "d": "Obligar a todos los empleados a realizar las mismas actividades diarias"
              },
              "correct": "a"
            }
          ]
        }
      ]
    }
  ]
};

// Funciones utilitarias para acceso rápido
function getCareerById(careerId) {
    return UDABOL_EXAM_DATA.carreras.find(c => c.id === careerId) || UDABOL_EXAM_DATA.carreras[0];
}

function getSubjectById(subjectId) {
    for (const carrera of UDABOL_EXAM_DATA.carreras) {
        const found = carrera.subjects.find(s => s.id === subjectId);
        if (found) return { ...found, carreraId: carrera.id, carreraNombre: carrera.nombre };
    }
    // Por defecto retornar la primera materia de sistemas o medicina
    const fallback = UDABOL_EXAM_DATA.carreras[0].subjects[0];
    return { ...fallback, carreraId: UDABOL_EXAM_DATA.carreras[0].id, carreraNombre: UDABOL_EXAM_DATA.carreras[0].nombre };
}

function getAllSubjects() {
    const all = [];
    for (const carrera of UDABOL_EXAM_DATA.carreras) {
        for (const s of carrera.subjects) {
            all.push({ ...s, carreraId: carrera.id, carreraNombre: carrera.nombre });
        }
    }
    return all;
}

if (typeof window !== 'undefined') {
    window.UDABOL_EXAM_DATA = UDABOL_EXAM_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UDABOL_EXAM_DATA, getCareerById, getSubjectById, getAllSubjects };
}
