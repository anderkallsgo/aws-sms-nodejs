var AWS = require('aws-sdk');

var async = require('async');

AWS.config.update({
    accessKeyId: 'AKIAIWWFADW4NRJLFGBA',
    secretAccessKey: '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',
    region: 'us-east-1'
});

var snsClient = new AWS.SNS();

var backup = [
    {phone:"5562992342402"},
    {phone:"5591998210614"},
    {phone:"5591998210614"},
    {phone:"5549999179113"},
    {phone:"5581987040467"},
    {phone:"5581987671140"},
    {phone:"5581988097751"},
    {phone:"5587995098558"},
    {phone:"5581983595314"},
    {phone:"5581985880936"},
    {phone:"5581988750251"},
    {phone:"5599991028570"},
    {phone:"5599991739827"},
    {phone:"5594991902506"},
    {phone:"5588999271774"},
    {phone:"5588999271774"},
    {phone:"5564981480348"},
    {phone:"5518997534094"},
    {phone:"5518997176777"},
    {phone:"5582999501040"},
    {phone:"5571991411052"},
]

var list = [
    {phone: '5567991855656'},
    {phone: '5567998283070'},
    ]

async.eachOfSeries(list, function(value, key, callback) {
    var obj = {
        Message: 'Parabens, Uhuuuuuuu'
        +' Sua dupla passou p/ (segunda fase) da selecao do melhor emprego do mundo do Dinneer.'
        +' Veja como continuar www.dinneer.com/jobs/2-fase',
        PhoneNumber: value.phone
    }

    console.log('Mensagem Enviada: ', obj.Message)

    snsClient.publish(obj, function (err, data) {
        console.log('-----------------------------------------------------');
        console.log('SUCCESS', data);
        setTimeout(function () {
            callback(err, data)
        },1500)
    })
}, function (err) {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    console.log("Fim")
});

list.forEach((value, key) => {

})
