export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c0f5401961e15fc8f69ca1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oyxqvwkg',
                  apiId: '493998e8-0e0f-4685-a622-4be0aa4a111e'
                },
                {
                  buildHookId: '61c0f540bdd8316d95f610f5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6ki6mka9',
                  apiId: 'fddfe6a8-b360-487c-81c4-fcbe082242c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DamonJJ/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6ki6mka9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
