var emoji = require('emojic')
var colorIt = require('color-it')

var appRouter = app => {
  app.get('/cover', (_, res) => {
    res.send({
      cover: {
      nomeDaVaga: "Analista de mock api",
      type: 'full-api-time',
      salary: '6700/api',
      location: 'Sao paulo, api',
      description: 'API lorem API lorem API lorem API lorem API lorem API lorem API lorem '
      }
    })
    console.log(' ' + colorIt('> /cover ').sunFlower(), emoji.fire)
  })
  
  app.get('/questions', (_, res) => {
    res.send({
      questions: [
        {
          id: "124",
          text: "question from mocked api",
          type: "1",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "14",
          text: " multiple choice question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "11",
          text: "another multiple choice question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "23",
              text: "yes"
            },
            {
              id: "4",
              text: "no"
            }]
        },
      ]
    })
    console.log(' ' + colorIt('> /questions ').sunFlower(), emoji.fire)
  })

  app.get('/custom-form-1', (_, res) => {
    res.send({
      questions: [
        {
          id: "1",
          text: "Custom form 1 question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "1",
              text: "1"
            },
            {
              id: "2",
              text: "2"
            },
            {
              id: "3",
              text: "3"
            }]
        },
        {
          id: "4",
          text: "another custom 1 form question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
      ]
    })
    console.log(' ' + colorIt('> /custom-form-1 ').orange(), emoji.rocket)
  })

  app.get('/custom-form-2', (_, res) => {
    res.send({
      questions: [
        {
          id: "124",
          text: "custom form 2 from mocked api",
          type: "1",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "14",
          text: "custom form 2 multiple choice question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "11",
          text: "another multiple choice question from custom form 2 mocked api",
          type: "2",
          alternatives: [
            {
              id: "23",
              text: "yes"
            },
            {
              id: "4",
              text: "no"
            }]
        },
      ]
    })
    console.log(' ' + colorIt('> /custom-form-2 ').pumpkin(), emoji.smile)
  })

  app.get('/custom-form-3', (_, res) => {
    res.send({
      questions: [
        {
          id: "124",
          text: "custom form 3 from mocked api",
          type: "1",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "14",
          text: "custom form 3 multiple choice question from mocked api",
          type: "2",
          alternatives: [
            {
              id: "123",
              text: "yes"
            },
            {
              id: "41",
              text: "no"
            }]
        },
        {
          id: "11",
          text: "another multiple choice question from custom form 3 mocked api",
          type: "2",
          alternatives: [
            {
              id: "23",
              text: "yes"
            },
            {
              id: "4",
              text: "no"
            }]
        },
      ]
    })
    console.log(' ' + colorIt('> /custom-form-3 ').blue(), emoji.airplane)
  })

}

module.exports = appRouter