
const truncatedString = (string: string, maxLength: number, endOfString: string): string => {
    return (string.length < maxLength) ? string : string.substr(0,maxLength) + endOfString ;
}

const truncateNameItem = (string: string, maxLength: number,): string => {
    return truncatedString(string, maxLength, '...');
}

const truncatedNameAlbum = (string: string): string => {
    return truncatedString(string, 10, '...');
}

export {truncatedNameAlbum};