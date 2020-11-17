import { Component } from '../component/component';

export class Powersupplie extends Component{
	 watts: number;
	 energyRating: String;

	 public toJSON(): Powersupplie {
        return Object.assign({}, {
            "@type": 'Powersupplie'
          }, this);
      }

}
