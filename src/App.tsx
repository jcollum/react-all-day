import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./redux/actions/counter";
import "./App.css";
import { RootState } from "./redux/reducers";

interface ConnectProps {
  counter: number;
  loading: boolean;
  onIncrement: any;
  onDelayIncrement: any;
}

type Props = {} & ConnectProps;

export class App extends React.PureComponent<Props> {
  render() {
    const { onIncrement, onDelayIncrement, loading, counter } = this.props;
    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Counter App</h1>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Counter</p>
                <p className="title">{counter}</p>
              </div>
            </div>
          </div>
          <div>
            <span>{loading ? "Loading..." : " "}</span>{" "}
          </div>

          <div className="field is-grouped">
            <p className="control">
              <button
                className="button"
                id="increment-btn"
                onClick={onIncrement}
              >
                Click to increment
              </button>
            </p>
            <p className="control">
              <button
                className="button"
                id="delay-increment-btn"
                onClick={onDelayIncrement}
              >
                Click to increment slowly
              </button>
            </p>
            <p className="control">
              <button className="button" id="remote-fetch-btn">
                Click to fetch server-side
              </button>
            </p>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.value,
  loading: state.counter.loading
});

const dispatchToProps = {
  onIncrement: actionCreators.increment,
  onDelayIncrement: actionCreators.delayIncrement
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
