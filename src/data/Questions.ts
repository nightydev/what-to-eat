import { Question } from "@/types/types";

const questions: Question[] = [
  { type: 'multiple', text: '¿Cuál es tu objetivo?', options: ['Perder peso', 'Ganar masa muscular', 'Mantener el peso'] },
  { type: 'multiple', text: '¿Cuál es tu sexo biológico?', options: ['Femenino', 'Masculino'] },
  { type: 'number', text: '¿Cuál es tu edad?&15/100' },
  { type: 'number', text: '¿Cuál es tu altura en metros?&1/2.5' },
  { type: 'number', text: '¿Cuál es tu peso en kilogramos?&30/250' },
  { type: 'multiple', text: '¿Cuántas veces a la semana realizas ejercicio', options: ['No realizo', '1 a 2 veces', '3 a 4 veces', '5 a 6 veces', 'Toda la semana'] },
  { type: 'multiple', text: '¿Cuántas comidas tienes en un día?', options: ['1', '2', '3', '4 ', '5'] },
  { type: "yesno", text: '¿Eres intolerante a la lactosa?' },
  { type: "yesno", text: '¿Consumes alimentos de origen animal?' },
  { type: "yesno", text: '¿Tienes alergia a los frutos secos?' },

];

export default questions;