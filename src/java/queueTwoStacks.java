public static class MyQueue<T> {
    Stack<T> inbox = new Stack<T>();
    Stack<T> outbox = new Stack<T>(); 

    public void enqueue(T value) { 
        inbox.push(value);
    }

    public T peek() {
        if (outbox.empty()) {
            while (!inbox.empty()) {
                outbox.push(inbox.pop());                
            }                      

        } 
        return outbox.peek();
    }

    public T dequeue() {  
        if (outbox.empty()) {
            while (!inbox.empty()) {
                outbox.push(inbox.pop());                
            }                      
        }          
                        
        return outbox.pop();
    }
}