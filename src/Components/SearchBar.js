import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [form, setForm] = useState({})
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const { search } = form
    if (!search) {
      setError('Por favor ingresa un término a la busqueda')
      setTimeout(() => {
        setError('')
      }, 1500)
      return
    }
    setForm({})

    navigate(`/search/${form.search}`)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          onChange={handleOnChange}
          name='search'
          placeholder='search for gifs'
          className='w-full h-11 rounded-md px-6 mt-2 interface-italic-font'
        />

        {error ? 'hola error' : <></>}
      </form>
    </div>
  )
}

export default Searchbar
