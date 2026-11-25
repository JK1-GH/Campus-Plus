import { render, screen } from '@testing-library/react'
import App from './App.jsx'
describe('HU-XX · NOMBRE DE LA HISTORIA', () => {
    it('FRASE: lo que la persona ve', () => {
        render(<App hoy="AAAA-MM-DD" />)
        expect(screen.getByText('TEXTO 1')).toBeTruthy()
    })
    it('FRASE: lo que NO debe ver', () => {
        render(<App hoy="AAAA-MM-DD" />)
        expect(screen.queryByText('TEXTO DE OTRA PERSONA')).toBeNull()
    })
})