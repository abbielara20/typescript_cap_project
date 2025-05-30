import cds from '@sap/cds';
import Helper from '../lib/helper';

export class CatalogService extends cds.ApplicationService {
    init() {

        const helper = new Helper();
        const bundle = helper.fnGetTextBundle("en");

        this.on('fnCrud', async req => {
            const { action } = req.data;
            let entity: string;
            let entries: object[];
            let where: object;
            let result: any;

            switch (action) {
                case "create":
                    entity = "Authors";
                    entries = [{
                        name: "Juan Dela Cruz",
                        biography: "test"
                    }];
                    result = await helper.fnCreate(entity, entries);
                    break;
                case "upsert":
                    break;
                case "read":
                    entity = "Authors";
                    where = {
                        name: "Juan Dela Cruz"
                    };
                    result = await helper.fnRead(entity, where);
                    break;
                case "update":
                    entity = "Author";
                    where = {
                        name: "Juan Dela Cruz",
                    };
                    entries = [{
                        biography: "update bio"
                    }];
                    result = await helper.fnUpdate(entity, where, entries);
                    break;
                case "delete":
                    entity = "Author";
                    where = {
                        name: "Juan Dela Cruz"
                    };
                    result = await helper.fnDelete(entity, where);
                    break;
            }
            const msg = bundle.getText("SUCCESS_MESSAGE", [
                JSON.stringify(result)
            ]);
            return msg;
        })

        this.on('READ', 'Authors', async () => {
            const result = await helper.fnRead('Authors');
            return result;
        })

        this.on('CREATE', 'Authors', async req => {
            const result = await helper.fnCreate('Authors', [req.data]);
            const msg = bundle.getText("SUCCESS_MESSAGE", [
                JSON.stringify(result)
            ]);
            return msg;
        })

        this.on('UPDATE', 'Authors', async req => {
            const where = {
                ID: req.params
            };
            const result = await helper.fnUpdate('Authors', where, req.data);
            const msg = bundle.getText("SUCCESS_MESSAGE", [
                JSON.stringify(result)
            ]);
            return msg;
        })

        this.on('clearRating', async req => {
            const where = {
                rating: { "<=": 2 }
            }
            const entries = {
                rating: req.data.rating
            }
            await helper.fnUpdate('Reviews', where, entries);
            return this.read('Books');
        })


        // Add base class's handlers. Handlers registered above go first.
        return super.init()

    }
}