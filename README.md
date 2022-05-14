# react-modal-sgg

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal-sgg.svg)](https://www.npmjs.com/package/react-modal-sgg) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

First try to create my own npm package, a simple modal componant. Intending to serve my learning proccess.

## Install

```bash
npm install --save react-modal-sgg
```

## Use exemple

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal-sgg'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
    
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        <h1>Modal text</h1>
      </Modal>
      
    </div>
  )
}

export default App
```

## License

MIT © [TheCatIsOnTheMoon](https://github.com/TheCatIsOnTheMoon)
