export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5eda12834873ef4b08c26308',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s7wt9ktt',
                  apiId: 'c196024a-7102-42b2-9527-d4af9428ee2f'
                },
                {
                  buildHookId: '5eda1283038f51f6640661aa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-341q73im',
                  apiId: '913cc60f-0e3c-4ea7-b27f-b632cba7cb3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prasetyanurangga/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-341q73im.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
