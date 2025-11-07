import type { TrainingData } from './types';

export const trainingData: TrainingData = {
    '2025-08-18': {
        week: 'Acumulación semana 3',
        day: 1,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['- 5 Back Squat (80% 3RM) o (RIR 1-2) (RPE 8)', '● 2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['- 5 Pull Up (80% 3RM) o (RIR 1-2) (RPE 8)', '● 2´ Rest'] }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    { title: '5 RONDAS FOR QUALITY', items: ['- 8 Thruster UB (40/25kg)', '● 1´ Rest'] }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '- 10 × 500m Ski Erg (10” más lento que 2k Test)',
                            '● 1´ 15 rest entre rondas',
                            '● * Tras 5ª ronda: 1´30 Rest'
                        ]
                    }
                ],
                notes: 'Deberías tener sensaciones de poder apretar más tras cada descanso'
            }
        ]
    },
    '2025-08-19': {
        week: 'Acumulación semana 3',
        day: 2,
        title: 'POTENCIA AERÓBICA "CAPADA"',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA "CAPADA"',
                exercises: [
                    {
                        title: 'WARM UP',
                        items: [
                            '- 2,5 Km Run (Ritmo Z2)',
                            '2´ REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: '',
                        items: [
                            '● 4 × 10” Run (RPE 8-9) / 50” rest',
                            '1´10 REST ADICIONAL Y DIRECTO',
                            '- 5 × 400m Run (Ritmo Z4) + 1´ 15 Rest Total entre series',
                            '2´ REST ADICIONAL TRAS ÚLTIMA SERIE Y DIRECTO A',
                            '- 5 × 400m Run (Ritmo Z5) + 1´ Rest Total entre series',
                            '2´ REST ADICIONAL TRAS ÚLTIMA SERIE Y DIRECTO A',
                            '● 1 × 1000m Run (Ritmo Z4)',
                            'Y DIRECTO A',
                            '- 2,5 Km Run (Ritmo RPE 5)'
                        ]
                    }
                ]
            }
        ],
        notes: 'RESPETA LOS RITMOS DE ZONA PAUTADAS (NO TE ACELERES)\nLOS DESCANSOS EMPIEZAN A REDUCIRSE Y MANTENER LOS UMBRALES O ZONAS CADA VEZ SE VUELVE MÁS COMPLEJO PERO… ESO ES LO QUE VA A MEJORAR CONSTANTEMENTE A PARTIR DE AHORA'
    },
    '2025-08-20': {
        week: 'Acumulación semana 3',
        day: 3,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['- 5 Press Banca (80% 3RM) o (RIR 1-2) (RPE 8)', '● 2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['- 8 RDL (RIR 3-4) o (RPE 7-8)', '● 2´ Rest'] }
                ],
                notes: 'ES IMPORTANTE ENTENDER QUE EN ESTA SEMANA METEMOS UN RECORDATORIO DE FUERZA SUBMÁXIMA TRAS 21 DÍAS SIN METER FUERZA PURA BÁSICA.EN CASO DE QUE NO SE AJUSTE LA CARGA A MI RPE , DEBERÉ SUBIR O BAJAR DICHA CARGA (EN CUALQUIER SERIE EN LA QUE ME ENCUENTRE)'
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY (Superset)',
                        items: [
                            '- 8 / 8 Remo unilateral apoyado en banco (24/16) o (RPE 8)',
                            '- 10m Sled Pull (50/25kg) *solo brazos',
                            '● 2´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'EMOM 10´',
                        items: [
                            '● A) 10 / 7 Cal Ass sprint',
                            '● B) 15 / 12 Burpee',
                            '● 5´ REST Y DIRECTO A'
                        ]
                    },
                    { title: 'EMOM 5´', items: ['- 18 Wall Ball UB (P.O)', '● 5´ REST Y DIRECTO A'] },
                    { title: 'EMOM 5´', items: ['- 10m Sled Drag (75-80% TCM)'] }
                ],
                notes: 'El objetivo es que en cada EMOM sobren mínimo 20” para descansar (dentro de cada 1´ )'
            }
        ]
    },
    '2025-08-21': {
        week: 'Acumulación semana 3',
        day: 4,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-08-22': {
        week: 'Acumulación semana 3',
        day: 5,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    {
                        title: 'WARM UP (OBLIGATORIO)',
                        items: [
                            '3 RONDAS FOR QUALITY',
                            '- 5 / 5 DL unipodal (2×20/12kg)',
                            '- 50m Farmer Carry (rack position)',
                            '- 30” Plancha Abd',
                            'NO REST'
                        ]
                    },
                    { title: '4 RONDAS FOR QUALITY', items: ['- 5 Peso Muerto Convencional (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['- 5 Press Vertical (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] }
                ],
                notes: 'ES IMPORTANTE ENTENDER QUE EN ESTA SEMANA METEMOS UN RECORDATORIO DE FUERZA SUBMÁXIMA TRAS 21 DÍAS SIN METER FUERZA PURA BÁSICA.EN CASO DE QUE NO SE AJUSTE LA CARGA A MI RPE , DEBERÉ SUBIR O BAJAR DICHA CARGA (EN CUALQUIER SERIE EN LA QUE ME ENCUENTRE)'
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '- 6 / 6 Bulgarian Squat (2xDB) (RIR 1-2) o (RPE 8-9 tras última rep)',
                            '● 1” de pausa abajo en cada rep',
                            '● 1’30” rest'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY (SUPERSET)',
                        items: [
                            '- 8 Curl de biceps (RIR 2)',
                            '- 12 Extensión de triceps OH (RIR 3-4)',
                            '● 2´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '- 10 × 500m Row Erg (10” más lento que 2k Test)',
                            '● 1´ 15 rest entre rondas',
                            '● * Tras 5ª ronda: 1´30 Rest'
                        ]
                    }
                ],
                notes: 'Deberías tener sensaciones de poder apretar más tras cada descanso'
            }
        ]
    },
    '2025-08-23': {
        week: 'Acumulación semana 3',
        day: 6,
        title: 'ACONDICIONAMIENTO ESPECÍFICO (TEST 500 MODIFICADO)',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO ESPECÍFICO (TEST 500 MODIFICADO)',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '- 500m Run (Ritmo Z3/Z4) entre workouts (desde el inicio)',
                            '* Busca tu ritmo medio entre ambas zonas',
                            'Ejemplo : Z3= 4:50km/h, Z4= 4:20km/h (Objetivo correr a 4:40-4:35)',
                            'A) 1000M Ski erg (Ritmo 2K Test)',
                            'B) 25M Sled Push (P.O) (2 rectas oficiales)',
                            'C) 25M Sled Pull (P.O) (2 rectas oficiales)',
                            'D) 80M Burpee Broad Jump',
                            '2´ REST OBLIGATORIO (HIDRÁTATE)',
                            'E) 1000M Row erg (Ritmo 2K Test)',
                            'F) 100M F. Carry UB (P.O)',
                            'G) 50M S. Lunge (BW)',
                            'H) 50 Wall Ball (P.O)'
                        ]
                    }
                ]
            }
        ],
        notes: 'Buscamos adaptaciones “controladas” en carrera a ritmos y distancias capaces de controlar la producción de lactato. aprétate en los wod.* Nos acercamos a los testeos oficiales de HP. Metemos 500m de carrera entre cada workout a un ritmo controlado. Los ergómetros y burpees trabajamos el volumen total, al ser ejercicios de alta demanda aeróbica.\n* Nos acercamos al primer test de 500 oficial'
    },
    '2025-08-24': {
        week: 'Acumulación semana 3',
        day: 7,
        title: 'CAPACIDAD AERÓBICA INTENSIVA (INTERUMBRALES)',
        sections: [
            {
                letter: 'A',
                title: 'CAPACIDAD AERÓBICA INTENSIVA (INTERUMBRALES)',
                exercises: [
                    {
                        title: 'RODAJE OBLIGATORIO',
                        items: [
                            '5´ Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)',
                            'Y DIRECTO A'
                        ]
                    },
                    {
                        title: '',
                        items: [
                            '- 4 Km Run (75% Fc max) o (Ritmo Z2) / (RPE 5)',
                            'Y DIRECTO A',
                            '- 2 Km Run (85-90% Fc max) o (Ritmo Z3) / (RPE 7)',
                            '- 1 Km Run (65-70% Fc max) o (10” más lento que tu ritmo Z2) / (RPE 4) * Kilómetro de ajuste',
                            '- 3 Km Run (85-90% Fc max) o (Ritmo Z3) / (RPE 7)',
                            'No cool down'
                        ]
                    }
                ]
            }
        ],
        notes: 'No queremos gel en este entreno, pero llévate sales e hidrátate bien'
    },
    '2025-08-25': {
        week: 'Semana Previa (Agosto)',
        day: 1,
        title: 'ACONDICIONAMIENTO A LA FUERZA Y ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO A LA FUERZA (SLED)',
                exercises: [
                    {
                        title: 'WARM UP OBLIGATORIO',
                        items: [
                            '3 RONDAS FOR QUALITY',
                            '- 1000m Bikerg (RPE 7)',
                            '- 50 DU ( Sc : 100 SU )',
                            'NO REST',
                            '1´ REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: 'FOR TIME (CAP 3´ / 3´30)',
                        items: [
                            '50m Sled Push (P.O)',
                            '1´ REST Y DIRECTO A',
                            'AFAP',
                            '2 × 10m Burpee Broad Jump (trabaja en la recta del trineo para acabar justo en el sled push)',
                            '2 × 10m Sled Push (P.O + 25 kg)',
                            '2 × 10m Burpee Broad Jump',
                            '1 × 10m Sled Push UB (P.O + 25 kg)',
                            '2 × 10m Burpee Broad Jump',
                            '1 × 10m Sled Push UB (P.O + 25 kg)'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'ACONDICIONAMIENTO GENERAL',
                exercises: [
                    {
                        title: 'AMRAP 12´',
                        items: [
                            '- 4 Chin up',
                            '- 8 Power Clean ( 2 × 17,5 / 12,5kg )',
                            '- 12 / 8 Push Up',
                            '- 8 Remo alterno en plancha ( 2 × 17,5 / 12,5kg )',
                            '- 4 Devil Press',
                            '1´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO (ERG)',
                exercises: [
                    {
                        title: 'ACCESORIO PREVIO OBLIGATORIO',
                        items: [
                            '3 RONDAS FOR QUALITY',
                            '- 10 / 10 Press palof + rotación contralateral con goma (desde centro “torax”, hacia lado contrario a “rack”) (RPE 7-8)',
                            '* En posición de bipedestación (si la goma esta en mi derecha roto a la izquierda)'
                        ]
                    },
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '- 5 × 800m Ski Erg (10” + lento que Ritmo 2k Test)',
                            '1´ 30 rest entre rondas',
                            '* Deberías tener sensaciones de poder MANTENER el ritmo tras cada descanso',
                            'TRAS ÚLTIMO DESCANSO Y DIRECTO A',
                            '- 1000m Ski (RPE 5)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-08-26': {
        week: 'Semana Previa (Agosto)',
        day: 2,
        title: 'CAPACIDAD AERÓBICA INTENSIVA (INTERUMBRAL)',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE OBLIGATORIO',
                exercises: [
                    {
                        title: '',
                        items: [
                            '5´ Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)',
                            'Y DIRECTO A',
                            '- 2 Km Run (75% Fc max) o (Ritmo Z2) / (RPE 5)',
                            'Y DIRECTO A',
                            '- 6 Km Run (85% Fc max) o (Ritmo Z3) / (RPE 7)',
                            'No cool down'
                        ]
                    }
                ]
            }
        ],
        notes: '* Empezamos a intensificar el ritmo y mantenerlo dentro de un volumen medio-alto\n* Semana que viene cambiamos de bloque (donde se prioriza la intensidad con respecto al volumen)'
    },
    '2025-08-27': {
        week: 'Semana Previa (Agosto)',
        day: 3,
        title: 'ACONDICIONAMIENTO A LA FUERZA Y GENERAL',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO A LA FUERZA (SLED)',
                exercises: [
                    {
                        title: 'WARM UP OBLIGATORIO',
                        items: [
                            '3 RONDAS FOR QUALITY',
                            '- 15 Russian Swing (24 / 16 kg)',
                            '- 15” Superman Hold',
                            '- 25m + 25m Farmer Carry unilateral (24 / 16 kg)',
                            'NO REST',
                            '2´ REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: 'FOR TIME (CAP 3´30 / 4´)',
                        items: [
                            '50m Sled Pull (P.O)',
                            '1´ REST Y DIRECTO A',
                            '5 RONDAS FOR QUALITY',
                            '- 10 / 7 Cal Assault (AFAP)',
                            '- 10m Sled Drag UB (P.O + 15kg)',
                            '1´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'ACONDICIONAMIENTO GENERAL',
                exercises: [
                    {
                        title: 'INTERVALOS 12´ ( 4 RONDAS )',
                        items: [
                            '40” ON / 20” OFF',
                            '- Row erg (Ritmo 2k test)',
                            '- Max Rear Lunge (P.O del Sandbag)',
                            '- Max Push Press (40/25kg) * controla el ritmo y busca eficiencia'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO (ERG)',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '- 5 × 800m Row Erg (5-10” + lento que Ritmo 2k Test)',
                            '1´ 30 rest entre rondas',
                            '* Deberías tener sensaciones de poder MANTENER el ritmo tras cada descanso',
                            'TRAS ÚLTIMO DESCANSO Y DIRECTO A',
                            '- 1000m Row (RPE 5)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-08-28': {
        week: 'Semana Previa (Agosto)',
        day: 4,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-08-29': {
        week: 'Semana Previa (Agosto)',
        day: 5,
        title: 'POTENCIA AERÓBICA "CAPADA"',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA "CAPADA"',
                exercises: [
                    {
                        title: 'WARM UP',
                        items: [
                            'técnica de carrera , pliometricos, sprints cortos…',
                            '- 5 × 60m Sprint / 1´ Rest',
                            'Y DIRECTO'
                        ]
                    },
                    {
                        title: '',
                        items: [
                            '- 2 × 800m Run (Ritmo Z5) + 2´ Rest Total entre series',
                            '1´ REST ADICIONAL TRAS ÚLTIMO DESCANSO Y DIRECTO A',
                            '- 3 × 800m Run (Ritmo Z4) + 1´30 Rest Total entre series',
                            '1´ 30 REST ADICIONAL',
                            'TRAS ÚLTIMO DESCANSO Y DIRECTOA',
                            '- 1 × 1000m Run (Ritmo RH)',
                            'NO COOL DOWN'
                        ]
                    }
                ]
            }
        ],
        notes: '* Tu RH debería estar en torno a tu Z4 o 5” + lento que este.\nRESPETA LOS RITMOS PAUTADOS!!!\n(NO TE ACELERES)'
    },
    '2025-08-30': {
        week: 'Semana Previa (Agosto)',
        day: 6,
        title: 'ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'AFAP “ DON SALAMA”',
                        items: [
                            '1000M Run (Ritmo Z4)',
                            '25 Wall Ball (P.O - PRO)',
                            '2000M Bikerg (RPE 7-8)',
                            '50 Wall Ball (P.O - OPEN) * Partir como mucho 1 vez',
                            '1000M Run (Ritmo Z3)',
                            '25 Wall Ball UB (P.O - OPEN)',
                            '5´ a 10´ Rest'
                        ]
                    },
                    {
                        title: 'AFAP',
                        items: [
                            '1000M Row (10” + lento que 2k Test)',
                            '200M F. Carry (P.O)',
                            '2000M Bikerg (RPE 7-8)',
                            '40m Burpee Broad Jump',
                            '1000M Ski (10” + lento que 2k Test)',
                            '20m Burpee Broad Jump'
                        ]
                    }
                ]
            }
        ],
        notes: '* Busca romper tus límites sicológicos'
    },
    '2025-08-31': {
        week: 'Semana Previa (Agosto)',
        day: 7,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-01': {
        week: 'Acumulación semana 4',
        day: 1,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Back Squat (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Pull Up (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    { title: '5 RONDAS FOR QUALITY', items: ['8 Thruster UB (40/25kg)', '1´ Rest'] }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: ['10 × 500m Ski Erg (10” más lento que 2k Test)', '1´15 rest entre rondas', 'Tras 5ª ronda: 1´30 Rest']
                    }
                ],
                notes: 'Deberías tener sensaciones de poder apretar más tras cada descanso'
            }
        ]
    },
    '2025-09-02': {
        week: 'Acumulación semana 4',
        day: 2,
        title: 'POTENCIA AERÓBICA "CAPADA"',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA "CAPADA"',
                exercises: [
                    { title: 'Warm Up', items: ['2,5 Km Run (Ritmo Z2)', '2´ REST y directo a:'] },
                    {
                        title: 'Main Set',
                        items: [
                            '4 × 10” Run (RPE 8-9) / 50” rest',
                            '1´10 REST adicional y directo a:',
                            '5 × 400m Run (Ritmo Z4) + 1´15 Rest total entre series',
                            '2´ REST adicional tras última serie y directo a:',
                            '5 × 400m Run (Ritmo Z5) + 1´ Rest total entre series',
                            '2´ REST adicional tras última serie y directo a:',
                            '1 × 1000m Run (Ritmo Z4)',
                            'Y directo a:',
                            '2,5 Km Run (RPE 5)'
                        ]
                    }
                ]
            }
        ],
        notes: 'Respeta los ritmos de zona pautadas (NO te aceleres).'
    },
    '2025-09-03': {
        week: 'Acumulación semana 4',
        day: 3,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Press Banca (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['8 RDL (RIR 3-4) o (RPE 7-8)', '2´ Rest'] }
                ],
                notes: 'Importante: esta semana metemos recordatorio de fuerza submáxima tras 21 días sin fuerza pura básica. Ajusta cargas según RPE en cualquier serie.'
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY (Superset)',
                        items: [
                            '8/8 Remo unilateral apoyado en banco (24/16) o (RPE 8)',
                            '10m Sled Pull (50/25kg) *solo brazos',
                            '2´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    { title: 'EMOM 10´', items: ['A) 10/7 Cal Assault Sprint', 'B) 15/12 Burpee', '5´ Rest y directo a:'] },
                    { title: 'EMOM 5´', items: ['18 Wall Ball UB (P.O)', '5´ Rest y directo a:'] },
                    { title: 'EMOM 5´', items: ['10m Sled Drag (75-80% TCM)'] }
                ],
                notes: 'Objetivo: en cada EMOM deben sobrar mínimo 20” para descansar.'
            }
        ]
    },
    '2025-09-04': {
        week: 'Acumulación semana 4',
        day: 4,
        title: 'Día de descanso obligatorio',
        restDay: true,
        sections: []
    },
    '2025-09-05': {
        week: 'Acumulación semana 4',
        day: 5,
        title: 'FUERZA BÁSICA Y ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'W',
                title: 'Warm Up (Obligatorio)',
                exercises: [
                    {
                        title: '3 RONDAS FOR QUALITY',
                        items: [
                            '5/5 DL unipodal (2×20/12kg)',
                            '50m Farmer Carry (rack position)',
                            '30” Plancha Abd',
                            'No Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Peso Muerto Convencional (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Press Vertical (80% 3RM) o (RIR 1-2) (RPE 8)', '2´ Rest'] }
                ],
                notes: 'Importante: recordatorio de fuerza submáxima tras 21 días sin fuerza pura básica. Ajusta cargas según RPE.'
            },
            {
                letter: 'B',
                title: 'FUERZA BÁSICA (SECUNDARIA)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '6/6 Bulgarian Squat (2xDB) (RIR 1-2) o (RPE 8-9 última rep)',
                            '1” de pausa abajo en cada rep',
                            '1´30 Rest'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY (Superset)',
                        items: [
                            '8 Curl de bíceps (RIR 2)',
                            '12 Extensión de tríceps OH (RIR 3-4)',
                            '2´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '10 × 500m Row Erg (10” más lento que 2k Test)',
                            '1´15 Rest entre rondas',
                            'Tras 5ª ronda: 1´30 Rest'
                        ]
                    }
                ],
                notes: 'Deberías tener sensaciones de poder apretar más tras cada descanso'
            }
        ]
    },
    '2025-09-06': {
        week: 'Acumulación semana 4',
        day: 6,
        title: 'ACONDICIONAMIENTO ESPECÍFICO – TEST 500 MODIFICADO',
        sections: [
            {
                letter: 'A',
                title: 'FOR QUALITY',
                exercises: [
                    {
                        title: 'Running Pace',
                        items: [
                            '500m Run (Ritmo Z3/Z4) entre workouts (desde el inicio)',
                            'Busca ritmo medio entre ambas zonas (ej. Z3=4:50/km, Z4=4:20/km → Objetivo 4:40-4:35/km)'
                        ]
                    },
                    {
                        title: 'Workouts',
                        items: [
                            'A) 1000m Ski Erg (Ritmo 2k Test)',
                            'B) 25m Sled Push (P.O) (2 rectas oficiales)',
                            'C) 25m Sled Pull (P.O) (2 rectas oficiales)',
                            'D) 80m Burpee Broad Jump',
                            '2´ Rest obligatorio (hidrátate)',
                            'E) 1000m Row Erg (Ritmo 2k Test)',
                            'F) 100m Farmer Carry UB (P.O)',
                            'G) 50m S. Lunge (BW)',
                            'H) 50 Wall Ball (P.O)'
                        ]
                    }
                ]
            }
        ],
        notes: 'Objetivo: trabajar volumen total aeróbico, controlar producción de lactato y acercarse al test oficial de 500.'
    },
    '2025-09-07': {
        week: 'Acumulación semana 4',
        day: 7,
        title: 'CAPACIDAD AERÓBICA INTENSIVA (INTERUMBRALES)',
        sections: [
            {
                letter: 'A',
                title: 'INTERUMBRALES',
                exercises: [
                    {
                        title: '',
                        items: [
                            '5´ Run (20” más lento que tu Ritmo Z2 del Test VAM) o (RPE 4-5)',
                            'Y directo a:',
                            '4 Km Run (75% Fc max) o (Ritmo Z2) / (RPE 5)',
                            '2 Km Run (85-90% Fc max) o (Ritmo Z3) / (RPE 7)',
                            '1 Km Run (65-70% Fc max) o (10” más lento que Ritmo Z2) / (RPE 4) → Kilómetro de ajuste',
                            '3 Km Run (85-90% Fc max) o (Ritmo Z3) / (RPE 7)',
                            'Sin Cool Down.'
                        ]
                    }
                ]
            }
        ],
        notes: 'No gel en este entreno, pero llévate sales e hidrátate bien.'
    },
    '2025-09-08': {
        week: 'Transición semana 1',
        day: 1,
        title: 'ENGINE 2.0',
        sections: [
            {
                letter: 'W',
                title: 'WARM UP (obligatorio)',
                exercises: [
                    {
                        title: '3 rondas for quality',
                        items: [
                            '8 Parcial Back Squat Jump (40/25kg)',
                            '1’ Row (sprint progresivo) – empieza en RPE 7 y cada 15” sube +1 RPE',
                            '8 Burpees',
                            '1’ Rest',
                            '👉 Descanso adicional: 2’ antes de iniciar el bloque principal.'
                        ]
                    }
                ]
            },
            {
                letter: 'A',
                title: 'LONG CONDITIONING',
                exercises: [
                    {
                        title: '4 rondas for quality',
                        items: [
                            '1500m BikeErg (RPE 7)',
                            '80m Burpee Broad Jump (–20m por ronda)',
                            '1000m Row (10” más lento que tu Test 2k)',
                            '500m Run (ritmo Z3)',
                            '80m Walking Lunge (–20m por ronda)',
                            '500m Run (ritmo RH)',
                            'Descanso entre bloques: 4’ (–1’ por ronda).'
                        ]
                    }
                ]
            }
        ],
        notes: '🔄 Rondas 3 y 4 (modificaciones):\n● 1500m BikeErg → 500m Run (ritmo RH).\n● Walking Lunge → S. Lunge (P.O).\n● Se elimina el último 500m Run → quedando:\n500m Run (RH) → 40m Burpee Broad Jump (–20m por ronda) → 1000m Row (10” más lento que 2k test) → 500m Run (Z3) → 40m S. Lunge (P.O).'
    },
    '2025-09-09': {
        week: 'Transición semana 1',
        day: 2,
        title: 'Potencia Aeróbica + VO2MAX',
        sections: [
            {
                letter: 'W',
                title: 'WARM UP (obligatorio)',
                exercises: [
                    {
                        title: 'Técnica de carrera, pliométricos, sprints cortos.',
                        items: [
                            '4 × 60m sprint progresivo / 1’ Rest.'
                        ]
                    }
                ]
            },
            {
                letter: 'A',
                title: 'MAIN SET',
                exercises: [
                    {
                        title: '4 rondas for quality',
                        items: [
                            '4’ Run (ritmo Z4)',
                            '1’ Rest activo (Run RPE 4–5)',
                            '2’ Run (ritmo Test VAM)',
                            '3’ Rest total',
                            '👉 Tras último descanso: 2’ adicionales antes de siguiente bloque.'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'COMPROMISE BLOCK',
                exercises: [
                    {
                        title: '',
                        items: [
                            '2 × 1000m Run (ritmo Hyrox) / 2’ Rest entre series.'
                        ]
                    }
                ]
            }
        ],
        notes: 'Tu ritmo Hyrox debería estar en torno a Z4 (±5”).\nRespeta los ritmos pautados: acelera sólo cuando corresponda.'
    },
    '2025-09-10': {
        week: 'Transición semana 1',
        day: 3,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-11': {
        week: 'Transición semana 1',
        day: 4,
        title: 'ENGINE "Mindset"',
        sections: [
            {
                letter: 'W',
                title: 'WARM UP (obligatorio)',
                exercises: [
                    {
                        title: '2 rondas for quality',
                        items: [
                            '1’ Ski (sprint progresivo, RPE 7 → +1 cada 15”)',
                            '10 Thrusters (barra vacía)',
                            '10m Sled Drag (P.O)',
                            '1’ Rest',
                            '👉 Descanso adicional: 2’ antes del bloque principal.'
                        ]
                    }
                ]
            },
            {
                letter: 'A',
                title: 'LONG CONDITIONING',
                exercises: [
                    {
                        title: '4 rondas for quality',
                        items: [
                            '750m Ski Erg (RH)',
                            '40m Sled Push & Drag (P.O Pull) → alterna push/drag cada 10m',
                            '1000m Run (ritmo Z3)',
                            'Max Wall Ball UB (P.O) → intenta no perder más de 10 reps por ronda',
                            'Descanso entre rondas: 3’.'
                        ]
                    }
                ]
            }
        ],
        notes: '🔄 Rondas 3 y 4 (modificaciones):\n● Sled Push & Drag → 20 Devil Clean (2 × 17,5/12,5kg).\n● 1000m Run (Z3) → 500m Run (RH).\n● Quedando:\n750m Ski (RH) → 20 Devil Clean (2 × 17,5/12,5) → 500m Run (RH) → Max Wall Ball UB (controla la caída de reps).'
    },
    '2025-09-12': {
        week: 'Transición semana 1',
        day: 5,
        title: 'Interumbrales',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE OBLIGATORIO',
                exercises: [
                    {
                        title: '',
                        items: [
                            '10’ Run (20” más lento que tu Z2 en Test VAM) o RPE 4–5.'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'MAIN BLOCK',
                exercises: [
                    {
                        title: '4 × 9’ Run de la siguiente manera:',
                        items: [
                            '3 × (1’ Run Z3 + 2’ Run Z4).',
                            '2’ Rest caminando entre bloques.'
                        ]
                    }
                ]
            }
        ],
        notes: 'Si tu pulso no baja al 75–80% FC Max en el descanso, amplíalo a 3’.\nObjetivo: acumular trabajo en zona FTP (umbral de potencia funcional) → mejorar eficiencia en ritmos altos y capacidad de resintetizar lactato.'
    },
    '2025-09-13': {
        week: 'Transición semana 1',
        day: 6,
        title: 'Acondicionamiento Específico',
        sections: [
            {
                letter: 'A',
                title: 'BLOCK 1',
                exercises: [
                    {
                        title: 'For quality – entre cada ejercicio: 1000m BikeErg o 1250m Assault (RPE 7).',
                        items: [
                            'A) 250m Ski (ritmo Test 500)',
                            'B) 25m Sled Push (P.O +50kg)',
                            'C) 25m Sled Pull (P.O +25kg)',
                            'D) 100m Farmer Carry UB (P.O PRO)',
                            '👉 5’ Rest obligatorio antes del bloque 2.'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'BLOCK 2',
                exercises: [
                    {
                        title: 'For quality – entre cada ejercicio: 500m Run (Z5).',
                        items: [
                            'A) 500m Ski (RH)',
                            'B) 50m Sled Push (P.O)',
                            'C) 50m Sled Pull (P.O)',
                            'D) 200m Farmer Carry (P.O)'
                        ]
                    }
                ]
            }
        ],
        notes: 'buscamos adaptaciones controladas para soportar carrera a ritmos altos en fatiga.'
    },
    '2025-09-14': {
        week: 'Transición semana 1',
        day: 7,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-15': {
        week: 'Transición semana 2',
        day: 1,
        title: 'VO2MAX EXTENSIVO + FINISHER',
        sections: [
            {
                letter: 'A',
                title: 'VO2MAX EXTENSIVO + FINISHER',
                exercises: [
                    {
                        title: 'Warm Up',
                        items: ['Técnica de carrera', 'Pliométricos', 'Sprints cortos', '4 × 60m Sprint progresivo / 1´ Rest']
                    },
                    {
                        title: 'Bloque 1',
                        items: ['3 RONDAS FOR QUALITY', '4´ Run (Ritmo Z5)', '2´ Rest total (+1´ Rest adicional por ronda)', 'Tras último descanso (4´) → Directo a:']
                    },
                    {
                        title: 'Bloque 2',
                        items: ['3 RONDAS FOR QUALITY', '3´ Run (Ritmo Test VAM)', '3´ Rest total (+1´ Rest adicional por ronda)', 'Tras último descanso (5´) → Directo a:']
                    },
                    {
                        title: 'COMPROMISE RUN',
                        items: ['400m Run (Ritmo Hyrox) + 1´ Max Walking Lunge', '2´ Rest total', '400m Run (Ritmo Hyrox) + 1´ Max Burpee Broad Jump']
                    }
                ]
            }
        ],
        notes: 'Tu Ritmo Hyrox debería estar en torno a tu Z4 (±5”).\nRespeta los ritmos pautados (acelera cuando toque).'
    },
    '2025-09-16': {
        week: 'Transición semana 2',
        day: 2,
        title: 'ENGINE',
        sections: [
            {
                letter: 'A',
                title: 'STRESS CONDITIONING',
                exercises: [
                    {
                        title: 'Warm Up (Obligatorio)',
                        items: ['3 RONDAS FOR QUALITY', '8/8 DL unipodal (2×24/16kg)', '40m Farmer Carry (rack position)', '200m Ski Erg (sprint progresivo RPE 7 → 9)', '2´ Rest', '2´ Rest adicional y directo a:']
                    },
                    {
                        title: '3 RONDAS FOR QUALITY',
                        items: ['10/7 Cal Assault', '200m Run (Ritmo Z4)', '20m Sled Drag (P.O Pull +15kg)', '400m Ski Erg (Ritmo 2k Test)', '20 Deadlift (60/40kg)', '200m Run (Ritmo Z5)', '10 Box Jump Over', '3´ Rest total entre bloques']
                    }
                ],
                notes: 'Foco: ir de menos a más en cada ronda. Exígete desde el Sled Drag, sé inteligente con los DL: cuida técnica y divide si hace falta.'
            },
            {
                letter: 'B',
                title: 'FINISHER',
                exercises: [
                    {
                        title: 'EMOM 8´',
                        items: ['A) 20” Full Gas Assault / 20” Assault (RPE 5) / 20” Rest', 'B) 30” Max Burpee Broad Jump']
                    }
                ],
                notes: 'Céntrate en la respiración durante el burpee y evita las apneas.'
            }
        ]
    },
    '2025-09-17': {
        week: 'Transición semana 2',
        day: 3,
        title: 'INTERUMBRALES',
        sections: [
            {
                letter: 'A',
                title: 'INTERUMBRALES',
                exercises: [
                    {
                        title: 'Rodaje obligatorio',
                        items: ['5´ Run (20” más lento que Ritmo Z2 del Test VAM) o (RPE 4-5)', 'Y directo a:']
                    },
                    {
                        title: '',
                        items: ['3 × 15´ Run (con estructura):', '3 × 2´ Run (Ritmo Z2) / 3´ Run (Ritmo Z4)', '3´ Rest caminando']
                    }
                ]
            }
        ],
        notes: 'Si tu pulso no baja al 75-80% Fc Max en descanso, aumenta a 3´.\nObjetivo: acumular tiempo en zona de umbral de potencia funcional (FTP) → mejorar eficiencia en ritmos altos y resíntesis de lactato.'
    },
    '2025-09-18': {
        week: 'Transición semana 2',
        day: 4,
        title: 'ENGINE "MINDSET"',
        sections: [
            {
                letter: 'A',
                title: 'ENGINE "MINDSET"',
                exercises: [
                    {
                        title: 'Warm Up (Obligatorio)',
                        items: ['3 RONDAS FOR QUALITY', '8/5 Pull Up (BW)', '10 Bar Row (50/30kg)', '12 Cal Row Erg (ritmo progresivo RPE 7 → 9)', '2´ Rest', '2´ Rest adicional y directo a:']
                    },
                    {
                        title: 'LONG CONDITIONING',
                        items: ['4 RONDAS FOR QUALITY', '20m Sled Pull & Push (P.O Push)', '800m Row (Ritmo RH)', '200m Farmer Carry (P.O)', '20 Goblet Rear Lunge alterno (1xKB)', '200m Row (Ritmo 2k Test)', '10 Wall Ball Doble Rebound (P.O)', '3´ Rest total entre bloques']
                    }
                ]
            }
        ],
        notes: 'Progresión por ronda:\n● Farmer Carry → 40m menos cada ronda\n● Wall Ball → +5 reps cada ronda'
    },
    '2025-09-19': {
        week: 'Transición semana 2',
        day: 5,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-20': {
        week: 'Transición semana 2',
        day: 6,
        title: '1º TEST OFICIAL DE LA TEMPORADA – HYROX COMPLETO',
        sections: [
            {
                letter: 'A',
                title: 'HYROX COMPLETO',
                exercises: [
                    {
                        title: '',
                        items: ['1000m Run (RH)', '1000m Ski Erg (RH)', '1000m Run (RH)', '50m Sled Push (P.O)', '1000m Run (RH)', '50m Sled Pull (P.O)', '1000m Run (RH)', '80m Burpee Broad Jump', '1000m Run (RH)', '1000m Row Erg (RH)', '1000m Run (RH)', '200m Farmer Carry (P.O)', '1000m Run (RH)', '100m S. Lunge (P.O)', '1000m Run (RH)', '100 Wall Ball (P.O)']
                    }
                ]
            }
        ],
        notes: 'Ritmos de referencia:\n● Run Hyrox: ±5-10” de tu Z4\n● Ergs Hyrox: ±10” de tu 2k Test\nUsa los datos previos (ej. Test 500) para tu estrategia → cíñete a ella. Estamos a 3 semanas del evento: momento de arriesgar y medir.\nSi no compites en Valencia, no pasa nada: necesitamos feedback del estado actual igualmente.'
    },
    '2025-09-21': {
        week: 'Transición semana 2',
        day: 7,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-22': {
        week: 'Transición semana 3',
        day: 1,
        title: 'FUERZA ESPECÍFICA Y RESISTENCIA AL LACTATO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA ESPECÍFICA (RECORDATORIO)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '5 Front Squat (75% de tu 3RM) (RIR 2-3 / RPE 7-8)',
                            '5 Box Jump',
                            '2´ Rest'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '5 Press Vertical (70-75% de tu 3RM) (RIR 2-3 / RPE 7-8)',
                            '10 Push Press Wall Ball Heavy',
                            '2´ Rest'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'RESISTENCIA AL LACTATO',
                exercises: [
                    {
                        title: 'INTERVALOS (3 Rondas)',
                        items: [
                            '1´30 On / 30” Off (16´ Totales)',
                            'Cal Row (3” + rápido que 2K test)',
                            'Max metros Sled Push (+ 25kg P.O)',
                            'Max Burpee Broad Jump'
                        ],
                        notes: 'Cada final de ronda (tras el burpee BJ): 500m Run (RH), luego 1´ rest total.'
                    },
                    {
                        title: '8´ REST TOTAL → DIRECTO A',
                        items: []
                    },
                    {
                        title: 'INTERVALOS (3 Rondas) – 45”On / 15” Off (12’)',
                        items: [
                            'Max cal Ski (AFAP)',
                            'Max cal Bikerg (AFAP)',
                            'Max Wall Ball (P.O)',
                            'Rest total'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-09-23': {
        week: 'Transición semana 3',
        day: 2,
        title: 'VO2MAX INTENSIVO + COMPROMISE RUN',
        sections: [
            {
                letter: 'A',
                title: 'VO2MAX INTENSIVO',
                exercises: [
                    {
                        title: 'Warm up',
                        items: [
                            'técnica de carrera, pliométricos, sprints cortos…',
                            '4 × 100m Sprint progresivo (RPE 7 → 9 / 1´ Rest)'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '3´ Run (Ritmo P6 o VAM)',
                            '3´ Rest total',
                            '→ 2´ Rest adicional →'
                        ]
                    },
                    {
                        title: '3 RONDAS FOR QUALITY',
                        items: [
                            '1´ Run (AFAP)',
                            '2´ Rest total',
                            '→ 1´ Rest adicional →'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'COMPROMISE RUN',
                exercises: [
                    {
                        title: '',
                        items: [
                            '400m Run (Ritmo Hyrox) + 2´ Max Walking Lunge + 400m Run (Ritmo Hyrox) → 3´ Rest',
                            '400m Run (Ritmo Hyrox) + 1´ Burpee estático + 400m Run (Ritmo Hyrox)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-09-24': {
        week: 'Transición semana 3',
        day: 3,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-09-25': {
        week: 'Transición semana 3',
        day: 4,
        title: 'TRANSICIONES Y RESISTENCIA AL LACTATO',
        sections: [
            {
                letter: 'A',
                title: 'TRANSICIONES',
                exercises: [
                    {
                        title: 'Warm up (obligatorio) – 3 RONDAS',
                        items: [
                            '1´ Assault (RPE 6)',
                            '10 DL (60/40kg)',
                            '15” Sprint progresivo Ski Erg'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: [
                            '20” Sprint Assault',
                            '30m S. Lunge (P.O)',
                            '40” Ski erg (3-5” + rápido que tu 2K test)',
                            '30m Sled Drag UB (P.O +15kg)',
                            '200m Run (Z5)'
                        ],
                        notes: '2´ Rest (+30” por ronda)'
                    }
                ]
            },
            {
                letter: 'B',
                title: 'RESISTENCIA AL LACTATO (3 Rondas AFAP)',
                exercises: [
                    {
                        title: '',
                        items: [
                            '1000m Bikerg',
                            '400/800/1000m Row Erg',
                            '800m Run (RH)',
                            '20m Sled Pull (P.O +15kg, cada ronda +10m)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-09-26': {
        week: 'Transición semana 3',
        day: 5,
        title: 'INTER UMBRALES',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE INTER UMBRALES',
                exercises: [
                    {
                        title: 'Rodaje obligatorio',
                        items: [
                            '5´ Run (20” más lento que Z2 Test Vam o RPE 4-5)'
                        ]
                    },
                    {
                        title: '3 × 12´ Run',
                        items: [
                            '3 × (1´ Run Z2 / 3´ Run Z3) → No Rest',
                            '→ Tras último bloque: 3´ caminando →'
                        ]
                    },
                    {
                        title: '',
                        items: [
                            '8´ Run (Ritmo Hyrox)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-09-27': {
        week: 'Transición semana 3',
        day: 6,
        title: 'VO2MAX INTENSIVO (ERGÓMETROS)',
        sections: [
            {
                letter: 'A',
                title: 'Ski Erg (VO2MAX)',
                exercises: [
                    {
                        title: '',
                        items: [
                            '8 × 1´ AFAP / 1´ Rest'
                        ],
                        notes: 'Tras la 4ª: +20” Rest por ronda'
                    }
                ]
            },
            {
                letter: 'B',
                title: 'Row Erg (VO2MAX)',
                exercises: [
                    {
                        title: '',
                        items: [
                            '10-15´ Rest →',
                            '8 × 1´ AFAP / 1´ Rest'
                        ],
                        notes: 'Tras la 4ª: +20” Rest por ronda'
                    }
                ]
            }
        ],
        notes: 'Mete un gel de carbos sin cafeína tras finalizar el Ski'
    },
    '2025-09-28': {
        week: 'Transición semana 3',
        day: 7,
        title: 'RODAJE REGENERATIVO',
        sections: [
            {
                letter: 'A',
                title: 'Capacidad Aeróbica Extensiva',
                exercises: [
                    {
                        title: '',
                        items: [
                            '8 a 10 Km Run (70-75% FC MAX o 5-10” + lento que Z2 o RPE 5)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-09-29': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 1,
        title: 'FUERZA ESPECÍFICA Y RESISTENCIA AL LACTATO',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA ESPECÍFICA (RECORDATORIO)',
                exercises: [
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Peso Muerto Convencional (70-75% de tu 3RM) (RIR 3 / RPE 7-8)', '5 Broad Jump', '2\' Rest'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['5 Pull Up Heavy (RIR 1-2 / RPE 8-9)', '10 Cal Ski Sprint', '2\' Rest'] }
                ]
            },
            {
                letter: 'B',
                title: 'RESISTENCIA AL LACTATO (INTERVALOS)',
                exercises: [
                    {
                        title: 'Secuencia de Intervalos',
                        items: [
                            "1 ronda x 1' On / 30\" Off:", 'A) Max Cal Ski (3" + rápido que 2K test)', 'B) Max metros Sled Push (+ 25kg P.O)',
                            'Y Directo a: 400m Run (RH)', '1\' REST Y DIRECTO A:',
                            "1 ronda x 1'30 On / 30\" Off:", 'A) Max Cal Ski (RH)', 'B) Max metros Sled Push (+ 25kg P.O)',
                            'Y Directo a: 800m Run (Z3)', '2\' REST Y DIRECTO A:',
                            "1 ronda x 2' On / 30\" Off:", 'A) Max Cal Ski (5" + lento que 2K test)', 'B) Max metros Sled Push (P.O)',
                            'Y Directo a: 1200m Run (RH)'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'RESISTENCIA AL LACTATO 2.0',
                exercises: [
                    { title: "EMOM 12'", items: ['A) 15/12 Cal Row', 'B) 12/10 Burpee', 'C) 15m Sled Drag (P.O PUSH)', 'D) REST TOTAL'] }
                ]
            }
        ]
    },
    '2025-09-30': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 2,
        title: 'VO2MAX INTENSIVO',
        sections: [
            {
                letter: 'A',
                title: 'VO2MAX INTENSIVO',
                exercises: [
                    { title: 'WARM UP', items: ['Técnica de carrera, pliométricos, sprints cortos...', '5x 60m Sprint progresivo (RPE 7 → RPE 9) / 1′ Rest', 'Y DIRECTO A:'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['4\' Run (Ritmo P6 o VAM)', '4\' Rest total'] },
                    { title: '', items: ['2\' REST ADICIONAL TRAS ÚLTIMO DESCANSO (6\'), Y DIRECTO A:'] },
                    { title: '4 RONDAS FOR QUALITY', items: ['1\' Run (AFAP)', '2\' Rest Total'] },
                    { title: 'COMPROMISE RUN', items: ['2\' REST ADICIONAL TRAS ÚLTIMO DESCANSO (4\'), Y DIRECTO A:', '1. 400m Run (Ritmo Hyrox) + 2\' Max Burpee Broad Jump + 600m Run (Ritmo Hyrox)', '3\' Rest Total', '2. 400m Run (Ritmo Hyrox) + 2\' Air Squat + 600m Run (Ritmo Hyrox)'] }
                ]
            }
        ],
        notes: 'Tu Ritmo Hyrox debería estar en torno a tu Z4 (+5"). RESPETA LOS RITMOS PAUTADOS!!! (Acelera cuando toque)'
    },
    '2025-10-01': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 3,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-10-02': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 4,
        title: 'FUERZA ESPECÍFICA Y TRANSICIONES',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA ESPECÍFICA',
                exercises: [
                    { title: '3 RONDAS FOR QUALITY', items: ['8/8 Rear Lunge Alterno (barra tras nuca) (50/35kg)', '1\' Rest entre rondas'], notes: 'Realiza una primera serie extra con barra vacía' },
                    { title: '5 RONDAS FOR QUALITY', items: ['10m Sled Pull (80-85% TCM)', '1\' Rest entre rondas'] }
                ]
            },
            {
                letter: 'B',
                title: 'TRANSICIONES',
                exercises: [
                    {
                        title: 'FOR TIME',
                        items: [
                            '10/7 Cal Assault (AFAP)', '60m W. Lunge (BW)', '100m F. Carry (P.0)', '300m Run (AFAP)', '500m Row Erg (RH)', '2\' Rest',
                            '10/7 Cal Assault (AFAP)', '40m S. Lunge (P.0)', '150m F. Carry (P.0)', '300m Run (AFAP)', '500m Row Erg (RH)', '1\' Rest',
                            '15/12 Cal Assault (AFAP)', '20m S. Lunge (P.0)', '200m F. Carry (P.0)', '300m Run (AFAP)', '500m Row Erg (RH)'
                        ],
                        notes: 'Busca tu máximo ritmo en la primera secuencia e intenta mantener el tiempo de esa secuencia en las siguientes 2!'
                    }
                ]
            },
            {
                letter: 'C',
                title: 'FINISHER',
                exercises: [
                    {
                        title: '3 RONDAS AFAP',
                        items: ['10m Sled Drag (P.O PUSH)', '10m Sled Pull (P.0 Pull)'],
                        notes: 'Pon el peso extra para llegar al P.O PUSH con Kb o Db para quitarlas rápido en la transición del drag al pull, y corre a colocarlas tras el pull para volver a realizar el...'
                    }
                ]
            }
        ]
    },
    '2025-10-03': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 5,
        title: 'CAPACIDAD AERÓBICA EXTENSIVA + ATAQUES',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE + ATAQUES',
                exercises: [
                    {
                        title: '',
                        items: [
                            '10 Km Run (70-75% FC MAX) o (± 5" Ritmo Z2) o (RPE 5)',
                            'Cada 2 Km 500m Run (RH)'
                        ],
                        notes: 'El RPE durante los 500m debería subir a un 8 y luego poder volver a 5 durante los 2km restantes.'
                    }
                ]
            }
        ]
    },
    '2025-10-04': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 6,
        title: 'FULL GAS Y PERFECCIONAMIENTO',
        sections: [
            {
                letter: 'A',
                title: 'SKI ERG (VO2MAX)',
                exercises: [
                    {
                        title: '',
                        items: [
                            '10x 30" (AFAP) / 30" Rest',
                            '2\'30" REST ADICIONAL TRAS ÚLTIMA SERIE (3\'), Y DIRECTOS A',
                            '1000m Ski Erg (RH)',
                            '10\' REST (Gel 30gr carbo) Y DIRECTOS A'
                        ]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'ROW ERG (VO2MAX)',
                exercises: [
                    {
                        title: '',
                        items: [
                            '10x 30" (AFAP) / 30" Rest',
                            '2\'30" REST ADICIONAL TRAS ÚLTIMA SERIE (3\'), Y DIRECTOS A',
                            '1000m Row Erg (RH)'
                        ]
                    }
                ]
            },
            {
                letter: 'C',
                title: 'PERFECCIONAMIENTO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '1. 1200m Run (RH)', '50% Workout Debilidad (NO ERG)', '1\' Rest total y directo a',
                            '2. 800m Run (RH)', '100% Workout Debilidad (NO ERG)', '1\' Rest total y directo a',
                            '3. 800m Run (RH)', '100% Workout Debilidad (NO ERG)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-10-05': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN SEMANA 1',
        day: 7,
        title: 'CAPACIDAD AERÓBICA INTENSIVA',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE OBLIGATORIO',
                exercises: [
                    {
                        title: '',
                        items: [
                            '1 Km Run (70% FC MAX) o (10" + lento que tu Ritmo Z2) o (RPE 4-5)',
                            'Y DIRECTO A',
                            '5 Km Run (80-85% FC MAX) o (± 5" Ritmo Z3) o (RPE 7)',
                            'Y DIRECTO A',
                            '1 Km Run (70% FC MAX) o (10" + lento que tu Ritmo Z2) o (RPE 4-5)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-10-06': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 1,
        title: 'Competición / Acondicionamiento',
        sections: [
            {
                letter: 'A',
                title: 'Si Compites Viernes',
                exercises: [{ title: 'HYROX VALENCIA', items: ['ES HORA DE DISFRUTAR', 'NOS VEMOS EN EL ROXZONE'] }]
            },
            {
                letter: 'B',
                title: 'Si Compites Sábado o Domingo',
                exercises: [{ title: 'Capacidad Aeróbica & Esfuerzo del núcleo', items: ['NO OBLIGATORIO PARA LOS COMPETIDORES DEL SÁBADO', 'Descanso: 12 horas de 9h-21h', '20\' Run - (RPE 5)', 'Core x 3 - 1\' Run (RPE 5-6)'] }]
            },
            {
                letter: 'C',
                title: 'No Competidores',
                exercises: [
                    { title: 'Warm Up', items: ['1\' Assault Bike'] },
                    { title: 'Bloque 1', items: ['6 × (40\'\' / 20\'\')', '4 Burpee over Bar', '4 Burpee over Bar', '4 Burpee over Bar', '6\' Rest y Directo a:'] },
                    { title: 'Bloque 2 (Metcon - Por parejas / "For 2")', items: ['10\' E.M.O.M:', '± 40/30 Cal + 200/150m Sled Pull (P.D)', '200/150m Sled Pull (P.D) + 3\' Max S. Lunge (P.D)', '3\' Max F. Carry (P.D)', '(Si lo haces por parejas lo completas en ± 6\' por parejas o for one)', '6\' Rest y Directo a:'] },
                    { title: 'Bloque 3 (Aerobic Capacity)', items: ['20\' Run / Bikerg / Row (RPE 5)', 'Core x 3 (30\'\' Plancha, 30\'\' Hollow Rock, 30\'\' V Ups)', 'Core x 3 (30\'\' Plancha, 30\'\' Hollow Rock, 30\'\' V Ups)'] }
                ]
            }
        ]
    },
    '2025-10-07': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 2,
        title: 'Competición / Fuerza',
        sections: [
            { letter: 'A', title: 'Competidores del Viernes', exercises: [{ title: 'DÍA DE DESCANSO', items: ['OBLIGATORIO'] }] },
            { letter: 'B', title: 'Competidores del Sábado', exercises: [{ title: 'HYROX VALENCIA', items: ['ES HORA DE DISFRUTAR', 'NOS VEMOS EN EL ROXZONE'] }] },
            { letter: 'C', title: 'Competidores del Domingo', exercises: [{ title: 'Rodaje de Activación', items: ['Calentamiento de activación: 2x 20\' Burpees', '20\' Run (RPE 5)', 'Core x 3 - 1\' Run (RPE 5-6)'] }] },
            {
                letter: 'D',
                title: 'No Competidores',
                exercises: [
                    { title: 'Fuerza Básica', items: ['4 Rondas for Quality: 5/5/4/3/2 RPE 7/8/9/10', '4 Rondas for Quality: 5/5/4/3/2 RPE 7/8/9/10', '2\' Rest entre rondas'] },
                    {
                        title: 'Acondicionamiento Específico',
                        items: [
                            'Un Acabado de Transición', '500m Row', '500m Bike', '500m Ski',
                            '15\' E.M.O.M: (2\' Rest sobre la última serie)',
                            '30\'\' Box Jump (P.D)', '30\'\' Push Up (P.D)', '30\'\' Push Up (P.D)', '30\'\' Push Up (P.D)',
                            '30\'\' Run (RH)', '30\'\' Run (RH)', '30\'\' Run (RH)',
                            '500m Row (RH)', '100m Sandbag Lunge (P.D)', '2\' Rest', '100m Sandbag Lunge (P.D)', '500m Row (RH)'
                        ],
                        notes: 'Aprovecha a subir el Ritmo del Row con chaleco.'
                    }
                ]
            }
        ]
    },
    '2025-10-08': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 3,
        title: 'Entrenamiento por definir',
        sections: []
    },
    '2025-10-09': { week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2', day: 4, title: 'Día de descanso', restDay: true, sections: [] },
    '2025-10-10': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 5,
        title: 'Entrenamiento por definir',
        sections: []
    },
    '2025-10-11': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 6,
        title: 'Competición / Descanso / Acondicionamiento',
        sections: [
            { letter: 'A', title: 'Competidores del Viernes', exercises: [{ title: '', items: ['DÍA DE DESCANSO OBLIGATORIO'] }] },
            { letter: 'B', title: 'Competidores del Sábado', exercises: [{ title: 'HYROX VALENCIA', items: ['ES HORA DE DISFRUTAR FAMILIA', 'NOS VEMOS EN EL ROXZONE'] }] },
            { letter: 'C', title: 'Competidores del Domingo', exercises: [{ title: 'OPCIÓN 1: DESCANSO OBLIGATORIO', items: [] }, { title: 'OPCIÓN 2: SI NO LO HAS HECHO', items: ['CAPACIDAD PSICOLÓGICA O ENTRENO DEL MIEDO', '20\' Run - (RPE 5)', 'Cada 4\'-> 1\' Run (RPE 7-8)'] }] },
            {
                letter: 'D',
                title: 'No Competidores',
                exercises: [
                    { title: 'FUERZA BÁSICA', items: ['4 RONDAS FOR QUALITY', '12/12/8/8 Press Banca (RIR 2)/(RPE 7-8)', '6 Push Up plio', '2\' Rest entre rondas'] },
                    {
                        title: 'ACONDICIONAMIENTO ESPECÍFICO',
                        items: [
                            'UN AFAP DISFRUTÓN:', 'CASH IN: 1000m Run (RPE 6)',
                            '2 RONDAS - (2\' Rest entre ellas)', '500/400m Row (RPE 8)', '25m Sled Pull (P.O +15kg)', '10 Front Squat (40/25kg)', '5 Push Press (40/25kg)', '10 Burpee Pull Up', '25 Wall Ball UB (P.0)', '500/400m Ski (RPE 8)',
                            'CASH OUT: 2000m Bikerg (AFAP)'
                        ],
                        notes: 'Aprieta y disfruta, sigue los estándares de cada ejercicio!'
                    }
                ]
            }
        ]
    },
    '2025-10-12': {
        week: 'PREPARATORIO ESPECÍFICO REALIZACIÓN, SEMANA 2',
        day: 7,
        title: 'Post-Competición / Descanso',
        sections: [
            { letter: 'A', title: 'Competidores del Viernes', exercises: [{ title: 'Rodaje Regenerativo', items: ['30\' Run (RPE 5-6)', '(85% FC MAX)'] }] },
            { letter: 'B', title: 'Competidores del Sábado', exercises: [{ title: 'DÍA DE DESCANSO', items: ['OBLIGATORIO'] }] },
            { letter: 'C', title: 'Competidores del Domingo', exercises: [{ title: 'HYROX VALENCIA', items: ['ES HORA DE DISFRUTAR', 'NOS VEMOS EN EL ROXZONE'] }] },
            { letter: 'D', title: 'No Competidores', exercises: [{ title: 'DÍA DE DESCANSO', items: ['OBLIGATORIO'] }], notes: 'COMENZAMOS BLOQUE NUEVO' }
        ]
    },
    '2025-10-13': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 1,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY (SUPERSET):',
                        items: ['7 RDL (RIR 3/RPE 7)', '5 Sled Drag (DL + TIRÓN) (P.O PULL)', "2' Rest"]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY:',
                        items: ['8 Bar Row Heavy (RIR 1-2/RPE 8-9) *agarre supino', '10" ISO HOLD Chin Up', "2' Rest"]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY:',
                        items: ['75m F. Carry UB (P.O)', '10m Sled Drag (70-75% TCM)', 'NO REST']
                    }
                ]
            },
            {
                letter: 'C',
                title: 'CAPACIDAD AERÓBICA INTENSIVA (ERG)',
                exercises: [
                    {
                        title: 'FOR TIME',
                        items: [
                            '3 Km Ski Erg (20" + lento que tu 2K Test) + 4 Km Assault Bike (RPE 6-7)',
                            '2 Km Ski Erg (15" + lento que tu 2K Test) + 3 Km Assault Bike (RPE 7-8)'
                        ]
                    }
                ],
                notes: 'No hay descanso en el For time más allá de lo que tardes en cambiar de máquina.\nLa Assault Bike la medimos en RPE pero si te sirve de ayuda, el nivel de intensidad que te pido en la 1ª ronda de bici es uno el cual podrías conversar de manera costosa con un amigo. En la 2ª ronda de bici no podrías hilar frases de más de 3 palabras.'
            }
        ]
    },
    '2025-10-14': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 2,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'CAPACIDAD AERÓBICA EXTENSIVA (LONG RUN)',
                exercises: [
                    {
                        title: 'RODAJE',
                        items: [
                            "5' Run (15\" más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)",
                            'Y DIRECTO A',
                            '25′ Run (70-75% Fc max) o (Ritmo Z2) / (RPE 5)',
                            '15′ Run (80-85% Fc max) o (Ritmo Z3) / (RPE 6-7)',
                            '15′ Run (65-70% Fc max) o (10" más lento que tu ritmo Z2)/(RPE 4) * Kilómetro de ajuste',
                            "5' Run (80-85% Fc max) o (Ritmo Z3)/(RPE 7)",
                            'No cool down'
                        ]
                    }
                ],
                notes: 'Si puedes, realiza el entreno en ayunas.\nNos viene genial cambiar de estímulo y seguir trabajando la flexibilidad metabólica.\nSi no puedes no te preocupes, pero intenta no meter hasta el entreno mucho carbohidrato.'
            }
        ]
    },
    '2025-10-15': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 3,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: ["8/8 Bulgarian Split (carga en posición goblet) (RPE 8 tras última rep)", "1' 30 Rest", '* Realiza una primera serie sin carga externa para calentar']
                    },
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: ["4 Press Vertical Estricto (80% del 3RM) o (RIR 2/RPE 8-9)", "4 Push Press (misma carga y seguido al estricto)", "2' Rest"]
                    }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA',
                exercises: [
                    {
                        title: '5 RONDAS FOR QUALITY',
                        items: ["10m Sled Push (75-80% TCM)", "30 Wall Ball UB (P.O) (-5 reps por ronda)", "1' Rest entre rondas"]
                    }
                ],
                notes: 'Intenta meter los 10m UB siempre que puedas.\nCorre del trineo al wall ball para que la transición sea lo más efectiva posible'
            },
            {
                letter: 'C',
                title: 'POTENCIA AERÓBICA (ROW)',
                exercises: [
                    {
                        title: '2 RONDAS FOR QUALITY (ROW ERG)',
                        items: ["3 x 2' (20\" más lento que 2k Test)", "+ 2′ (5\" más lento que 2k Test)", "+ 4 a 6' Rest entre rondas"]
                    }
                ],
                notes: 'El 3x (2+2) se hace de manera consecutiva. Eso sería una ronda.'
            }
        ]
    },
    '2025-10-16': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 4,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-10-17': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 5,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA + VO2MAX',
                exercises: [
                    { title: 'WARM UP', items: ["2 Km Run (Ritmo Z2)", "2' REST Y DIRECTO A"] },
                    { title: 'Bloque 1:', items: ['4 x 10" Run (RPE 8-9) / 50" rest', "1'10 REST ADICIONAL Y DIRECTO"] },
                    { title: 'Bloque 2:', items: ["5 x 400m Run (AFAP) / 1'30 Rest", "5 x 400m Run (AFAP) / 1'30 Rest"] },
                    { title: 'Bloque 3 (Chaleco):', items: ["2' REST ADICIONAL TRAS ÚLTIMA SERIE Y DIRECTO A", '5 x 400m Run (Ritmo última serie del anterior bloque) / Rest 1:1'] },
                    { title: 'Cool Down:', items: ['TRAS ÚLTIMO DESCANSO, DIRECTO A', '1 x 1000m Run (RH)', 'Y DIRECTO A', '2 Km Run COOL DOWN (RPE 4)'] }
                ],
                notes: 'RESPETA LOS RITMOS DE ZONA PAUTADAS (NO TE ACELERES)\nACELERA CUANDO TOQUE!'
            }
        ]
    },
    '2025-10-18': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 6,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'BLOQUE 1',
                        items: ['2000m Assault Bike', '30 Devil Press Alterno (17,5/12,5kg)', '1000m Ski Erg (RH)', '60m S. Lunge (2×17,5/12,5)', "2' REST Y DIRECTO A"]
                    },
                    {
                        title: 'BLOQUE 2',
                        items: ['1000m Row (RH)', '30m Sled Push (P.O + 50kg)', '1000m Bikerg/Assault', '60 Thruster (Empty Bar)', "2' REST Y DIRECTO A"]
                    },
                    {
                        title: 'BLOQUE 3',
                        items: [
                            '150m F. Carry (P.0)',
                            '30m Sled Pull (P.O +25kg)',
                            '150m F. Carry (P.0)',
                            '1000M Run'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-10-19': {
        week: 'Preparatorio específico, Tapering, semana 3.',
        day: 7,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE REGENERATIVO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: ['45′ Run (70% FC max) / ± 5" Ritmo Z2 / RPE 5']
                    }
                ]
            }
        ]
    },
    '2025-10-20': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 1,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY (SUPERSET):',
                        items: ['7 RDL (RIR 3/RPE 7)', '5 Sled Drag (DL + TIRÓN) (P.O PULL)', '2\' Rest']
                    },
                    {
                        title: '4 RONDAS FOR QUALITY:',
                        items: ['8 Bar Row Heavy (RIR 1-2/RPE 8-9) *agarre supino', '10" ISO HOLD Chin Up', '2\' Rest']
                    }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY:',
                        items: ['75m F. Carry UB (P.O)', '10m Sled Drag (70-75% TCM)', 'NO REST']
                    }
                ]
            },
            {
                letter: 'C',
                title: 'CAPACIDAD AERÓBICA INTENSIVA (ERG)',
                exercises: [
                    {
                        title: 'FOR TIME',
                        items: [
                            '3 Km Ski Erg (20" + lento que tu 2K Test) + 4 Km Assault Bike (RPE 6-7)',
                            '2 Km Ski Erg (15" + lento que tu 2K Test) + 3 Km Assault Bike (RPE 7-8)'
                        ]
                    }
                ],
                notes: 'No hay descanso en el For time más allá de lo que tardes en cambiar de máquina.\nLa Assault Bike la medimos en RPE pero si te sirve de ayuda, el nivel de intensidad que te pido en la 1ª ronda de bici es uno el cual podrías conversar de manera costosa con un amigo. En la 2ª ronda de bici no podrías hilar frases de más de 3 palabras.'
            }
        ]
    },
    '2025-10-21': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 2,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'CAPACIDAD AERÓBICA EXTENSIVA (LONG RUN)',
                exercises: [
                    {
                        title: 'RODAJE',
                        items: [
                            '5\' Run (15" más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)',
                            'Y DIRECTO A',
                            '25′ Run (70-75% Fc max) o (Ritmo Z2) / (RPE 5)',
                            '15′ Run (80-85% Fc max) o (Ritmo Z3) / (RPE 6-7)',
                            '15′ Run (65-70% Fc max) o (10" más lento que tu ritmo Z2)/(RPE 4) * Kilómetro de ajuste',
                            '5\' Run (80-85% Fc max) o (Ritmo Z3)/(RPE 7)',
                            'No cool down'
                        ]
                    }
                ],
                notes: 'Si puedes, realiza el entreno en ayunas.\nNos viene genial cambiar de estímulo y seguir trabajando la flexibilidad metabólica.\nSi no puedes no te preocupes, pero intenta no meter hasta el entreno mucho carbohidrato.'
            }
        ]
    },
    '2025-10-22': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 3,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA (RECORDATORIO)',
                exercises: [
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: ['8/8 Bulgarian Split (carga en posición goblet) (RPE 8 tras última rep)', '1\' 30 Rest', '* Realiza una primera serie sin carga externa para calentar']
                    },
                    {
                        title: '4 RONDAS FOR QUALITY',
                        items: ['4 Press Vertical Estricto (80% del 3RM) o (RIR 2/RPE 8-9)', '4 Push Press (misma carga y seguido al estricto)', '2\' Rest']
                    }
                ]
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA',
                exercises: [
                    {
                        title: '5 RONDAS FOR QUALITY',
                        items: ['10m Sled Push (75-80% TCM)', '30 Wall Ball UB (P.O) (-5 reps por ronda)', '1\' Rest entre rondas']
                    }
                ],
                notes: 'Intenta meter los 10m UB siempre que puedas.\nCorre del trineo al wall ball para que la transición sea lo más efectiva posible'
            },
            {
                letter: 'C',
                title: 'POTENCIA AERÓBICA (ROW)',
                exercises: [
                    {
                        title: '2 RONDAS FOR QUALITY (ROW ERG)',
                        items: ['3 x 2\' (20" más lento que 2k Test)', '+ 2′ (5" más lento que 2k Test)', '+ 4 a 6\' Rest entre rondas']
                    }
                ],
                notes: 'El 3x (2+2) se hace de manera consecutiva. Eso sería una ronda.'
            }
        ]
    },
    '2025-10-23': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 4,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-10-24': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 5,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA + VO2MAX',
                exercises: [
                    { title: 'WARM UP', items: ['2 Km Run (Ritmo Z2)', '2\' REST Y DIRECTO A'] },
                    { title: 'Bloque 1:', items: ['4 x 10" Run (RPE 8-9) / 50" rest', '1\'10 REST ADICIONAL Y DIRECTO'] },
                    { title: 'Bloque 2:', items: ['5 x 400m Run (AFAP) / 1\'30 Rest', '5 x 400m Run (AFAP) / 1\'30 Rest'] },
                    { title: 'Bloque 3 (Chaleco):', items: ['2\' REST ADICIONAL TRAS ÚLTIMA SERIE Y DIRECTO A', '5 x 400m Run (Ritmo última serie del anterior bloque) / Rest 1:1'] },
                    { title: 'Cool Down:', items: ['TRAS ÚLTIMO DESCANSO, DIRECTO A', '1 x 1000m Run (RH)', 'Y DIRECTO A', '2 Km Run COOL DOWN (RPE 4)'] }
                ],
                notes: 'RESPETA LOS RITMOS DE ZONA PAUTADAS (NO TE ACELERES)\nACELERA CUANDO TOQUE!'
            }
        ]
    },
    '2025-10-25': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 6,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'BLOQUE 1',
                        items: [
                            '2000m Assault Bike',
                            '30 Devil Press Alterno (17,5/12,5kg)',
                            '1000m Ski Erg (RH)',
                            '60m S. Lunge (2×17,5/12,5)',
                            '2\' REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: 'BLOQUE 2',
                        items: [
                            '1000m Row (RH)',
                            '30m Sled Push (P.O + 50kg)',
                            '1000m Bikerg/Assault',
                            '60 Thruster (Empty Bar)',
                            '2\' REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: 'BLOQUE 3',
                        items: [
                            '150m F. Carry (P.0)',
                            '30m Sled Pull (P.O +25kg)',
                            '150m F. Carry (P.0)',
                            '1000M Run'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-10-26': {
        week: 'Preparatorio específico. Ajuste . Semana 4',
        day: 7,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE REGENERATIVO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: ['45′ Run (70% FC max) / ± 5" Ritmo Z2 / RPE 5']
                    }
                ]
            }
        ]
    },
    '2025-10-27': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 1,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA',
                exercises: [
                    {
                        title: "Límite 15'",
                        items: [
                            'Encuentra 3 Heavy reps de Back Squat',
                            '* Empieza trabajando a 5-4 repeticiones hasta que el peso te obligue a solo hacer 3 repeticiones',
                            '* Descansa un mínimo de 2\' entre series'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY (Bi-serie)',
                        items: [
                            '8 Press Banca (2xDB) (RIR 2) o (RPE 7-8 tras última rep)',
                            '8 Ring Row',
                            '2\' Rest'
                        ]
                    }
                ],
                notes: 'Pres banca: Puedes ajustar el peso al RIR durante las series\nRing Row: Tumbado con piernas extendidas, si no tienes anillas utiliza una barra en el rack'
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA + TÉCNICA',
                exercises: [
                    {
                        title: '5 RONDAS FOR QUALITY',
                        items: [
                            '5 Hang Power Clean (60% Rm) o (RPE 6-7)',
                            '5 Box Jump (Máxima altura posible por capacidad)',
                            '1\' Rest'
                        ]
                    },
                    {
                        title: '3 RONDAS FOR QUALITY',
                        items: [
                            '5m Sled Pull (DL + TIRÓN) (80% TCM) + 5m Sled Drag',
                            '1\'30 Rest'
                        ]
                    }
                ],
                notes: 'Utilizamos el drag para devolver el trineo a la distancia de inicio y simpre tirar desde 10m'
            },
            {
                letter: 'C',
                title: 'CAPACIDAD AERÓBICA (ROW ERG)',
                exercises: [
                    {
                        title: 'FOR QUALITY (ROW ERG)',
                        items: [
                            '5 × 4\' (15-20" más lento que 2k Test) / (RPE 5-6)',
                            '+ 1\' (5" más lento que 2k Test) / (RPE 8)'
                        ]
                    }
                ],
                notes: 'SE REALIZA DE MANERA CONSECUTIVA HASTA COMPLETAR LOS 25\''
            }
        ]
    },
    '2025-10-28': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 2,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'CAPACIDAD AERÓBICA EXTENSIVA (LONG RUN)',
                exercises: [
                    {
                        title: 'RODAJE',
                        items: [
                            '5\' Run (15-20" más lento que tu Ritmo Z2) o (RPE 4)',
                            'Y DIRECTO A',
                            '30′ Run (70-75% Fc max) o (Ritmo Z2) / (RPE 5-6)',
                            '10′ Run (80-85% Fc max) o (Ritmo Z3) / (RPE 7)',
                            '20′ Run (70-75% Fc max) o (Ritmo Z2) / (RPE 5-6)',
                            '10′ Run (80-85% Fc max) o (Ritmo Z3) / (RPE 7)',
                            'No cool down'
                        ]
                    }
                ],
                notes: 'VOLVEMOS A ACUMULAR UN MAYOR VOLVEMEN DE KILOMETROS A MEDIA-BAJA INTENSIDAD, NO SOLO POR LA IMPORTANCIA DE SEGUIR MEJORANDO MECÁNICA Y FISIOLOGICAMENTE, SINO QUE TAMBIEN, POR SU AJUSTE CON EN EL PERIODO DE TRABAJO DE FUERZA EN LA ESTRUCTURA SEMANAL.'
            }
        ]
    },
    '2025-10-29': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 3,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'FUERZA BÁSICA',
                exercises: [
                    {
                        title: "Límite 15'",
                        items: [
                            'Encuentra 3 Heavy reps de Press Vertical',
                            '* Empieza trabajando a 5-4 repeticiones hasta que el peso te obligue a solo hacer 3 repeticiones',
                            '* Descansa un mínimo de 2\' entre series'
                        ]
                    },
                    {
                        title: '4 RONDAS FOR QUALITY (BI-serie)',
                        items: [
                            '5 Peso Muerto Convencional (75-80% de tu 3RM) /(RIR 2-3) o (RPE 7-8)',
                            'Max Strict Pull up (bw) / (RIR 2) o (RPE 8-9 tras última rep)',
                            '2\' Rest'
                        ]
                    }
                ],
                notes: 'En el Pull up.. buscamos máximas reps dejando siempre 2 en reserva o lo que es lo mismo, parar de trabajar cuando crea que solo pueda hacer 2 más. Si no eres capaz de realizar Pull up, asiste con goma para llegar a un máximo de 5 reps (rir 0-1)'
            },
            {
                letter: 'B',
                title: 'FUERZA ESPECÍFICA + TÉCNICA',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '4 × 10m Sled Push (75-80% TCM) + 20m Shuttle Run (ida y vuelta al trineo)',
                            'no rest entre series',
                            '2\' REST Y DIRECTO A'
                        ]
                    },
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '4 × 10m Sled Push (P.O + 25kg) + 20m Shuttle Run (ida y vuelta al trineo)',
                            'no rest entre series'
                        ]
                    }
                ],
                notes: 'El objetivo del Shuttle run es resetear las piernas para ser capaz de seguir empujando fuerte y eficiente el trineo'
            },
            {
                letter: 'C',
                title: 'ENGINE',
                exercises: [
                    {
                        title: "EMOM 20'",
                        items: [
                            'A) 16/14 Cal Ski',
                            'B) 24 Rear Lunge (P.0)',
                            'C) 16 Db Snatch (20/12,5kg)',
                            'D) 24 Side to Side Box Jumps'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-10-30': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 4,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        restDay: true,
        sections: []
    },
    '2025-10-31': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 5,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'POTENCIA AERÓBICA + VO2MAX',
                exercises: [
                    { title: 'WARM UP', items: ['1 Km Run (Ritmo Z2)', '2\' REST Y DIRECTO A'] },
                    { title: 'Bloque 1:', items: ['4 × 10" Run (RPE 8-9) / 50" rest', '1\'10 REST ADICIONAL Y DIRECTO'] },
                    { title: 'Bloque 2:', items: ['4 × 400m Run (AFAP) / 1\' Rest', '4 × 400m Run (AFAP) / 1\' Rest'] },
                    { title: 'Bloque 3 (Chaleco):', items: ['2\' REST ADICIONAL TRAS ÚLTIMA SERIE (3\') Y DIRECTO A', '4 × 400m Run (Ritmo última serie del anterior bloque) / Rest 1:1'] },
                    { title: 'Bloque 4 (Run RH):', items: ['2\' REST ADICIONAL TRAS ÚLTIMA SERIE Y DIRECTO A', '4 × 400m Run (RH) / 1\' Rest'] },
                    { title: 'Cool Down:', items: ['TRAS ÚLTIMO DESCANSO, DIRECTO A', '1 × 1200m Run (RH)', 'Y DIRECTO A', '1 Km Run COOL DOWN (RPE 4)'] }
                ],
                notes: 'RESPETA LOS RITMOS DE ZONA PAUTADAS (NO TE ACELERES)\nACELERA CUANDO TOQUE!'
            }
        ]
    },
    '2025-11-01': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 6,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'ERGATHLON MODIFICADO',
                exercises: [
                    {
                        title: 'AEROBIC CAPACITY (FOR TIME)',
                        items: [
                            '2,5 Km Ski Erg',
                            'Transición a Bikerg → 50m Sled Pull (P.O)',
                            '5 Km Bikerg',
                            'Transición a Row Erg → 50 Wall Ball (P.O)',
                            '2,5 Km Row Erg',
                            'Transición a Run → 200m Farmer Carry (P.O)',
                            '2 Km Run',
                            'Transición a Run → 200m Farmer Carry (P.O)',
                            '2 Km Run'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-11-02': {
        week: 'Preparatorio específico. Ajuste acumulado. Semana 5.',
        day: 7,
        title: 'HP Classic - Inicio de la Pretemporada 2025-2026',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE ACUMULATIVO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '45′ Run (70% FC max) / ± 5" Ritmo Z2 / RPE 5-6'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-11-03': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 1,
        title: 'ENGINE "MINDSET"',
        sections: [
            {
                letter: 'W',
                title: 'WARM UP “OBLIGATORIO”',
                exercises: [
                    {
                        title: '3 Rondas – For Quality',
                        items: [
                            '1’ Ski (Sprint progresivo) → RPE 6, y cada 15” +1 en RPE',
                            '5 “Parcial” Back Squat Jump (40/25 kg)',
                            '5 Burpee to Target',
                            '1’ Rest',
                            '2’ Rest total adicional y directo a:'
                        ]
                    }
                ]
            },
            {
                letter: 'A',
                title: 'LONG CONDITIONING',
                exercises: [
                    {
                        title: '4 Rondas – For Time',
                        items: [
                            '1200 / 800 / 600 / 400 m Ski (RH)',
                            '8 Back Squat (50–60% del peso encontrado la semana pasada)',
                            '500 m Run (Ritmo Z3)',
                            '80 m Burpee Broad Jump (-20 m por ronda)',
                            '500 m Run (RH)',
                            'Descanso: 4’ Rest entre bloques (–1’ Rest por ronda)'
                        ]
                    }
                ]
            }
        ],
        notes: 'QUE NO OS ENGAÑE EL SOLO VER ESCRITO UNA SECCIÓN, ES UN TRABAJO LARGO Y DURO.'
    },
    '2025-11-04': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 2,
        title: 'CAPACIDAD AERÓBICA EXTENSIVA',
        sections: [
            {
                letter: 'A',
                title: 'RODAJE',
                exercises: [
                    {
                        title: '',
                        items: [
                           '5’ Run → (15–20” más lento que tu Ritmo Z2) o (RPE 4)',
                           'Y directo a:'
                        ]
                    },
                    {
                        title: 'Bloque 1',
                        items: [
                            '3 Km Run → (80–85% Fc máx) o (Ritmo Z3) / (RPE 7)',
                            'Y directo a:'
                        ]
                    },
                    {
                        title: 'Bloque 2',
                        items: [
                            '7 Km Run → (70–75% Fc máx) o (Ritmo Z2) / (RPE 5–6)',
                            'NO COOL DOWN'
                        ]
                    }
                ]
            }
        ],
        notes: 'El objetivo es estimular la vía oxidativa y glucolítica de manera intensa en la primera parte, para que posteriormente, en la bajada de intensidad, el cuerpo busque eficiencia y energía en la resíntesis del lactato. Otro de los objetivos es que, de esta manera, el volumen total de entrenamiento no tiene que ser tan largo para conseguir las mismas mejoras (“aeróbicamente” hablando).'
    },
    '2025-11-05': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 3,
        title: 'ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'W',
                title: 'WARM UP ESPECÍFICO (OBLIGATORIO)',
                exercises: [
                    {
                        title: '4 Rondas – For Quality (Superset)',
                        items: [
                            '5 RDL (RIR 3 / RPE 7)',
                            '10 m Sled Drag (P.O Push)',
                            '2’ Rest'
                        ]
                    },
                     {
                        title: '3 Rondas – For Quality (Superset)',
                        items: [
                            '10” ISO HOLD Press vertical (arriba) (40/25 kg) / (RPE 7)',
                            '6–8 Push Press (mismo peso y seguido) / (RPE 7)',
                            '2’ Rest'
                        ]
                    }
                ],
                notes: 'Recuerda que puedes ajustar la carga (para arriba o para abajo) según tu RPE.'
            },
            {
                letter: 'B',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'EMOM 40’',
                        items: [
                            'A) 13/10 Cal Assault',
                            'B) 10 m Sled Pull (80% TCM)',
                            'C) 24 Wall Ball (P.O) (–2 reps por ronda)',
                            'D) 16 / 13 Cal Row Erg',
                            'E) REST'
                        ]
                    }
                ],
                notes: 'Trabajo a nivel fisiológico y mental muy duro, aprovecha el 1’ rest para recuperar al máximo.'
            },
            {
                letter: 'C',
                title: 'COOL DOWN (OBLIGATORIO)',
                exercises: [
                    {
                        title: '',
                        items: ['15’ Bikerg (RPE 4)']
                    }
                ]
            }
        ]
    },
    '2025-11-06': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 4,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    },
    '2025-11-07': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 5,
        title: 'VO2 MAX + POTENCIA AERÓBICA',
        sections: [
            {
                letter: 'A',
                title: 'INTERVALOS DE CARRERA',
                exercises: [
                    {
                        title: 'WARM UP',
                        items: [
                            '1 Km Run → (Ritmo Z2) / (RPE 4–5)',
                            '2’ Rest y directo a:',
                            '4 × 10” Run (RPE 8–9) / 50” Rest',
                            '1’10” Rest adicional y directo a:'
                        ]
                    },
                    {
                        title: 'INTERVALOS',
                        items: [
                            '2 × 800 m Run (AFAP) / Rest 1:1',
                            '2’ Rest adicional tras último descanso y directo a:',
                            '2 × 800 m Run (Ritmo Z5) / Rest 2’',
                            '3’ Rest adicional tras último descanso y directo a:',
                            '6 × 400 m Run (AFAP) / Rest 1:1'
                        ]
                    },
                    {
                        title: 'COOL DOWN',
                        items: [ 'Y directo a:', '1 Km Run (Ritmo Z2) / (RPE 4–5)' ]
                    }
                ]
            }
        ],
        notes: 'Respeta los ritmos de zona pautadas (no te aceleres). ¡Acelera cuando toque!'
    },
    '2025-11-08': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 6,
        title: 'ACONDICIONAMIENTO ESPECÍFICO',
        sections: [
            {
                letter: 'A',
                title: 'ACONDICIONAMIENTO ESPECÍFICO',
                exercises: [
                    {
                        title: 'FOR QUALITY',
                        items: [
                            '10’ Row Erg (RPE 5–6)',
                            '50 m F. Carry Pinch (2 × 10/5 kg)',
                            '100 m F. Carry (rack position) (P.O)',
                            '150 m F. Carry (P.O)',
                            '30 V-Sit alterno',
                            '--- 5’ Rest y directo a: ---'
                        ]
                    },
                    {
                        title: 'AFAP - BLOQUE 1',
                        items: [
                            '2000 m Bikerg',
                            '25 m Sled Push (80% TCM)',
                            '15 Burpee Box Jump Over',
                            '1000 m Bikerg',
                            '50 m Sled Push (P.O)',
                            '30 Box Step Up (P.O Sandbag)',
                            '500 m Run (Ritmo Z3)',
                            '--- 5’ Rest y directo a: ---'
                        ]
                    },
                    {
                        title: 'AFAP - BLOQUE 2',
                        items: [
                            '1500 m Ski Erg',
                            '25 m Sled Pull & Drag (P.O +25/15 kg) → alterno pull y drag cada recta',
                            '30 DL (2×20/12,5)',
                            '1000 m Ski Erg',
                            '50 m Sled Pull & Drag (P.O) → alterno pull y drag cada recta',
                            '15 Hang Power Clean & Jerk (2×20/12,5)',
                            '500 m Run (Ritmo Z3)'
                        ]
                    }
                ]
            }
        ]
    },
    '2025-11-09': {
        week: 'Preparatorio específico ajuste transformación semana 6..',
        day: 7,
        title: 'Día de descanso',
        restDay: true,
        sections: []
    }
};