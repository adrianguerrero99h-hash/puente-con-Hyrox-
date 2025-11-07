import type { Workout } from '../types';

export const noMaterialProgramData: Workout[] = [
  // SEMANA 1
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 1,
    title: 'ENDURANCE',
    sections: [
      {
        letter: 'A',
        title: 'WARM UP',
        exercises: [{ title: '', items: ["15' Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)"] }]
      },
      {
        letter: 'B',
        title: '3 SERIES FOR QUALITY',
        exercises: [{ title: '', items: ['10 Sit Ups', '10 Air Squats', '10 Burpee solo a plancha'] }]
      },
      {
        letter: 'C',
        title: 'ENDURANCE WORKOUT',
        exercises: [
          {
            title: "5 Rondas 40\" ON / 20\" OFF (1' rest entre rondas)",
            items: ['Burpee Broad Jumps', 'Jump squat', 'Push ups', 'Burpees Bastardos', 'Lunges'],
            notes: 'Trata de mantener el ritmo en cada ronda'
          }
        ]
      },
      {
        letter: 'D',
        title: 'COOL DOWN',
        exercises: [{ title: '', items: ["15' Run cool down RPE 5"] }]
      }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 2,
    title: 'CUESTAS',
    sections: [
      {
        letter: 'A',
        title: 'WARM UP',
        exercises: [{ title: '', items: ["10' Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)"] }]
      },
      {
        letter: 'B',
        title: 'CUESTAS',
        exercises: [
          {
            title: '10 x 200 m en cuesta (RPE 7)',
            items: [
              '*Voy aumentado la velocidad de manera progresiva, llegando al final lo más rápido posible',
              '**Rest bajar la cuesta andando + 1’',
              '*Objetivo mantener el ritmo en cada serie'
            ]
          },
          { title: "2' rest adicionales y directo a:", items: ["6' RPE 9"] },
          {
            title: "Rest 3' y directo a:",
            items: [
              '5x 100 m cuesta sprint (cuidado aquí, foco en la calidad del movimiento)',
              '*Rest bajar la cuesta andando + 1’'
            ]
          }
        ]
      },
      {
        letter: 'C',
        title: 'COOL DOWN',
        exercises: [{ title: '', items: ["10' RPE 4"] }]
      }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 3,
    title: 'WOD BURPEES TO HELL',
    sections: [
      {
        letter: 'A',
        title: 'WARM UP',
        exercises: [{ title: '', items: ["10' salto comba (si no dispones de una comba haz trote suave corriendo, poniendo el foco en la técnica de carrera)"] }]
      },
      {
        letter: 'B',
        title: 'WOD BURPEES TO HELL',
        exercises: [
          {
            title: 'Realiza la siguiente secuencia de burpees:',
            items: ['20-18-16-14-12-10-8-6-4-2', 'Tras cada serie > 400 m run']
          }
        ]
      },
      {
        letter: 'C',
        title: 'COOL DOWN',
        exercises: [{ title: '', items: ["10' Comba"] }]
      }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 4,
    title: 'REST DAY',
    restDay: true,
    sections: []
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 5,
    title: 'ENDURANCE',
    sections: [
      {
        letter: 'A',
        title: 'WARM UP',
        exercises: [{ title: '', items: ["5' Run RPE 5 y directo a:"] }]
      },
      {
        letter: 'B',
        title: 'ENDURANCE WORKOUT',
        exercises: [{
            title: "30' AMRAP (Máximo número de vueltas)",
            items: ['500 m Run', '50 Lunges', '250 m Run', '50 alR Squats', '500 m Run', '50 Push Ups']
        }]
      },
      {
        letter: 'C',
        title: 'RODAJE',
        exercises: [{ title: '', items: ["30' Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)"] }]
      }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 6,
    title: 'TABATA',
    sections: [
        {
            letter: 'A',
            title: 'WARM UP',
            exercises: [{ title: '', items: ["10' salto comba (si no dispones de una comba haz trote suave corriendo, poniendo el foco en la técnica de carrera) y directo a:"] }]
        },
        {
            letter: 'B',
            title: 'TABATA: 8 RONDAS 20" ON / 10" OFF',
            exercises: [
                { title: '', items: ['Zancada salto', "1'30\" rest adicional"] },
                { title: '', items: ['Burpee doble push up', "1' rest adicional"] },
                { title: '', items: ['Sit ups', "1' rest adicional"] },
                { title: '', items: ['Plancha abs', "1' rest adicional"] },
                { title: '', items: ['Sit ups', "1' rest"] },
            ]
        },
        {
            letter: 'C',
            title: '5 VUELTAS',
            exercises: [{ title: '', items: ["1' Comba (Jumping jacks si no dispones de comba)", "1' Russian Twists", "1' Rest"]}]
        }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 1',
    day: 7,
    title: 'Rodaje Opcional',
    sections: [
        {
            letter: 'A',
            title: 'Rodaje Opcional',
            exercises: [{ title: '', items: ['Sal a correr sin mirar reloj ni tiempo determinado, eso sí, que la percepción de esfuerzo este día no supere en ningún momento un 4 sobre 10'] }]
        }
    ]
  },
  // SEMANA 2
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 1,
    title: 'EMOM',
    sections: [
      {
        letter: 'A',
        title: 'WARM UP',
        exercises: [
          {
            title: '',
            items: [
              '5/5 Split squat ISO 8" (aguanta dejando la rodilla a un palmo del suelo durante el tiempo estipulado, primero un pierna luego la otra)',
              '20" plancha codos apoyados',
              '30" Pogos'
            ]
          }
        ]
      },
      {
        letter: 'B',
        title: '5 VUELTAS',
        exercises: [{ title: '', items: ['10 Jump squat', '8 Push ups HR', '6/6 Lunge alterno', "Rest 1'"] }]
      },
      {
        letter: 'C',
        title: "EMOM 8'",
        exercises: [{ title: '', items: ['12-15 burpees (ajusta si no te sobran más de 15" de rest)'] }]
      },
      {
        letter: 'D',
        title: "3' rest y directo a: EMOM 8'",
        exercises: [{ title: '', items: ['30 Rear Lunge Alterno'] }]
      },
      {
        letter: 'E',
        title: "3' rest y directo a: EMOM 8'",
        exercises: [{ title: '', items: ['a) 16 V- Sit Alterno', 'b) 40" Plancha (apoyo en antebrazos)'] }]
      }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 2,
    title: 'RODAJE OBLIGATORIO',
    sections: [
        {
            letter: 'A',
            title: 'RODAJE OBLIGATORIO',
            exercises: [{ title: '', items: [
                '10’ Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)',
                '20’ Run (Ritmo Z3)',
                "5' Run (trote regenarativo) o (RPE 3-4)",
                '20’ Run (Ritmo Z2 de tu Test Vam) o (RPE 5-6)'
            ] }]
        }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 3,
    title: 'REST DAY',
    restDay: true,
    sections: []
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 4,
    title: 'RONDAS',
    sections: [
        {
            letter: 'A',
            title: 'WARM UP',
            exercises: [{ title: '', items: ["10' Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)"] }]
        },
        {
            letter: 'B',
            title: "2' rest y directo a: 4 RONDAS",
            exercises: [
              {
                title: '',
                items: [
                  '500 m Run RPE 7 + 40 metros walking lunge Bodyweight',
                  "Rest 1' (añade 30\" por ronda)",
                  '*Trata de mejorar el 500 en cada ronda, a pesar de la fatiga (empieza de menos a más, intentando que la última vuelta sea la + rápida)'
                ]
              }
            ]
        },
        {
            letter: 'C',
            title: "3' rest y directo a: 4 RONDAS",
            exercises: [
              {
                title: '',
                items: [
                  "500 Run RPE 7+ 1' Broad Jump",
                  "Rest 1' (añade 30\" por ronda)",
                  '*Trata de mejorar el 500 en cada ronda, a pesar de la fatiga (empieza de menos a más, intentando que la última vuelta sea la + rápida)'
                ]
              }
            ]
        },
        {
            letter: 'D',
            title: 'COOL DOWN',
            exercises: [{ title: '', items: ["10' Run (20” más lento que tu Ritmo Z2 del Test Vam) o (RPE 4-5)"] }]
        }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 5,
    title: 'RONDAS',
    sections: [
        {
            letter: 'A',
            title: 'WARM UP: 5 Rondas',
            exercises: [{ title: '', items: ['10 sit ups', '10 russian twist', '10 Hollow Crunches'] }]
        },
        {
            letter: 'B',
            title: "1' rest y directo a: 10 Rondas",
            exercises: [
              {
                title: '',
                items: ['20 Squat + 10 push ups + 5/5 Jumping lunge', '*No Rest']
              }
            ]
        },
        {
            letter: 'C',
            title: "1' rest y directo a:",
            exercises: [
              {
                title: '',
                items: ["5x 400 m Run (Ritmo Z4) / 1'30\" rest entre series"]
              }
            ]
        }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 6,
    title: 'INTERVALOS ESPECÍFICOS',
    sections: [
        {
            letter: 'A',
            title: 'INTERVALOS ESPECÍFICOS',
            exercises: [
                {
                    title: '',
                    items: ['Cash in: 1000m Run (RPE 7)', 'Y directo a:']
                },
                {
                    title: "2 VUELTAS 2' ON / 1' OFF de:",
                    items: [
                        'A) Max Metros Burpee Broad Jump',
                        'B) Max metros Walking Lunge',
                        'C) Max Hr Push Up',
                        'D) Max Mountain Climber'
                    ]
                },
                {
                    title: '',
                    items: ["3' rest adicional y segunda vuelta", 'Cash out: 1000m Run (RPE 7)']
                }
            ]
        }
    ]
  },
  {
    week: 'PROGRAMA SIN MATERIAL - SEMANA 2',
    day: 7,
    title: 'REST DAY OBLIGATORIO',
    restDay: true,
    sections: []
  },
];
