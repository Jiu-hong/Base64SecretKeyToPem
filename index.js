import pkg from "casper-js-sdk";
const { decodeBase64, Keys, } = pkg

const main = async () => {
    // 
    // 9Utu9nQhkr5s7q+0Ki451gCnjI2ZUa1OMpMms+iY1S8=  
    // is the privateBase64Key
    const privateKeyBase64 = "9Utu9nQhkr5s7q+0Ki451gCnjI2ZUa1OMpMms+iY1S8="
    const rawPrivKeyBytes = decodeBase64(privateKeyBase64);
    const privKey = Keys.Secp256K1.parsePrivateKey(rawPrivKeyBytes, "raw");
    const pubKey = Keys.Secp256K1.privateToPublicKey(privKey);
    const keyPair = new Keys.Secp256K1(pubKey, privKey);
    let pripem = keyPair.exportPrivateKeyInPem();
    console.log(pripem);
};
main();
