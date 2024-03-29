module.exports = class MailList {
    mailList;
    dateShipment;
    senderInfo;

    constructor(model, index) {
        this.senderInfo = model.senderInfo.sender.mailList;
        this.dateShipment = model.order.date.dispatch;
        this.mailList = {
            a: index,
            b: model.client.surname ?? '',
            c: model.client.name ?? '',
            d: model.client.patronymic ?? '',
            e: 'BY',
            f: 'БЕЛАРУСЬ',
            g: model.post.address.index ?? '',
            h: '',
            i: model.post.address.region ?? '',
            j: model.post.address.district ?? '',
            k: model.post.address.city ?? '',
            l: model.post.address.street ?? '',
            m: model.post.address.addHouse ?? '',
            n: model.post.address.house ?? '',
            o: model.post.address.apartment ?? '',
            p: 0,
            q: 2,
            r: 0,
            s: 2,
            t: 0,
            u: 0,
            v: '',
            w: 0,
            x: parseFloat(
                `${model.product.costOfProduct.integer}.${model.product.costOfProduct.float}`
            ),
            y: parseFloat(
                `${model.post.delivery.cost.integer}.${model.post.delivery.cost.float}`
            ),
            z: parseFloat(
                `${model.product.costOfProduct.integer}.${model.product.costOfProduct.float}`
            ),
            aa: 0,
            ab: model.post.barcode.fullCode ?? '',
            ac: '',
            ad: '',
            ae: '',
            af: model.senderInfo.sender.mailList.phone,
            ag:
                parseInt(
                    model.client.phone
                        .replace(/\s|-/g, '')
                        .replace(/^80/, '375')
                ) ?? '',
            ah: model.senderInfo.sender.mailList.email,
        };
    }
};
