import { render, screen } from "@testing-library/react"
import TestHello from "./TestHello"

describe("application test",()=>{
    test("renders",()=>{
        render(<TestHello/>)
        const text=screen.getByRole('textbox',{
            name:"Name",
        });
        expect(text).toBeInTheDocument()
        const comb=screen.getByRole('combobox')
        expect(comb).toBeInTheDocument()
        const check=screen.getByRole('checkbox')
        expect(check).toBeInTheDocument()
    })
})