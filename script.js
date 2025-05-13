function fibonacci(num) {
    if (num < 0) return null; // handle invalid input
    if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

module.exports = fibonacci;
