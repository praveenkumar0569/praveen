import { render, screen } from "@testing-library/react"
import TestHello from "./TestHello"

describe("application test",()=>{
   
    test("renders",()=>{

        render(<TestHello/>)
        const headers=screen.getByRole('heading',{
            name:"praveen"
        });
        expect(headers).toBeInTheDocument()
        //this is getbyrole
        const text=screen.getByRole('textbox',{
            name:"Name",
        });
       
        expect(text).toBeInTheDocument()
        //getbydisplayvalue
        const byvalue=screen.getByDisplayValue('praveen')
        expect(byvalue).toBeInTheDocument()
        //getbytext
        const getele=screen.getByText("this is praveen")
        expect(getele).toBeInTheDocument()
        const comb=screen.getByRole('combobox')
        expect(comb).toBeInTheDocument()
        const check=screen.getByRole('checkbox')
        expect(check).toBeInTheDocument()
        //getbyplaceholder
        const placeh=screen.getByPlaceholderText('fullname')
        expect(placeh).toBeInTheDocument()
        //byaltvalue
        const altvalue=screen.getByAltText("images")
        expect(altvalue).toBeInTheDocument()
        //bytestid
        const testid=screen.getByTestId("test")
        expect(testid).toBeInTheDocument()
    })
  test("button",()=>{
    render(<TestHello/>)
    const btn=screen.getByRole('button',{
        name:"Login"
    })
    expect(btn).toBeInTheDocument()

  })

  test("start learning",async ()=>{
    render(<TestHello/>)
    const startlearning=await screen.findByRole('button',{
        name:'start learning'
    },

    {
      timeout:2001,
    }
  )
    expect(startlearning).toBeInTheDocument()

  })
})