module.exports = class PostMoneyModel {
    cost;
    recipient;
    sender;

    constructor(module) {
        this.cost = {
            number: module.product.costOfProduct.full,
            word: module.product.costOfProduct.string,
        };

        this.recipient = {
            name: `ИП Межевич Дмитрий Сергеевич`,
            address: 'УНП: 491643493, BIC: ALFABY2X, ЗАО "Альфа-Банк", IBAN: BY68ALFA30132E03790010270000',
        };

        const send = module.client;
        const sendPost = module.post.address;
        let sendAddress = '';
        sendAddress = sendPost.index ? `${sendPost.index}, ` : '';
        sendAddress += sendPost.region ? `${sendPost.region} обл., ` : '';
        sendAddress += sendPost.district ? `${sendPost.district} р-н, ` : '';
        sendAddress += sendPost.city ? `нас. пункт ${sendPost.city}, ` : '';
        sendAddress += sendPost.street ? `${sendPost.street} ` : '';
        sendAddress += sendPost.house ? `${sendPost.house}, ` : '';
        sendAddress += sendPost.addHouse ? `корпус ${sendPost.addHouse}, ` : '';
        sendAddress += sendPost.apartment ? `кв. ${sendPost.apartment}, ` : '';

        this.sender = {
            name: `${send.surname} ${send.name} ${send.patronymic}`,
            address: sendAddress,
        };
    }
};
