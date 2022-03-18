var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '14888841234',
            address: {
                postalCode: '17057653',
                street: 'Rua Evangelina Messias de Oliveira',
                number: '1555',
                details: 'Ap 142',
                district: 'Parque Santa Cândida',
                city_state: 'Bauru/SP'
            },
            delivery_method: 'Moto',
            foto_cnh: 'cnh-digital.jpg'
        }

        return data
    }
}