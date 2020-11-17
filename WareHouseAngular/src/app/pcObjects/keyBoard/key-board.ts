import { Article } from '../article/article';

export class Keyboard extends Article{

    public toJSON(): Keyboard {
        return Object.assign({}, {
            "@type": 'Keyboard'
          }, this);
      }
}
