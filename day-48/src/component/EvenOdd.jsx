export default function FindEvenOdd() {
    const arr = [5, 6, 4, 12, 20, 121, 2, 7, 9, 63]
    function findEven(arr) {
        return arr.filter(a => a % 2 === 0)
    }
    function findOdd(arr) {
        return arr.filter((a) => a % 2 !== 0)
    }
    const evenNumbers = findEven(arr)
    const oddNumbers = findOdd(arr)
    return (
        <div>
            <h1>Find even odd array</h1>
            <h3>
                Even numbers
                {evenNumbers && evenNumbers.map(n => {
                    return (
                        <div>
                            <p>{n}</p>
                        </div>
                    )
                })}
            </h3>
            <h3>
                Odd numbers
                {oddNumbers && oddNumbers.map(n => {
                    return (
                        <div>
                            <p>{n}</p>
                        </div>
                    )
                })}
            </h3>
        </div>
    )
}