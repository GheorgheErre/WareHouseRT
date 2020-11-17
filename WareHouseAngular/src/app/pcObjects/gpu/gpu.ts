import { Component } from '../component/component';

export class Gpu extends Component{
	 memory: String ;
	 baseClock: String ;
	 maxBoostClock: String ;

	 public toJSON(): Gpu {
        return Object.assign({}, {
            "@type": 'Gpu'
          }, this);
      }
}
