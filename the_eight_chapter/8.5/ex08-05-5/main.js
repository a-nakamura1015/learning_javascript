const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya",
                "Uniform", "Joker", "Clover", "Bali"];
const longWords = words.filter(word => word.length > 6).join(' ');
console.log(longWords);
