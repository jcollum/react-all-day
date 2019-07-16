import * as React from "react";

export interface Props {
  values: number[];
}

export function roundAndPad(n: number, digits: number) {
  let negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  const r =
    negative === true
      ? (n * -1).toFixed(2)
      : (Math.round(n) / multiplicator).toFixed(3);
  return r;
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
