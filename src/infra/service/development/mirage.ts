// src/server.ts
import {createServer, Model, Request} from 'miragejs';

type Product = {
    title: string;
};

export function makeServer({environment = "development"} = {}) {
    return createServer({
        environment,
        models: {
            product: Model.extend<Partial<Product>>({} as Product),
        },

        seeds(server) {

            for (let i = 0; i < 5; i++) {
                server.create("product", {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    title: `Product ${i}`
                    // Se estiver usando faker: name: faker.name.findName()
                });
            }
        },

        routes() {
            this.namespace = 'api';

            this.get('/products', (schema) => {
                return schema.all('product');
            });

            this.post('/products', (schema, request: Request) => {
                let newProduct = JSON.parse(request.requestBody);
                schema.create("product", newProduct);
                return schema.all("product");
            });

            // @ts-ignore
            this.delete('/products/:id', (schema, request: Request) => {
                let id = request.params.id;
                let product = schema.find('product', id);
                if (product) {
                    product.destroy();
                    return schema.all("product");
                }
            });

            // @ts-ignore
            this.put('/products/:id', (schema,request) => {
                let id = request.params.id;
                let newProduct = JSON.parse(request.requestBody);
                let editProduct = schema.find('product', id);
                if(editProduct) {
                    editProduct.update(newProduct)
                    return schema.all('product');
                }
            })
        },
    });
}
