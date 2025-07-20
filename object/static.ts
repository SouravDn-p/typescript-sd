class Counter{
    static count: number = 0;
    static increment(): number {
        return (Counter.count += 1);
    }   
    
}

// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2