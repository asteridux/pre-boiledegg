import { h, render, Component } from 'preact'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to Pre-Boiledegg!</h1>
        <h3>Useful links: </h3>
        <ul>
          <li><a href='https://github.com/asteridux/pre-boiledegg'>Github repo link</a></li>
          <li><a href='#'>Preact intro guide</a></li>
        </ul>
      </div>
    )
  }
}

render(<App />, document.body)
