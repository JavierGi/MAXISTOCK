import { stock, truncateStock, add, getProductByCode } from '../dao/StockDAO';


beforeEach(() => {
    truncateStock();
});


test('Add 1 to stock', () => {
    const thing1  = { thing: 'thing1' };

    add(thing1);

    expect(stock.length).toBe(1);
    expect(stock[0].id).toBe(1);
});

test('Add multiple things ', () => {
    
    const thing1  = { thing: 'thing1' };
    const thing2  = { thing: 'thing2' };
    const thing3  = { thing: 'thing3' };

    add(thing1); 
    add(thing2); 
    add(thing3); 

    expect(stock.length).toBe(3);
    expect(stock[1].thing).toBe('thing2');
    expect(stock[2].id).toBe(3);
    
});

test('Get thing by code "id"', () => {
    const thing1  = { thing: 'thing1' };
    const thing2  = { thing: 'thing2' };
    const thing3  = { thing: 'thing3' };
    add(thing1); 
    add(thing2); 
    add(thing3); 

    const thing = getProductByCode(2);

    expect(thing.id).toBe(2);
    expect(thing.thing).toBe('thing2');
});
