module.exports = class SenderInformationModel {
    sender;

    _dima = {
        label: {
            name: 'ИП Межевич Дмитрий Сергеевич, УНП 491643493',
            payment: 'р/с: BY68ALFA30132E03790010270000, БИК: ALFABY2X',
            address: 'ДО ВОСТРЕБОВАНИЯ, г. Минск, 220024',
            phone: '8 029 560-92-13',
            email: 'ip.miazhevich@gmail.com',
            contract: '15405 от 13.10.2023',
        },

        moneyTransfer: {
            name: 'ИП Межевич Дмитрий Сергеевич',
            address: 'УНП: 491643493, BIC: ALFABY2X, ЗАО "Альфа-Банк", IBAN: BY68ALFA30132E03790010270000',
        },

        warrantyCard: {
            organization: 'PlanetShop.by',
            fullName: 'ИП Межевич Дмитрий Сергеевич, УНП 491643493',
            shortName: 'ИП Межевич Д.С., УНП 491643493',
            phone: '+375 29 560-92-13',
            address: 'г. Гомель, ул. Мазурова, 10, кв. 45',
        },

        mailList: {
            phone: 375295609213,
            email: 'ip.miazhevich@gmail.com',
            unp: 491643493,
            dateOfferPost: '13.10.2023',
        },
    };



    _roma = {
        label: {
            name: 'ИП Власов Роман Александрович, УНП 692178784',
            payment: 'р/с: BY26ALFA30132E17940010270000, БИК: ALFABY2X',
            address: 'ДО ВОСТРЕБОВАНИЯ, Минский р-н, а.г. Колодищи, 223051',
            phone: '8 033 682-01-05',
            email: 'uvelomleniya@mail.ru',
            contract: '16156 от 21.11.2023',
        },

        moneyTransfer: {
            name: 'ИП Власов Роман Александрович',
            address: 'УНП: 692178784, BIC: ALFABY2X, ЗАО "Альфа-Банк", IBAN: BY26ALFA30132E17940010270000',
        },

        warrantyCard: {
            organization: 'Top-Tovary.by',
            fullName: 'ИП Власов Роман Александрович',
            shortName: 'ИП Власов Р.А., УНП 692178784',
            phone: '+375 033 682-01-05',
            address: 'Минская обл., Минский р-н, аг. Колодищи, ул. Геофизика 26А, кв. 106',
        },

        mailList: {
            phone: 375336820105,
            email: 'uvelomleniya@mail.ru',
            unp: '692178784',
            dateOfferPost: '21.11.2023',
        },
    };

    constructor(name) {
        switch (name) {
            case 'Дима':
                this.sender = this._dima;
                break;
            case 'Рома':
                this.sender = this._roma;
                break;
            default:
                this.sender = '';
                break;
        }
    }

}
