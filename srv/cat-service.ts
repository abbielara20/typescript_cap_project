import cds from '@sap/cds';
import Helper from '../lib/helper';
// import TextBundle from '../utils/textBundle'

export class CatalogService extends cds.ApplicationService {
    init() {

        const { uuid } = cds.utils;
        const helper = new Helper();
        // const { fnGetTextBundle } = new TextBundle();
        // const bundle = fnGetTextBundle("en");

        this.on('fnCrud', async req => {
            const { action } = req.data;
            let entity: string;
            let entries: object[];
            let where: object;
            let result: object = {};

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
            // const msg = bundle.getText("SUCCESS_MESSAGE", [
            //     JSON.stringify(result)
            // ]);
            return result;
        })

        this.on('READ', 'Authors', async () => {
            const where = {
                name: "Juan Dela Cruz"
            };
            const result = await helper.fnRead('Authors', where);
            return result;
        })

        this.on('CREATE', 'Authors', async req => {
            const result = await helper.fnCreate('Authors', [req.data]);
            return result;
        })

        this.on('UPDATE', 'Authors', async req => {
            const where = {
                ID: req.params
            };
            const result = await helper.fnUpdate('Authors', where, req.data);
            return result;
        })


        // Add base class's handlers. Handlers registered above go first.
        return super.init()

    }
}