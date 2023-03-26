import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

const renderForm = () => render(<Form />)
const getSubmitButton = () => screen.getByRole('button', { name: /submit/i })
const getCCNumberInput = () => screen.getByLabelText(/Card details/i)
const getCCExpiryInput = () => screen.getByLabelText(/Expiry/i)
const getCVCInput = () => screen.getByLabelText(/cvc/i)

const writeToCCNumberInput = (value: string) => {
  const ccNumberInput = getCCNumberInput()
  userEvent.type(ccNumberInput, value)
  return ccNumberInput
}

const writeToCCExpiryInput = (value: string) => {
  const ccExpiryInput = getCCExpiryInput()
  userEvent.type(ccExpiryInput, value)
  return ccExpiryInput
}

const writeToCVCInput = (value: string) => {
  const cvcInput = getCVCInput()
  userEvent.type(cvcInput, value)
  return cvcInput
}

describe('Credit Card Submit Form', () => {
  it('should not be able to submit form when all fields are empty', async () => {
    renderForm()
    await waitFor(() => {
      expect(getSubmitButton()).toBeDisabled()
    })
  })

  it('should not be able to submit when credit card is not valid', async () => {
    renderForm()

    writeToCCNumberInput('123')
    writeToCCExpiryInput('1223')
    writeToCVCInput('123')

    await waitFor(() => {
      expect(getCCNumberInput()).toHaveValue('123')
    })
    await waitFor(() => {
      expect(getSubmitButton()).toBeDisabled()
    })
  })

  it('should not be able to submit when expiry date is not valid', async () => {
    renderForm()

    writeToCCNumberInput('5425233430109903')
    writeToCCExpiryInput('1219')
    writeToCVCInput('123')

    await waitFor(() => {
      expect(getCCExpiryInput()).toHaveValue('12 / 19')
    })
    await waitFor(() => {
      expect(getSubmitButton()).toBeDisabled()
    })
  })

  it('should not be able to submit when cvc is not valid', async () => {
    renderForm()

    writeToCCNumberInput('5425233430109903')
    writeToCCExpiryInput('1223')
    writeToCVCInput('12')

    await waitFor(() => {
      expect(getCVCInput()).toHaveValue('12')
    })
    await waitFor(() => {
      expect(getSubmitButton()).toBeDisabled()
    })
  })

  it('should be able to submit form when all fields are valid', async () => {
    const spyOnConsole = jest.spyOn(console, 'log').mockImplementation(() => {
      return
    })
    renderForm()

    writeToCCNumberInput('5425233430109903')
    writeToCCExpiryInput('1223')
    writeToCVCInput('123')

    await waitFor(() => {
      expect(getSubmitButton()).toBeEnabled()
    })

    userEvent.click(getSubmitButton())

    await waitFor(() => {
      expect(getCCNumberInput()).toHaveValue('')
    })
    await waitFor(() => {
      expect(getCVCInput()).toHaveValue('')
    })
    await waitFor(() => {
      expect(getCCExpiryInput()).toHaveValue('')
    })

    expect(spyOnConsole).toBeCalledWith({
      cardNumber: '5425 2334 3010 9903',
      cvc: '123',
      expiryDate: '12 / 23',
    })
  })
})
