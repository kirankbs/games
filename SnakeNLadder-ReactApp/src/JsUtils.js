export const range = (start, end) => { 
    return Array(end - start + 1).fill().map((_, idx) => end - idx);
}

export const rotateArray = (arr) => {
    const result = [...arr.slice(1,arr.length), ...arr.slice(0, 1)];
    console.log("-----"+result)
    return result;
}

export const tailArray = (arr) => {
    return
}