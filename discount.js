function Stack () {
    this.stack = new Array()
}

Stack.prototype.isEmpty = function () {
    return (this.stack.length === 0)
}

Stack.prototype.push = function (value) {
    this.stack.push(value)
}

Stack.prototype.pop = function () {
    return (this.stack.pop())
}

Stack.prototype.peek = function () {
    return (this.stack[this.stack.length-1])
}

var isCoupon = function (coupon) {
    let stack = new Stack()
    let counter = 0
    let firstLet = ""

    if (coupon.length === 0) {
        return true
    }

    for (let i = 0; i < coupon.length; i ++) {
        if (stack.peek() !== coupon[i]) {
            stack.push(coupon[i])
            counter ++
            if (counter === 1) {
                firstLet = stack.peek()
            } else if (counter === 3) {
                if (firstLet === stack.peek()) {
                    stack = new Stack()
                }
            }
        
        } else if (stack.peek() == coupon[i]) {
            stack.pop()
            counter = 0
        
        } 
    }
    return (stack.isEmpty())
}


let coupon = "aBBatQw"

console.log(isCoupon(coupon))


