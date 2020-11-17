import { Component } from '../component/component';

export class Ssd extends Component{
	 capacity: String;

	 public toJSON(): Ssd {
        return Object.assign({}, {
            "@type": 'Ssd'
          }, this);
      }
}
