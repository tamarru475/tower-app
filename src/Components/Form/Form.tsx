import React from 'react'
import { usePaymentInputs } from 'react-payment-inputs'

const Form: React.FC = () => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs()
  const [values, setValues] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  })

  const isButtonDisabled =
    meta.error ||
    values.cardNumber === '' ||
    values.expiryDate === '' ||
    values.cvc === ''
  const disabledButtonClass = isButtonDisabled ? 'form__btn_disabled' : ''

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const name = target?.name
    const value = target?.value
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(values)
    setValues({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    })
  }

  return (
    <form className='form' name='form' onSubmit={handleSubmit}>
      <div className='form__fieldset'>
        <label className='form__lable' htmlFor='cardNumber'>
          Card details
        </label>
        <input
          className={`form__input `}
          {...getCardNumberProps({ onChange: handleChange })}
          value={values.cardNumber}
          required
        />
        {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
      </div>
      <div className='form__inputs-group'>
        <div className='form__fieldset'>
          <label className='form__lable' htmlFor='ExpiryDate'>
            Expiry
          </label>
          <input
            className={`form__input form__input-small `}
            {...getExpiryDateProps({ onChange: handleChange })}
            value={values.expiryDate}
            required
          />
          {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
        </div>
        <div className='form__fieldset'>
          <label className='form__lable' htmlFor='cvc'>
            CVC
          </label>
          <input
            className={`form__input form__input-small `}
            {...getCVCProps({ onChange: handleChange })}
            value={values.cvc}
            required
          />
          {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
        </div>
      </div>
      <div className='form__fieldset form__btn-fieldset'>
        <button
          disabled={isButtonDisabled ? true : false}
          type='submit'
          className={`form__btn ${disabledButtonClass}`}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
