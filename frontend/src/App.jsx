import './App.css'

function App() {

  return (
    <div>
      <AppText text="Hey There!" />
      <AppText text="Let's get started!" />
    </div>
  )
}

function AppText({text}) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default App
