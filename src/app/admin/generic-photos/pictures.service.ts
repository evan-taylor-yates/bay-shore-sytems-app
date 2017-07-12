export class PicturesService {
  private templates = [
    {
      id: 1,
      name: 'Engine',
      path: 'https://static.pexels.com/photos/355913/pexels-photo-355913.jpeg'
    },
    {
      id: 2,
      name: 'Thingy',
      path: 'https://static.pexels.com/photos/35783/water-pump-industrial-industry-pump.jpg'
    },
    {
      id: 3,
      name: 'Another Thingy',
      path: 'https://static.pexels.com/photos/247768/pexels-photo-247768.jpeg'
    }
  ];

  getPictures() {
    return this.templates;
  }

  getPicture(id: number) {
    const template = this.templates.find(
      (t) => {
        return t.id === id;
      }
    );
    return template;
  }
}
