export const AtelierMenu = [
    {
      id: 'ui-element',
      title: 'Voitures',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Voiture',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'button',
              title: 'En attente de reception',
              type: 'item',
              url: '/reparation/liste',
            },
            {
              id: 'badges',
              title: 'Reparation en cours',
              type: 'item',
              url: '/basic/badges',
            },
            {
              id: 'breadcrumb-pagination',
              title: 'Réparation terminer',
              type: 'item',
              url: '/basic/breadcrumb-paging',
            },
          ],
        },
      ],
    },

  ];