const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformer) => {
    return transformer(message);
}

