const fs = require('fs')

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Svelte Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name'
      }
    ],
    actions: [
      function createComponentDir(answers) {
        if (!fs.existsSync(`src/components/${answers.name}`)) {
          fs.mkdirSync(`src/components/${answers.name}`)
        }
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.svelte',
        templateFile: '_templates/component/component.svelte.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: '_templates/component/component.index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.spec.ts',
        templateFile: '_templates/component/component.spec.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.ts',
        templateFile: '_templates/component/component.stories.hbs'
      }
    ]
  })
}
