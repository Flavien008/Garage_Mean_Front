export const ClientMenu = [
    {
      id: 'navigation',
      title: 'Client',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Mes voitures',
          type: 'item',
          url: '/dashboard',
          icon: 'feather icon-home',
          classes: 'nav-item',
        },
      ],
    },
    {
      id: 'ui-element',
      title: 'UI ELEMENT',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Component',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'Button',
              type: 'item',
              url: '/basic/button',
            },
            {
              id: 'badges',
              title: 'Badges',
              type: 'item',
              url: '/basic/badges',
            },
            {
              id: 'breadcrumb-pagination',
              title: 'Breadcrumb & Pagination',
              type: 'item',
              url: '/basic/breadcrumb-paging',
            },
            {
              id: 'collapse',
              title: 'Collapse',
              type: 'item',
              url: '/basic/collapse',
            },
            {
              id: 'tabs-pills',
              title: 'Tabs & Pills',
              type: 'item',
              url: '/basic/tabs-pills',
            },
            {
              id: 'typography',
              title: 'Typography',
              type: 'item',
              url: '/basic/typography',
            },
          ],
        },
      ],
    },
  ];