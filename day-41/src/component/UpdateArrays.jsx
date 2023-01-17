export default function UpdateArrays() {
    let a = [2, 3, 4, 5]
    a.push(6)
    a.unshift(1)
    a.pop()
    a.shift()
    a.splice(1, 1)
    const b = a.slice(1, 2)
    // console.log(a.reverse())
    let c = [1, 2, 3, 11, 12, 23, 100]
    c.sort(function (a, b) {
        return a - b
    });
    let d = [1, 2]
    let e = [4, 5]
    let f = d.concat(e)
    d = [...d]

    // console.log(c.filter(el => el > 5))

    return (
        <div>
            <p>Arrays</p>
        </div>
    )
}