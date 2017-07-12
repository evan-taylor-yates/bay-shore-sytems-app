export class TemplatesService {
  private templates = [
    {
      id: 1,
      name: 'TR',
      model: '20',
      main_img: 'https://static.pexels.com/photos/257700/pexels-photo-257700.jpeg'
    },
    {
      id: 2,
      name: 'TR',
      model: '40',
      main_img: 'https://static.pexels.com/photos/416012/pexels-photo-416012.jpeg'
    },
    {
      id: 3,
      name: 'TR',
      model: '80',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 4,
      name: 'TR',
      model: '110',
      main_img: 'https://static.pexels.com/photos/257700/pexels-photo-257700.jpeg'
    },
    {
      id: 4,
      name: 'TR',
      model: '150',
      main_img: 'https://static.pexels.com/photos/416012/pexels-photo-416012.jpeg'
    },
    {
      id: 5,
      name: 'TR',
      model: '200',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 6,
      name: 'LAD',
      model: '50',
      main_img: 'https://static.pexels.com/photos/257700/pexels-photo-257700.jpeg'
    },
    {
      id: 7,
      name: 'LAD',
      model: '80',
      main_img: 'https://static.pexels.com/photos/416012/pexels-photo-416012.jpeg'
    },
    {
      id: 8,
      name: 'LAD',
      model: '100',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 9,
      name: 'LAD',
      model: '250',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 10,
      name: 'LAD',
      model: '400',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 11,
      name: 'DH',
      model: '15',
      main_img: 'https://static.pexels.com/photos/257700/pexels-photo-257700.jpeg'
    },
    {
      id: 12,
      name: 'DH',
      model: '20',
      main_img: 'https://static.pexels.com/photos/416012/pexels-photo-416012.jpeg'
    },
    {
      id: 13,
      name: 'DH',
      model: '30',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 14,
      name: 'DH',
      model: '40',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 15,
      name: 'DH',
      model: '60',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 16,
      name: 'AERA',
      model: '1008',
      main_img: 'https://static.pexels.com/photos/416012/pexels-photo-416012.jpeg'
    },
    {
      id: 17,
      name: 'AERA',
      model: '1420',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 18,
      name: 'AERA',
      model: '1430',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    },
    {
      id: 19,
      name: 'AERA',
      model: '1440',
      main_img: 'https://static.pexels.com/photos/208661/pexels-photo-208661.jpeg'
    }
  ];
  private names = [
    'All',
    'TR',
    'LAD',
    'DH',
    'AERA'
  ];


  getTemplates(name) {
    if (name === 'All') {
      return this.templates;
    } else {
      const outputArray = [];
      for (const template of this.templates) {
        if (template.name === name) {
          outputArray.push(template);
        }
      }
      return outputArray;
    }
  }
  getNames() {
    return this.names;
  }
  getTemplate(id: number) {
    const template = this.templates.find(
      (t) => {
        return t.id === id;
      }
    );
    return template;
  }

  deleteTemplate(id: number) {
    console.log(this.templates);
    let index = 0;
    for (const item of this.templates) {
      if (item.id === id) {
        break;
      }
      index ++;
      console.log(index);
    }
    this.templates.splice(index, 1);
    console.log(this.templates);
  }
}
