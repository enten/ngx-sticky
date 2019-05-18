import { TestBed } from '@angular/core/testing';

import { NGX_STICKY_WINDOW } from '../../src/lib/sticky.tokens';


describe('NGX_STICKY_WINDOW', () => {
  it('should returns window when exists', async () => {
    expect(TestBed.get(NGX_STICKY_WINDOW)).toBe(window);
  });
});
