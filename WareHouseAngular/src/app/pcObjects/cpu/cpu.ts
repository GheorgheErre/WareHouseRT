import { Component } from '../component/component';

export class Cpu extends Component {
    core: number;
    threads: number;
    baseClock: string;
    maxBoostClock: string;

    public toJSON(): Cpu {
        return Object.assign({}, {
            "@type": 'Cpu'
          }, this);
      }
}
