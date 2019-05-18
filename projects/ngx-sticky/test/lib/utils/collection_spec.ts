import {
  addEntry,
  deleteEntry,
} from '../../../src/lib/utils/collections';


describe('addEntry', () => {
  it('should add entry when value is not in set', () => {
    const value = {};
    const set = [ {} ];

    const index = addEntry(set, value);

    expect(index).toBe(1);
    expect(set).toEqual([ set[0], value ]);
  });

  it('should not add entry when value is in set', () => {
    const value = {};
    const set = [ {}, value ];

    const index = addEntry(set, value);

    expect(index).toBe(1);
    expect(set).toEqual([ set[0], value ]);
  });
});


describe('deleteEntry', () => {
  it('should delete entry when value is in set', () => {
    const value = {};
    const set = [ {}, value ];

    const index = deleteEntry(set, value);

    expect(index).toBe(1);
    expect(set).toEqual([ set[0] ]);
  });

  it('should not delete entry when value is not in set', () => {
    const value = {};
    const set = [ {} ];

    const index = deleteEntry(set, value);

    expect(index).toBe(-1);
    expect(set).toEqual([ set[0] ]);
  });
});
