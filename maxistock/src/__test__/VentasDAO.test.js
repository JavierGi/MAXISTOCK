import { ventas, truncateVentas, add, getVentas} from '../dao/VentasDAO';


beforeEach(() => {
    truncateVentas();
});


test('Add 1 to ventas', () => {
    const thing1  = { thing: 'thing1' };

    add(thing1);

    expect(ventas.length).toBe(1);
    expect(ventas[0].id).toBe(1);
});

test('Add multiple things ', () => {
    
    const thing1  = { thing: 'thing1' };
    const thing2  = { thing: 'thing2' };
    const thing3  = { thing: 'thing3' };

    add(thing1); 
    add(thing2); 
    add(thing3); 

    expect(ventas.length).toBe(3);
    expect(ventas[1].thing).toBe('thing2');
    expect(ventas[2].id).toBe(3);
    
});

test('Get thing by code "id"', () => {
    const thing1  = { thing: 'thing1' };
    const thing2  = { thing: 'thing2' };
    const thing3  = { thing: 'thing3' };
    add(thing1); 
    add(thing2); 
    add(thing3); 

    const todas = getVentas()

    expect(todas.length).toBe(3);
});
