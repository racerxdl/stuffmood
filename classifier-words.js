var classifierWords = {
  //  Brazillian Portuguese
  "ptBR" : {
    "Alegria" : {
        data:  [
          "estou feliz",
          "curti",
          "nois curtimos",
          "nós curtimos",
          "estou animado",
          "mas que bom",
          "estamos felizes",
          "estamos contentes",
          "estamos radiantes",
          "estou radiante",
          "feliz"
        ],
        "color" : {
          "R" : 255,
          "G" : 185,
          "B" : 0
        }
      },
    "Raiva" : {
      data: [
        'estou com raiva',
        'estou raivoso',
        'estou irado',
        "odeio isso",
        'estamos irritados',
        'estamos chateados',
        'estamos aborrecidos',
        'estamos chocados',
        'estou chocado',
        'estamos radiante',
        'ruim',
        'eu nao gosto',
      ],
      "color" : {
        "R" : 255,
        "G" : 0,
        "B" : 0
      }
    },
    "Amor" : {
      data: [
        'estou amando',
        'amo',
        'adoro',
        'eu adoro',
        'adoramos',
        'amamos',
        'estou apaixonado',
        'só penso em vc',
        'amor',
      ],
      "color" : {
        "R" : 255,
        "G" : 0,
        "B" : 255
      }
    }
  },
  "enUS" : {
    "Happiness" : {
      data: [
        "I'm Happy",
        "I like",
        "We like",
        "I'm enjoying",
        "I enjoy",
        "I'm shining",
        "happy",
        "happiness",
        "proud"
      ],
      "color" : {
        "R" : 255,
        "G" : 185,
        "B" : 0
      }
    },
    "Angry" : {
      data : [
        "I'm angry",
        "I'm nervous",
        "destroy",
        "explode",
        "I'm chocked",
        "It's bad",
        "I don't like"
      ],
      "color" : {
        "R" : 255,
        "G" : 0,
        "B" : 0
      }
    },
    "Love" : {
      data: [
        "I love you",
        "I'm in love",
        "I'm just think about you",
        "loved",
        "like",
      ],
      "color" : {
        "R" : 255,
        "G" : 0,
        "B" : 255
      }
    }
  }
};

module.exports = classifierWords;