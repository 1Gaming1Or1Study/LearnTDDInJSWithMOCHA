function reverse(string) {
    return string.split("").reverse().join("")
} 

function palindrome(string){
    let processedContent = string.toLowerCase()
    return processedContent === reverse(processedContent)
}

function Phrase(content) {
    this.content = content

    this.processedContent = function processedContent() {
        return this.content.toLowerCase()
    }

    this.palindrome = function palindrome() {
        return this.processedContent === reverse(this.processedContent);
    } 

    this.louder = function louder(){
        let processedContent = this.content.toUpperCase()
        return processedContent = reverse(processedContent)
    }
}

