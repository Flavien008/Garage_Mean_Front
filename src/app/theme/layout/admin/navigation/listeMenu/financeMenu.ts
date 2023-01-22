export const FinanceMenu = [
    {
      id: 'navigation',
      title: 'Finance',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'feather icon-home',
          classes: 'nav-item',
        },
      ],
    },
    {
      id: 'Voiture',
      title: 'Menu',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'voiture',
          title: 'Voiture',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Liste',
              type: 'item',
              url: '/reparation/termine',
            },
          ],
        },
        {
          id: 'facture',
          title: 'Facture',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Liste',
              type: 'item',
              url: '/basic/button',
            },
          ],
        },
        {
          id: 'Journal',
          title: 'Journal de caisse',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Saisie',
              type: 'item',
              url: '/basic/button',
            },
            {
              id: 'button',
              title: 'Liste',
              type: 'item',
              url: '/basic/button',
            },
          ],
        },
      ],
    },
    // {
    //   id: 'forms',
    //   title: 'Forms & Tables',
    //   type: 'group',
    //   icon: 'icon-group',
    //   children: [
    //     {
    //       id: 'forms-element',
    //       title: 'Form Elements',
    //       type: 'item',
    //       url: '/forms/basic',
    //       classes: 'nav-item',
    //       icon: 'feather icon-file-text',
    //     },
    //     {
    //       id: 'tables',
    //       title: 'Tables',
    //       type: 'item',
    //       url: '/tables/bootstrap',
    //       classes: 'nav-item',
    //       icon: 'feather icon-server',
    //     },
    //   ],
    // },
    // {
    //   id: 'chart-maps',
    //   title: 'Chart & Maps',
    //   type: 'group',
    //   icon: 'icon-charts',
    //   children: [
    //     {
    //       id: 'charts',
    //       title: 'Charts',
    //       type: 'item',
    //       url: '/charts/morris',
    //       classes: 'nav-item',
    //       icon: 'feather icon-pie-chart',
    //     },
    //   ],
    // },
    // {
    //   id: 'pages',
    //   title: 'Pages',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'auth',
    //       title: 'Authentication',
    //       type: 'collapse',
    //       icon: 'feather icon-lock',
    //       children: [
    //         {
    //           id: 'signup',
    //           title: 'Sign up',
    //           type: 'item',
    //           url: '/auth/signup',
    //           target: true,
    //           breadcrumbs: false,
    //         },
    //         {
    //           id: 'signin',
    //           title: 'Sign in',
    //           type: 'item',
    //           url: '/auth/signin',
    //           target: true,
    //           breadcrumbs: false,
    //         },
    //       ],
    //     },
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/sample-page',
    //       classes: 'nav-item',
    //       icon: 'feather icon-sidebar',
    //     },
    //     {
    //       id: 'disabled-menu',
    //       title: 'Disabled Menu',
    //       type: 'item',
    //       url: 'javascript:',
    //       classes: 'nav-item disabled',
    //       icon: 'feather icon-power',
    //       external: true,
    //     },
    //     {
    //       id: 'buy_now',
    //       title: 'Buy Now',
    //       type: 'item',
    //       icon: 'feather icon-book',
    //       classes: 'nav-item',
    //       url: 'https://codedthemes.com/item/datta-able-angular/',
    //       target: true,
    //       external: true,
    //     },
    //   ],
    // },
  ];