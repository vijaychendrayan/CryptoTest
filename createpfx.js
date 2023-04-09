chilkat = require('@chilkat/ck-node19-win64');

function createPFXFile() {
    var cert = new chilkat.Cert();
    var privKey = new chilkat.PrivateKey();
    // Load any type of certificate (.cer, .p7b, .pem, etc.) by calling LoadFromFile.
    var success = cert.LoadFromFile("certificate/ec.crt");
    if (success !== true) {
        console.log(cert.LastErrorText);
        return;
    }
    success = privKey.LoadPkcs8EncryptedFile("certificate/ec.key","password");
    if (success !== true) {
        console.log(privKey.LastErrorText);
        return;
    }
    // Write the cert as PEM.
    success = cert.ExportCertPemFile("certificate/cert.pem");
    // Or get the PEM string directly...
    console.log(cert.ExportCertPem());
    // Associate the private key with the cert object.
    success = cert.SetPrivateKey(privKey);
    if (success !== true) {
        console.log(cert.LastErrorText);
        return;
    }
    // Write the cert + private key to a .pfx file.
    success = cert.ExportToPfxFile("certificate/client.pfx","welogic",true);
    if (success !== true) {
        console.log(cert.LastErrorText);
        return;
    }
    console.log("PFX file successfully created...");
}

createPFXFile();