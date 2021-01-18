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
                  buildHookId: '60051775e6f31a8a72286aed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h5jgk3ue',
                  apiId: 'fa45ec28-c474-4dc2-a4e5-369356239c8b'
                },
                {
                  buildHookId: '600517759d0752b71f2e9ab3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uoc9awip',
                  apiId: '8b9ff302-3a1f-43dd-9847-7d84f0b3b3b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chasecmiller/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uoc9awip.netlify.app', category: 'apps'}
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
