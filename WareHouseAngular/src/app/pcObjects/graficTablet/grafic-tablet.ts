import { Article } from '../article/article';

export class GraphicTablet extends Article{

    height: number;
    width: number;
    length: number;

	public toJSON(): GraphicTablet {
        return Object.assign({}, {
            "@type": 'GraphicTablet'
          }, this);
      }

}
