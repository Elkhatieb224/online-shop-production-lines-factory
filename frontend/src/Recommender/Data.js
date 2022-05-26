let quizdata = [
  // Exmple data for quiz

  {
    id: 1,
    question: 'Is it used in food products?',
    answers: [
      {
        option: 'YES',
        products: ['STEEL'],
      },
      {
        option: 'NO',
        products: [ 'COPPER'],
      },
    ],
  },
  {
    id: 2,
    question: 'product temperature',
    answers: [
      {
        option: '500',
        products: ['STEEL'],
      },
      {
        option: '1000',
        products: [ 'COPPER'],
      },
      {
        option: '1500',
        products: ['STAINLESS', ],
      },
    ],
  },
  {
    id: 3,
    question: 'Factors it works on    ',
    answers: [
      {
        option: 'OLI',
        products: ['STEEL'],
      },
      {
        option: 'GAS',
        products: ['STAINLESS', ],
      },
      {
        option: 'WATER',
        products: ['STAINLESS', ],
      },
    ],
  },
  {
    id: 4,
    question: 'Required of the product    ',
    answers: [
      {
        option: ' turning',
        products: ['STEEL'],
      },
      {
        option: 'welding ',
        products: ['STAINLESS', 'COPPER'],
      },
      {
        option: 'milling ',
        products: [ 'COPPER'],
      },
    ],
  },
  {
    id: 5,
    question: 'Does the product need a conveyor belt    ',
    answers: [
      {
        option: ' YES',
        products: ['STEEL'],
      },
      {
        option: 'NO ',
        products: ['STAINLESS', ],
      },
     
    ],
  },
  
];

export default quizdata;
