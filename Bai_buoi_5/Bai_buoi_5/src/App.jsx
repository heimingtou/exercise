
import './App.css'
import Button from './component/Button'
import Input from './component/Input'
import Frame from './component/frame'
function App() {

  return (
    <>
    <div className='container'>
      <h1 className='title'>Contact Book</h1>
      <h2 className='subtitle'>keep track of where your friend live</h2>
      <div className='input-container'>
         <Input type='text' placeholder="name:" />
        <Input type='text' placeholder="city:" />
        <Button >Add Contact
        </Button>
      </div>
      <div className='frame-container'>
      <Frame title="Alice JohnSon" subtitle="New York" />
      <Frame title="Bob Smith" subtitle="Los Angeles" />
      <Frame title="Charlie Brown" subtitle="Chicago" />
      <Frame title="David Williams" subtitle="Houston" />
      <Frame title="Emma Davis" subtitle="Phoenix" />
      </div>
    </div>
      
    </>
  )
}

export default App
