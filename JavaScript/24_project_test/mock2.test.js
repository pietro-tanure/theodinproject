import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    { message: 'ai ai ai', from: 'pietr' },
    { message: 'louis', from: 'beter' }
  ],
  getLatest, // can also be a `getter or setter if supported`
}

function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}



describe('reading messages', () => {
  afterEach(() => {
    console.log('AFTER EACH IS RAN')
    vi.restoreAllMocks()
  })

  it('should get the latest message with a spy', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    expect(spy.getMockName()).toEqual('getLatest')

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(messages.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })
})


// this successfuly intercepts the http request and put the object declared in the pokemon-mock file in the place

import { HttpResponse, http } from 'msw'
import { pokemonResponse } from './pokemon-mock'
import { getPokemon } from './pokemon'
import { setupServer } from 'msw/node'

const restHandlers = [
  http.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', () => {
    return HttpResponse.json(pokemonResponse)
  }),
]

const server = setupServer(...restHandlers)
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

it('pokemon mock request', async () => {
  const poke = await getPokemon()
  expect(poke.results[0].name).toEqual('pietro')
})
