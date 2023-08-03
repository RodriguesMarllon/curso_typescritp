type marcaTenis = "123" | "456" | "789";

enum marcaTenis2 {
    NIKE = 4,
    DEF = "456",
    GHI = "789",
}

interface Tenis {
    marcaTenis: marcaTenis2
}

const test: Tenis = {
    marcaTenis: marcaTenis2.NIKE
}

if (test.marcaTenis === marcaTenis2.NIKE) {
    console.log("é nike")
}