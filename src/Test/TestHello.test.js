import { render, screen } from "@testing-library/react"
import TestHello from "./TestHello"

test("first test",()=>{
    render(<TestHello/>)
    const testdata=screen.getByText('Hello')
    expect(testdata).toBeInTheDocument()
})
test("By the props", ()=>{
    render(<TestHello name='praveen'/>)
    const testele=screen.getByText(/Hello praveen/i)
    expect(testele).toBeInTheDocument()
})