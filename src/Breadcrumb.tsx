import * as React from "react";

export interface Props {
  values: number[];
}

export function roundAndPad(n:number, digits:number) {
  var negative = false;
  if (digits === undefined) {
      digits = 0;
  }
      if( n < 0) {
      negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(3);
  if( negative ) {    
      n = (n * -1).toFixed(2);
  }
  return n;
}

export class Breadcrumb extends React.PureComponent<Props> {
  render() {
    return (
      <div className="breadcrumb">
        <ul>
          {this.props.values.map((x, i) => {
            return <li key={i}>{roundAndPad(x, 4)}</li>;
          })}
        </ul>
      </div>
    );
  }
}
