import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  palabra = this.nuevaPalabra();
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;

  letras = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  constructor() {
    this.palabraOculta = '_'.repeat(this.palabra.length);
  }

  comprobar(letra) {
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split('');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join('');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      // console.log('El usuario ganó');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      // console.log('El usuario perdio :(');
    }
  }

  existeLetra(letra) {
    if (this.palabra.indexOf(letra) < 0) {
      // console.log('pulsaste' + letra);
      this.intentos++;
    }
    // else {
    //  console.log('Letra encontrada ' + letra);

    //  }
  }

  newGame() {
    this.palabra = this.nuevaPalabra();
    this.palabraOculta = '_'.repeat(this.palabra.length);
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
    // console.log(this.palabra, this.intentos, this.gano, this.perdio, this.palabraOculta);
  }

  nuevaPalabra() {
    const palabras = ['humanidad', 'humano', 'persona', 'gente', 'hombre', 'mujer', 'adolescente', 'señor',
    'señora', 'cuerpo', 'pierna', 'cabeza', 'diente', 'cabello', 'oreja', 'cerebro', 'brazo', 'hombro', 'cuello',
    'esqueleto', 'cintura', 'espalda', 'resfriado', 'enfermedad', 'familia', 'colega', 'pareja', 'esposa',
    'matrimonio', 'padre', 'madre', 'hermano', 'abuelo', 'nieta', 'bisnieto', 'criatura', 'especie', 'nacimiento',
    'naturaleza', 'bosque', 'selva', 'desierto', 'laguna', 'montaña', 'animal', 'caballo', 'oveja', 'tigre', 'conejo',
    'ciervo', 'jirafa', 'elefante', 'gallina', 'cuervo', 'sardina', 'calamar', 'pulpo', 'insecto', 'mariposa',
    'polilla', 'saltamontes', 'araña', 'mosca', 'mosquito', 'cucaracha', 'caracol', 'lagarto', 'serpiente',
    'cocodrilo', 'comida', 'bebida', 'vegetal', 'fruta', 'semilla', 'hongo', 'ciruela', 'almendra', 'castaña',
    'arroz', 'avena', 'trigo', 'verdura', 'zanahoria', 'manzana', 'naranja', 'durazno', 'tomate', 'carne',
    'tiempo', 'calendario', 'segundo', 'minuto', 'semana', 'siglo', 'milenio', 'mañana', 'amanecer', 'tarde', 'noche',
    'espacio', 'superficie', 'volumen', 'planeta', 'estrella', 'galaxia', 'universo', 'clima', 'despejado',
    'nublado', 'lluvia', 'nieve', 'viento', 'trueno', 'tormenta', 'cielo', 'norte', 'derecha', 'izquierda',
    'agua', 'hielo', 'vapor', 'fuego', 'hierro', 'plata', 'plomo', 'metro', 'litro', 'sociedad', 'comunidad',
    'equipo', 'democracia', 'director', 'bombero', 'ciudad', 'pueblo', 'boleto', 'dinero', 'billete', 'escritorio',
    'silla', 'dormitorio', 'oficina', 'panel', 'puerta', 'ventana', 'hogar', 'apartamento', 'departamento',
    'edificio', 'elevador', 'escalera', 'aguja', 'clavo', 'cuerda', 'bolsillo', 'paraguas', 'pantalla', 'llave',
    'libro', 'revista', 'cuadro', 'electricidad', 'corriente', 'cremallera', 'zapato', 'gafas', 'camisa', 'camiseta',
    'zapatilla', 'cordones', 'abrigo', 'chaqueta', 'calcetines', 'falda', 'vehículo', 'ferrocarril', 'camino', 'calle',
    'carretera', 'autopista', 'avenida', 'aeropuerto', 'ambulancia', 'alfabeto', 'punto', 'carta', 'texto',
    'diccionario', 'documento', 'noticia', 'computadora', 'color', 'blanco', 'negro', 'gris', 'rojo', 'naranja',
    'amarillo', 'verde', 'celeste', 'azul', 'violeta', 'rosado', 'cultura', 'entretenimiento', 'dibujo', 'pintura',
    'escuela', 'colegio', 'universidad', 'clase', 'curso', 'estudio', 'conocimiento', 'figura', 'ciencia', 'historia',
    'deporte', 'pregunta', 'respuesta', 'solicitud', 'sugerencia', 'control', 'sistema', 'trabajo', 'empleo',
    'esfuerzo', 'lugar', 'movimiento', 'velocidad', 'tamaño', 'longitud', 'altura', 'celular', 'teclado', 'estufa',
    'ancho', 'aumento', 'crecimiento', 'fondo', 'frente', 'contenido', 'objeto', 'sector', 'palabra', 'secreto',
    'presente', 'pasado', 'futuro', 'actividad', 'programa', 'proyecto', 'capacidad', 'concepto', 'conjunto',
    'grupo', 'origen', 'destino', 'realidad', 'problema', 'intento', 'efecto', 'resultado', 'fracaso',
    'causa', 'consecuencia', 'beneficio', 'perjuicio', 'calidad', 'desarrollo', 'progreso', 'avance', 'retroceso',
    'mejora', 'principio', 'etapa', 'proceso', 'corte',  'espera', 'diferencia', 'similitud',
    'sentido', 'vista', 'olfato', 'conciencia', 'existencia', 'experiencia', 'posibilidad', 'probabilidad',
    'verdad', 'mentira', 'acierto', 'necesidad', 'falta', 'significado', 'personalidad',
    'pensamiento', 'memoria', 'tristeza', 'aburrimiento', 'sorpresa', 'seguridad', 'confianza', 'ejemplo', 'internet'
   ];

    // console.log(`Total de palabras: ${palabras.length}`);
    let i = Math.floor(Math.random() * palabras.length);
    // console.log('i: '+ i + '; palabras[i]:' + palabras[i]);
    return palabras[i].toUpperCase();
  }
}
