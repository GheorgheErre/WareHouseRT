import { Article } from '../article/article';

export class DockingStation extends Article{

    public toJSON(): DockingStation {
        return Object.assign({}, {
            "@type": 'DockingStation'
          }, this);
      }
}

