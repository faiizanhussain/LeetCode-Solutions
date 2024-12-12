function pickGifts(gifts: number[], k: number): number {
    // Create MaxHeap class since TypeScript/JavaScript doesn't have a built-in heap
    class MaxHeap {
        private heap: number[];
        
        constructor() {
            this.heap = [];
        }
        
        private getParentIndex(index: number): number {
            return Math.floor((index - 1) / 2);
        }
        
        private getLeftChildIndex(index: number): number {
            return 2 * index + 1;
        }
        
        private getRightChildIndex(index: number): number {
            return 2 * index + 2;
        }
        
        private swap(index1: number, index2: number): void {
            const temp = this.heap[index1];
            this.heap[index1] = this.heap[index2];
            this.heap[index2] = temp;
        }
        
        private heapifyUp(index: number): void {
            while (index > 0) {
                const parentIndex = this.getParentIndex(index);
                if (this.heap[parentIndex] >= this.heap[index]) break;
                this.swap(index, parentIndex);
                index = parentIndex;
            }
        }
        
        private heapifyDown(index: number): void {
            while (true) {
                let largest = index;
                const leftChild = this.getLeftChildIndex(index);
                const rightChild = this.getRightChildIndex(index);
                
                if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
                    largest = leftChild;
                }
                
                if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
                    largest = rightChild;
                }
                
                if (largest === index) break;
                
                this.swap(index, largest);
                index = largest;
            }
        }
        
        push(value: number): void {
            this.heap.push(value);
            this.heapifyUp(this.heap.length - 1);
        }
        
        pop(): number | undefined {
            if (this.heap.length === 0) return undefined;
            
            const max = this.heap[0];
            const last = this.heap.pop()!;
            
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.heapifyDown(0);
            }
            
            return max;
        }
        
        getSum(): number {
            return this.heap.reduce((sum, val) => sum + val, 0);
        }
    }
    
    // Create max heap and add all gifts
    const maxHeap = new MaxHeap();
    for (const gift of gifts) {
        maxHeap.push(gift);
    }
    
    // Process for k seconds
    for (let i = 0; i < k; i++) {
        const maxGift = maxHeap.pop();
        if (maxGift === undefined) break;
        
        // Calculate remaining gifts after taking sqrt
        const remaining = Math.floor(Math.sqrt(maxGift));
        maxHeap.push(remaining);
    }
    
    // Return sum of remaining gifts
    return maxHeap.getSum();
}