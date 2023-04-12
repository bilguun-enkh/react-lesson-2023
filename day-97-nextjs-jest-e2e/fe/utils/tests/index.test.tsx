import Home from "@/pages"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Calculator", () => {
    it("renders a calculator", () => {
        render(<Home />);
        expect(screen.getByTestId("result")).toBeInTheDocument()
        expect(screen.getByTestId("num1")).toBeInTheDocument()
        expect(screen.getByTestId("num2")).toBeInTheDocument()
        expect(screen.getByTestId("add")).toBeInTheDocument()
        expect(screen.getByTestId("subtract")).toBeInTheDocument()
        expect(screen.getByTestId("multiply")).toBeInTheDocument()
        expect(screen.getByTestId("divide")).toBeInTheDocument()
    })

    it("add working properly", () => {
        render(<Home />)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const addButton = screen.getByTestId("add")
        const result = screen.getByTestId("result")

        fireEvent.change(num1input, { target: { value: 5 } })
        fireEvent.change(num2input, { target: { value: 8 } })
        fireEvent.click(addButton)
        expect(result).toHaveTextContent("13")
    })
    it("subract working properly", () => {
        render(<Home />)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const subtractButton = screen.getByTestId("subtract")
        const result = screen.getByTestId("result")

        fireEvent.change(num1input, { target: { value: 5 } })
        fireEvent.change(num2input, { target: { value: 8 } })
        fireEvent.click(subtractButton)
        expect(result).toHaveTextContent("-3")
    })
    it("multiply working properly", () => {
        render(<Home />)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const multiplyButton = screen.getByTestId("multiply")
        const result = screen.getByTestId("result")

        fireEvent.change(num1input, { target: { value: 5 } })
        fireEvent.change(num2input, { target: { value: 8 } })
        fireEvent.click(multiplyButton)
        expect(result).toHaveTextContent("40")
    })
    it("divide working properly", () => {
        render(<Home />)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const divideButton = screen.getByTestId("divide")
        const result = screen.getByTestId("result")

        fireEvent.change(num1input, { target: { value: 5 } })
        fireEvent.change(num2input, { target: { value: 8 } })
        fireEvent.click(divideButton)
        expect(result).toHaveTextContent("0.625")
    })
})