/** @jsx h */
import { triggerCommandEvent } from '@create-figma-plugin/utilities'
import { Button, Input, useForm } from 'figma-ui'
import { h } from 'preact'
import './app.scss'

export function App (initialState) {
  function submitCallback ({ apiKey }) {
    triggerCommandEvent('SAVE_API_KEY', {
      apiKey
    })
  }
  const { inputs, handleInput, handleSubmit } = useForm(
    initialState,
    submitCallback
  )
  return (
    <div>
      <div class='app__description'>
        Enter a{' '}
        <a href='https://translate.yandex.com/developers/keys'>
          Yandex Translate API key
        </a>
      </div>
      <div class='app__input'>
        <Input
          type='text'
          name='apiKey'
          onKeyUp={handleInput}
          value={inputs.apiKey}
          focused
        />
      </div>
      <div class='app__button'>
        <Button type='primary' onClick={handleSubmit}>
          Save API Key
        </Button>
      </div>
    </div>
  )
}
