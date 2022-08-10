

function daireAlaniHesaplama(r){
    var alan= Math.PI*Math.pow(r,2)
    console.log(`${r} yarı çaplı dairenin alanı ${alan} 'dır.`)
}
const r= process.argv.slice(2);

daireAlaniHesaplama(r[0]*1)



