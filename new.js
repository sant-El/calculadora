function areaCirculo (r){
    let rQuadrado = Math.pow(r, 2)
    return rQuadrado * Math.PI
}

function areaTriangulo(b,h) {
    return (b * h) / 2
}

function areaRetangulo(b,h) {
    return b * h
}

module.exports = areaCirculo
module.exports = areaTriangulo
module.exports = areaRetangulo

