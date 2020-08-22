export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f41972754270448bb6ccfb8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5vh781f7',
                  apiId: '84cb535b-ffca-4e1a-af72-9ad91ce40a4b'
                },
                {
                  buildHookId: '5f419728442f8e14e7c9c57f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hbxj2uc2',
                  apiId: 'dce9ccf7-821a-4636-b693-cdd5f5db67dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/idaeldiaz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hbxj2uc2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
