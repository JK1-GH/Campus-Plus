import { render, screen } from '@testing-library/react'
import App from './App.jsx'


describe('App', () => {
    it('Muestra el nombre de la app', () => {
        render(<App />)
        expect(screen.getByText('CampusPlus')).toBeTruthy()
    })
})