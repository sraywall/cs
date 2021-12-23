let addToZero = arr =>{
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            if(arr[i]+arr[j] === 0){
                return true
            }
        }
    }
    return false;
}
// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1,2,3]))
// console.log(addToZero([1,2,3,-1]))

//runtime: O(n^2)
//space: O(1)

let hasUniqueChars = str =>{
    return new Set(str).size === str.length
}
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

//runtime: O(n)
//space: O(n)

let isPangram = str =>{
    let letters = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0
    }
    for(letter of str){
        if(letters.hasOwnProperty(letter.toLowerCase())){ //is alphabetical char
            letters[letter.toLowerCase()]++
        }
    }
    for(key in letters){
        if(letters[key] < 1){
            return false
        }
    }
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// console.log(isPangram("I like cats, but not mice"))

//runtime: O(n)
//space: O(1)

let findLongestWord = arr =>{
    let max = arr[0].length
    for(word of arr){
        if(max < word.length){
            max = word.length
        }
    }
    return max
}
// console.log(findLongestWord(["hi","hello"]))
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog".split(" ")))
//runtime: O(n)
//space: O(1)
